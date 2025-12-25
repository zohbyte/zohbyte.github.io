# GitHub Pages Deployment Guide

## Prerequisites
- A GitHub account
- Git installed on your computer
- Node.js and npm installed

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `portfolio` or `my-portfolio`
3. **Do NOT** initialize it with a README, .gitignore, or license (if you already have local files)

## Step 2: Update package.json

1. Open `package.json`
2. Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` in the homepage field:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
   ```
   
   Example: If your username is `zohbyte` and repo is `portfolio`, it should be:
   ```json
   "homepage": "https://zohbyte.github.io/portfolio"
   ```

## Step 3: Initialize Git (if not already done)

If you haven't initialized git yet:

```bash
git init
git add .
git commit -m "Initial commit"
```

## Step 4: Connect to Your GitHub Repository

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Step 5: Deploy to GitHub Pages

Simply run:

```bash
npm run deploy
```

This will:
1. Build your React app
2. Deploy it to the `gh-pages` branch
3. Make it available at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

## Step 6: Enable GitHub Pages (if needed)

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select the `gh-pages` branch
4. Click **Save**

Your site should be live in a few minutes!

## Updating Your Site

Whenever you make changes:

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```

2. Deploy again:
   ```bash
   npm run deploy
   ```

## Troubleshooting

- **404 Error**: Make sure the homepage URL in `package.json` matches your GitHub username and repo name exactly
- **Build fails**: Make sure all dependencies are installed (`npm install`)
- **Assets not loading**: Check that the homepage URL is correct and includes the repo name

