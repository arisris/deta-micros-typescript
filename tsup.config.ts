import { config } from "dotenv";
import { defineConfig } from "tsup";
import path from "path";
import { execa } from "execa";
import { readFile, writeFile } from "fs/promises";

const microsPath = path.join(__dirname, "micros"),
  serverDistPath = path.join(microsPath, "server"),
  publicDistPath = path.join(microsPath, "public"),
  publicPath = path.join(__dirname, "public");

config();
export default defineConfig(async ({ platform, watch, ...options }) => {
  const isNode = platform === "node";
  if (!watch) {
    const json = JSON.parse(await readFile("./package.json", "utf-8"));
    await writeFile(
      path.join(microsPath, "package.json"),
      JSON.stringify({ main: "index.js", dependencies: json.dependencies })
    );
    await execa("rm", ["-rf", publicDistPath]);
    await execa("cp", ["-r", publicPath, publicDistPath]);
  } else {
    await execa("rm", ["-rf", publicDistPath]);
    await execa("ln", ["-s", publicPath, publicDistPath]);
  }

  // bundler
  return {
    entry: ["src/index.ts"],
    format: [isNode ? "cjs" : "esm"],
    outDir: isNode ? serverDistPath : path.join(microsPath, "_bundle"),
    target: isNode ? "node14" : "esnext",
    minify: !watch,
    watch,
    platform,
    async onSuccess() {
      if (watch && isNode) {
        const proc = execa("node", ["."], {
          cwd: microsPath,
          env: process.env,
        });
        proc.stdout?.pipe(process.stdout);
        return () => {
          proc.kill();
        };
      }
    },
  };
});
