# zohbyte Portfolio

A personal portfolio website for Zoey Linardos (zohbyte), based on [developerFolio](https://github.com/saadpasta/developerFolio).

## License

This project is licensed under the GNU General Public License v3.0 (GPL-3.0). See the [LICENSE](LICENSE) file for details.

## Based on developerFolio

This portfolio is a modified version of [developerFolio](https://github.com/saadpasta/developerFolio) by [Saad Pasta](https://github.com/saadpasta), which is also licensed under GPL-3.0.

**Original Project:** [developerFolio](https://github.com/saadpasta/developerFolio)  
**Original License:** GNU General Public License v3.0

## Modifications

This is a modified version of developerFolio. The following changes have been made:

### Customizations
- **Custom Domain**: Configured for `zohbyte.dev` with CNAME support
- **Contact Information**: Updated to use `contact@zohbyte.dev`
- **Experience Cards**: 
  - Fixed alignment issues with logos and text
  - Added uniform card layout with consistent spacing
  - Fixed text overflow and wrapping issues
  - Added support for clickable links in experience entries
- **Button Spacing**: Adjusted spacing between contact and resume buttons
- **Styling**: Customized color scheme and visual design
- **Content**: Personalized all portfolio content for Zoey Linardos

### Technical Changes
- **GitHub Actions**: Updated workflows to use Node.js 20.x
- **Deployment**: Fixed GitHub Pages deployment configuration
- **Code Quality**: Applied Prettier formatting and fixed linting issues
- **Dependencies**: Updated and maintained project dependencies

## Getting Started

### Prerequisites
- Node.js 20.x or higher
- npm 6.9.0 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/zohbyte/zohbyte.github.io.git

# Navigate to the project directory
cd zohbyte.github.io

# Install dependencies
npm install

# Start development server
npm start
```

The site will be available at `http://localhost:3000`.

### Building for Production

```bash
npm run build
```

## Deployment

This portfolio is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `master` branch. The built site is deployed to the `gh-pages` branch.

The site is available at:
- **Custom Domain**: [https://zohbyte.dev](https://zohbyte.dev)
- **GitHub Pages**: [https://zohbyte.github.io](https://zohbyte.github.io)

## Technologies Used

- React
- SCSS
- GitHub Pages
- GitHub Actions

## License Notice

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the [GNU General Public License](https://www.gnu.org/licenses/) for more details.

---

**Modified:** December 2024  
**Original Project:** [developerFolio](https://github.com/saadpasta/developerFolio) by Saad Pasta
