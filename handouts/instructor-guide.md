# Vibe Coding Lab 01 instructor guide

## Prepare the fork to publication exercise

This first lab teaches the intended stack directly: students fork your starter, work in their own Codespace, ask AI for a small accounting feature, review and test the change, commit and push it, and publish with GitHub Pages. The earlier SQLite lab can follow once students understand ownership, development, and distribution.

The starter is a plain HTML, CSS, and JavaScript invoice discount calculator. The public page requires no model account, API key, backend, or database. The student's AI account is used during building, and their Codespace is used during development. Pages serves the published files separately.

### Why use a small starter

The starter already calculates the discounted payment. Students add a comparison of full invoice amount, savings, and discounted payment. A bounded change makes the AI request, diff, accounting checks, and publishing cycle visible. A blank-project build would add more unpredictable failures before students learn the workflow.

### Included materials

| Material | Purpose |
| --- | --- |
| Student handout | Nine page route from account access and fork to two published commits |
| Colleague trial sheet | Observe navigation, understanding, and unassisted completion |
| Evidence worksheet and test cases | Record prompts, checks, links, and explanations |
| Prepared source and dev container | Starts the preview and requests the Claude Code editor extension |
| Instructor reference improvement | Fallback for practicing Git and Pages if AI access is blocked |

### Status and release condition

The baseline calculation tests and local browser checks cover arithmetic, rounding, invalid inputs, and preview behavior. They do not validate a fresh student's fork, live Codespace startup, extension installation and sign-in, push permissions, or Pages deployment.

Complete the fresh-account preflight on page 3 before an observed colleague trial. Then use a representative 15 to 20 person pilot before expanding to 390 students. This exercise replaces the SQL lab as the proposed first lab; it does not remove the later SQL requirement.

<!-- PAGEBREAK -->

## Prepare accounts source and budgets

### Instructor repository

