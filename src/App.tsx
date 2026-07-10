import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { useAnalyticsPageTracking } from "@/hooks/use-analytics";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MedicalEquipment from "./pages/products/MedicalEquipment";
import MicrobiologyBiotechnology from "./pages/products/MicrobiologyBiotechnology";
import Glassware from "./pages/products/Glassware";
import LaboratoryChemicals from "./pages/products/LaboratoryChemicals";
import WaterAnalysis from "./pages/products/WaterAnalysis";
import Palintest from "./pages/Palintest";
import LumisoCatalog from "./pages/Palintest/LumisoCatalog";
import TabletTests from "./pages/Palintest/TabletTests";
import KemioAnalyzers from "./pages/Palintest/KemioAnalyzers";
import LaboratoryTesting from "./pages/products/LaboratoryTesting";
import SafetyProducts from "./pages/products/SafetyProducts";
import WasteWaterFiltration from "./pages/products/WasteWaterFiltration";
import LabEquipment from "./pages/products/LabEquipment";
import AutomobileSupplies from "./pages/products/AutomobileSupplies";
import ChromatographyConsumables from "./pages/products/ChromatographyConsumables";
import EquipmentQualityControl from "./pages/products/EquipmentQualityControl";
import Filtration from "./pages/products/Filtration";
import LaboratoryMaterialTesting from "./pages/products/LaboratoryMaterialTesting";
import HachInstruments from "./pages/products/HachInstruments";
import Spectrophotometers from "./pages/products/Spectrophotometers";
import PCRMachines from "./pages/products/PCRMachines";
import Microscopes from "./pages/products/Microscopes";
import Centrifuges from "./pages/products/Centrifuges";
import Autoclaves from "./pages/products/Autoclaves";
import Incubators from "./pages/products/Incubators";
import AnalyticalBalances from "./pages/products/AnalyticalBalances";
import PHMeters from "./pages/products/PHMeters";
import ConductivityMeters from "./pages/products/ConductivityMeters";
import Colorimeters from "./pages/products/Colorimeters";
import ProductDetail from "./pages/products/ProductDetail";
import Gallery from "./pages/Gallery";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import { LeadsManager } from "@/components/admin/LeadsManager";
import { MediaManager } from "@/components/admin/MediaManager";
import { CustomersManager } from "@/components/admin/CustomersManager";
import { CampaignManager } from "@/components/admin/CampaignManager";
import { ProductManager } from "@/components/admin/ProductManager";
import { AnalyticsDashboard } from "@/components/admin/AnalyticsDashboard";

const queryClient = new QueryClient();

/**
 * Inner component that handles analytics page tracking
 * Must be inside BrowserRouter to use useLocation
 */
const AppRoutes = () => {
  useAnalyticsPageTracking();

  return (
    <>
      <Toaster />
      <Sonner />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/medical" element={<MedicalEquipment />} />
        <Route path="/microbiology" element={<MicrobiologyBiotechnology />} />
        <Route path="/glassware" element={<Glassware />} />
        <Route path="/chemicals" element={<LaboratoryChemicals />} />
        <Route path="/chromatography" element={<ChromatographyConsumables />} />
        <Route path="/qualitycontrol" element={<EquipmentQualityControl />} />
        <Route path="/water" element={<WaterAnalysis />} />
        <Route path="/palintest" element={<Palintest />} />
        <Route path="/palintest/lumiso-photometers" element={<LumisoCatalog />} />
        <Route path="/palintest/tablet-tests" element={<TabletTests />} />
        <Route path="/palintest/kemio-analyzers" element={<KemioAnalyzers />} />
        <Route path="/testing" element={<LaboratoryTesting />} />
        <Route path="/safety" element={<SafetyProducts />} />
        <Route path="/wastewater" element={<WasteWaterFiltration />} />
        <Route path="/labequipment" element={<LabEquipment />} />
        <Route path="/filtration" element={<Filtration />} />
        <Route path="/materialtesting" element={<LaboratoryMaterialTesting />} />
        <Route path="/automobile" element={<AutomobileSupplies />} />
        <Route path="/hach" element={<HachInstruments />} />
        <Route path="/spectrophotometers" element={<Spectrophotometers />} />
        <Route path="/pcr-machines" element={<PCRMachines />} />
        <Route path="/microscopes" element={<Microscopes />} />
        <Route path="/centrifuges" element={<Centrifuges />} />
        <Route path="/autoclaves" element={<Autoclaves />} />
        <Route path="/incubators" element={<Incubators />} />
        <Route path="/analytical-balances" element={<AnalyticalBalances />} />
        <Route path="/ph-meters" element={<PHMeters />} />
        <Route path="/conductivity-meters" element={<ConductivityMeters />} />
        <Route path="/colorimeters" element={<Colorimeters />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/:productId" element={<ProductDetail />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        <Route path="/admin/leads" element={<ProtectedRoute><LeadsManager /></ProtectedRoute>} />
        <Route path="/admin/customers" element={<ProtectedRoute><CustomersManager /></ProtectedRoute>} />
        <Route path="/admin/campaigns" element={<ProtectedRoute><CampaignManager /></ProtectedRoute>} />
        <Route path="/admin/products" element={<ProtectedRoute><ProductManager /></ProtectedRoute>} />
        <Route path="/admin/media" element={<ProtectedRoute><MediaManager /></ProtectedRoute>} />
        <Route path="/admin/analytics" element={<ProtectedRoute><AnalyticsDashboard /></ProtectedRoute>} />

        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
