#!/usr/bin/env node
/**
 * Baixa os logos usados no site para public/icons/, para o site não depender
 * de CDN em runtime. Rodar uma vez: `node scripts/fetch-icons.mjs`
 *
 * Simple Icons não distribui LinkedIn nem logos da Microsoft — esses vêm do
 * Iconify, que serve SVG por HTTP na mesma pasta.
 */

import { mkdir, writeFile } from "node:fs/promises";

const OUT = "public/icons";

const SIMPLE = [
  "typescript", "javascript", "python", "openjdk", "html5", "css", "gnubash",
  "nextdotjs", "react", "electron", "tailwindcss", "framer",
  "nodedotjs", "postgresql",
  "docker", "kubernetes", "redhatopenshift", "helm",
  "gitlab", "jenkins", "githubactions", "argo",
  "linux", "vault", "ansible", "git", "github", "vercel",
  "discord",
];

// slug local -> id do Iconify
const ICONIFY = {
  linkedin: "logos:linkedin-icon",
  powershell: "vscode-icons:file-type-powershell",
  windows: "logos:microsoft-windows-icon",
};

// no botão lima o ícone precisa ser escuro: cor fixa, fora da lista padrão
const COLORED = { whatsapp: "0b0b0a" };

async function save(name, url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${name}: HTTP ${res.status}`);
  await writeFile(`${OUT}/${name}.svg`, await res.text(), "utf8");
  console.log("✓", name);
}

await mkdir(OUT, { recursive: true });

for (const slug of SIMPLE) {
  await save(slug, `https://cdn.simpleicons.org/${slug}`);
}
for (const [slug, color] of Object.entries(COLORED)) {
  await save(slug, `https://cdn.simpleicons.org/${slug}/${color}`);
}
for (const [name, id] of Object.entries(ICONIFY)) {
  const [prefix, icon] = id.split(":");
  await save(name, `https://api.iconify.design/${prefix}/${icon}.svg`);
}

console.log(`\n${SIMPLE.length + Object.keys(COLORED).length + Object.keys(ICONIFY).length} ícones em ${OUT}/`);
console.log("Logos pretos (nextdotjs, github, vercel) precisam de filter:invert(1) no dark.");
