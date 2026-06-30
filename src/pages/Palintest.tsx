import { useEffect } from "react";
import { ProductPageLayout } from "@/components/ProductPageLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Download } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";
import { openProductQuotation } from "@/lib/whatsapp";

const productCategories = {
  "Palintest Photometers": [
    { name: "Lumiso Expert Photometer (Water Testing & Analysis)", description: "Advanced photometer for comprehensive water testing and quality analysis with expert-level accuracy." },
    { name: "Lumiso Pooltest Expert", description: "Professional photometer designed specifically for swimming pool water quality testing." },
    { name: "Lumiso Pooltest 9", description: "Versatile pool testing photometer with nine measurement parameters." },
    { name: "Lumiso Pooltest 6", description: "Practical pool testing system with six key measurement parameters." },
    { name: "Lumiso Pooltest 3", description: "Essential pool testing photometer with three core measurements." },
    { name: "Lumiso Ammonia", description: "Specialized photometer for ammonia detection in water samples." },
    { name: "Lumiso Chlorine", description: "Dedicated photometer for free and total chlorine measurement." },
    { name: "Lumiso Chlorine Dioxide", description: "Photometer designed for chlorine dioxide analysis in water treatment." },
    { name: "Lumiso Ozone", description: "Photometer for ozone measurement in water treatment applications." },
  ],
  "Lumiso Kits": [
    { name: "LMP003 - Hard Kit, Lumiso Pooltest 3", description: "Complete hardware kit for the Lumiso Pooltest 3 photometer system." },
    { name: "LMP004 - Hard Kit, Lumiso Pooltest 4", description: "Complete hardware kit for the Lumiso Pooltest 4 photometer system." },
    { name: "LMP006 - Hard Kit, Lumiso Pooltest 6", description: "Complete hardware kit for the Lumiso Pooltest 6 photometer system." },
    { name: "LMPXUK - Lumiso Pooltest Expert Benchtop Kit", description: "Benchtop kit for the Lumiso Pooltest Expert photometer with accessories." },
    { name: "LUM7210 - Lumiso Expert Benchtop Kit", description: "Professional benchtop kit for the Lumiso Expert photometer system." },
    { name: "LUM050 - Hard Kit, Lumiso Ammonia", description: "Hardware kit for the Lumiso Ammonia dedicated photometer." },
    { name: "LUM051 - Hard Kit, Lumiso Chlorine", description: "Hardware kit for the Lumiso Chlorine dedicated photometer." },
    { name: "LUM052 - Hard Kit, Lumiso Chlorine Dioxide", description: "Hardware kit for the Lumiso Chlorine Dioxide dedicated photometer." },
    { name: "LUM053 - Hard Kit, Lumiso Ozone", description: "Hardware kit for the Lumiso Ozone dedicated photometer." },
    { name: "LUM7051 - Turbidity Expert & Lumiso Chlorine Combined Kit", description: "Combined kit featuring Turbidity Expert and Lumiso Chlorine photometer." },
    { name: "LUM7051WLC - Turbidity Expert Combined Kit (Without Lumiso Chlorine)", description: "Turbidity Expert combined kit excluding the Lumiso Chlorine photometer." },
  ],
  "Lumiso Check Standards": [
    { name: "LMCEXP - Lumiso Expert Check Stds", description: "Check standards for verifying Lumiso Expert photometer calibration and accuracy." },
    { name: "LMCPTX - Lumiso Pooltest Expert Check Stds", description: "Check standards for verifying Lumiso Pooltest Expert photometer performance." },
  ],
  "Turbidity Testing": [
    { name: "LTH090 - Turbidity Expert Kit", description: "Professional turbidity testing kit for accurate water clarity measurement." },
  ],
  "Kemio Disinfection Analyzer & Sensors": [
    { name: "Kemio Disinfection Analyzer", description: "Advanced portable analyzer for precise measurement of disinfection parameters in water." },
    { name: "Kemio Heavy Metal Analyzer", description: "Professional-grade analyzer for detecting heavy metals including lead, copper, and iron." },
    { name: "KEM21PAA - Kemio, Peracetic Acid, Sensors, 100 Pack", description: "Replacement sensor pack for Kemio Peracetic Acid measurement, 100 tests." },
    { name: "KEM21PAH - Kemio, High Range High Temp PAA, Sensor, 100 Pack", description: "High range high temperature peracetic acid sensor pack for Kemio, 100 tests." },
    { name: "KEM21PAL - Kemio, Peracetic Low Range, Sensors, 100 Pack", description: "Low range peracetic acid sensor pack for Kemio disinfection analyzer, 100 tests." },
  ],
  "Tablet Tests": [
    { name: "AP011 - DPD1, Chlorine (Free), Phot, 0-5mg/L Cl2, 250 Tests", description: "Tablet test for free chlorine determination using DPD1 method, 0-5 mg/L range." },
    { name: "AP031 - DPD1&DPD3, F&T Chlorine, Phot, 0-5mg/L Cl2, 250 Tests", description: "Dual tablet test for free and total chlorine using DPD1 and DPD3 method." },
    { name: "AP031/1 - DPD3, Total Chlorine, Phot, 0-5mg/L Cl2, 250 Tests", description: "Tablet test for total chlorine determination using DPD3 method, 250 tests." },
    { name: "AP031/1PLAIN - DPD3, Total Chlorine, Phot, 0-5mg/L Cl2, 250 Tests", description: "Unbranded DPD3 tablet test for total chlorine determination, 250 tests." },
    { name: "AP033 - DPD1&DPD3 XT, F&T Chlorine, Phot, 0-10mg/L Cl2, 250 PK", description: "Extended range dual tablet test for free and total chlorine, 0-10 mg/L." },
    { name: "AP033/1 - DPD3 XT, Chlorine, Phot, 0-10mg/L Cl2, 250 Tests", description: "Extended range DPD3 tablet test for total chlorine, 0-10 mg/L." },
    { name: "AP041 - DPD 4, Total Chlorine, Phot, 0-5mg/L Cl2, 250 Tests", description: "DPD4 tablet test for total chlorine measurement in water samples." },
    { name: "AP056 - Ozone, Phot, 0-3mg/L O3, 250 Tests", description: "Tablet test for ozone residual concentration measurement, 0-3 mg/L." },
    { name: "AP060 - Bromine, Phot, 0-10mg/L Br2, 250 Tests", description: "Tablet test for bromine measurement in disinfected water, 0-10 mg/L." },
    { name: "AP087 - Cyanuric, Phot, 0-200mg/L CNA, 250 Tests", description: "Tablet test for cyanuric acid measurement in pool and spa water." },
    { name: "AP087PLAIN - Cyanuric, Phot, 0-200mg/L CNA, 250 Tests, Unbranded", description: "Unbranded cyanuric acid tablet test for pool water stabilizer measurement." },
    { name: "AP104 - Hydrogen Peroxide LR, Phot, 0-2mg/L H2O2, 250 Tests", description: "Low range hydrogen peroxide tablet test for water treatment monitoring." },
    { name: "AP105 - Hydrogen Peroxide HR, Phot, 0-100mg/L H2O2, 250 Tests", description: "High range hydrogen peroxide tablet test for industrial water analysis." },
    { name: "AP109 - Nitricol, Phot, 0-5mg/L NO2, 250 Tests", description: "Tablet test for nitrite determination using Nitricol method, 250 tests." },
    { name: "AP130 - Phenol Red, Phot, pH 6.8-8.4, 250 Tests", description: "Phenol red tablet test for pH measurement in water samples, range 6.8-8.4." },
    { name: "AP130PLAIN - Phenol Red, Phot, pH 6.8-8.4, 250 Tests, Unbranded", description: "Unbranded phenol red tablet test for pH measurement, 250 tests." },
    { name: "AP148 - Zinc, Phot, 0-4mg/L Zn, 250 Tests", description: "Tablet test for zinc concentration measurement in water samples." },
    { name: "AP152 - Ammonia, Phot, 0-1.0mg/L (N), 250 Tests", description: "Tablet test for ammonia nitrogen determination in water, 0-1.0 mg/L." },
    { name: "AP154 - Sulfate, Phot, 0-200mg/L SO4, 250 Tests", description: "Tablet test for sulfate concentration measurement, 0-200 mg/L." },
    { name: "AP155 - Iron LR, Phot, 0-1mg/L Fe, 250 Tests", description: "Low range iron tablet test for trace iron detection, 0-1 mg/L." },
    { name: "AP156 - Iron HR, Phot, 0-10mg/L Fe, 250 Tests", description: "High range iron tablet test for elevated iron concentration, 0-10 mg/L." },
    { name: "AP162 - Chlorine HR, Phot, 0-250mg/L Cl2, 250 Tests", description: "High range chlorine tablet test for treated water analysis, 0-250 mg/L." },
    { name: "AP163 - Nitratest, Phot, 0-20.0mg/L NO3, 200 Tests", description: "Tablet test for nitrate determination in water samples, 200 tests." },
    { name: "AP166 - Aluminium, Phot, 0-0.5mg/L Al, 250 Tests", description: "Tablet test for aluminium concentration detection, 0-0.5 mg/L." },
    { name: "AP173L - Manganese LR, Phot, 0-0.03mg/L Mn, 250 Tests", description: "Low range manganese tablet test for trace level detection, 250 tests." },
    { name: "AP174 - Manganese HR, Phot, 0-5mg/L Mn, 250 Tests", description: "High range manganese tablet test for elevated manganese levels." },
    { name: "AP177 - Phosphate LR, Phot, 0-4mg/L PO4, 200 Tests", description: "Low range phosphate tablet test for water quality monitoring, 200 tests." },
    { name: "AP179 - Fluoride, Phot, 0-1.5mg/L F, 200 Tests", description: "Fluoride tablet test for drinking water analysis, 200 tests." },
    { name: "AP186 - Coppercol, Phot, 0-5mg/L Cu, 250 Tests", description: "Copper tablet test for total copper measurement in water samples." },
    { name: "AP187 - Coppercol (FREE), Phot, 0-5mg/L Cu, 250 Tests", description: "Free copper tablet test for dissolved copper measurement, 250 tests." },
    { name: "AP188 - Alkalinity Total (AlkaPhot), 0-500mg/L CaCO3, 250pk", description: "Tablet test for total alkalinity measurement in water, 250-pack." },
    { name: "AP188PLAIN - Alkalinity Total (AlkaPhot), 0-500mg/L CaCO3, Unbranded", description: "Unbranded total alkalinity tablet test for water analysis, 250-pack." },
    { name: "AP189 - Potassium, Phot, 0-12mg/L K, 250 Tests", description: "Tablet test for potassium ion concentration measurement, 250 tests." },
    { name: "AP192 - Alkalinity, Comp, 0-250mg/L CaCO3, 250 Tests", description: "Composite alkalinity tablet test for water buffering capacity analysis." },
    { name: "AP193 - Magnecol, Photometer, 0-100mg/L Mg, 250 Tests", description: "Magnesium tablet test for water hardness component analysis." },
    { name: "AP197 - Urea, Phot, 0-5mg/L, Urea", description: "Tablet test for urea concentration measurement in water samples." },
    { name: "AP252 - Calcium Hardness, 0-500mg/L CaCO3, 250 Tests", description: "Calcium hardness tablet test for water scaling potential assessment." },
    { name: "AP254L - Hardness, Phot, 0-500mg/L CaCO3, 250 Tests", description: "Total hardness tablet test for water quality analysis." },
    { name: "AP260 - NitriPhot, Phot, 0-1500mg/L NaNO2", description: "High range nitrite tablet test using NitriPhot photometric method." },
    { name: "AP268 - Chloride, Phot, 0-50,000mg/L NaCl, 250 Tests", description: "Chloride tablet test for salinity and brackish water analysis." },
    { name: "AP284 - Nickeltest, Phot, 0-10.0mg/L Ni, 200 Tests", description: "Nickel tablet test for industrial wastewater monitoring, 200 tests." },
    { name: "AP292 - Iron MR, Phot, 0-5mg/L Fe, 250 Tests", description: "Mid range iron tablet test for general iron level assessment." },
    { name: "AP295 - COD Permanganate, Imn, 100 Tests", description: "COD permanganate tablet test for chemical oxygen demand screening." },
    { name: "AS087 - Cyanuric, Tablet Count, 0-200mg/L CNA", description: "Cyanuric acid tablet count test for pool water stabilizer monitoring." },
  ],
  "Comparator & Visual Test Kits": [
    { name: "CKH1001 - Contour Comparator Kit, 0-5mg/L Cl2", description: "Visual comparator kit for chlorine measurement using color matching, 0-5 mg/L." },
    { name: "CKH1002 - Contour Comparator Kit, Free+Total Chl 0-2mg/L Cl2", description: "Visual comparator kit for free and total chlorine measurement, 0-2 mg/L." },
    { name: "SPT610 - Pooltester, Chlorine & pH, Visual Kit", description: "Visual pool testing kit for chlorine and pH measurement with color chart." },
  ],
  "Tube Tests": [
    { name: "PL400 - Tubetest, Ammonia 12N/50N, Indophenol, 25 Tests", description: "Tube test for ammonia determination using indophenol method, 25 tests." },
    { name: "PL404 - Tubetest, Nitrate 30N, 25 Tests", description: "Tube test for nitrate determination in water samples, 25 tests." },
    { name: "PL408 - Tubetest, Total Nitrogen 30, 25 Tests, 0-30mg/L N", description: "Total nitrogen tube test for comprehensive nutrient analysis." },
    { name: "PL412 - Tubetest, Phosphate 12P, 25 Tests, 0-12mg/L P", description: "Phosphate tube test for nutrient monitoring in water, 25 tests." },
    { name: "PL416 - Tubetest, Total Phosphorus 12, 25 Tests, 0-12mg/L P", description: "Total phosphorus tube test for comprehensive nutrient analysis." },
    { name: "PL420 - Tubetest, Ammonia 15N, Nessler, 25 Tests, 0-15mg/L N", description: "Low range ammonia tube test using Nessler reagent method." },
    { name: "PL424 - Tubetest, Ammonia 50N, Nessler, 25 Tests, 0-50mg/L N", description: "Mid-range ammonia tube test using Nessler reagent method." },
    { name: "PL425 - Tubetest, Ammonia 100N, Nessler, 25 Tests, 0-100mg/L N", description: "High range ammonia tube test using Nessler reagent method." },
    { name: "PL450 - Tubetest, COD/150, 25 Tests, 0-150mg/L O2", description: "Low range COD tube test for chemical oxygen demand analysis." },
    { name: "PL452 - Tubetest, COD/400, 25 Tests, 0-400mg/L O2", description: "Mid range COD tube test for wastewater organic content analysis." },
    { name: "PL453 - Tubetest, COD/1000, 25 Tests, 0-1000mg/L O2", description: "COD tube test for elevated organic content in industrial wastewater." },
    { name: "PL454 - Tubetest, COD/2000, 25 Tests, 0-2000mg/L O2", description: "High range COD tube test for concentrated wastewater analysis." },
    { name: "PL456 - Tubetest, COD/20000, 25 Tests, 0-20000mg/L O2", description: "Ultra-high range COD tube test for heavily contaminated effluents." },
    { name: "PL460 - Tubetest, COD/150/M, 25 Tests, 0-150mg/L O2", description: "Low range COD tube test with mercury for chloride interference suppression." },
    { name: "PL461 - Tubetest, COD/150/2M, 25 Tests, 0-150mg/L O2", description: "Low range COD tube test with double mercury for high chloride samples." },
    { name: "PL462 - Tubetest, COD/400/M, 25 Tests, 0-400mg/L O2", description: "Mid range COD tube test with mercury for chloride compensation." },
    { name: "PL463 - Tubetest, COD/1000/M, 25 Tests, 0-1000mg/L O2", description: "COD tube test with mercury for high chloride industrial wastewater." },
    { name: "PL464 - Tubetest, COD/2000/M, 25 Tests, 0-2000mg/L O2", description: "High range COD tube test with mercury for saline wastewater analysis." },
    { name: "PL465 - Tubetest, COD/2000/2M, 25 Tests, 0-2000mg/L O2", description: "High range COD test with double mercury for high salinity samples." },
    { name: "PL466 - Tubetest, COD/20000/M, 25 Tests, 0-20000mg/L O2", description: "Ultra-high range COD test with mercury for extreme organic loads." },
    { name: "PL467 - Tubetest, COD/20000/2M, 25 Tests, 0-20000mg/L O2", description: "Ultra-high range COD tube test with double mercury suppression." },
    { name: "PL470 - COD Standard Solution, 80mg/L", description: "COD calibration standard solution for low range method verification." },
    { name: "PL472 - COD Standard Solution, 250mg/L", description: "COD calibration standard solution for mid range method verification." },
    { name: "PL474 - COD Standard Solution, 800mg/L", description: "COD calibration standard solution for elevated range verification." },
    { name: "PL476 - COD Standard Solution, 10,000mg/L", description: "COD calibration standard solution for high range verification." },
    { name: "PL481 - Tubetest, COD/150/M/C, Contains Mercury, 25 Tests", description: "COD tube test with mercury, low range, for chloride-rich samples." },
    { name: "PL484 - Tubetest, COD/1500/M/C, Contains Mercury, 25 Tests", description: "COD tube test with mercury, mid-high range, for saline samples." },
    { name: "PL486 - Tubetest, COD/15000/M/C, Contains Mercury, 25 Tests", description: "COD tube test with mercury, ultra-high range, for brine effluents." },
  ],
  "Microbiological Testing Kits & Wagtech": [
    { name: "PTW10005 - Wagtech Potatest Classic Kit", description: "Standard Wagtech portable testing apparatus for microbiological water analysis." },
    { name: "PTW10010 - Potalab+ Kit, Wagtech", description: "Laboratory-grade Wagtech Potalab+ microbiological testing system." },
    { name: "PTW10010XA - Potalab+ (No Arsenic) Kit, Wagtech", description: "Potalab+ kit configured for microbiological analysis without arsenic testing." },
    { name: "PTW10020 - Wagtech Potatest Dual Kit", description: "Dual Wagtech system for simultaneous microbiological sample processing." },
    { name: "PTW10030 - Potakit+, Wagtech", description: "Complete kit for rapid microbiological analysis in field conditions." },
    { name: "PTW10480 - Potatech+ Kit, Wagtech", description: "Advanced Potatech+ system for comprehensive microbiological water testing." },
    { name: "PT1005 - Portable Incubator, Potatest+", description: "Portable incubator designed for the Potatest+ microbiological testing system." },
    { name: "PT100WSK - Water Safety Kit, Wagtech", description: "Complete water safety testing kit for microbiological field analysis." },
    { name: "PT1010 - Portable Incubator, Potalab+", description: "Portable incubator designed for the Potalab+ laboratory system." },
    { name: "PT157 - Conductivity Pocket Sensor", description: "Portable pocket conductivity sensor for field water quality measurement." },
    { name: "PT162 - Multiparameter Pocket Sensor", description: "Compact multi-parameter pocket sensor for water quality analysis." },
    { name: "PTW10454 - Membrane Lauryl Sulfate Broth, 38.1g", description: "Membrane Lauryl Sulfate Broth media for microbiological analysis preparation." },
  ],
  "Delagua Bacteriological Kits": [
    { name: "Delagua Bacteriological Kit No. 1", description: "Complete Delagua water testing kit for bacteriological analysis in field conditions." },
    { name: "Delagua Bacteriological Kit No. 2", description: "Advanced Delagua water testing kit with additional accessories for comprehensive bacteriological testing." },
    { name: "Delagua Bacteriological Kit No. 3", description: "Professional Delagua water testing kit with full equipment set for bacteriological analysis." },
  ],
  "Sewage & Effluent Testing": [
    { name: "SP304 - Sewage Effluent Kit", description: "Complete testing kit for sewage effluent quality analysis and monitoring." },
  ],
  "Filtration & Sterilization": [
    { name: "RO Membrane Filter Cartridges 40 inches 1&5 Microns Sediment", description: "40-inch RO membrane sediment filter cartridges for water pre-filtration, 1 and 5 micron." },
    { name: "RO Membrane Filter Cartridges 30 inches 1&5 Microns Sediment", description: "30-inch RO membrane sediment filter cartridges for water pre-filtration." },
    { name: "RO Membrane Filter Cartridges 20 inches 1&5 Microns Sediment", description: "20-inch RO membrane sediment filter cartridges for water pre-filtration." },
    { name: "RO Membrane Filter Cartridges 10 inches 5 Microns Sediment", description: "10-inch RO membrane sediment filter cartridge for point-of-use filtration." },
    { name: "Sterilizer / Autoclave 18 Litres", description: "Portable 18-litre autoclave sterilizer for laboratory equipment and media sterilization." },
    { name: "Sterilizer / Autoclave 24 Litres", description: "Portable 24-litre autoclave sterilizer for larger capacity laboratory sterilization needs." },
  ],
};

