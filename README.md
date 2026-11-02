# Paramedic Pocket v0.7.1 — Knowledge Base (Upload-Friendly)

This release keeps the v0.7 Knowledge Base content but changes storage from **one JSON per lesson** to **one JSON per category**.

## Why
GitHub web upload warns when uploading 100+ files. v0.7 had 105 lesson JSON files. v0.7.1 reduces the project to well under 100 files so the whole folder can be uploaded in one GitHub web upload.

## Knowledge architecture
- `data/knowledge/index.json` — lightweight catalog
- `data/knowledge/research.json` — evidence feed
- `data/knowledge/packs/*.json` — one pack per category (17 packs)
- category packs load on demand and are cached after use
- `Download Offline` fetches the category pack + its visual assets

## Content
All 105 lessons from v0.7 are retained. Smart Patient Context remains removed.
