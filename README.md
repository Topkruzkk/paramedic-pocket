# Paramedic Pocket v0.3

Mobile-first offline PWA for paramedic / EMS workflows.

## v0.3 highlights
- Visual algorithm cards for adult and pediatric cardiac arrest
- Pediatric ETT estimator (cuffed / uncuffed / estimated oral depth)
- Common pediatric dose calculator with clear split between VERIFIED CURRENT and NEEDS LOCAL REVIEW
- Drug page now includes pediatric quick doses plus the universal Dose → Volume calculator
- Adult and pediatric arrest pages remain linked to CPR timer and source registry
- Search, favorites, session-only patient context, offline caching, dark/light mode

## Safety model
This app is a clinical decision-support aid, not a substitute for local EMS protocol, medical direction, clinical judgment, or device/manufacturer instructions. Sections marked NEEDS LOCAL REVIEW are intentionally separated from current verified content.

## Deploy
Static PWA: upload this folder or ZIP to Vercel Drop / Netlify / any static host. No build command required. Ensure `index.html` is at project root.
