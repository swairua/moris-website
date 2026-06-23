import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { toast } from '@/components/ui/sonner';
import { Upload, Trash2, Copy, FileImage, FileText, Globe } from 'lucide-react';
import { API_BASE_URL, UPLOAD_URL } from '@/lib/utils';

interface UploadedFile {
  id: number;
  filename: string;
  original_name: string;
  file_type: string;
  file_url: string;
  file_size: number;
  mime_type: string;
  created_at: string;
}

const isImage = (mime: string) => mime?.startsWith('image/');

const formatSize = (bytes: number) => {
  if (!bytes) return '—';
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
};

export function MediaManager() {
  const { token } = useAuth();
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [filterType, setFilterType] = useState<string>('');
  const [showUpload, setShowUpload] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      setLoading(true);
      const url = filterType
        ? `${API_BASE_URL}/uploads?type=${filterType}`
        : `${API_BASE_URL}/uploads`;
      const response = await fetch(url, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        setFiles(data.files || []);
      }
    } catch {
      toast.error('Failed to load files');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, [filterType]);

  const handleUpload = async (file: File) => {
    if (!token) return;
    if (file.size > 10 * 1024 * 1024) {
      toast.error('File must be under 10MB');
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', 'documents');

    try {
      const res = await fetch(UPLOAD_URL, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
        body: formData,
      });

      if (res.ok) {
        toast.success('File uploaded');
        setShowUpload(false);
        fetchFiles();
      } else {
        const err = await res.json();
        toast.error(err.error || 'Upload failed');
      }
    } catch {
      toast.error('Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleUpload(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleUpload(file);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this file?')) return;
    try {
      const res = await fetch(`${API_BASE_URL}/uploads/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        toast.success('File deleted');
        fetchFiles();
      }
    } catch {
      toast.error('Delete failed');
    }
  };

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    toast.success('URL copied');
  };

  const filters = [
    { label: 'All', value: '' },
    { label: 'Products', value: 'products' },
    { label: 'Campaigns', value: 'campaigns' },
    { label: 'Documents', value: 'documents' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="md:ml-64">
        <TopBar title="Media" />

        <main className="p-6 space-y-6">
          {/* Filter + Upload */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex gap-2">
              {filters.map((f) => (
                <Button
                  key={f.value}
                  variant={filterType === f.value ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilterType(f.value)}
                >
                  {f.label}
                </Button>
              ))}
            </div>
            <Dialog open={showUpload} onOpenChange={setShowUpload}>
              <DialogTrigger asChild>
                <Button>
                  <Upload className="mr-2 h-4 w-4" />
                  Upload File
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Upload File</DialogTitle>
                </DialogHeader>
                <div
                  className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
                    dragOver ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                  }`}
                  onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={handleDrop}
                >
                  <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-sm text-gray-600 mb-4">
                    Drop a file here or click to browse
                  </p>
                  <label className="cursor-pointer inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
                    Browse Files
                    <input
                      type="file"
                      accept="image/*,.pdf,.doc,.docx"
                      className="hidden"
                      onChange={handleFileSelect}
                    />
                  </label>
                  <p className="mt-2 text-xs text-gray-400">
                    JPG, PNG, GIF, WebP, PDF, DOC up to 10MB
                  </p>
                </div>
                {uploading && (
                  <p className="text-center text-sm text-blue-600">Uploading...</p>
                )}
              </DialogContent>
            </Dialog>
          </div>

          {/* File Grid */}
          {loading ? (
            <div className="text-center py-12 text-gray-500">Loading files...</div>
          ) : files.length === 0 ? (
            <div className="text-center py-12 text-gray-500">No files uploaded yet</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {files.map((file) => (
                <Card key={file.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gray-100 flex items-center justify-center overflow-hidden">
                    {isImage(file.mime_type) ? (
                      <img
                        src={file.file_url}
                        alt={file.original_name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <FileText className="h-12 w-12 text-gray-400" />
                    )}
                  </div>
                  <CardContent className="p-3 space-y-2">
                    <p className="text-sm font-medium truncate" title={file.original_name}>
                      {file.original_name}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="capitalize">{file.file_type}</span>
                      <span>{formatSize(file.file_size)}</span>
                    </div>
                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex-1 text-xs"
                        onClick={() => copyUrl(file.file_url)}
                      >
                        <Copy className="mr-1 h-3 w-3" />
                        Copy URL
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-600 hover:text-red-700"
                        onClick={() => handleDelete(file.id)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
