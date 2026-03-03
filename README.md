# 📈 SIGNAL — Daily Market Newsletter

Auto-updating daily stock market intelligence for: **RHM.DE · NVDA · AMD · MSFT · EUNL.DE · 4MMR.DE · ITA**

Updates every weekday at **07:00 CET** automatically via GitHub Actions + Claude API.

---

## 🚀 Setup in 10 Minutes

### Step 1 — Create GitHub Repository
1. Go to [github.com](https://github.com) → Sign up free (or log in)
2. Click **"New repository"**
3. Name it: `signal-newsletter`
4. Set to **Public** (required for free GitHub Pages)
5. Click **"Create repository"**

### Step 2 — Upload the Files
Upload these 3 files to your repository root:
```
index.html          ← static shell (never changes)
daily-data.js       ← today's data (auto-updated daily)
.github/
  workflows/
    daily-update.yml  ← the automation script
```

To upload: In your repo, click **"Add file" → "Upload files"** and drag them in.

> ⚠️ For `.github/workflows/daily-update.yml` you need to create the folder structure manually:
> Click **"Add file" → "Create new file"** → type `.github/workflows/daily-update.yml` → paste the content.

### Step 3 — Enable GitHub Pages
1. In your repo → **Settings** → **Pages**
2. Under "Source" → select **"Deploy from a branch"**
3. Branch: **main** · Folder: **/ (root)**
4. Click **Save**
5. Your URL will be: `https://YOUR-USERNAME.github.io/signal-newsletter`

### Step 4 — Add Your Anthropic API Key
1. Get your free API key at [console.anthropic.com](https://console.anthropic.com)
2. In your GitHub repo → **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"**
4. Name: `ANTHROPIC_API_KEY`
5. Value: your API key (starts with `sk-ant-...`)
6. Click **"Add secret"**

### Step 5 — Test It
1. Go to your repo → **Actions** tab
2. Click **"🗞️ Generate Daily SIGNAL Newsletter"**
3. Click **"Run workflow"** → **"Run workflow"**
4. Watch it run (takes ~30 seconds)
5. Visit your GitHub Pages URL — it should show today's fresh data!

---

## 💰 Cost

| Item | Cost |
|------|------|
| GitHub (repo + Actions + Pages) | **Free** |
| Claude API per newsletter | **~$0.016** |
| Per month (20 weekdays) | **~$0.32** |
| Per year | **~$3.84** |

First **$5 free** on new Anthropic accounts = ~15 months free.

---

## 📁 File Structure

```
signal-newsletter/
├── index.html              # Static shell — NEVER regenerated
├── daily-data.js           # Dynamic data — regenerated every morning
└── .github/
    └── workflows/
        └── daily-update.yml  # GitHub Action schedule
```

**index.html** is ~100% static HTML/CSS/JS. It never changes.
**daily-data.js** is ~1,000 tokens of JSON. Only this is sent to Claude each day.
This architecture reduces API costs by ~85% vs regenerating the full HTML daily.

---

## 🔧 Customization

To change which stocks are tracked, edit the `PROMPT` variable in `daily-update.yml`.

To change the update time, edit the cron schedule:
```yaml
- cron: '0 6 * * 1-5'   # 06:00 UTC = 07:00 CET weekdays
- cron: '0 5 * * 1-5'   # 06:00 CET
- cron: '0 6 * * 1-7'   # Include weekends
```

---

## ❓ Troubleshooting

**Page shows "Loading..." but never updates:**
→ Check that `daily-data.js` exists in your repo root

**GitHub Action fails:**
→ Check your `ANTHROPIC_API_KEY` secret is set correctly

**GitHub Pages not working:**
→ Make sure repo is Public and Pages is enabled in Settings

---

*SIGNAL is for informational purposes only. Not financial advice.*