The starter lives at [summersbyu/ai-vibe-coding-starter](https://github.com/summersbyu/ai-vibe-coding-starter). Students fork its **main** branch, keeping the same repository name for this first exercise. A dedicated starter avoids the extra examples and branch choices in the distribution repository.

Do not give students a Codespace launch link hardcoded to the instructor repository. Their Codespace must be launched through **Code > Codespaces** on **their own fork**. A fork is not the same as a template-generated repository or an instructor-owned workspace.

Choose an institutional approach to reusable course code licensing and account privacy before wide distribution. The project is public, and commits can include author metadata. Never place real client data or credentials into the source or assignments.

### Two AI routes

**Main route:** the dev container requests the official **anthropic.claude-code** extension. Its graphical panel bundles its CLI, so this exercise does not require a separate terminal installation. Students sign in individually and review edits in the editor. Verify this exact remote/browser setup in the preflight; the extension request alone does not prove installation or authentication works.

**Alternative:** a browser AI chat account already available to the student. Students supply only the three public docs files, request complete replacements for changed files, and paste them into the correct editor files. No account connector is required. Both routes share the test, diff, commit, push, and Pages steps.

Claude Code requires approved paid Claude or Console access; a free Claude chat account alone is insufficient. Confirm costs and limits before class. Do not tell students to buy an upgrade when they encounter a problem mid-lab. If AI access fails, the reference improvement can preserve the Git and publishing exercise while the AI portion remains a recorded gap.

### GitHub usage and classroom logistics

Personal GitHub Free accounts currently include 120 core-hours and 15 GB-month of Codespaces storage monthly. A two-core machine uses two core-hours per running hour; individual prior usage matters. Stopped workspace storage can still count. Recheck current terms before the semester rather than relying on a pooled class allowance.

Assign a help owner, choose a submission location, prepare a demonstration recording or screenshots, and verify campus access to GitHub, Codespaces, Claude, and the students' chosen chat route. Approve the student-owned public account workflow under your institution's course and data policies.

<!-- PAGEBREAK -->

## Run a fresh fork preflight

Use a second test account or trusted helper with permission to use that account. The instructor owner cannot test an authentic fork by forking their own repository back into the same account. Do not borrow student passwords or use your already configured workspace as the onboarding test.

### Ownership and environment

1. Fork the public starter into the test account. Confirm its owner, main branch, files, and fork relationship.
2. Launch a fresh two-core Codespace from that fork. Verify the configuration name **Vibe Coding Lab 01**.
3. Confirm preview startup and **Invoice Calculator Preview** on **8000**. Test the Ports fallback and keep port visibility Private.
4. Check all three source files open in the editor and that the environment did not create tracked runtime files.
5. Verify Claude Code opens through the graphical panel, signs in successfully with approved access, and offers individual review. The fallback chat route must also be tried once with full-file replacement.

### Complete the actual student cycle

Request the savings comparison. Review the edits, test the four supplied cases and invalid inputs, stage, commit, and push through the editor. Confirm the first commit is on the test account's fork, not the instructor repository.

Enable Pages on the test fork using **Deploy from a branch > main > /docs**. Wait for a successful deployment and visit the actual public URL. Test it while signed out or in a private browser window. Confirm styles and behavior load from relative paths.

Make a small introductory wording revision, create a second commit, and push. Verify the second change reaches Pages without changing the Pages configuration again. Stop the Codespace and verify the public calculator still works.

### Record and resolve failures

Record first-launch time, AI sign-in time, Pages deployment time, any intervention, and the final URLs. Test the same journey on a Mac and Windows browser and on the campus network. Also stop and resume the same Codespace to verify the preview restart hook.

Do not release the packet if fork ownership is unclear, Claude requires student installation commands, source-control identity is missing, pushes target the wrong repository, or Pages fails to publish. Resolve these before the colleague's observed session.

**What remains to be demonstrated:** the live account and hosting steps above. Local calculator tests are evidence of arithmetic behavior, not evidence of Codespaces or Pages readiness.

<!-- PAGEBREAK -->

## Teach the workflow and assess understanding

Use these short modules as demonstrations followed by an action the student performs. The colleague trial should establish actual timing; a first attempt is planned for 60 to 80 minutes.

| Module | Student learning check |
| --- | --- |
| Repository and fork | Identify the owner of the original and their own copy |
| Codespace and preview | Open the editor and explain why the preview is private |
| AI request and iteration | Bound a feature request and correct an observed defect |
| Review and validation | Explain a diff and independently verify money amounts |
| Git snapshots and upload | Distinguish save, stage, commit, and push |
| Pages and revision | Publish, push a second change, and test with workspace stopped |

### Expected calculations

| Invoice | Discount | Savings | Payment |
| --- | --- | --- | --- |
| $1,000.00 | 2% | $20.00 | $980.00 |
| $250.00 | 2% | $5.00 | $245.00 |
| $1,000.00 | 0% | $0.00 | $1,000.00 |
| $99.99 | 2% | $2.00 | $97.99 |

The discount is rounded to the nearest cent, then subtracted. Invalid or empty amounts and percentages outside 0 to 100 must produce a clear message. A valid total does not determine eligibility, cutoff, or approval for a real payment.

### Suggested ten point rubric

| Evidence | Points |
| --- | --- |
| Own fork and Codespace ownership explained | 2 |
| Bounded AI request and reviewed feature | 2 |
| Correct tests and a meaningful diff explanation | 2 |
| Two pushed commits and updated public Pages site | 2 |
| Workflow reflection and site tested with workspace stopped | 2 |

<!-- PAGEBREAK -->

## Support recovery and maintain the starter

### Frequent support issues

- **Working in the original repository:** return to the student's fork. Do not solve ownership by asking for instructor write access.
- **Preview not opening:** inspect port 8000 after setup, then use the named Restart Calculator Preview task once. No student server command is part of the normal route.
- **Claude sign-in or extension failure:** use browser chat while recording the access defect. Do not switch to unrestricted permissions or create shared credentials.
- **Full-file paste went wrong:** check the exact filename, omitted sections, and accidental code fences. Use the Source Control diff to see the damage before fixing it.
- **Commit absent from GitHub:** distinguish a local commit from a pushed commit. Verify origin points to the student's fork.
- **Pages wrong or unstyled:** check main and /docs, deployment status, the actual site URL, and relative links to styles.css and app.js.
- **Public revision missing:** first confirm the second commit reached main and its Pages deployment succeeded; only then consider browser caching.

### Recovery without starting over

Uncommitted changes can be compared with the last commit in Source Control. Ask students to preserve a copy before discarding work. The full original is also available in the instructor starter. After a pushed mistake, prefer a new corrective commit to rewriting public history or forcing a push.

The reference improvement is supplied in **instructor/reference-app.js**. For an AI access fallback, copy it over docs/app.js, validate the results, and let the student perform the review and publishing steps. It adds the requested comparison using the existing page placeholder. Do not report this as an independently AI-built feature.

### Maintainer responsibilities

The preview uses Python's standard library and serves **only docs**, not the repository root or credentials. Startup is detached, checked for readiness, and requested on resume. Runtime files are ignored by Git. The dev container image tag and editor extension are not frozen versions; verify them before a new semester and after changes.

The supplied Node calculation test is a maintainer check: **node tests/calculator.test.cjs**. Students use the browser test cases and do not need to install Node or run terminal commands. Add meaningful checks when the course introduces new calculation behavior.

Keep the starter main branch stable during a course run. Forks do not automatically acquire later instructor fixes. Teach Sync fork and conflict handling in the later team module; do not unexpectedly ask beginners to integrate new starter changes during this first lab.

<!-- PAGEBREAK -->

## Evaluate the pilot and plan later lessons

Give the colleague only the student handout and use the observation sheet to record each interruption. Successful completion includes ownership, a tested change, both commits, a working public site, and a correct explanation. An attractive calculator alone is insufficient evidence.

Ask what caused the public page to change: the answer should connect push to the configured Pages deployment. Credit an AI access fallback separately from completion of the AI learning outcome.

Then run a 15 to 20 person pilot spanning Windows, Mac, new accounts, and campus network conditions. Track setup failures, AI access failures, publishing failures, total support minutes, and completion without intervention. Suggested targets are at least 90 percent completion without observer intervention, no normal-path terminal typing, and successful publication for every completed run. These are proposed decision targets, not measured results.

### How this fits the full course

This first lab makes AI-assisted tool changes and distribution concrete. Follow it with repository review and team contribution, then the SQLite and Streamlit lab for querying and persistent records. Later projects can introduce joins, API use, model cost controls, and agents with bounded tools and human review.

Keep the architecture distinction visible. Pages supports this static browser calculator; it cannot securely hold a private server-side key or provide a shared durable database by itself. Streamlit is a later route when Python or database interaction becomes part of the learning objective.

### Sources and verification date

Instructions and account requirements were checked on **October 14, 2026**. Recheck screen labels and policies during the live preflight.

- [Forking a repository](https://docs.github.com/en/pull-requests/how-tos/work-with-forks/fork-a-repo)
- [Creating a Codespace](https://docs.github.com/en/codespaces/developing-in-a-codespace/creating-a-codespace-for-a-repository)
- [Codespaces ports](https://docs.github.com/en/codespaces/developing-in-a-codespace/forwarding-ports-in-your-codespace)
- [Git review commit and push in the editor](https://code.visualstudio.com/docs/sourcecontrol/overview)
- [Claude Code editor extension and account prerequisites](https://code.claude.com/docs/en/vs-code)
- [Official Claude Code extension](https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code)
- [Configuring the Pages publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [GitHub Pages architecture](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [Codespaces billing](https://docs.github.com/en/billing/concepts/product-billing/github-codespaces)

Record the decision to expand, revise and repeat, or simplify the environment using the trial observations and support capacity.
