import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { keycloakify } from "keycloakify/vite-plugin";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        svgr({
            svgrOptions: {
                exportType: "default"
            },
            include: "**/*.svg?react"
        }),
        keycloakify({
            accountThemeImplementation: "none"
        })
    ]
});
