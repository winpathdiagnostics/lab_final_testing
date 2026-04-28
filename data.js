// =====================================================================
// 1. HEALTH PACKAGES
// =====================================================================
const healthPackages = [
    // --- LIFESTYLE & GENERAL WELLNESS ---
    { id: 'p-1', name: "Master Health Checkup", mrp: "8,500", price: "5,999", isPackage: true, desc: "Our gold-standard clinical audit.", importance: "A complete clinical audit of major organ systems. Highly recommended once a year for proactive health management of heart, liver, kidney, and metabolic status.", params: "CBC, LFT, RFT, Lipid, HbA1c, Vitamin D, Vitamin B12, Urine Routine, Thyroid, Fasting Sugar", category: { package: 'LifeStyle' } },
    { id: 'p-2', name: "Full Body Checkup", mrp: "3,500", price: "1,999", isPackage: true, desc: "Essential baseline organ health screen.", importance: "Perfect for routine monitoring of metabolic health, liver, and kidney functions at an accessible price for the entire family.", params: "CBC, Sugar, Lipid Profile, LFT, RFT, Urine Routine", category: { package: 'LifeStyle' } },
    
    // --- GENDER SPECIFIC (GENERAL) ---
    { id: 'p-3', name: "Women's Health Package", mrp: "4,000", price: "2,499", isPackage: true, desc: "Hormonal & nutritional focus.", importance: "Specifically designed for women to monitor reproductive health, hormonal balance, bone density markers, and iron levels.", params: "CBC, Thyroid Profile, Iron, Calcium, Vitamin D", category: { package: 'Women' } },
    { id: 'p-4', name: "Men's Health Package", mrp: "4,000", price: "2,499", isPackage: true, desc: "Heart risk & prostate focus.", importance: "Targeted screening for cardiac risks, liver function, and age-related markers including prostate health indicators.", params: "CBC, Lipid Profile, LFT, PSA Total, Vitamin B12", category: { package: 'Men' } },
    
    // --- SENIORS & SPECIALIZED ---
    { id: 'p-5', name: "Seniors Health Screen", mrp: "5,500", price: "3,499", isPackage: true, desc: "Age-related chronic monitoring.", importance: "Targets age-related risks including chronic inflammation, blood sugar stability, renal filtration, and bone mineral loss.", params: "CBC, HbA1c, Cardiac Profile, RFT, Vitamin D", category: { package: 'Senior' } },
    { id: 'p-6', name: "PCOS Screen", mrp: "4,500", price: "2,999", isPackage: true, desc: "Reproductive hormonal panel.", importance: "Clinical evaluation of hormonal imbalance and insulin resistance associated with PCOS symptoms.", params: "FSH, LH, Prolactin, Insulin (F), Testosterone", category: { package: 'Women' } },

    // --- MEN'S AGE-SPECIFIC PACKAGES ---
    { id: 'p-7', name: "Men's Health Screen (Under 30)", mrp: "3,000", price: "1,499", isPackage: true, desc: "Baseline wellness & fitness screen.", importance: "Focuses on early detection of lifestyle disorders, nutritional deficiencies, and baseline metabolic rates for young adults.", params: "CBC, Lipid Profile, Liver Function, Testosterone (Total), Vitamin D", category: { package: 'Men', age: 'Under 30' } },
    { id: 'p-8', name: "Men's Health Screen (30-45)", mrp: "4,500", price: "2,699", isPackage: true, desc: "Executive stress & cardiac baseline.", importance: "Crucial for monitoring stress impacts, early diabetes onset, and cardiovascular risk factors during peak career years.", params: "CBC, Lipid Profile, LFT, HbA1c, Thyroid Profile, hs-CRP, Uric Acid", category: { package: 'Men', age: '30-45' } },
    { id: 'p-9', name: "Men's Health Screen (45-60)", mrp: "6,000", price: "3,599", isPackage: true, desc: "Comprehensive risk & prostate check.", importance: "In-depth screening for age-related cardiac conditions, renal function decline, and vital prostate health tracking.", params: "CBC, Comprehensive Cardiac, HbA1c, PSA Total, RFT, Vitamin B12, Homocysteine", category: { package: 'Men', age: '45-60' } },
    { id: 'p-10', name: "Men's Health Screen (Above 60)", mrp: "6,500", price: "3,999", isPackage: true, desc: "Senior male holistic monitoring.", importance: "Tailored to address bone health, advanced prostate screening, cardiovascular stability, and cognitive health markers.", params: "Master Metabolic, PSA Total, Cardiac Risk, Renal, Calcium, Vitamin D, Vitamin B12", category: { package: 'Men', age: 'Above 60' } },

    // --- WOMEN'S AGE-SPECIFIC PACKAGES ---
    { id: 'p-11', name: "Women's Health Screen (Under 30)", mrp: "3,500", price: "1,899", isPackage: true, desc: "Anemia & baseline hormone screen.", importance: "Aimed at identifying common deficiencies like iron and Vitamin D, along with baseline metabolic and thyroid function.", params: "CBC, Iron Profile, Thyroid Profile, Vitamin D, HbA1c", category: { package: 'Women', age: 'Under 30' } },
    { id: 'p-12', name: "Women's Health Screen (30-45)", mrp: "4,800", price: "2,899", isPackage: true, desc: "Reproductive & metabolic wellness.", importance: "Monitors hormonal fluctuations, bone density baseline, thyroid stability, and early signs of insulin resistance.", params: "CBC, Thyroid Profile, Iron Profile, Calcium, Lipid Profile, LFT, AMH", category: { package: 'Women', age: '30-45' } },
    { id: 'p-13', name: "Women's Health Screen (45-60)", mrp: "5,500", price: "3,299", isPackage: true, desc: "Peri/Post-menopause comprehensive.", importance: "Critical for tracking menopausal hormonal changes, accelerating bone loss, and increased cardiovascular risks.", params: "CBC, FSH, LH, Estradiol (E2), Calcium, Vitamin D, Lipid Profile, HbA1c", category: { package: 'Women', age: '45-60' } },
    { id: 'p-14', name: "Women's Health Screen (Above 60)", mrp: "6,000", price: "3,799", isPackage: true, desc: "Senior female holistic care.", importance: "Focuses on advanced osteoporosis risks, heart health, kidney function, and essential vitamins for aging gracefully.", params: "Bone Health Panel, Cardiac Risk, HbA1c, RFT, Vitamin B12, Iron Profile", category: { package: 'Women', age: 'Above 60' } },

    // --- NEW: LIFESTYLE IMPACT PACKAGES (APOLLO-INSPIRED) ---
    { id: 'p-15', name: "Sexual Wellness Package - Male", mrp: "5,999", price: "4,499", isPackage: true, desc: "Comprehensive male reproductive health screen.", importance: "Diagnose issues affecting libido, erectile function, and fertility by checking testosterone, hormones, and diabetic markers.", params: "Total & Free Testosterone, Prolactin, FSH, LH, TSH, HbA1c", category: { package: 'Men', condition: 'Sexual Wellness' } },
    { id: 'p-16', name: "Alcohol Impact Package", mrp: "3,467", price: "2,600", isPackage: true, desc: "Liver and pancreatic function monitor.", importance: "Critical for individuals consuming alcohol regularly. Monitors liver damage, fatty liver risk, and pancreatic inflammation.", params: "LFT (including GGT), Lipid Profile, CBC, Amylase, Lipase", category: { package: 'LifeStyle', condition: 'Alcohol' } },
    { id: 'p-17', name: "Smoker's Impact Package", mrp: "3,800", price: "2,850", isPackage: true, desc: "Lung & cardiac risk assessment.", importance: "Assesses respiratory inflammation, potential lung tissue damage, and elevated cardiovascular risks associated with smoking.", params: "CBC, AEC, LDH, hs-CRP, Lipid Profile", category: { package: 'LifeStyle', condition: 'Respiratory Disorders' } },
    { id: 'p-18', name: "Hairfall Assessment - Male", mrp: "2,932", price: "2,199", isPackage: true, desc: "Nutritional and hormonal hair loss check.", importance: "Identifies root causes of male pattern baldness and diffuse hair shedding, focusing on DHT, thyroid, and vitamin deficiencies.", params: "CBC, Iron Profile, Thyroid Profile, DHT, Vitamin B12, Zinc", category: { package: 'Men' } },
    { id: 'p-19', name: "Gut Health Package", mrp: "3,999", price: "2,999", isPackage: true, desc: "Gastrointestinal and absorption screen.", importance: "Detects bacterial infections, internal bleeding, and liver function to address chronic acidity, indigestion, or IBS symptoms.", params: "Stool Routine, Stool Occult Blood, H. Pylori IgG, LFT, CBC, Vitamin B12", category: { package: 'LifeStyle', condition: 'Gut Health' } },
    { id: 'p-20', name: "Diabetes Comprehensive Package", mrp: "3,467", price: "2,600", isPackage: true, desc: "In-depth diabetic and metabolic tracking.", importance: "Extensive monitoring for diabetics to prevent kidney, heart, and nerve complications.", params: "FBS, PPBS, HbA1c, Insulin Fasting, C-Peptide, Microalbuminuria, Lipid Profile, Creatinine", category: { package: 'LifeStyle', condition: 'Diabetes' } }
];

