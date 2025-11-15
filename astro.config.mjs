// This is Starlight's configuration file (also the main entry point of the app)
// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import starlightThemeNova from 'starlight-theme-nova'
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: "https://docs.codepup.ai",
    integrations: [
        react(),
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
            plugins: [
                starlightThemeNova({
                    nav: [
                        
                    ]
                }),
            ],
            sidebar: [
                // {
                //     label: "Testing",
                //     items: [
                //         { label: "Testing", link: "/testing/testing/" },
                //     ],
                // },
                {
                    label: "Introduction",
                    items: [
                        { label: "Welcome", link: "/introduction/welcome/" },
                        { label: "Plans and credits", link: "/introduction/plans-and-credits/" },
                        { label: "FAQ", link: "/introduction/faq/" },
                    ],
                },
                {
                    label: "Release Log",
                    collapsed: true,
                    items: [
                        { label: "Version Control", link: "/release-log/version-control/", badge: { text: "NEW", variant: "success" } },
                        { label: "Publish", link: "/release-log/publish/" },
                        { label: "Export to GitHub", link: "/release-log/export-to-github/" },
                        { label: "Supabase Integration", link: "/release-log/supabase-integration/" },
                    ],
                },
                {
                    label: "Integration",
                    items: [
                        { label: "GitHub Integration", link: "/integration/github-integration/" },
                        { label: "Supabase Integration", link: "/integration/supabase-integration/" },
                        { label: "Resend Integration", link: "/integration/resend-integration/" },
                        { label: "UI Component Integration", link: "/integration/ui-component-integration/" },
                        { label: "Stripe Integration", link: "/integration/stripe-integration/" },
                    ],
                }
            ],
            // Import of Tailwind CSS globally
            customCss: ["./src/styles/custom.css"],

            // Disable the right fast navigation part (also known as Table of Contents)
            // tableOfContents: false,
        }),
    ],
    vite: {
        // @ts-ignore
        plugins: [tailwindcss()],
    },
});
