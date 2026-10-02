# Octacity Docs — Content Plan

## 1. Purpose

Octacity Docs is a practical, opinionated knowledge base for people building open-source projects.

It exists to answer questions like:

- “How should I do this?”
- “What is a good way to handle this situation?”
- “How do I structure this work?”
- “What should I do next as a contributor, maintainer, or team member?”

Octacity Docs is **not** the Octacity constitution, governance handbook, or policy source of truth.

Official organization-wide rules, governance, templates, structural decisions, and formal community processes belong in the `octacity-org/.github` repository.

A useful distinction is:

> `.github` defines how Octacity operates.  
> Octacity Docs helps people build better open-source projects.

---

## 2. Editorial Principles

### Turkish-first

The primary language of Octacity Docs should be Turkish.

Octacity projects, repositories, issues, pull requests, and public technical communication may remain English-first, while the educational layer can explain concepts in Turkish.

This lets members learn in the language that is easiest to absorb without changing the international nature of the projects themselves.

### Answer first

Every guide should begin with the practical answer.

Avoid introductions such as:

> “GitHub Issues are a feature provided by GitHub…”

Prefer:

> “Bir işi başka bir geliştiricinin sana soru sormadan başlayabileceği kadar açık hale getirmek için Issue kullan.”

The reader should get useful guidance within the first few lines.

### Opinionated, not absolute

Octacity Docs should be comfortable saying:

> “Octacity’de genellikle bunu öneriyoruz.”

It should not pretend that every recommendation is universally correct.

Where multiple valid approaches exist, explain the tradeoff and state the preferred default.

### Practical over encyclopedic

Do not rewrite GitHub Docs, language documentation, or generic reference material.

Explain:

- what to do,
- when to do it,
- why it usually works,
- common mistakes,
- and what a good example looks like.

Link to canonical references when deeper technical detail is needed.

### Short enough to read

A guide should solve one practical problem well.

Prefer multiple focused pages over large “everything about GitHub” chapters.

### Living knowledge

Octacity Docs should evolve from real problems encountered by Octacity teams and maintainers.

A good rule:

> If the same practical question comes up more than once, consider turning it into a guide.

---

## 3. Scope Boundary

### Belongs in Octacity Docs

- Starting and scoping open-source projects
- GitHub workflows
- Issues and pull requests
- Code review
- Team collaboration
- Maintainer practices
- Contributor experience
- Release practices
- Project health
- Practical open-source habits
- Octacity-flavored recommendations

### Does not belong in Octacity Docs

- Governance
- Organization hierarchy
- Formal membership rules
- Team-leader authority definitions
- Official approval processes
- Organization-wide policies
- Repository templates that already have a canonical source
- Code of Conduct policy text
- Formal Octacity procedures already maintained in `.github`

For these topics, Octacity Docs should link to the relevant `.github` source instead of duplicating it.

---

# 4. Information Architecture

## Section 1 — Başlangıç

Purpose: Help someone turn an idea into a realistic, understandable open-source project.

### Guides

1. **Bir projeye nasıl başlanır?**
   - Problem before solution
   - Define who the project is for
   - Identify the smallest useful outcome
   - Avoid architecture-first planning
   - Create a first executable path

2. **Fikri nasıl küçültürüm?**
   - Separate vision from first version
   - Identify the core capability
   - Remove optional integrations
   - Avoid “platform” thinking too early
   - Examples of oversized vs focused scope

3. **İlk sürümde ne olmalı?**
   - What v0.1 should prove
   - Usable vs complete
   - Minimum documentation
   - Minimum tests
   - What can wait

4. **Repository nasıl hazırlanır?**
   - Repository naming
   - Basic folder structure
   - README
   - License
   - `.gitignore`
   - CI baseline
   - Issue/PR setup when needed

5. **İyi bir README nasıl yazılır?**
   - What the project is
   - Why it exists
   - Installation
   - Minimal usage
   - Project maturity
   - Contribution path
   - Screenshots/examples only when useful

