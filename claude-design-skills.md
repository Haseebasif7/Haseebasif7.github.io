# Claude Design Skills

Skill files and resources to elevate frontend, portfolio, and artifact design output. Official Anthropic skills first, then community collections and directories.

## Official Anthropic skills

- [frontend-design](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md) — The core one. Forces a real aesthetic direction instead of the Inter + purple gradient + rounded card default. Install this first.
- [theme-factory](https://github.com/anthropics/skills/blob/main/skills/theme-factory/SKILL.md) — 10 preset color + font themes, or generates a custom one, applied consistently across any artifact.
- [web-artifacts-builder](https://github.com/anthropics/skills/blob/main/skills/web-artifacts-builder/SKILL.md) — Builds complex multi-component artifacts with React, Tailwind, and shadcn/ui; explicit anti-AI-slop rules.
- [canvas-design](https://github.com/anthropics/skills/blob/main/skills/canvas-design/SKILL.md) — Design work on a canvas: posters, layouts, visual compositions.
- [algorithmic-art](https://github.com/anthropics/skills/blob/main/skills/algorithmic-art/SKILL.md) — Generative and code-driven art for backgrounds, hero visuals, and distinctive graphics.
- [brand-guidelines](https://github.com/anthropics/skills/blob/main/skills/brand-guidelines/SKILL.md) — Applies a consistent brand system (color, type) across outputs.
- [All skills (browse the folder)](https://github.com/anthropics/skills/tree/main/skills) — Full official skill set including docx, pptx, pdf, xlsx, mcp-builder, skill-creator.

## Community collections

- [Claude-Code-Frontend-Design-Toolkit](https://github.com/wilwaldon/Claude-Code-Frontend-Design-Toolkit) — Curated skills, plugins, MCP servers, and CLAUDE.md tricks specifically for better-looking frontends.
- [claude-frontend-skills](https://github.com/Koomook/claude-frontend-skills) — Plugin built on Anthropic's frontend-design research, aimed at bold non-generic interfaces.
- [awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) — 1000+ agent skills across many categories, works with Claude, Cursor, Codex, Gemini CLI.
- [awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) — Curated list of Claude skills, resources, and workflow tools.

## Skill directories

- [claude-plugins.dev/skills](https://claude-plugins.dev/skills) — Searchable index of 48k+ skills, installable across Claude, Cursor, Codex, and more.
- [skills.sh — frontend-design](https://www.skills.sh/anthropics/skills/frontend-design) — Skill registry with the frontend-design reference and one-command install.

## Reference reading

- [Improving Frontend Design Through Skills](https://www.anthropic.com/engineering/improving-frontend-design-through-skills) — Anthropic's blog post explaining why AI design converges and how skills fix it.

## Install commands

```bash
# Single skill from the official repo
npx skills add https://github.com/anthropics/skills --skill frontend-design
npx skills add https://github.com/anthropics/skills --skill theme-factory
npx skills add https://github.com/anthropics/skills --skill web-artifacts-builder

# As a Claude Code plugin marketplace
/plugin marketplace add anthropics/skills
/plugin install example-skills@anthropic-agent-skills
```
