import { mkdir } from "node:fs/promises";
import sharp from "sharp";

// The portrait is displayed at 52px; keep enough detail for 3x displays.
await mkdir("public/images", { recursive: true });
await sharp("assets/profile.jpg")
  .resize({ width: 156, withoutEnlargement: true })
  .webp({ quality: 90 })
  .toFile("public/images/profile.webp");

// Search engines can use a larger portrait without adding to the page download.
await sharp("assets/profile.jpg")
  .resize({ width: 512, withoutEnlargement: true })
  .webp({ quality: 90 })
  .toFile("public/images/profile-social.webp");