6. **Lisans nasıl seçilir?**
   - Why a license matters
   - Permissive vs copyleft
   - Common options
   - When not to invent a custom license
   - Link to canonical legal/reference material

---

## Section 2 — GitHub ile Çalışmak

Purpose: Teach practical day-to-day collaboration through GitHub.

### Guides

1. **İyi bir Issue nasıl yazılır?**
   - Problem
   - Expected result
   - Constraints/context
   - Examples
   - What makes an issue actionable

2. **Issue ne kadar büyük olmalı?**
   - A unit one person can reason about
   - Warning signs of oversized issues
   - When a tracking issue is appropriate

3. **Bir işi nasıl parçalara ayırırım?**
   - Split by independently useful outcome
   - Split research from implementation
   - Split infrastructure from product behavior
   - Keep dependencies visible

4. **Branch nasıl kullanılmalı?**
   - Short-lived branches
   - Naming
   - Avoid long-running divergence
   - When direct pushes may or may not be appropriate

5. **İyi bir Pull Request nasıl hazırlanır?**
   - One coherent change
   - Explain what and why
   - Reference issues
   - Include testing notes
   - Screenshots when UI changes matter

6. **PR ne kadar büyük olmalı?**
   - Reviewability as the main criterion
   - Large generated/refactor changes as exceptions
   - Split unrelated concerns

7. **Code review nasıl yapılır?**
   - Review correctness, clarity, maintainability
   - Ask before assuming
   - Separate blocking feedback from suggestions
   - Review the change, not the person

8. **Merge conflict çıktığında ne yapılır?**
   - Understand both sides first
   - Rebase/merge depending on project workflow
   - Avoid blindly accepting one side
   - Re-run tests

9. **Labels, milestones ve project boards ne zaman kullanılmalı?**
   - Use labels for classification
   - Milestones for bounded outcomes/releases
   - Projects for coordination when the volume justifies them
   - Avoid process for process’s sake

10. **Discussions mı Issue mu?**
    - Issue: actionable work/problem
    - Discussion: open-ended conversation/question/idea
    - When a discussion should become an issue

---

## Section 3 — Takım Olarak Çalışmak

Purpose: Help small technical teams collaborate without turning work into bureaucracy.

### Guides

1. **Bir ekip projeye nasıl başlar?**
   - Align on problem and first outcome
   - Agree on ownership areas
   - Create the first few actionable issues
   - Avoid planning the entire roadmap upfront

2. **İş dağılımı nasıl yapılır?**
   - Prefer ownership and volunteering over command-and-control assignment
   - Make work visible
   - Match task size to contributor context
   - Avoid one person becoming the permanent bottleneck

3. **Bir görevin sahibi kimdir?**
   - Clear ownership
   - Ownership does not mean isolation
   - How to hand off work

4. **Takım toplantısında ne konuşulur?**
   - Blockers
   - Decisions
   - Coordination needs
   - What changed
   - What needs attention
   - Avoid status theater

5. **Kararları nerede kaydetmeliyiz?**
   - Put decisions close to the work
   - Issues, PRs, ADRs, or project docs depending on significance
   - Avoid decisions disappearing inside chat

6. **Bir kişi işi bırakırsa ne yapılır?**
   - Preserve context
   - Reassign ownership
   - Reduce scope if necessary
   - Do not treat abandoned work as sunk-cost obligation

7. **İki kişi aynı işi yapmak isterse ne olur?**
   - Coordinate before duplicating effort
   - Pair when useful
   - Split by outcome when possible

8. **Teknik anlaşmazlıklar nasıl çözülür?**
   - State constraints
   - Compare tradeoffs
   - Prototype when cheap
   - Record the decision
   - Avoid endless preference debates

9. **Yeni bir geliştirici projeye nasıl dahil edilir?**
   - Clear setup instructions
   - Small meaningful first task
   - Explain architecture only as needed
   - Make contribution path visible

