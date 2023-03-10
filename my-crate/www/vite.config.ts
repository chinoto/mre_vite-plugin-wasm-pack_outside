import { defineConfig } from "vite";
import wasmPack from "vite-plugin-wasm-pack";
import path from "node:path";

export default defineConfig({
  build: {
    minify: false,
  },
  plugins: [wasmPack([path.resolve("../")])],
});
