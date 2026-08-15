import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.tagline}`,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#07130f",
    theme_color: "#07130f",
    icons: [
      {
        src: "/app-icon.png",
        sizes: "1024x1024",
        type: "image/png"
      }
    ]
  };
}