---

## Section 4 — Maintainer Rehberi

Purpose: Teach maintainership as a separate skill from writing code.

### Guides

1. **Maintainer ne yapar?**
   - Protect project direction
   - Keep work moving
   - Review and coordinate
   - Make decisions
   - Maintain contributor experience
   - A maintainer does not have to do everything

2. **Bir contribution nasıl değerlendirilir?**
   - Does it fit the project?
   - Is it correct?
   - Is the maintenance burden acceptable?
   - Is the implementation proportionate?

3. **Ne zaman “hayır” denir?**
   - Scope mismatch
   - Excessive maintenance cost
   - Duplicate capability
   - Poor fit with project direction
   - Explain respectfully

4. **Scope nasıl korunur?**
   - Keep a clear project promise
   - Resist unrelated feature accumulation
   - Revisit scope intentionally

5. **Backlog nasıl temiz tutulur?**
   - Close obsolete work
   - Separate ideas from commitments
   - Avoid hundreds of unactionable issues

6. **Bir projeyi ne zaman release etmeliyiz?**
   - Release usable progress
   - Avoid waiting for perfection
   - Define release intent

7. **Breaking change nasıl yönetilir?**
   - Make it explicit
   - Explain migration
   - Version appropriately
   - Avoid surprise breakage

8. **Bir proje ne zaman archive edilir?**
   - No realistic maintenance intent
   - Superseded project
   - Dead experiment
   - Archive clearly rather than leaving ambiguity

9. **Contributor’a nasıl feedback verilir?**
   - Be specific
   - Explain why
   - Separate requirement from preference
   - Preserve momentum

---

## Section 5 — Açık Kaynak

Purpose: Explain the social and operational side of open source.

### Guides

1. **Açık kaynak proje ne demektir?**
   - Public source is not the whole story
   - License
   - Contribution path
   - Communication
   - Maintenance expectations

2. **CONTRIBUTING.md nasıl yazılır?**
   - Setup
   - Workflow
   - Expectations
   - Testing
   - PR guidance
   - Keep it proportional to project size

3. **Dışarıdan gelen ilk contributor nasıl karşılanır?**
   - Respond quickly when possible
   - Help without taking over
   - Give clear review feedback
   - Make the person want to contribute again

4. **Good first issue nedir?**
   - Small but meaningful
   - Sufficient context
   - Low architectural dependency
   - Not “boring work nobody else wants”

5. **Issue template gerekli mi?**
   - Add templates only when recurring missing information becomes a problem
   - Keep templates short

6. **Code of Conduct ne zaman gerekir?**
   - Explain purpose
   - Link to Octacity’s canonical policy/source where applicable
   - Do not duplicate official policy text

7. **Kullanıcı feedback’i nasıl toplanır?**
   - Issues
   - Discussions
   - Direct user conversations
   - Avoid building solely from assumptions

8. **Proje nasıl duyurulur?**
   - Explain problem + capability
   - Show instead of overclaiming
   - Pick communities where the project is relevant
   - Be ready to answer questions

9. **Bir proje contributor-friendly nasıl yapılır?**
   - Setup works
   - Architecture is understandable
   - Issues are actionable
   - Contribution rules are visible
   - Reviews do not disappear for weeks

---

## Section 6 — Release ve Proje Sağlığı

Purpose: Help projects move beyond “the code works on my machine.”

### Guides

1. **v0.1 ne zaman çıkar?**
   - When the core promise works
   - It does not need to be feature-complete
   - Make limitations explicit

2. **Versioning nasıl yapılır?**
   - Semantic Versioning basics
   - Pre-1.0 pragmatism
   - Avoid arbitrary version inflation

3. **CHANGELOG gerekli mi?**
   - When it helps
   - Generated release history vs curated changelog
   - Avoid maintaining duplicate information

4. **Release notes nasıl yazılır?**
   - User-visible changes first
   - Breaking changes
   - Migration notes
   - Important fixes
   - Link technical details where needed

