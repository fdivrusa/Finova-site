# Finova - Official Website

This repository contains the source code for the landing page of **Finova**, the offline financial validation toolkit for .NET.

**🌐 Live Site:** [https://finovapackage.netlify.app/](https://finovapackage.netlify.app/)

## 🛠️ Tech Stack

This website is built with a focus on simplicity and performance. It uses a **No-Build** approach, meaning you don't need `npm install` or a bundler like Webpack to edit it.

* **HTML5**: Semantic structure.
* **Tailwind CSS (CDN)**: Utility-first styling loaded directly via CDN.
* **Alpine.js**: Lightweight JavaScript for handling the mobile menu and simple interactivity.
* **Lucide Icons**: Beautiful, consistent SVG icons.
* **Google Fonts**: Inter font family.

## 📂 Project Structure

```text
/
├── assets/
│   └── images/          # Favicons, social preview images, and logos
├── index.html           # Main landing page (SEO optimized)
├── app.js               # Translation logic and dynamic behavior
└── site.webmanifest     # PWA manifest file
````

## 🚀 Running Locally

Because this project relies on CDN links, it is incredibly easy to run.

### Option 1: VS Code Live Server (Recommended)

1.  Open the project folder in **VS Code**.
2.  Install the **Live Server** extension.
3.  Right-click `index.html` and select **"Open with Live Server"**.

### Option 2: Python Simple Server

If you have Python installed, you can run a temporary server in the terminal:

```bash
# Python 3
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## 🌍 Localization (i18n)

The website includes a lightweight custom localization system found in `app.js`.

  * **Content:** Text is stored in the JSON objects within `app.js` (English, French, Dutch).
  * **HTML:** Elements to be translated use the `data-i18n="key_name"` attribute.
  * **Switcher:** The language dropdown updates the text dynamically without reloading the page.

To add new translations, simply add the keys to the language objects in `app.js`.

## 🎨 Customization

  * **Colors:** The site uses a custom Tailwind config defined inside the `<script>` tag in `index.html` (Zinc & Cyan/Blue palette).
  * **Animations:** Scroll-triggered animations are handled via the `IntersectionObserver` in the footer of `index.html`.

## 📦 Deployment

This site is static and can be deployed anywhere (Netlify, Vercel, GitHub Pages).

**Netlify Settings:**

  * **Build command:** *(Leave empty)*
  * **Publish directory:** `/` (Root directory)

## 📄 License

This website content is part of the Finova project.