# Vibe Coding Lab 01

## Build and publish an invoice calculator

You will take ownership of a starter project, ask AI to improve it, inspect and test the change, save its history, and publish a working website. The goal is to understand the workflow well enough to repeat it with another small accounting tool.

**Allow 60 to 80 minutes for the first attempt.** This is a planning estimate; account verification, sign-in, or first launch can take longer. Use a Windows or Mac laptop, your own accounts, an internet connection, and a current browser. No desktop programming software needs to be installed.

### What you will produce

- Your own GitHub fork of the instructor's starter.
- A calculator that shows both the discounted payment and dollars saved.
- Two commits that record two reviewed changes.
- A public GitHub Pages URL that works while your Codespace is stopped.
- A short record of your prompt, tests, and explanation of the workflow.

### The workflow

**Fork the starter > Open your Codespace > Ask AI > Review and test > Commit > Push > Publish with Pages**

| Term | What it means here |
| --- | --- |
| Repository | Project files and their Git version history on GitHub |
| Fork | Your own GitHub copy of the instructor's repository |
| Codespace | A cloud computer and browser editor for working on your fork |
| Preview | A private test view served from the running Codespace |
| GitHub Pages | The public website served from files pushed to your fork |

### Account and cost preparation

You need a GitHub account. The main AI route also needs approved Claude Code access through your own paid Claude subscription or Console account. A free Claude chat account alone does not provide Claude Code access. If you do not have that access, use the browser AI route on page 5 with an AI chat account available to you.

Your instructor should settle the AI access and budget choice before the lab. Do not buy or upgrade a plan in the middle of the exercise. GitHub Codespaces has individual usage allowances; prior usage can reduce what remains. Contact the instructor if you encounter exhausted usage or a payment demand.

The published calculator makes no AI calls. Never put credentials in its files. Your fork and site are public; publish only fictional data and text you are comfortable sharing.

<!-- PAGEBREAK -->

## Create your own fork

### Sign in and copy the starter