const faqs = [
  {
    question: "What is Palintest and what products do you offer?",
    answer: "Palintest is a leading UK-based manufacturer of water testing equipment and reagents. As official distributors in Kenya, we offer the full range including Lumiso photometers, Kemio analyzers, 40+ tablet tests covering 50+ parameters, tube tests for COD analysis, Wagtech microbiological testing kits, Delagua bacteriological kits, and filtration/sterilization equipment.",
  },
  {
    question: "Are you an authorized Palintest distributor in Kenya?",
    answer: "Yes, Moris Enterprises is an official authorized distributor of Palintest UK products in Kenya. We supply genuine Palintest equipment, reagents, and consumables with full manufacturer warranty and after-sales support.",
  },
  {
    question: "What water parameters can Palintest tablet tests measure?",
    answer: "Palintest tablet tests cover 40+ individual parameters including chlorine (free, total, combined DPD methods), pH, alkalinity, hardness, calcium, magnesium, ammonia, nitrate, nitrite, phosphate, iron, manganese, copper, zinc, aluminium, fluoride, chloride, bromide, ozone, hydrogen peroxide, cyanuric acid, potassium, nickel, sulfate, urea, and COD permanganate.",
  },
  {
    question: "What COD tube test ranges are available?",
    answer: "We stock Palintest COD tube tests in multiple ranges: COD/150 (0-150 mg/L), COD/400, COD/1000, COD/2000, and COD/20000 (0-20,000 mg/L). Mercury-containing versions are available for samples with high chloride interference. COD standard solutions from 80 mg/L to 10,000 mg/L are also available for quality control.",
  },
  {
    question: "How fast do Palintest photometers provide results?",
    answer: "Palintest Lumiso photometers and tablet tests provide results in 1-10 minutes for most parameters, making them ideal for rapid water quality assessment in the field or laboratory.",
  },
  {
    question: "Do you provide technical support and training for Palintest equipment?",
    answer: "Yes, we provide full technical support, training, and after-sales service for all Palintest equipment purchased through Moris Enterprises. Our team is trained on installation, calibration, and troubleshooting.",
  },
  {
    question: "What Wagtech microbiological testing kits do you offer?",
    answer: "We offer the complete Wagtech range including Potatest Classic, Potatest Dual, Potakit+, Potalab+, and Potatech+ kits. Portable incubators (PT1005 for Potatest+, PT1010 for Potalab+) and the Water Safety Kit are also available for field microbiological analysis.",
  },
  {
    question: "Can I get a quotation for Palintest products via WhatsApp?",
    answer: "Yes, you can request a quotation for any Palintest product directly via WhatsApp using the buttons on this page. Simply click 'Request Quotation via WhatsApp' on any product and our team will respond promptly.",
  },
  {
    question: "What industries use Palintest water testing equipment?",
    answer: "Palintest equipment is used across drinking water utilities, wastewater treatment plants, swimming pools and spas, food and beverage manufacturing, pharmaceutical production, environmental monitoring, and laboratory research.",
  },
  {
    question: "How long does delivery take for Palintest products in Kenya?",
    answer: "We offer prompt delivery across Kenya. In-stock items are typically delivered within 1-3 business days within Nairobi and 3-7 business days to other regions including Mombasa, Kisumu, Eldoret, and Nakuru.",
  },
  {
    question: "What warranty do you offer on Palintest photometers and analyzers?",
    answer: "All genuine Palintest equipment purchased through Moris Enterprises comes with full manufacturer warranty. Lumiso photometers and Kemio analyzers include a standard 12-month warranty against manufacturing defects. Extended warranty options are available upon request.",
  },
  {
    question: "Do you offer pricing in Kenyan Shillings (KES)?",
    answer: "Yes, we offer competitive pricing for all Palintest products in Kenyan Shillings (KES). Contact us via WhatsApp for current pricing, volume discounts, and official quotations tailored to your requirements.",
  },
];

