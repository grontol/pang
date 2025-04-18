import path from "path"
import { defineConfig } from 'vite'
import checker from "vite-plugin-checker"
import { transformJsxPlugin } from "./src/lib/pang/jsx-transform.js"

export default defineConfig({
    root: "./",
    build: {
        outDir: "./build"
    },
    plugins: [
        checker({
            typescript: true,
        }),
        transformJsxPlugin(),
    ],
    resolve: {
        alias: {
            '@pang': path.resolve(__dirname, 'src/lib/pang'),
            '@': path.resolve(__dirname, 'src'),
        }
    }
})