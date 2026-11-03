# Paramedic Pocket v1.0 — Field Edition

แอป PWA ภาษาไทยสำหรับใช้งานหน้างานโดย Paramedic/EMS แยกออกจากแอป Knowledge โดยตั้งใจให้ **เร็ว เบา และเปิด offline ได้**

## จุดหลัก
- Emergency workflows: Adult/PALS/Neonatal arrest, brady/tachy, ACS, anaphylaxis, asthma, seizure, hypoglycemia, opioid, hyperkalemia, trauma, PPH/eclampsia, shock
- Drug administration library: dose, route, วิธีให้, maximum/limits, monitoring, cautions, current-vs-local-review badge
- Field calculators: Dose→Volume, infusion rate, MAP, Shock Index, GCS, QTc, Anion Gap, Corrected Na, Osmolality, PBW/VT, Burn/Parkland, APGAR, PALS, Neonate, Defib/Cardioversion, NEXUS, CPR timer
- EMS tools: MIST, SBAR, XABCDE, BE-FAST, ETT confirmation, DOPE
- Thai-first UI
- Core app cached offline

## Medication safety
แอปนี้เป็น clinical decision-support ไม่ใช่ replacement for local protocol/medical direction. รายการที่ติด `LOCAL REVIEW` หรือ `CHECK PROTOCOL` ห้ามนำไปใช้โดยไม่ยืนยัน concentration, formulation, route, indication และ scope ของหน่วยงาน.

## Deploy to GitHub Pages
อัปทุกไฟล์ในโฟลเดอร์นี้ไปที่ root ของ repo `paramedic-pocket` แล้วตั้ง Pages: `main` / `(root)`. จำนวนไฟล์ต่ำกว่า 100 จึงอัปผ่าน GitHub web ได้ในครั้งเดียว.
