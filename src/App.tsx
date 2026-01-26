import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
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
import AutomobileSupplies from "./pages/products/AutomobileSupplies";
import ChromatographyConsumables from "./pages/products/ChromatographyConsumables";
import EquipmentQualityControl from "./pages/products/EquipmentQualityControl";
import Filtration from "./pages/products/Filtration";
import LaboratoryMaterialTesting from "./pages/products/LaboratoryMaterialTesting";
import ProductDetail from "./pages/products/ProductDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Toaster />
      <Sonner />
      <div style={{ padding: '20px' }}>App is loading with providers</div>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
