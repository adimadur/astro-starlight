// This is Starlight's configuration file (also the main entry point of the app)
// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: "https://docs.codepup.ai",
    integrations: [
        starlight({
            title: "CodePup AI",
            description:
                "Official documentation for CodePup AI — build production-ready websites in minutes.",
            favicon: "/favicon.ico",
            social: [
                // Discord
                {
                    icon: "discord",
                    label: "Discord",
                    href: "https://discord.gg/YgV5zCryd9",
                },
                // Twitter
                {
                    icon: "twitter",
                    label: "Twitter",
                    href: "https://x.com/Codepupai",
                },
                // LinkedIn
                {
                    icon: "linkedin",
                    label: "LinkedIn",
                    href: "https://linkedin.com/company/codepup",
                },
                // Instagram
                {
                    icon: "instagram",
                    label: "Instagram",
                    href: "https://instagram.com/codepupai",
                },
            ],
            sidebar: [
                {
                    label: "Guides",
                    autogenerate: { directory: "" },
                },
            ],
            // Import of Tailwind CSS globally
            customCss: ["./src/styles/global.css"],

            // Disable the right fast navigation part (also known as Table of Contents)
            tableOfContents: false,
        }),
    ],
    vite: {
        // @ts-ignore
        plugins: [tailwindcss()],
    },
});
