import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "TailorPro — Best Tailor Shop Management & Digital Measurement App",
    short_name: site.name,
    description: site.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#07130f",
    theme_color: "#07130f",
    lang: "en-IN",
    categories: ["business", "productivity", "utilities"],
    icons: [
      {
        src: "/app-icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "/app-icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any"
      }
    ],
    screenshots: [
      {
        src: "/screenshots/screenshot_1.png",
        sizes: "1080x1920",
        type: "image/png"
      },
      {
        src: "/logo-wide.png",
        sizes: "1920x600",
        type: "image/png"
      }
    ],
    related_applications: [
      {
        platform: "play",
        url: site.playStoreUrl,
        id: "com.app.tailorproo"
      }
    ],
    prefer_related_applications: false
  };
}

