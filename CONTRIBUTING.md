# Contributing Guide

Thank you for your interest in contributing to Octacity Docs! This project is a shared memory base for everyone building open-source software, growing through real community experience.

We treat documentation like code: reviewed, tested, and tracked in version control.

> 🌐 Bu belgenin Türkçe versiyonu için: [CONTRIBUTING_tr.md](./CONTRIBUTING_tr.md).

---

## 📌 Editorial Principles

When authoring or updating a guide, keep the following principles in mind:

1. **Turkish-First Content:** The documentation pages are written in Turkish. Technical terms like `Issue`, `Pull Request`, `repository`, `branch`, and `maintainer` should remain in English naturally without forced translation.
2. **Answer First:** Start the guide with the practical recommendation directly in the first 1–2 paragraphs. Avoid theoretical preambles (e.g. "GitHub Issues are a tool provided by...").
3. **Opinionated, Not Absolute:** It is completely fine to say *"At Octacity, we usually recommend..."*, without claiming it is the only universal truth. Explain tradeoffs and state the preferred default.
4. **Do Not Duplicate Governance:** Official organization governance, Code of Conduct policies, and binding rules live in [octacity-org/.github](https://github.com/octacity-org/.github). Always link to `.github` instead of copying policy text.
5. **Short and Focused:** Each guide should address one concrete problem. Prefer multiple focused guides over exhaustive chapters.
6. **Visuals Without Repetition:** Pick the element that fits each page's content, and never show the same information twice, as text or as a visual. Giving every page the same shape is repetition too.
   - A ` ```mermaid ` diagram only when there is an order, loop, or branch the text does not already show. Do not use it to redraw a list as boxes.
   - `<div className="steps">` only for steps whose order matters. Lists of principles or responsibilities stay plain lists.
   - A `:::tip[Kısaca]` summary only on long pages, without restating the opening answer.
   - `:::info`, `:::warning`, `:::danger` boxes hold the text; they do not repeat a sentence that is already there.
   - `comparison-grid` is for good/bad examples, tables for comparing concepts, `<Checklist>` for lists readers tick off, `<details>` for long examples, and `<Tabs>` / `<TabItem>` for alternative variants.

---

## 🔄 Contribution Workflow

1. **Suggest or Discuss:** For significant additions or structural changes, open an **Issue** first to discuss. For typo fixes and minor improvements, you can open a PR directly.
2. **Create a Branch:**
   ```bash
   git checkout -b docs/your-guide-name
   ```
3. **Make Changes:** Add or edit Markdown files under the appropriate section directory (`docs/baslangic/`, `docs/github/`, etc.).
4. **Local Verification:** Always verify before opening a PR:
   ```bash
   bun run build
   bun run typecheck
   ```
5. **Open a Pull Request:** Submit a clear, descriptive PR explaining the motivation and changes. Follow [Conventional Commits](https://www.conventionalcommits.org/) for your commit messages.

---

## 📝 Suggested Guide Template

```markdown
---
title: [Question as title]
description: [1-2 sentence practical summary]
sidebar_position: 1
---

# [Question as title]

[Direct, practical answer in 1–3 paragraphs.]

## Ne zaman?

[When this advice applies.]

## Nasıl yapmalıyım?

[Concrete steps, principles, or tradeoffs.]

## İyi örnek

[Short, realistic example.]

## Sık yapılan hatalar

[Common mistakes and pitfalls.]

## Daha fazla bilgi

[Canonical references or links to octacity-org/.github where relevant.]
```

For questions or discussions, please use GitHub Issues or GitHub Discussions.