// =====================================================================
// 2. STANDALONE CLINICAL INVESTIGATIONS 
// =====================================================================
let investigations = [
    // --- HEMATOLOGY & COAGULATION ---
    { id: 'i-1', name: "Complete Blood Count (CBC)", mrp: "650", price: "450", params: "Hb, WBC, Platelets, DC, Indices", category: { risk: 'General' } },
    { id: 'i-2', name: "Erythrocyte Sedimentation Rate (ESR)", mrp: "300", price: "200", params: "ESR", category: { condition: 'Fever' } },
    { id: 'i-3', name: "Blood Grouping & Rh Factor", mrp: "350", price: "250", params: "ABO, Rh Type", category: { risk: 'General' } },
    { id: 'i-4', name: "Peripheral Blood Smear", mrp: "500", price: "350", params: "Morphology Analysis", category: { risk: 'General' } },
    { id: 'i-5', name: "Reticulocyte Count", mrp: "650", price: "450", params: "Retic Count", category: { risk: 'General' } },
    { id: 'i-6', name: "Prothrombin Time (PT/INR)", mrp: "900", price: "650", params: "PT, INR", category: { risk: 'Heart' } },
    { id: 'i-7', name: "APTT", mrp: "1000", price: "750", params: "Activated Partial Thromboplastin Time", category: { risk: 'Heart' } },
    { id: 'i-8', name: "Fibrinogen", mrp: "1200", price: "850", params: "Plasma Fibrinogen", category: { risk: 'Heart' } },
    { id: 'i-9', name: "D-Dimer", mrp: "2500", price: "1800", params: "D-Dimer Quantitative", category: { risk: 'Lungs' } },
    { id: 'i-10', name: "AEC (Absolute Eosinophil Count)", mrp: "350", price: "250", params: "Eosinophil Count", category: { risk: 'Lungs' } },

    // --- DIABETES & METABOLIC ---
    { id: 'i-11', name: "Glucose Fasting (FBS)", mrp: "250", price: "150", params: "Sugar (F)", category: { risk: 'Diabetes', condition: 'Diabetes' } },
    { id: 'i-12', name: "Glucose Post Prandial (PPBS)", mrp: "250", price: "150", params: "Sugar (PP)", category: { risk: 'Diabetes', condition: 'Diabetes' } },
    { id: 'i-13', name: "Glucose Random (RBS)", mrp: "250", price: "150", params: "Sugar (Random)", category: { risk: 'Diabetes', condition: 'Diabetes' } },
    { id: 'i-14', name: "HbA1c", mrp: "850", price: "600", params: "Glycated Hemoglobin", category: { risk: 'Diabetes', condition: 'Diabetes' } },
    { id: 'i-15', name: "Insulin Fasting", mrp: "1400", price: "950", params: "Fasting Insulin", category: { risk: 'Diabetes', condition: 'Obesity' } },
    { id: 'i-16', name: "Insulin PP", mrp: "1400", price: "950", params: "Post Prandial Insulin", category: { risk: 'Diabetes', condition: 'Obesity' } },
    { id: 'i-17', name: "C-Peptide", mrp: "1800", price: "1200", params: "C-Peptide Fasting", category: { risk: 'Diabetes' } },
    { id: 'i-18', name: "Glucose Tolerance Test (GTT)", mrp: "900", price: "600", params: "GTT (3 Samples)", category: { risk: 'Diabetes' } },

    // --- CARDIAC & LIPIDS ---
    { id: 'i-19', name: "Lipid Profile", mrp: "1200", price: "850", params: "Cholesterol, Triglycerides, HDL, LDL, VLDL", category: { risk: 'Heart', condition: 'Cardiovascular' } },
    { id: 'i-20', name: "Cholesterol (Total)", mrp: "350", price: "250", params: "Total Cholesterol", category: { risk: 'Heart' } },
    { id: 'i-21', name: "Triglycerides", mrp: "500", price: "350", params: "Serum Triglycerides", category: { risk: 'Heart' } },
    { id: 'i-22', name: "CRP (High Sensitivity)", mrp: "1400", price: "950", params: "hs-CRP", category: { risk: 'Heart', condition: 'Cardiovascular' } },
    { id: 'i-23', name: "Troponin I", mrp: "2500", price: "1800", params: "hs-Troponin I", category: { risk: 'Heart' } },
    { id: 'i-24', name: "Troponin T", mrp: "2500", price: "1800", params: "hs-Troponin T", category: { risk: 'Heart' } },
    { id: 'i-25', name: "CPK Total", mrp: "950", price: "650", params: "Creatine Phosphokinase", category: { risk: 'Heart' } },
    { id: 'i-26', name: "CPK-MB", mrp: "1200", price: "850", params: "CPK-MB Isoenzyme", category: { risk: 'Heart' } },
    { id: 'i-27', name: "Homocysteine", mrp: "2200", price: "1500", params: "Homocysteine Levels", category: { risk: 'Heart' } },

    // --- LIVER FUNCTION (HEPATIC) ---
    { id: 'i-28', name: "Liver Function Test (LFT)", mrp: "1400", price: "950", params: "SGOT, SGPT, Bilirubin, ALP, Proteins", category: { risk: 'Liver', condition: 'Gut Health' } },
    { id: 'i-29', name: "Bilirubin Total & Direct", mrp: "500", price: "350", params: "Total, Direct, Indirect Bilirubin", category: { risk: 'Liver' } },
    { id: 'i-30', name: "SGOT (AST)", mrp: "350", price: "250", params: "AST", category: { risk: 'Liver' } },
    { id: 'i-31', name: "SGPT (ALT)", mrp: "350", price: "250", params: "ALT", category: { risk: 'Liver' } },
    { id: 'i-32', name: "Alkaline Phosphatase (ALP)", mrp: "450", price: "300", params: "Serum ALP", category: { risk: 'Liver' } },
    { id: 'i-33', name: "GGT", mrp: "800", price: "550", params: "Gamma GT", category: { risk: 'Liver', condition: 'Alcohol' } },
    { id: 'i-34', name: "Total Protein & A/G Ratio", mrp: "500", price: "350", params: "Protein, Albumin, Globulin", category: { risk: 'Liver', condition: 'Nutrition' } },

    // --- RENAL FUNCTION (KIDNEY) & ELECTROLYTES ---
    { id: 'i-35', name: "Renal Function Test (RFT)", mrp: "1400", price: "950", params: "Creatinine, Urea, Uric Acid, BUN, Electrolytes", category: { risk: 'Kidney', condition: 'Hypertension' } },
    { id: 'i-36', name: "Serum Creatinine", mrp: "350", price: "250", params: "Creatinine", category: { risk: 'Kidney' } },
    { id: 'i-37', name: "Blood Urea Nitrogen (BUN)", mrp: "450", price: "300", params: "BUN", category: { risk: 'Kidney' } },
    { id: 'i-38', name: "Uric Acid", mrp: "350", price: "250", params: "Uric Acid", category: { risk: 'Kidney' } },
    { id: 'i-39', name: "Serum Electrolytes", mrp: "900", price: "650", params: "Sodium, Potassium, Chloride", category: { risk: 'Kidney' } },
    { id: 'i-40', name: "Calcium (Total)", mrp: "450", price: "300", params: "Serum Calcium", category: { condition: 'Bone Health' } },
    { id: 'i-41', name: "Phosphorus", mrp: "450", price: "300", params: "Inorganic Phosphorus", category: { condition: 'Bone Health' } },
    { id: 'i-42', name: "Magnesium", mrp: "800", price: "550", params: "Serum Magnesium", category: { risk: 'Kidney' } },
    { id: 'i-43', name: "Creatinine Clearance", mrp: "1800", price: "1200", params: "Blood & 24H Urine Creatinine", category: { risk: 'Kidney' } },

    // --- THYROID & ENDOCRINOLOGY ---
    { id: 'i-44', name: "Thyroid Profile (Total)", mrp: "1100", price: "750", params: "T3, T4, TSH", category: { risk: 'Thyroid' } },
    { id: 'i-45', name: "Thyroid Profile (Free)", mrp: "1600", price: "1100", params: "FT3, FT4, TSH", category: { risk: 'Thyroid' } },
    { id: 'i-46', name: "TSH (Ultrasensitive)", mrp: "650", price: "450", params: "Thyroid Stimulating Hormone", category: { risk: 'Thyroid' } },
    { id: 'i-47', name: "Anti-TPO Antibodies", mrp: "2400", price: "1600", params: "Microsomal Antibody", category: { risk: 'Thyroid' } },
    { id: 'i-48', name: "Anti-Thyroglobulin (Anti-Tg)", mrp: "2400", price: "1600", params: "Anti-Tg", category: { risk: 'Thyroid' } },
    { id: 'i-49', name: "Prolactin", mrp: "1100", price: "750", params: "Serum Prolactin", category: { risk: 'Infertility', condition: 'Sexual Wellness' } },
    { id: 'i-50', name: "FSH", mrp: "1000", price: "700", params: "Follicle Stimulating Hormone", category: { risk: 'Infertility' } },
    { id: 'i-51', name: "LH", mrp: "1000", price: "700", params: "Luteinizing Hormone", category: { risk: 'Infertility' } },
    { id: 'i-52', name: "Testosterone (Total)", mrp: "1400", price: "950", params: "Total Testosterone", category: { risk: 'Infertility', condition: 'Sexual Wellness' } },
    { id: 'i-53', name: "Testosterone (Free)", mrp: "2000", price: "1400", params: "Free Testosterone", category: { risk: 'Infertility' } },
    { id: 'i-54', name: "Cortisol (Morning)", mrp: "1200", price: "850", params: "8 AM Cortisol", category: { condition: 'Sleep Disorder' } },
    { id: 'i-55', name: "Cortisol (Evening)", mrp: "1200", price: "850", params: "4 PM Cortisol", category: { condition: 'Sleep Disorder' } },
    { id: 'i-56', name: "Beta HCG (Quantitative)", mrp: "1400", price: "950", params: "Serum Beta HCG", category: { risk: 'General' } },

    // --- VITAMINS & NUTRITION ---
    { id: 'i-57', name: "Vitamin D (25-Hydroxy)", mrp: "2200", price: "1450", params: "25-OH Vitamin D", category: { condition: 'Bone Health' } },
    { id: 'i-58', name: "Vitamin B12", mrp: "1800", price: "1200", params: "Cyanocobalamin", category: { condition: 'Nutrition' } },
    { id: 'i-59', name: "Vitamin B9 (Folic Acid)", mrp: "1800", price: "1200", params: "Folate Levels", category: { condition: 'Nutrition' } },
    { id: 'i-60', name: "Iron Profile", mrp: "1600", price: "1100", params: "Iron, TIBC, UIBC, Transferrin Saturation", category: { condition: 'Nutrition' } },
    { id: 'i-61', name: "Ferritin", mrp: "1200", price: "850", params: "Serum Ferritin", category: { condition: 'Nutrition' } },
    { id: 'i-62', name: "Transferrin", mrp: "1400", price: "950", params: "Serum Transferrin", category: { condition: 'Nutrition' } },

    // --- IMMUNOLOGY, ARTHRITIS & INFLAMMATION ---
    { id: 'i-63', name: "CRP (Standard)", mrp: "800", price: "550", params: "C-Reactive Protein", category: { condition: 'Fever' } },
    { id: 'i-64', name: "RA Factor (Quantitative)", mrp: "900", price: "650", params: "Rheumatoid Factor", category: { condition: 'Bone Health' } },
    { id: 'i-65', name: "Anti-CCP", mrp: "2200", price: "1500", params: "Cyclic Citrullinated Peptide", category: { condition: 'Bone Health' } },
    { id: 'i-66', name: "ANA (Anti-Nuclear Antibody)", mrp: "1600", price: "1100", params: "ANA IFA Method", category: { risk: 'General' } },
    { id: 'i-67', name: "ANA Profile (Immunoblot)", mrp: "5000", price: "3500", params: "17 Antigen Panel", category: { risk: 'General' } },
    { id: 'i-68', name: "ASO Titre", mrp: "900", price: "650", params: "Anti-Streptolysin O", category: { risk: 'Heart' } },
    { id: 'i-69', name: "HLA-B27", mrp: "2800", price: "1800", params: "HLA-B27 Antigen", category: { condition: 'Bone Health' } },

    // --- INFECTIOUS DISEASES & SEROLOGY ---
    { id: 'i-70', name: "Dengue NS1 Antigen", mrp: "1200", price: "850", params: "NS1 Ag", category: { condition: 'Fever' } },
    { id: 'i-71', name: "Dengue IgM/IgG Antibodies", mrp: "1600", price: "1100", params: "Dengue Serology", category: { condition: 'Fever' } },
    { id: 'i-72', name: "Malaria Antigen (Rapid)", mrp: "600", price: "400", params: "Pf/Pv Antigen", category: { condition: 'Fever' } },
    { id: 'i-73', name: "Widal Test", mrp: "500", price: "350", params: "Typhoid Screen", category: { condition: 'Fever' } },
    { id: 'i-74', name: "Typhidot (IgM/IgG)", mrp: "950", price: "650", params: "Salmonella Antibodies", category: { condition: 'Fever' } },
    { id: 'i-75', name: "HBsAg (Hepatitis B)", mrp: "650", price: "450", params: "Hepatitis B Surface Antigen", category: { risk: 'Liver' } },
    { id: 'i-76', name: "Anti-HCV (Hepatitis C)", mrp: "1200", price: "850", params: "HCV Antibodies", category: { risk: 'Liver' } },
    { id: 'i-77', name: "HIV 1&2 Antibody", mrp: "950", price: "650", params: "4th Generation Screen", category: { condition: 'Sexual Wellness' } },
    { id: 'i-78', name: "VDRL / RPR", mrp: "500", price: "350", params: "Syphilis Screen", category: { condition: 'Sexual Wellness' } },
    { id: 'i-79', name: "H. Pylori IgG", mrp: "1400", price: "950", params: "Helicobacter Pylori Ab", category: { condition: 'Gut Health' } },
    { id: 'i-80', name: "Mantoux Test", mrp: "500", price: "350", params: "TB Skin Test (Requires 48H reading)", category: { risk: 'Lungs' } },
    { id: 'i-81', name: "Chikungunya IgM", mrp: "1400", price: "950", params: "Chikungunya Antibodies", category: { condition: 'Fever' } },
    { id: 'i-82', name: "Leptospira IgM", mrp: "1200", price: "850", params: "Leptospirosis Screen", category: { condition: 'Fever' } },
    { id: 'i-83', name: "Microfilaria Screen", mrp: "650", price: "450", params: "Filaria Smear (Night Sample)", category: { condition: 'Fever' } },

    // --- ONCOLOGY (TUMOR MARKERS) ---
    { id: 'i-84', name: "PSA Total", mrp: "1800", price: "1200", params: "Prostate Antigen", category: { risk: 'Cancer' } },
    { id: 'i-85', name: "CEA", mrp: "1600", price: "1100", params: "Carcinoembryonic Antigen", category: { risk: 'Cancer', condition: 'Gut Health' } },
    { id: 'i-86', name: "CA-125", mrp: "2200", price: "1450", params: "Ovarian Cancer Marker", category: { risk: 'Cancer' } },
    { id: 'i-87', name: "CA-15.3", mrp: "2200", price: "1450", params: "Breast Cancer Marker", category: { risk: 'Cancer' } },
    { id: 'i-88', name: "CA-19.9", mrp: "2200", price: "1450", params: "Pancreatic Cancer Marker", category: { risk: 'Cancer', condition: 'Gut Health' } },
    { id: 'i-89', name: "Alpha Fetoprotein (AFP)", mrp: "1600", price: "1100", params: "Liver/Germ Cell Marker", category: { risk: 'Cancer', risk: 'Liver' } },

    // --- CLINICAL PATHOLOGY (URINE & STOOL) ---
    { id: 'i-90', name: "Urine Routine & Microscopic", mrp: "350", price: "250", params: "Physical, Chemical & Microscopic Exam", category: { risk: 'Kidney' } },
    { id: 'i-91', name: "Urine Microalbumin", mrp: "1100", price: "750", params: "ACR Ratio", category: { risk: 'Kidney', condition: 'Hypertension' } },
    { id: 'i-92', name: "24-Hour Urine Protein", mrp: "1200", price: "850", params: "Total Protein Excretion", category: { risk: 'Kidney' } },
    { id: 'i-93', name: "Urine Culture & Sensitivity", mrp: "1200", price: "850", params: "Bacterial Culture", category: { risk: 'Kidney' } },
    { id: 'i-94', name: "Stool Routine", mrp: "350", price: "250", params: "Ova, Cyst, Microscopy", category: { condition: 'Gut Health' } },
    { id: 'i-95', name: "Stool Occult Blood", mrp: "500", price: "350", params: "Hidden Blood Detection", category: { condition: 'Gut Health' } },
    { id: 'i-96', name: "Stool Hanging Drop", mrp: "500", price: "350", params: "Cholera Screen", category: { condition: 'Gut Health' } },
    { id: 'i-97', name: "Semen Analysis", mrp: "1200", price: "850", params: "Count, Motility, Morphology", category: { risk: 'Infertility', condition: 'Sexual Wellness' } },

    // --- SPECIALIZED BIOCHEMISTRY & DRUGS ---
    { id: 'i-98', name: "Amylase", mrp: "1100", price: "750", params: "Serum Amylase", category: { condition: 'Gut Health' } },
    { id: 'i-99', name: "Lipase", mrp: "1400", price: "950", params: "Serum Lipase", category: { condition: 'Gut Health' } },
    { id: 'i-100', name: "LDH (Lactate Dehydrogenase)", mrp: "950", price: "650", params: "Total LDH", category: { risk: 'Lungs' } },
    { id: 'i-101', name: "G6PD", mrp: "1200", price: "850", params: "Glucose-6-Phosphate Dehydrogenase", category: { risk: 'General' } },
    { id: 'i-102', name: "Serum Copper", mrp: "1800", price: "1200", params: "Copper Levels", category: { risk: 'General' } },
    { id: 'i-103', name: "Serum Zinc", mrp: "1800", price: "1200", params: "Zinc Levels", category: { risk: 'General' } },
    { id: 'i-104', name: "Ceruloplasmin", mrp: "2200", price: "1500", params: "Wilson's Disease Screen", category: { risk: 'Liver' } },
    { id: 'i-105', name: "Phenytoin Level", mrp: "1800", price: "1200", params: "Drug Monitoring", category: { risk: 'General' } },
    { id: 'i-106', name: "Valproic Acid Level", mrp: "1800", price: "1200", params: "Drug Monitoring", category: { risk: 'General' } },
    { id: 'i-107', name: "Lithium Level", mrp: "1200", price: "850", params: "Drug Monitoring", category: { risk: 'General' } },
    { id: 'i-108', name: "Digoxin Level", mrp: "2500", price: "1800", params: "Drug Monitoring", category: { risk: 'Heart' } },

    // --- MEN'S HEALTH INVESTIGATIONS (BY AGE) ---
    { id: 'i-113', name: "Dihydrotestosterone (DHT)", mrp: "2500", price: "1800", params: "Active Testosterone Metabolite", category: { risk: 'General', age: 'Under 30', gender: 'Men' } },
    { id: 'i-112', name: "DHEAS", mrp: "1600", price: "1150", params: "Dehydroepiandrosterone Sulfate", category: { condition: 'Sexual Wellness', age: '30-45', gender: 'Men' } },
    { id: 'i-114', name: "SHBG (Sex Hormone Binding Globulin)", mrp: "1800", price: "1350", params: "Testosterone Bioavailability", category: { condition: 'Sexual Wellness', age: '30-45', gender: 'Men' } },
    { id: 'i-111', name: "PSA Free", mrp: "1400", price: "950", params: "Free Prostate Specific Antigen", category: { risk: 'Cancer', age: '45-60', gender: 'Men' } },
    { id: 'i-115', name: "NT-proBNP", mrp: "2800", price: "2100", params: "Heart Failure Risk Marker", category: { risk: 'Heart', age: '45-60', gender: 'Men' } },
    { id: 'i-116', name: "ApoA1 / ApoB Ratio", mrp: "1500", price: "1100", params: "Advanced Cardiac Risk", category: { risk: 'Heart', age: 'Above 60', gender: 'Men' } },

    // --- WOMEN'S HEALTH INVESTIGATIONS (BY AGE) ---
    { id: 'i-117', name: "Rubella IgG", mrp: "800", price: "550", params: "Pre-pregnancy Immunity Screen", category: { condition: 'Sexual Wellness', age: 'Under 30', gender: 'Women' } },
    { id: 'i-109', name: "AMH (Anti-Mullerian Hormone)", mrp: "2000", price: "1500", params: "Ovarian Reserve Marker", category: { risk: 'Infertility', age: '30-45', gender: 'Women' } },
    { id: 'i-118', name: "Progesterone", mrp: "1100", price: "800", params: "Ovulation Marker", category: { risk: 'Infertility', age: '30-45', gender: 'Women' } },
    { id: 'i-110', name: "Estradiol (E2)", mrp: "1200", price: "850", params: "Estrogen Hormone Level", category: { condition: 'Sexual Wellness', age: '45-60', gender: 'Women' } },
    { id: 'i-119', name: "Beta CrossLaps (CTX-1)", mrp: "2500", price: "1900", params: "Bone Resorption/Menopause Marker", category: { condition: 'Bone Health', age: '45-60', gender: 'Women' } },
    { id: 'i-120', name: "Intact PTH (Parathyroid Hormone)", mrp: "1600", price: "1200", params: "Calcium Regulation & Bone Loss", category: { condition: 'Bone Health', age: 'Above 60', gender: 'Women' } },

    // --- NEW: SPECIALIZED & RARE INVESTIGATIONS (APOLLO-INSPIRED) ---
    { id: 'i-121', name: "HIAA Quantitative (5-HIAA)", mrp: "3500", price: "2800", params: "Serotonin Metabolite Test", category: { risk: 'Cancer' } },
    { id: 'i-122', name: "24 HOURS Urinary Copper", mrp: "1800", price: "1400", params: "Urine Copper Levels", category: { risk: 'Liver' } },
    { id: 'i-123', name: "24 Hour Urinary Catecholamines", mrp: "4000", price: "3200", params: "Epinephrine, Norepinephrine, Dopamine", category: { risk: 'Heart', condition: 'Hypertension' } },
    { id: 'i-124', name: "Acetyl Choline Receptor (AChR) Antibody", mrp: "4500", price: "3600", params: "Myasthenia Gravis Screen", category: { risk: 'General' } },
    { id: 'i-125', name: "Aldolase", mrp: "1500", price: "1200", params: "Muscle Breakdown Marker", category: { risk: 'General' } },
    { id: 'i-126', name: "Aldosterone Test", mrp: "2500", price: "1900", params: "Adrenal Hormone Level", category: { risk: 'Kidney', condition: 'Hypertension' } },
    { id: 'i-127', name: "17-hydroxyprogesterone (17 OHPG)", mrp: "2200", price: "1700", params: "Adrenal Enzyme Screen", category: { risk: 'General' } },
    { id: 'i-128', name: "Acetone / Ketone (Urine)", mrp: "300", price: "200", params: "Diabetic Ketoacidosis Screen", category: { risk: 'Diabetes' } },
    { id: 'i-129', name: "Alpha-1 Antitrypsin (A1AT)", mrp: "2000", price: "1500", params: "Liver and Lung Protein Screen", category: { risk: 'Lungs' } },
    { id: 'i-130', name: "Acid Fast Bacilli (AFB) Culture", mrp: "1200", price: "900", params: "Tuberculosis Screen", category: { risk: 'Lungs' } },
    { id: 'i-131', name: "Aluminium Test", mrp: "2500", price: "1800", params: "Heavy Metal Toxicity", category: { risk: 'General' } }
];

// =====================================================================
// 3. STRATEGIC ROADMAP GOALS
// =====================================================================
const roadmapGoals = [
    { year: "2026", title: "Foundation of Winpath", desc: "Established Winpath Diagnostics with a vision for delivering precision pathology directly to patients.", status: "completed" },
    { year: "2026", title: "NABL M(EL)T Labs Accreditation", desc: "Achieved strict global quality standards, ensuring flawless precision in all our clinical reporting.", status: "upcoming" },
    { year: "2026", title: "Digital Integration", desc: "Launched seamless WhatsApp bookings, at-home collections, and rapid 24H digital report delivery.", status: "upcoming" },
];
