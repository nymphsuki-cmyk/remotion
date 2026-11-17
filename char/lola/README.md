# Remotion Character Animation - Alya Scientist

Proyek ini adalah template animasi karakter 2D wanita ilmuwan bernama **Alya** menggunakan **Remotion** dan React, dirancang agar mudah dibaca, dikontrol, dan dimodifikasi oleh LLM / AI Studio.

## Struktur Komponen
- `src/components/ScientistAlya.tsx`: Komponen utama karakter. Menerima props:
  - `pose`: `"standing" | "waving" | "pointing" | "thinking" | "experimenting"`
  - `expression`: `"smiling" | "focused" | "surprised" | "confident"`
- `src/Root.tsx`: Pengaturan durasi video (default: 300 frame / 30 fps) dan urutan sekuens pose animasi.

## Cara Menjalankan
1. Install dependencies: `npm install`
2. Jalankan preview Remotion: `npm run dev`
3. Render video ke MP4: `npm run build`