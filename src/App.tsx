import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MedicalEquipment from "./pages/products/MedicalEquipment";
import MicrobiologyBiotechnology from "./pages/products/MicrobiologyBiotechnology";
import Glassware from "./pages/products/Glassware";
import LaboratoryChemicals from "./pages/products/LaboratoryChemicals";
import WaterAnalysis from "./pages/products/WaterAnalysis";
import LaboratoryTesting from "./pages/products/LaboratoryTesting";
import SafetyProducts from "./pages/products/SafetyProducts";
import WasteWaterFiltration from "./pages/products/WasteWaterFiltration";
import PalintestKits from "./pages/products/PalintestKits";
import LabEquipment from "./pages/products/LabEquipment";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products/medical-equipment" element={<MedicalEquipment />} />
          <Route path="/products/microbiology-biotechnology" element={<MicrobiologyBiotechnology />} />
          <Route path="/products/glassware" element={<Glassware />} />
          <Route path="/products/laboratory-chemicals" element={<LaboratoryChemicals />} />
          <Route path="/products/water-analysis" element={<WaterAnalysis />} />
          <Route path="/products/laboratory-testing" element={<LaboratoryTesting />} />
          <Route path="/products/safety-products" element={<SafetyProducts />} />
          <Route path="/products/waste-water-filtration" element={<WasteWaterFiltration />} />
          <Route path="/products/palintest-kits" element={<PalintestKits />} />
          <Route path="/products/lab-equipment" element={<LabEquipment />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
