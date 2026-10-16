import { getCollection } from "astro:content";
import { pages } from "../data/pages";
export async function GET() {
  const articles = await getCollection("articles", (a) => !a.data.draft);
  return new Response(
    JSON.stringify([
      {
        title: "机场推荐与 VPN 选择指南",
        url: "/",
        description: "从需求开始选择连接服务",
      },
      ...pages
        .filter((p) => !p.noindex)
        .map((p) => ({
          title: p.title,
          url: `/${p.path}/`,
          description: p.description,
        })),
      ...articles.map((a) => ({
        title: a.data.title,
        url: `/${a.data.section}/${a.data.slug}/`,
        description: a.data.description,
      })),
    ]),
    { headers: { "Content-Type": "application/json; charset=utf-8" } },
  );
}