const Palintest = () => {
  usePageMeta({
    title: "Palintest Water Testing Equipment & Photometers | Official Distributor Kenya",
    description: "Official distributor of Palintest water testing equipment in Kenya. 300+ SKUs including Lumiso photometers, Kemio analyzers, 40+ tablet tests, COD tube tests, Wagtech microbiological kits, Delagua kits & more. Authorized Palintest UK partner with full technical support.",
    keywords: "Palintest, Palintest Kenya, Palintest distributor, Palintest water testing, Palintest photometer, buy Palintest Kenya, Palintest price Kenya, Palintest distributor Nairobi, Lumiso, Kemio, Wagtech, Palintest tablet tests, Palintest tube tests, COD testing, Delagua, water testing equipment, water quality analysis, official Palintest distributor, Nairobi, Palintest reagents, DPD tablets, water analysis Kenya",
    type: "article",
    canonical: "https://morisentreprises.com/palintest",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Palintest", url: "/palintest" },
    ],
    faqs: faqs,
    author: "Moris Enterprises",
    publishedDate: "2024-01-15",
    modifiedDate: new Date().toISOString().split("T")[0],
  });

  useEffect(() => {
    const distributorSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Moris Enterprises",
      "description": "Official authorized distributor of Palintest UK in Kenya",
      "url": "https://morisentreprises.com",
      "distributor": {
        "@type": "Organization",
        "name": "Palintest",
        "url": "https://www.palintest.com/"
      },
      "areaServed": "KE",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "KE",
        "addressRegion": "Nairobi"
      }
    };

    const whatsappSchema = {
      "@context": "https://schema.org",
      "@type": "ContactPoint",
      "contactType": "sales",
      "telephone": "+254-733-137-332",
      "contactOption": "WhatsApp",
      "availableLanguage": ["en", "sw"]
    };

    const schemas = [
      { id: "data-distributor", data: distributorSchema },
      { id: "data-whatsapp", data: whatsappSchema },
    ];

    for (const { id, data } of schemas) {
      let script = document.querySelector(`script[${id}]`);
      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute(id, "");
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(data);
    }
  }, []);

  return (
    <ProductPageLayout
      title="Palintest Water Testing Equipment &amp; Photometers — Official Distributor Kenya"
      description="Official distributor of Palintest UK in Kenya — supplying 300+ SKUs including Lumiso photometers, Kemio analyzers, 40+ tablet tests, COD tube tests, Wagtech microbiological kits, Delagua bacteriological kits, filtration, and sterilization equipment for professional water quality analysis."
    >
      <div className="space-y-12">
        {Object.entries(productCategories).map(([category, items]) => (
          <div key={category}>
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((product, index) => (
                <Card
                  key={index}
                  className="p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground flex-1">
                    {product.description}
                  </p>
                  <Button
                    onClick={() => openProductQuotation(product.name)}
                    className="w-full mt-3 bg-green-500 hover:bg-green-600 text-white font-medium text-sm"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Request Quotation via WhatsApp
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 prose prose-lg max-w-none">
        <h2 className="text-3xl font-display font-bold text-foreground mb-4">
          About Palintest Water Testing Solutions
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          As the <strong>official authorized distributor of Palintest UK in Kenya</strong>, Moris Enterprises supplies the complete range of Palintest water testing and analysis equipment — from 300+ product SKUs covering photometers, reagents, tube tests, and microbiological kits. Palintest is a globally recognized leader in water quality analysis, known for their innovative Lumiso photometers, reliable DPD tablet tests, and comprehensive water testing solutions used across drinking water, wastewater, swimming pools, and environmental monitoring applications.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Our partnership with Palintest allows us to offer genuine products with full manufacturer warranty, technical support, and competitive pricing. From the advanced Lumiso series photometers to the extensive range of Palintest tablet tests covering 40+ individual parameters, we have the right solution for every water testing requirement.
        </p>

        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full border-collapse text-sm md:text-base">
            <thead>
              <tr className="bg-primary/10 border-b border-primary/20">
                <th className="text-left font-semibold text-foreground px-4 py-3 w-[180px] md:w-1/5">Category</th>
                <th className="text-left font-semibold text-foreground px-4 py-3">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="font-semibold text-primary px-4 py-2.5 align-top whitespace-nowrap" rowSpan={8}>Why Choose</td>
                <td className="text-muted-foreground px-4 py-2.5">Official authorized distributor of Palintest UK — genuine products guaranteed</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">300+ product SKUs in stock — photometers, tablets, tube tests, microbiological kits, filtration</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">40+ individual test parameters available for comprehensive water analysis</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">COD tube tests from low range (0-150 mg/L) to ultra-high (0-20,000 mg/L)</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">Rapid results in 1-10 minutes for most tablet tests</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">Full technical support, training, and after-sales service</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">Competitive pricing with prompt delivery across Kenya</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">WhatsApp-based quotations for fast response</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="font-semibold text-primary px-4 py-2.5 align-top whitespace-nowrap" rowSpan={8}>Applications</td>
                <td className="text-muted-foreground px-4 py-2.5">Drinking water quality assurance and regulatory compliance</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">Wastewater and effluent treatment monitoring</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">Swimming pool and spa water management</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">Industrial process water quality control</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">Environmental and surface water testing</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">Food and beverage industry quality control</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">Pharmaceutical and laboratory research</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">Boiler and cooling water treatment</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="font-semibold text-primary px-4 py-2.5 align-top whitespace-nowrap" rowSpan={13}>Product Categories</td>
                <td className="text-muted-foreground px-4 py-2.5">Lumiso Expert, Pooltest, Ammonia, Chlorine, Chlorine Dioxide, and Ozone photometers</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">Kemio Disinfection and Heavy Metal Analyzers with replacement sensor packs</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">DPD tablet tests for chlorine (free, total, combined, high range, extended range)</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">Tablet tests for pH, alkalinity, hardness, calcium, magnesium, ammonia, nitrate, nitrite</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">Iron (low, mid, high range), manganese, copper, zinc, aluminium, nickel, potassium</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">Fluoride, chloride, sulfate, phosphate, cyanuric acid, urea, ozone, hydrogen peroxide</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">COD tube tests in 8 ranges from 0-150 to 0-20,000 mg/L with mercury options</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">COD standard solutions for quality control (80 to 10,000 mg/L)</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">Wagtech microbiological testing kits — Potatest, Potalab, Potakit, Potatech+</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">Delagua bacteriological field testing kits</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">Portable incubators, conductivity and multi-parameter pocket sensors</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">RO membrane sediment filter cartridges (10 to 40 inches)</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">Autoclave sterilizers (18L and 24L) for laboratory use</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="font-semibold text-primary px-4 py-2.5 align-top whitespace-nowrap" rowSpan={19}>Test Parameters</td>
                <td className="text-muted-foreground px-4 py-2.5">Chlorine (Free, Total, Combined) — DPD1, DPD3, DPD4 methods</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">pH (Phenol Red indicator method, range 6.8-8.4)</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">Alkalinity (Total and Composite methods, 0-500 mg/L CaCO3)</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">Hardness (Total and Calcium, 0-500 mg/L CaCO3)</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">Ammonia (0-1.0 mg/L N), Nitrate (0-20 mg/L NO3), Nitrite (0-5 mg/L NO2)</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">Phosphate (0-4 mg/L PO4), Total Nitrogen, Total Phosphorus</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">Iron — Low (0-1), Mid (0-5), High (0-10 mg/L Fe)</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">Manganese — Low (0-0.03) and High (0-5 mg/L Mn)</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">Copper — Total and Free (0-5 mg/L Cu)</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">Aluminium (0-0.5 mg/L), Zinc (0-4 mg/L), Nickel (0-10 mg/L)</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">Fluoride (0-1.5 mg/L), Chloride (0-50,000 mg/L NaCl)</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">COD — 8 ranges from 0-150 to 0-20,000 mg/L O2</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">Bromine (0-10 mg/L Br2), Ozone (0-3 mg/L O3)</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">Hydrogen Peroxide — Low (0-2) and High (0-100 mg/L H2O2)</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">Cyanuric Acid (0-200 mg/L CNA), Potassium (0-12 mg/L K)</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">Magnesium (0-100 mg/L Mg), Sulfate (0-200 mg/L SO4)</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">Urea (0-5 mg/L), Peracetic Acid (Kemio sensors)</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">Coliform bacteria and pathogens (Wagtech microbiological)</td>
              </tr>
              <tr className="border-b border-gray-100 even:bg-secondary/20">
                <td className="text-muted-foreground px-4 py-2.5">Turbidity, Conductivity, TDS (sensor-based)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/10">
          <h3 className="text-2xl font-display font-bold text-foreground mb-3">
            Download Our Full Palintest Product Catalog
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Get the complete Palintest product catalog with full specifications, part numbers, and pricing. Includes all Lumiso photometers, Kemio analyzers, 40+ tablet tests, COD tube tests, and Wagtech microbiological kits available in Kenya.
          </p>
          <Button
            onClick={() => openProductQuotation("Palintest Catalog Download")}
            className="bg-primary hover:bg-primary-dark text-primary-foreground font-medium"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Catalog (PDF)
          </Button>
        </div>

        <div className="mt-6 p-6 bg-green-50 rounded-xl border border-green-200">
          <h3 className="text-2xl font-display font-bold text-foreground mb-3">
            Official Palintest Distributor — Contact Us Today
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            As the authorized Palintest distributor in Kenya, we are committed to providing genuine products, expert advice, and reliable after-sales support. With 300+ SKUs available, we have the right water testing solution for your needs. Contact us via WhatsApp for quotations, pricing in KES, technical inquiries, or product recommendations. Delivery available across Nairobi, Mombasa, Kisumu, and all Kenyan regions.
          </p>
          <Button
            onClick={() => openProductQuotation("Palintest Equipment")}
            className="bg-green-500 hover:bg-green-600 text-white font-medium"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Request Quotation via WhatsApp
          </Button>
        </div>
      </div>
    </ProductPageLayout>
  );
};

export default Palintest;
