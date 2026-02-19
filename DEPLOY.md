# Deploy Lunaville to Vercel

## Step 1: Push to GitHub

Your files are already staged. Run these in a terminal **inside the lunaville folder**:

```powershell
# Set your identity (once per machine - use your GitHub email)
git config --global user.email "your-email@example.com"
git config --global user.name "FarmDaVictim"

# Commit
git commit -m "Lunaville - space-themed tufting studio site"

# Use main branch (GitHub default)
git branch -M main

# Add your GitHub repo
git remote add origin https://github.com/FarmDaVictim/LunaVilleSite.git

# Push
git push -u origin main
```

If `origin` already exists: `git remote set-url origin https://github.com/FarmDaVictim/LunaVilleSite.git`

## Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and **sign in with GitHub**
2. Click **Add New** → **Project**
3. Import **FarmDaVictim/LunaVilleSite**
4. Vercel auto-detects Vite; leave **Build Command** (`npm run build`) and **Output Directory** (`dist`) as is
5. Click **Deploy**
6. Wait ~1–2 minutes – you’ll get a live URL like `https://luna-ville-site.vercel.app`

Future pushes to `main` will trigger new deployments automatically.

## Manual deploy (Vercel CLI)

```bash
npm i -g vercel
cd lunaville
vercel
```

Follow the prompts. Use `vercel --prod` for production.

## Build & preview locally

```bash
npm run build
npm run preview
```

Opens a local preview of the production build at `http://localhost:4173`.
