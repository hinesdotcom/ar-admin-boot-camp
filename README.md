# A&R Admin Boot Camp

Comprehensive documentation portal for Artist & Repertoire (A&R) administration. This project provides detailed guidance on all aspects of A&R operations including financial management, contracts, recording, clearances, publishing, and releases.

## 📚 Documentation Modules

- **Foundations** - Core A&R concepts and organizational structure
- **Systems** - Internal tools and platforms (ATLAS, UniPort)
- **Finance** - Budget management, payments, and financial processes
- **Contracts** - Legal agreements and contract templates
- **Recording** - Production workflow, producers, mixing, mastering
- **Clearances** - Rights management, sample clearance, union compliance
- **Credits** - Metadata, label copy, publishing information
- **Releases** - Release planning, production delivery, platform pitching
- **Publishing** - Royalties, mechanical rights, performance rights, sync licensing
- **Reference** - Glossary, acronyms, FAQs, and checklists

## 🚀 Quick Start

### Prerequisites

- Python 3.9 or higher
- Git
- pip (Python package manager)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-github-username/ar-admin-boot-camp.git
   cd ar-admin-boot-camp
   ```

2. **Create a virtual environment** (recommended)
   ```bash
   # On Windows
   python -m venv venv
   venv\Scripts\activate
   
   # On macOS/Linux
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

### Run Locally

Start the MkDocs development server:
```bash
mkdocs serve
```

The site will be available at `http://localhost:8000`

### Build the Site

Generate the static site:
```bash
mkdocs build
```

Output will be in the `site/` directory.

## 📦 Features

✅ **Search** - Full-text search across all documentation  
✅ **Dark Mode** - Toggle between light and dark themes  
✅ **Navigation Sidebar** - Easy navigation through all sections  
✅ **Breadcrumbs** - Clear path navigation  
✅ **Mermaid Diagrams** - Visual flowcharts and diagrams  
✅ **Mobile Responsive** - Works on all devices  
✅ **GitHub Pages Compatible** - Ready for deployment  
✅ **Code Highlighting** - Syntax highlighting for code blocks  
✅ **Table of Contents** - Auto-generated TOC for each page  

## 🌐 Deploy to GitHub Pages

### Step 1: Prepare Your Repository

1. Update `mkdocs.yml` with your GitHub username:
   ```yaml
   site_url: https://your-github-username.github.io/ar-admin-boot-camp/
   repo_url: https://github.com/your-github-username/ar-admin-boot-camp
   ```

2. Commit all changes:
   ```bash
   git add .
   git commit -m "Initial project setup"
   git push origin main
   ```

### Step 2: Deploy Using GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Build and Deploy Documentation

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.11'
      
      - name: Install dependencies
        run: pip install -r requirements.txt
      
      - name: Build documentation
        run: mkdocs build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./site
```

### Step 3: Enable GitHub Pages

1. Go to repository Settings → Pages
2. Set source to "Deploy from a branch"
3. Select "gh-pages" branch
4. Click Save

Your site will be live at: `https://your-github-username.github.io/ar-admin-boot-camp/`

### Alternative: Manual Deployment

Build and deploy manually:
```bash
mkdocs build
mkdocs gh-deploy
```

## 📋 Project Structure

```
ar-admin-boot-camp/
├── docs/
│   ├── index.md
│   ├── foundations/
│   ├── systems/
│   ├── finance/
│   ├── contracts/
│   ├── recording/
│   ├── clearances/
│   ├── credits/
│   ├── releases/
│   ├── publishing/
│   └── reference/
├── site/                 (generated after build)
├── mkdocs.yml           (configuration)
├── requirements.txt     (dependencies)
└── README.md           (this file)
```

## 🔧 Configuration

### Customize the Site

Edit `mkdocs.yml` to:
- Change site name and description
- Modify theme colors
- Add/remove plugins
- Reorganize navigation structure
- Update social media links

### Customize Styling

Add custom CSS in `docs/stylesheets/extra.css` to override Material theme defaults.

## 📖 Documentation Standards

- Use clear, concise headings
- Include examples where applicable
- Use tables for structured data
- Add checklists for processes
- Include links to related sections
- Maintain consistent formatting

## ✏️ Editing Content

1. Make changes to markdown files in the `docs/` directory
2. Test locally: `mkdocs serve`
3. Commit and push: 
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```
4. Changes will auto-deploy if using GitHub Actions

## 🐛 Troubleshooting

### Port Already in Use
If port 8000 is in use:
```bash
mkdocs serve --dev-addr localhost:8001
```

### Build Errors
- Clear build cache: `mkdocs serve --no-cache`
- Check Python version: `python --version` (requires 3.9+)
- Reinstall dependencies: `pip install -r requirements.txt --upgrade`

### GitHub Pages Not Updating
- Check GitHub Actions workflow status
- Verify `gh-pages` branch exists
- Clear browser cache (Ctrl+Shift+Delete)
- Wait up to 5 minutes for deployment

## 📝 Contributing

1. Create a new branch for your changes
2. Make updates to documentation
3. Test locally with `mkdocs serve`
4. Submit a pull request with clear description of changes

## 📄 License

[Add your license information here]

## 👥 Contact

For questions or suggestions, contact the A&R Administration team.

---

**Last Updated**: 2024