1. Open [GitHub](https://github.com). Sign in with your own account. If you need one, choose Sign up, complete the account steps, and verify your email. Choose the free GitHub account option.
2. Open the [instructor starter repository](https://github.com/summersbyu/ai-vibe-coding-starter).
3. Near the top right, click **Fork**. On the creation page choose **your own username** as Owner.
4. Keep the repository name **ai-vibe-coding-starter** for this first exercise. Leave **Copy the main branch only** selected if it appears. Choose **Create fork** once.
5. Check the resulting page title says **YOUR-USERNAME / ai-vibe-coding-starter**. It should also say it is forked from **summersbyu/ai-vibe-coding-starter**.
6. Bookmark your fork and write its URL below. All later Codespace and Pages steps use this copy.

My GitHub username: ____________________

My fork URL: __________________________________________________

### Understand what the fork gives you

Your fork starts with the same files as the instructor starter, but you can change and publish your copy independently. Forking does not run the app, create a Codespace, or turn on Pages. We will do those separately.

For this first lab, work on your fork's **main** branch. A branch is a named line of development. You will learn additional branches and pull requests in a later team exercise; neither is required for today's individual work.

### Your project files

| File | Role |
| --- | --- |
| docs/index.html | Headings, labels, inputs, and page structure |
| docs/styles.css | Colors, spacing, and layout |
| docs/app.js | The calculator's behavior and arithmetic |

HTML supplies content, CSS supplies appearance, and JavaScript supplies behavior. The prepared environment files make the preview work; leave those alone during this exercise.

**Checkpoint.** Say aloud whose repository you are looking at. If its owner still says summersbyu, open your own fork before continuing. Do not click Create codespace on the instructor repository as a substitute for forking.

<!-- PAGEBREAK -->

## Open the Codespace and preview

### Launch from your fork

1. On **your fork's GitHub page**, click **Code**, then **Codespaces**.
2. If this fork already has your workspace, click its name. Otherwise choose **Create codespace on main**. If options appear, use **Vibe Coding Lab 01** and **2 cores**.
3. Wait for setup. You will see a browser editor with files on the left. The calculator preview starts automatically; no setup commands or second terminal are required.
4. A browser preview should open. If GitHub offers **Open in Browser**, click it. Keep the editor tab open.

### If you see only the editor

Choose **View > Open View > Ports**, or select a visible **Ports** tab near the bottom. Find **Invoice Calculator Preview** on port **8000**, and click its **Open in Browser** icon. Keep visibility **Private**. If the menu bar is hidden, open the menu at the upper left.

The preview is your private test copy. It is not yet a published Pages website. Closing its tab does not stop the Codespace.

### Check the starting calculator

The page should say **Invoice Discount Calculator**. With an invoice of **1000.00** and discount **2.00**, click **Calculate payment**. It should show **$980.00** as the amount to pay.

Compute that independently: $1,000 x 2% = $20 discount; $1,000 - $20 = $980 payment. The starter currently displays the payment but does not prominently display the savings or a side-by-side comparison. That is the feature you will ask AI to add.

### Keep track of three places

| Place | Purpose |
| --- | --- |
| Your GitHub fork | Stores the code you push and offers Pages settings |
| Codespace editor | Where AI edits files and you review and commit changes |
| Preview browser tab | Where you test the current files before publishing |

Write the Codespace name from [My Codespaces](https://github.com/codespaces): ____________________

Open **docs/index.html** in the editor by expanding the docs folder on the left. Continue to page 4 for Claude Code, or page 5 for browser AI chat. Use one AI route, then join the common workflow on page 6.

<!-- PAGEBREAK -->

## Main route with Claude Code in the editor

### Open the graphical AI panel

The prepared Codespace requests the official Claude Code extension. You use its chat panel; you do not need to type the claude command in a terminal.

1. With docs/index.html open, look for the Claude spark icon in the editor toolbar or left activity bar. Click it to open Claude Code.
2. If you cannot find it, open **View > Command Palette**, type **Claude Code**, and choose an option such as **Open in New Tab** or **Open in Side Bar**. Mac shortcut: Command + Shift + P. Windows shortcut: Ctrl + Shift + P.
3. Choose **Sign in** and complete your own Claude account authorization in the browser. Containers can show a login code that must be returned to the sign-in prompt. Keep codes and credentials private.
4. Use **Manual** review mode if the panel offers it. Some versions label the regular approval mode **Default**. Ask for help if only unfamiliar modes appear. Keep individual edit review enabled for this exercise.

If the extension or account cannot be used, do not improvise installation commands or purchases. Use the alternative on page 5 and report the problem to the instructor.

### Give AI a bounded task

Copy this request into the Claude Code prompt box:

> Improve the invoice calculator in docs/index.html, docs/styles.css, and docs/app.js. First explain briefly what those three files do and which files you plan to change. Then add a clear comparison showing the invoice amount without a discount, the dollars saved, and the amount to pay with the discount. Include a short explanation that updates when I calculate. Keep the existing integer-cent calculation, input validation, and accessible labels. Use only plain HTML, CSS, and JavaScript with relative file paths. Do not add packages, APIs, keys, a database, or outside assets. Do not commit, push, or publish for me. After editing, tell me what changed and how to check it using the supplied test cases.

### Review and iterate

Read the proposed edits. Approve changes only to the three docs files that fit the request. If AI asks to add tools, change permissions, rewrite setup, or publish, tell it to keep the task within those files.

Save the files, refresh the preview, and inspect the feature. If it is missing or unclear, describe the observed behavior and expected result in one follow-up prompt. Save your exact request and any correction in your learning notes.

Continue to page 6. You remain responsible for testing and publication; a confident AI explanation is not a completed check.

<!-- PAGEBREAK -->

## Alternative route with browser AI chat

**Skip this page if you completed the Claude Code route.** This alternative uses an AI chat tool available to you. It does not require linking that chat account to GitHub, and it does not give the chat tool access to your Codespace.

### Supply the public starter code

1. In the Codespace editor, open **docs/index.html**. Select all its text and copy it. Paste it into your AI chat with the label **File docs/index.html**.
2. Repeat for **docs/styles.css** and **docs/app.js**, clearly labeling each file. These are public exercise files. Do not include account settings, tokens, hidden credential files, or personal data.
3. Send the feature request on page 4, adding the following instruction:

> I am using browser chat, so you cannot edit my files directly. Return the complete contents of each file you changed, in separate code blocks labeled with the exact filename. Include no omitted sections or placeholders. Keep any unchanged file unchanged. Explain which blocks I should copy and how to test them.

### Apply the change to the correct files

For each file the AI actually changes, open that exact file in the editor. Select its entire contents, then paste the complete replacement code. Copy code only, without the surrounding three-backtick fences or commentary.

Save with **File > Save**, Command + S on Mac, or Ctrl + S on Windows. Repeat for each changed file. Leave untouched files alone. The chat response does not alter your repository until you apply it here.

Refresh the preview and inspect the comparison. If it fails, give the chat tool the specific error or visible behavior and ask for a corrected complete file. Do not paste a shortened snippet over a whole file.

### Know what is the same and different

Both routes use AI to propose code. Both require you to inspect differences, test the calculations, and publish your reviewed version. Claude Code can edit files in the workspace; browser chat requires you to transfer the proposed changes yourself.

If your chat account reaches a limit, save your work and contact the instructor. There is no requirement to upgrade a plan mid-exercise. Your instructor can provide the reference improvement for completing the Git and Pages practice, with the AI portion recorded as incomplete.

Continue to page 6. Record which route you used and the exact prompt in your notes.

<!-- PAGEBREAK -->

## Test the feature and inspect the differences

### Test before you commit

Save all changed files and refresh the preview. For each case below, enter the amount and discount, click **Calculate payment**, and compare both displayed savings and payment with an independent calculation.

| Invoice | Discount | Savings | Payment |
| --- | --- | --- | --- |
| $1,000.00 | 2% | $20.00 | $980.00 |
| $250.00 | 2% | $5.00 | $245.00 |
| $1,000.00 | 0% | $0.00 | $1,000.00 |
| $99.99 | 2% | $2.00 | $97.99 |

Also test an empty amount, a negative amount, and a discount above 100. The app should explain the invalid input rather than displaying a new payment. Enter a valid case again and confirm it recovers.

The rounding rule is to round the discount to the nearest cent, then subtract that discount from the invoice. Record your observed results in your notes or the supplied evidence worksheet. Correct a failed case before proceeding.

### See exactly what AI changed

1. Return to the editor and open **Source Control** using its branching icon on the left, or **View > Open View > Source Control**.
2. Under **Changes**, click each changed file. A comparison called a **diff** shows the earlier version and your current version. Added lines are usually green and removed lines red; some layouts show a single combined view.
3. Explain one visible change in each changed file. You do not need to explain every character. Identify where the new comparison appears, where its values come from, and any styling change.
4. Confirm the changed files are limited to docs/index.html, docs/styles.css, and docs/app.js. If unrelated files changed, pause and ask why before committing them.

### Checkpoint

My observed $1,000 at 2% result: __________________________________

One calculation or behavior I corrected or independently verified: ____________________

What the HTML, CSS, and JavaScript changes did: ____________________

**Saving a file is not a commit.** Save writes the working file. A commit records a named snapshot in Git history. Push sends that history to your GitHub fork. The next page performs those steps without terminal commands.

<!-- PAGEBREAK -->

## Commit and push the reviewed change

### Record the first version in Git

1. In Source Control, select the **+** beside each reviewed docs file to **stage** it. Staging selects the changes for the next commit. You should see the files move to **Staged Changes**.
2. In the message field, type **Add savings and payment comparison**. A useful commit message describes the change.
3. Click **Commit**. If the editor asks to stage unreviewed files, cancel and select only the files you reviewed. Save any unsaved files before continuing.
4. In Source Control's **...** menu, choose **Push**. The destination should be **origin**, your fork. If the editor offers **Sync Changes**, that can also upload your commit, but it first checks for incoming changes. Ask for help if a conflict or unfamiliar remote appears.
5. Complete a GitHub sign-in prompt with your own account if needed. Do not send your password or verification code to anyone.

### Confirm the upload on GitHub

Open your fork's GitHub page and refresh it. Check that **main** shows your commit message. Open the commit to inspect its changed files. Copy its link into your learning notes.

First commit link: __________________________________________________

If the commit exists only in the Codespace, it has not yet been pushed. Pages cannot publish a change that remains only in the workspace.

### Common terms in this step

| Action | What it does |
| --- | --- |
| Save | Writes your current working files |
| Stage | Selects which edits belong in the next snapshot |
| Commit | Records the selected snapshot in local Git history |
| Push | Uploads the commit to your GitHub fork |

For today's exercise, do not open a pull request to the instructor. A pull request proposes combining changes between repositories or branches; you are publishing your own version instead.

If Git asks you to configure an author name or email, or refuses to push, contact the instructor with the visible error. Do not use a command from an unrelated tutorial to reset the repository or force a push.

Continue to page 8 to turn the pushed files into a public website.

<!-- PAGEBREAK -->

## Publish your own GitHub Pages site

### Configure the publishing source

1. On **your fork's GitHub page**, choose **Settings**. If the tab is hidden, look in the repository navigation overflow menu.
2. In the settings sidebar choose **Pages** under Code and automation.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Select branch **main** and folder **/docs**, then choose **Save**. Both choices matter: the website files are in docs, not the repository root.
5. Wait for deployment. The Pages settings page should show the site URL and a **Visit site** link when ready. Publishing can take several minutes; refresh the settings page rather than changing random options.

My publishing branch and folder: ____________________ / ____________________

### Check the public result

Open **Visit site**. The address will usually look like **https://YOUR-USERNAME.github.io/ai-vibe-coding-starter/**. Copy the actual URL from GitHub; do not submit a guessed address or your private Codespace preview URL.

My public Pages URL: __________________________________________________

Check the new comparison appears and repeat the $1,000 at 2% case on this public page. It should show $20 saved and $980 to pay. Open the URL in a private browser window to verify it can be viewed without your GitHub sign-in.

### Understand what you published

Pages serves the HTML, CSS, and JavaScript pushed to your fork. The calculator runs in the visitor's browser. It does not use the running Codespace, your Claude login, a server-side database, or an API key.

This is why a simple calculator fits Pages. A future app that needs to keep a private credential or permanently save shared form entries will need a different architecture.

### If publishing fails

Confirm the repository owner is your username, the commit is on main, and Pages points to /docs. A fork does not inherit an already enabled Pages site; you must configure your own. If the page is unstyled, inspect whether AI changed styles.css or app.js links to incorrect absolute paths.

If no site appears after about ten minutes, check the **Actions** tab for a failed Pages deployment and report its visible error to the instructor. Do not add a payment method or enable an unfamiliar workflow to bypass the problem.

<!-- PAGEBREAK -->

## Publish a revision and finish

### Make and publish one more small change

Now ask your chosen AI route to improve one sentence in the calculator's introductory explanation for a first-year accounting student. Keep all calculations and features unchanged. You can use this request:

> Improve one introductory sentence in docs/index.html so a first-year accounting student understands when an early payment discount applies. Keep the arithmetic and other files unchanged. Explain the edit. Do not commit, push, or publish.

Review the diff and save the file. Test the $1,000 at 2% case again. Stage the reviewed file, commit with **Clarify the invoice discount explanation**, and push to your fork.

Refresh GitHub and confirm this second commit appears. Wait for Pages to deploy the revision, then refresh the public page and confirm the revised sentence appears. If a cached version remains, try a private browser window after deployment succeeds.

Second commit link: __________________________________________________

Sentence I observed on the public site: ________________________________

### Stop the Codespace and test the public site

Open [My Codespaces](https://github.com/codespaces). Find the workspace for your fork and choose **... > Stop codespace**. Verify it is stopped. Open your public Pages URL again. The calculator should still work because Pages hosts it separately from your development workspace.

Observed with Codespace stopped: __________________________________

### Submit evidence

Use the supplied evidence worksheet or your own notes. Submit your fork URL, Pages URL, both commit links, exact main feature prompt, observed calculation checks, and a short explanation of fork, Codespace, preview, save, commit, push, and Pages. State which AI route you used and what you verified yourself.

Your instructor will provide the submission location. During a colleague trial, keep the notes and show the links to the observer. Do not put passwords, tokens, or private account details into the worksheet or public repository.

### If you return later

Open the same Codespace from My Codespaces. The preview should restart automatically. If it does not, use **Terminal > Run Task > Restart Calculator Preview** once. This is a named menu action, not a command to type. Keep your pushed code on GitHub; stopped workspaces can eventually be deleted under retention settings.
