# Paramedic Pocket v0.6

Mobile-first offline PWA for paramedic / EMS clinical tools and learning.

## v0.6 highlights
- New **Learning Hub** with 5 categories and 13 synthesized lessons
- Categories: Cardiology & ECG, Airway & Respiratory, PALS, Neonatal/NRP, Trauma
- Every lesson includes Key Concepts, Quick Review, Mini Quiz, Sources and Clinical Integration buttons
- Local progress tracking in browser (`localStorage`)
- Smart Patient Context expanded to Adult/Pediatric/Neonate + Age/GA + Weight
- PALS and NEONATE calculators reuse Smart Patient Context
- Drug Tools moved into Quick Tools; bottom navigation now gives Learning a dedicated tab
- Learning content synthesizes current primary guidelines, local OneDrive teaching material, LITFL, ER goldbook and other educational sources without copying full source text
- Existing v0.5 clinical algorithms/calculators remain available

## Safety model
Learning material is educational synthesis. Clinical care must follow current guidelines, local EMS protocol/medical direction, clinical judgment, and medication/device double-checks.

## Deploy
Static PWA: upload all files/folders to the repository root used by GitHub Pages. No build command required.
