# Paramedic Pocket v0.4

Mobile-first offline PWA for paramedic / EMS workflows.

## v0.4 highlights
- Added real algorithm images for adult cardiac arrest, pediatric cardiac arrest, and neonatal resuscitation
- Added split **PALS / NEONATE** calculator page
- On calculator page, entering **age or weight** computes **ETT + core medication doses together**
- Added external knowledge links: LITFL ECG, Medscape Emergency Medicine, ER goldbook
- Updated sources registry and offline cache to include algorithm image assets

## Safety model
This app is a clinical decision-support aid, not a substitute for local EMS protocol, medical direction, clinical judgment, or device/manufacturer instructions. When actual weight is unavailable, estimated-weight calculations are clearly labeled and must be double-checked before medication administration.

## Deploy
Static PWA: upload this folder or ZIP to GitHub Pages, Vercel, Netlify, or any static host. No build command required. Ensure `index.html` is at project root.
