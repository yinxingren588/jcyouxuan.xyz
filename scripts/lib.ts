import fs from "node:fs";
import path from "node:path";
import { load } from "cheerio";
export const domain = "https://jcyouxuan.xyz";
export function files(dir: string): string[] {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((e) =>
      e.isDirectory()
        ? files(path.join(dir, e.name))
        : [path.join(dir, e.name)],
    );
}
export function documents() {
  return files("dist")
    .filter((f) => f.endsWith(".html") && path.basename(f) !== "404.html")
    .map((file) => ({
      file,
      url:
        "/" +
        path
          .relative("dist", file)
          .replaceAll("\\", "/")
          .replace(/index\.html$/, ""),
      $: load(fs.readFileSync(file, "utf8")),
    }));
}
export function save(name: string, result: unknown) {
  fs.mkdirSync("docs/qa", { recursive: true });
  fs.writeFileSync(`docs/qa/${name}.json`, JSON.stringify(result, null, 2));
}
export function finish(name: string, errors: string[], checks: number) {
  const result = { status: errors.length ? "FAIL" : "PASS", checks, errors };
  save(name, result);
  console.log(name, JSON.stringify(result));
  if (errors.length) process.exitCode = 1;
}