5. **CI ne zaman eklenmeli?**
   - As soon as repeatable checks matter
   - Start with the highest-value checks
   - Avoid giant CI systems for tiny projects

6. **Tests ne kadar gerekli?**
   - Protect important behavior
   - Test risk, not vanity metrics
   - High-value regression coverage
   - Avoid coverage percentage as the only goal

7. **Proje aktif tutulmalı mı, bırakılmalı mı?**
   - Maintenance is a choice
   - Communicate project status honestly
   - Archive or transfer when appropriate

8. **Teknik borç ne zaman ele alınmalı?**
   - When it slows development
   - When it increases defect risk
   - When upcoming work depends on it
   - Avoid endless cleanup with no product value

---

## Section 7 — Octacity Bağlamı

Purpose: Explain how this knowledge base relates to Octacity without duplicating governance.

This section must remain intentionally small.

### Guides

1. **Octacity Docs nasıl kullanılmalı?**
   - Practical guidance, not law
   - Use judgment
   - Prefer the simplest recommendation that fits the situation
   - Improve the docs when reality teaches something better

2. **`.github` ile Octacity Docs arasındaki fark nedir?**
   - `.github`: official organization-level source of truth
   - Octacity Docs: practical open-source guidance
   - Link rather than duplicate

3. **Bir rehber eksikse ne yapmalıyım?**
   - Open an issue
   - Suggest a page
   - Submit a PR
   - Bring recurring questions into the knowledge base

4. **Bu içerikler nasıl güncellenir?**
   - Treat docs like code
   - Changes through GitHub
   - Prefer examples grounded in real project experience
   - Update recommendations when better practices emerge

---

# 5. Initial v0.1 Content

The first release should be useful without trying to cover everything.

Recommended initial pages:

1. Octacity Docs nasıl kullanılmalı?
2. `.github` ile Octacity Docs arasındaki fark nedir?
3. Bir projeye nasıl başlanır?
4. Fikri nasıl küçültürüm?
5. İlk sürümde ne olmalı?
6. Repository nasıl hazırlanır?
7. İyi bir README nasıl yazılır?
8. İyi bir Issue nasıl yazılır?
9. Bir işi nasıl parçalara ayırırım?
10. İyi bir Pull Request nasıl hazırlanır?
11. Code review nasıl yapılır?
12. Takım olarak nasıl çalışılır?
13. Maintainer ne yapar?
14. Açık kaynak proje ne demektir?
15. v0.1 ne zaman çıkar?

This is enough for Octacity Docs to be immediately useful while leaving room for the documentation to grow from real experience.

---

# 6. Suggested Guide Template

Each guide should roughly follow this structure:

```md
# [Question as title]

[Direct answer in 1–3 paragraphs.]

## Ne zaman?

[When this advice applies.]

## Nasıl yapmalıyım?

[Concrete steps or principles.]

## İyi örnek

[Short realistic example.]

## Sık yapılan hata

[One or more common mistakes.]

## Daha fazla bilgi

[Canonical external reference if useful.]
```

Not every page must include every heading. The template is a default, not a constraint.

---

# 7. Style Guide

- Turkish primary language
- Keep technical vocabulary in English when that is the natural term
- Use `Issue`, `Pull Request`, `repository`, `maintainer`, `release`, etc. naturally
- Avoid unnecessarily translating established technical terms
- Use examples more than theory
- Prefer direct sentences
- Avoid corporate language
- Avoid policy/legal tone
- Avoid presenting preferences as universal facts
- Use real project situations where possible
- Link to GitHub Docs or other canonical references instead of reproducing them
- Never duplicate official Octacity governance content

---

# 8. Definition of Success

Octacity Docs succeeds when a member can encounter a problem, search the docs, and find a concise answer that helps them continue without needing to ask a maintainer or team leader for basic operational guidance.

It should gradually become Octacity’s shared practical memory for building open-source software.
