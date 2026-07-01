export interface PalintestProduct {
  code: string;
  name: string;
  specification: string;
  testCount?: string;
  category: string;
}

export const palintestProducts: PalintestProduct[] = [
  // DPD & Photometer Tests
  {
    code: "AP011",
    name: "DPD1, Chlorine (free)",
    specification: "Phot, 0-5mg/L Cl₂",
    testCount: "250 Tests",
    category: "DPD & Photometer Tests",
  },
  {
    code: "AP031",
    name: "DPD1&DPD3, F&T Chlorine",
    specification: "Phot, 0-5mg/L Cl₂",
    testCount: "250 Tests",
    category: "DPD & Photometer Tests",
  },
  {
    code: "AP031/1",
    name: "DPD3, Total Chlorine",
    specification: "Phot, 0-5mg/L Cl₂",
    testCount: "250 Tests",
    category: "DPD & Photometer Tests",
  },
  {
    code: "AP031/1PLAIN",
    name: "DPD3, Total Chlorine (Plain)",
    specification: "Phot, 0-5mg/L Cl₂",
    testCount: "250 Tests",
    category: "DPD & Photometer Tests",
  },
  {
    code: "AP033",
    name: "DPD1&DPD3 XT, F&T Chlorine",
    specification: "Phot, 0-10mg/L Cl₂",
    testCount: "250 Tests",
    category: "DPD & Photometer Tests",
  },
  {
    code: "AP033/1",
    name: "DPD3 XT, Chlorine",
    specification: "Phot, 0-10mg/L Cl₂",
    testCount: "250 Tests",
    category: "DPD & Photometer Tests",
  },
  {
    code: "AP041",
    name: "DPD 4, Total Chlorine",
    specification: "Phot, 0-5mg/L Cl₂",
    testCount: "250 Tests",
    category: "DPD & Photometer Tests",
  },
  {
    code: "AP056",
    name: "Ozone",
    specification: "Phot, 0-3mg/L O₃",
    testCount: "250 Tests",
    category: "DPD & Photometer Tests",
  },
  {
    code: "AP060",
    name: "Bromine",
    specification: "Phot, 0-10mg/L Br₂",
    testCount: "250 Tests",
    category: "DPD & Photometer Tests",
  },
  {
    code: "AP087",
    name: "Cyanuric",
    specification: "Phot, 0-200mg/L CNA",
    testCount: "250 Tests",
    category: "DPD & Photometer Tests",
  },
  {
    code: "AP087PLAIN",
    name: "Cyanuric (Unbranded)",
    specification: "Phot, 0-200mg/L CNA",
    testCount: "250 Tests",
    category: "DPD & Photometer Tests",
  },
  {
    code: "AP104",
    name: "Hydrogen Peroxide LR",
    specification: "Phot, 0-2mg/L H₂O₂",
    testCount: "250 Tests",
    category: "DPD & Photometer Tests",
  },
  {
    code: "AP105",
    name: "Hydrogen Peroxide HR",
    specification: "Phot, 0-100mg/L H₂O₂",
    testCount: "250 Tests",
    category: "DPD & Photometer Tests",
  },
  {
    code: "AP109",
    name: "Nitricol",
    specification: "Phot, 0-5mg/L NO₂",
    testCount: "250 Tests",
    category: "DPD & Photometer Tests",
  },
  {
    code: "AP130",
    name: "Phenol Red",
    specification: "Phot, pH 6.8-8.4",
    testCount: "250 Tests",
    category: "DPD & Photometer Tests",
  },
  {
    code: "AP130PLAIN",
    name: "Phenol Red (Unbranded)",
    specification: "Phot, pH 6.8-8.4",
    testCount: "250 Tests",
    category: "DPD & Photometer Tests",
  },
  {
    code: "AP148",
    name: "Zinc",
    specification: "Phot, 0-4mg/L Zn",
    testCount: "250 Tests",
    category: "DPD & Photometer Tests",
  },
  {
    code: "AP152",
    name: "Ammonia",
    specification: "Phot, 0-1.0mg/L (N)",
    testCount: "250 Tests",
    category: "DPD & Photometer Tests",
  },
  {
    code: "AP154",
    name: "Sulfate",
    specification: "Phot, 0-200mg/L SO₄",
    testCount: "250 Tests",
    category: "DPD & Photometer Tests",
  },
  {
    code: "AP155",
    name: "Iron LR",
    specification: "Phot, 0-1mg/L Fe",
    testCount: "250 Tests",
    category: "DPD & Photometer Tests",
  },
  {
    code: "AP156",
    name: "Iron HR",
    specification: "Phot, 0-10mg/L Fe",
    testCount: "250 Tests",
    category: "DPD & Photometer Tests",
  },
  {
    code: "AP162",
    name: "Chlorine HR",
    specification: "Phot, 0-250mg/L Cl₂",
    testCount: "250 Tests",
    category: "DPD & Photometer Tests",
  },
  {
    code: "AP163",
    name: "Nitratest",
    specification: "Phot, 0-20.0mg/L NO₃",
    testCount: "200 Tests",
    category: "DPD & Photometer Tests",
  },
  {
    code: "AP166",
    name: "Aluminium",
    specification: "Phot, 0-0.5mg/L Al",
    testCount: "250 Tests",
    category: "DPD & Photometer Tests",
  },
  {
    code: "AP173L",
    name: "Manganese LR",
    specification: "Phot, 0-0.03mg/L Mn",
    testCount: "250 Tests",
    category: "DPD & Photometer Tests",
  },
  {
    code: "AP174",
    name: "Manganese HR",
    specification: "Phot, 0-5mg/L Mn",
    testCount: "250 Tests",
    category: "DPD & Photometer Tests",
  },
  {
    code: "AP177",
    name: "Phosphate LR",
    specification: "Phot, 0-4mg/L PO₄",
    testCount: "200 Tests",
    category: "DPD & Photometer Tests",
  },
  {
    code: "AP179",
    name: "Fluoride",
    specification: "Phot, 0-1.5mg/L F",
    testCount: "200 Tests",
    category: "DPD & Photometer Tests",
  },
  {
    code: "AP186",
    name: "Coppercol",
    specification: "Phot, 0-5mg/L Cu",
    testCount: "250 Tests",
    category: "DPD & Photometer Tests",
  },
  {
    code: "AP187",
    name: "Coppercol (FREE)",
    specification: "Phot, 0-5mg/L Cu",
    testCount: "250 Tests",
    category: "DPD & Photometer Tests",
  },
  {
    code: "AP188",
    name: "Alkalinity Total (AlkaPhot)",
    specification: "Phot, 0-500mg/L CaCO₃",
    testCount: "250 Tests",
    category: "DPD & Photometer Tests",
  },
  {
    code: "AP188PLAIN",
    name: "Alkalinity Total (Plain)",
    specification: "Phot, 0-500mg/L CaCO₃",
    testCount: "250 Tests",
    category: "DPD & Photometer Tests",
  },
  {
    code: "AP189",
    name: "Potassium",
    specification: "Phot, 0-12mg/L K",
    testCount: "250 Tests",
    category: "DPD & Photometer Tests",
  },
  {
    code: "AP192",
    name: "Alkalinity",
    specification: "Comp, 0-250mg/L CaCO₃",
    testCount: "250 Tests",
    category: "DPD & Photometer Tests",
  },
  {
    code: "AP193",
    name: "Magnecol",
    specification: "Photometer, 0-100mg/L Mg",
    testCount: "250 Tests",
    category: "DPD & Photometer Tests",
  },
  {
    code: "AP197",
    name: "Urea",
    specification: "Phot, 0-5mg/L Urea",
    testCount: "250 Tests",
    category: "DPD & Photometer Tests",
  },
  {
    code: "AP252",
    name: "Calcium Hardness",
    specification: "Phot, 0-500mg/L CaCO₃",
    testCount: "250 Tests",
    category: "DPD & Photometer Tests",
  },
  {
    code: "AP254L",
    name: "Hardness",
    specification: "Phot, 0-500mg/L CaCO₃",
    testCount: "250 Tests",
    category: "DPD & Photometer Tests",
  },
  {
    code: "AP260",
    name: "NitriPhot",
    specification: "Phot, 0-1500mg/L NaNO₂",
    testCount: "250 Tests",
    category: "DPD & Photometer Tests",
  },
  {
    code: "AP268",
    name: "Chloride",
    specification: "Phot, 0-50,000mg/L NaCl",
    testCount: "250 Tests",
    category: "DPD & Photometer Tests",
  },
  {
    code: "AP284",
    name: "Nickeltest",
    specification: "Phot, 0-10.0mg/L Ni",
    testCount: "200 Tests",
    category: "DPD & Photometer Tests",
  },
  {
    code: "AP292",
    name: "Iron MR",
    specification: "Phot, 0-5mg/L Fe",
    testCount: "250 Tests",
    category: "DPD & Photometer Tests",
  },
  {
    code: "AP295",
    name: "COD Permanganate",
    specification: "Imn, POV",
    testCount: "100 Tests",
    category: "DPD & Photometer Tests",
  },

  // Tablet Tests
  {
    code: "AS087",
    name: "Cyanuric",
    specification: "Tablet Count, 0-200mg/L CNA",
    category: "Tablet Tests",
  },

  // Comparator Kits
  {
    code: "CKH1001",
    name: "Contour Comparator Kit",
    specification: "0-5mg/L Cl₂",
    category: "Comparator Kits",
  },
  {
    code: "CKH1002",
    name: "Contour Comparator Kit",
    specification: "Free+Total Chl, 0-2mg/L Cl₂",
    category: "Comparator Kits",
  },

  // Kemio Systems
  {
    code: "KEM21PAA",
    name: "Kemio Peracetic Acid",
    specification: "Sensors, 100 Pack",
    category: "Kemio Systems",
  },
  {
    code: "KEM21PAH",
    name: "Kemio High Range High Temp PAA",
    specification: "Sensor, 100 Pack",
    category: "Kemio Systems",
  },
  {
    code: "KEM21PAL",
    name: "Kemio Peracetic Acid Low Range",
    specification: "Sensors, 100 Pack",
    category: "Kemio Systems",
  },

  // Lumiso Systems
  {
    code: "LMCEXP",
    name: "Lumiso Expert Check Standards",
    specification: "Quality control stds",
    category: "Lumiso Systems",
  },
  {
    code: "LMCPTX",
    name: "Lumiso Pooltest Expert Check Standards",
    specification: "Quality control stds",
    category: "Lumiso Systems",
  },
  {
    code: "LMP003",
    name: "Hard Kit, Lumiso Pooltest 3",
    specification: "Complete kit",
    category: "Lumiso Systems",
  },
  {
    code: "LMP004",
    name: "Hard Kit, Lumiso Pooltest 4",
    specification: "Complete kit",
    category: "Lumiso Systems",
  },
  {
    code: "LMP006",
    name: "Hard Kit, Lumiso Pooltest 6",
    specification: "Complete kit",
    category: "Lumiso Systems",
  },
  {
    code: "LMPXUK",
    name: "Lumiso Pooltest Expert Benchtop Kit",
    specification: "Laboratory kit",
    category: "Lumiso Systems",
  },
  {
    code: "LTH090",
    name: "Turbidity Expert Kit",
    specification: "Turbidity testing",
    category: "Lumiso Systems",
  },
  {
    code: "LUM050",
    name: "Hard Kit, Lumiso Ammonia",
    specification: "Ammonia testing",
    category: "Lumiso Systems",
  },
  {
    code: "LUM051",
    name: "Hard Kit, Lumiso Chlorine",
    specification: "Chlorine testing",
    category: "Lumiso Systems",
  },
  {
    code: "LUM052",
    name: "Hard Kit, Lumiso Chlorine Dioxide",
    specification: "Chlorine dioxide testing",
    category: "Lumiso Systems",
  },
  {
    code: "LUM053",
    name: "Hard Kit, Lumiso Ozone",
    specification: "Ozone testing",
    category: "Lumiso Systems",
  },
  {
    code: "LUM7051",
    name: "Turbidity Expert & Lumiso Chlorine Combined Kit",
    specification: "Combined testing",
    category: "Lumiso Systems",
  },
  {
    code: "LUM7051WLC",
    name: "Turbidity Expert Combined Kit (Without Lumiso Chlorine)",
    specification: "Turbidity testing",
    category: "Lumiso Systems",
  },
  {
    code: "LUM7210",
    name: "Lumiso Expert Benchtop Kit",
    specification: "Laboratory kit",
    category: "Lumiso Systems",
  },

  // Tubetests
  {
    code: "PL400",
    name: "Tubetest Ammonia 12N/50N",
    specification: "Indophenol, 25 Tests",
    category: "Tubetests",
  },
  {
    code: "PL404",
    name: "Tubetest Nitrate 30N",
    specification: "25 Tests, 0-30mg/L NO₃",
    category: "Tubetests",
  },
  {
    code: "PL408",
    name: "Tubetest Total Nitrogen 30",
    specification: "25 Tests, 0-30mg/L N",
    category: "Tubetests",
  },
  {
    code: "PL412",
    name: "Tubetest Phosphate 12P",
    specification: "25 Tests, 0-12mg/L P",
    category: "Tubetests",
  },
  {
    code: "PL416",
    name: "Tubetest Total Phosphorus 12",
    specification: "25 Tests, 0-12mg/L P",
    category: "Tubetests",
  },
  {
    code: "PL420",
    name: "Tubetest Ammonia 15N",
    specification: "Nessler, 25 Tests, 0-15mg/L N",
    category: "Tubetests",
  },
  {
    code: "PL424",
    name: "Tubetest Ammonia 50N",
    specification: "Nessler, 25 Tests, 0-50mg/L N",
    category: "Tubetests",
  },
  {
    code: "PL425",
    name: "Tubetest Ammonia 100N",
    specification: "Nessler, 25 Tests, 0-100mg/L N",
    category: "Tubetests",
  },
  {
    code: "PL450",
    name: "Tubetest COD/150",
    specification: "25 Tests, 0-150mg/L O₂",
    category: "Tubetests",
  },
  {
    code: "PL452",
    name: "Tubetest COD/400",
    specification: "25 Tests, 0-400mg/L O₂",
    category: "Tubetests",
  },
  {
    code: "PL453",
    name: "Tubetest COD/1000",
    specification: "25 Tests, 0-1000mg/L O₂",
    category: "Tubetests",
  },
  {
    code: "PL454",
    name: "Tubetest COD/2000",
    specification: "25 Tests, 0-2000mg/L O₂",
    category: "Tubetests",
  },
  {
    code: "PL456",
    name: "Tubetest COD/20000",
    specification: "25 Tests, 0-20000mg/L O₂",
    category: "Tubetests",
  },
  {
    code: "PL460",
    name: "Tubetest COD/150/M",
    specification: "25 Tests, 0-150mg/L O₂",
    category: "Tubetests",
  },
  {
    code: "PL461",
    name: "Tubetest COD/150/2M",
    specification: "25 Tests, 0-150mg/L O₂",
    category: "Tubetests",
  },
  {
    code: "PL462",
    name: "Tubetest COD/400/M",
    specification: "25 Tests, 0-400mg/L O₂",
    category: "Tubetests",
  },
  {
    code: "PL463",
    name: "Tubetest COD/1000/M",
    specification: "25 Tests, 0-1000mg/L O₂",
    category: "Tubetests",
  },
  {
    code: "PL464",
    name: "Tubetest COD/2000/M",
    specification: "25 Tests, 0-2000mg/L O₂",
    category: "Tubetests",
  },
  {
    code: "PL465",
    name: "Tubetest COD/2000/2M",
    specification: "25 Tests, 0-2000mg/L O₂",
    category: "Tubetests",
  },
  {
    code: "PL466",
    name: "Tubetest COD/20000/M",
    specification: "25 Tests, 0-20000mg/L O₂",
    category: "Tubetests",
  },
  {
    code: "PL467",
    name: "Tubetest COD/20000/2M",
    specification: "25 Tests, 0-20000mg/L O₂",
    category: "Tubetests",
  },
  {
    code: "PL470",
    name: "COD Standard Solution",
    specification: "80mg/L",
    category: "Tubetests",
  },
  {
    code: "PL472",
    name: "COD Standard Solution",
    specification: "250mg/L",
    category: "Tubetests",
  },
  {
    code: "PL474",
    name: "COD Standard Solution",
    specification: "800mg/L",
    category: "Tubetests",
  },
  {
    code: "PL476",
    name: "COD Standard Solution",
    specification: "10,000mg/L",
    category: "Tubetests",
  },
  {
    code: "PL481",
    name: "Tubetest COD/150/M/C",
    specification: "Contains Mercury, 25 Tests",
    category: "Tubetests",
  },
  {
    code: "PL484",
    name: "Tubetest COD/1500/M/C",
    specification: "Contains Mercury, 25 Tests",
    category: "Tubetests",
  },
  {
    code: "PL486",
    name: "Tubetest COD/15000/M/C",
    specification: "Contains Mercury, 25 Tests",
    category: "Tubetests",
  },

  // Portable Systems
  {
    code: "PT1005",
    name: "Portable Incubator",
    specification: "Potatest+",
    category: "Portable Systems",
  },
  {
    code: "PT100WSK",
    name: "Water Safety Kit",
    specification: "Wagtech",
    category: "Portable Systems",
  },
  {
    code: "PT1010",
    name: "Portable Incubator",
    specification: "Potalab+",
    category: "Portable Systems",
  },
  {
    code: "PT157",
    name: "Conductivity Pocket Sensor",
    specification: "Portable testing",
    category: "Portable Systems",
  },
  {
    code: "PT162",
    name: "Multiparameter Pocket Sensor",
    specification: "Portable testing",
    category: "Portable Systems",
  },
  {
    code: "PTW10005",
    name: "Wagtech Potatest Classic Kit",
    specification: "Portable kit",
    category: "Portable Systems",
  },
  {
    code: "PTW10010",
    name: "Potalab+ Kit",
    specification: "Wagtech, Portable kit",
    category: "Portable Systems",
  },
  {
    code: "PTW10010XA",
    name: "Potalab+ (no Arsenic) Kit",
    specification: "Wagtech, Portable kit",
    category: "Portable Systems",
  },
  {
    code: "PTW10020",
    name: "Wagtech Potatest Dual Kit",
    specification: "Portable kit",
    category: "Portable Systems",
  },
  {
    code: "PTW10030",
    name: "Potakit+",
    specification: "Wagtech, Portable kit",
    category: "Portable Systems",
  },
  {
    code: "PTW10454",
    name: "Membrane Lauryl Sulfate Broth",
    specification: "38.1g",
    category: "Portable Systems",
  },
  {
    code: "PTW10480",
    name: "Potatech+ Kit",
    specification: "Wagtech, Portable kit",
    category: "Portable Systems",
  },

  // Specialized Testing
  {
    code: "SP304",
    name: "Sewage Effluent Kit",
    specification: "Environmental testing",
    category: "Specialized Testing",
  },
  {
    code: "SPT610",
    name: "Pooltester",
    specification: "Chlorine & pH, Visual Kit",
    category: "Specialized Testing",
  },

  // Bacterological & Filtration
  {
    code: "DELAGUA-1",
    name: "Delagua Bacterological Kit No. 1",
    specification: "Bacterial testing",
    category: "Bacterological & Filtration",
  },
  {
    code: "DELAGUA-2",
    name: "Delagua Bacterological Kit No. 2",
    specification: "Bacterial testing",
    category: "Bacterological & Filtration",
  },
  {
    code: "DELAGUA-3",
    name: "Delagua Bacterological Kit No. 3",
    specification: "Bacterial testing",
    category: "Bacterological & Filtration",
  },
  {
    code: "RO-40-15",
    name: "RO Membrane Filter Cartridges 40 inches",
    specification: "1&5 Microns Sediment, 1000 count",
    category: "Bacterological & Filtration",
  },
  {
    code: "RO-30-15",
    name: "RO Membrane Filter Cartridges 30 inches",
    specification: "1&5 Microns Sediment, 680 count",
    category: "Bacterological & Filtration",
  },
  {
    code: "RO-20-15",
    name: "RO Membrane Filter Cartridges 20 inches",
    specification: "1&5 Microns Sediment, 480 count",
    category: "Bacterological & Filtration",
  },
  {
    code: "RO-10-5",
    name: "RO Membrane Filter Cartridges 10 inches",
    specification: "5 Microns Sediment, 300 count",
    category: "Bacterological & Filtration",
  },

  // Sterilization Equipment
  {
    code: "STERILIZER-18",
    name: "Sterilizer/Autoclave",
    specification: "18 liters capacity",
    category: "Sterilization Equipment",
  },
  {
    code: "STERILIZER-24",
    name: "Sterilizer/Autoclave",
    specification: "24 liters capacity",
    category: "Sterilization Equipment",
  },
];

export const productsByCategory = palintestProducts.reduce((acc, product) => {
  const existing = acc.find((cat) => cat.category === product.category);
  if (existing) {
    existing.products.push(product);
  } else {
    acc.push({
      category: product.category,
      products: [product],
    });
  }
  return acc;
}, [] as Array<{ category: string; products: PalintestProduct[] }>);
