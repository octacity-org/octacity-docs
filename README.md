# Octacity Docs

A practical, opinionated knowledge base for building open-source projects.

> 🌐 **Note**: The documentation content itself is written Turkish-first to serve the local developer community, while repositories and codebases remain English-first.  
> For the Turkish version of this document, see [README_tr.md](./README_tr.md).

Live site: [Octacity Docs](https://octacity-org.github.io/octacity-docs/)

---

## 🛠️ Local Development

To run the site locally, ensure you have Node.js LTS (>=20) and your package manager of choice (Bun, npm, or pnpm):

```bash
# Install dependencies
bun install
# or
npm install

# Start local development server
bun run start
# or
npm run start
```

The site will be available at `http://localhost:3000` with hot-reloading enabled.

---

## 🏗️ Build & Verification

To verify links, TypeScript types, and compile the static production build:

```bash
# Static production build (includes broken link check)
bun run build

# TypeScript validation
bun run typecheck

# Serve production build locally
bun run serve
```

---

## 📁 Project Structure

```text
docs/
├── baslangic/      # Project kickoff, scoping, repository setup
├── github/         # Issues, PRs, code review, GitHub workflows
├── takim/          # Team alignment, ownership, coordination
├── maintainer/     # Scope management, reviewing contributions, sustainability
├── acik-kaynak/    # Licensing, community relations, contributor experience
├── release/        # v0.1 timing, versioning, technical debt
└── octacity/       # Usage context and relationship with octacity-org/.github

src/
├── css/custom.css  # Brand styling and theme tokens
└── pages/          # Landing page (index.tsx)

workflow.py         # OmniShip delivery pipeline definition
omniship.yaml       # Compiled execution plan
docusaurus.config.ts# Site and search configuration
sidebars.ts         # Sidebar hierarchy and navigation order
```

---

## 🚀 Release & Deployment (OmniShip)

GitHub Pages deployment and CI workflows are compiled and managed via [OmniShip](https://github.com/octacity-org/omniship):

```bash
# Recompile CI workflows and pipeline plan:
uvx --from git+https://github.com/octacity-org/omniship omniship generate

# Verify generated workflows are up-to-date:
uvx --from git+https://github.com/octacity-org/omniship omniship generate --check
```

---

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](./CONTRIBUTING.md) ([Türkçe](./CONTRIBUTING_tr.md)) for guidelines on writing guides, workflow steps, and pull request conventions.

---

## 📜 License

This documentation project is licensed under the [MIT License](./LICENSE).
