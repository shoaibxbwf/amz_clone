# Deployment Guide

## GitHub Pages Setup

### Step 1: Repository Setup
1. Create a new repository on GitHub
2. Upload all project files to the repository
3. Make sure the main branch contains all files

### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "GitHub Actions"
5. The deployment will start automatically

### Step 3: Access Your Site
- Your site will be available at: `https://yourusername.github.io/repository-name`
- Wait 2-3 minutes for the initial deployment

## Troubleshooting

### Common Issues:
1. **Access Denied**: Make sure repository is public
2. **404 Error**: Check if index.html is in root directory
3. **Blank Page**: Check browser console for JavaScript errors

### Solutions:
- Ensure all file paths are correct
- Check that all components are properly loaded
- Verify GitHub Actions workflow is running

## File Structure

├── index.html
├── styles/
├── components/
├── utils/
├── .github/workflows/
├── .nojekyll
└── _config.yml
