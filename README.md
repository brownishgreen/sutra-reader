# Sutra Reader - 金剛經誦讀器
A web application for reciting and reflecting on the Diamond Sutra, designed to provide a verse-by-verse reading experience with interpretive notes and real-time reading progress.This project includes smooth animation effects, dark/light theme switching, and is built with Vue 3 and Vite.
一個極簡的金剛經誦讀網頁應用程式，提供一邊誦讀一筆理解釋義的閱讀體驗，並且即時呈現閱讀進度。
此專案包含動畫特效、支援深淺主題切換，使用 Vue 3、Vite 開發。

## Feature 功能特色

- **Supports Light / Dark mode toggle (sun/moon icon switching)**  
  支援 Light / Dark 模式切換（太陽 / 月亮圖示切換）

- **Smooth chapter entrance animation using IntersectionObserver on scroll**  
  使用 IntersectionObserver 每個章節依滑鼠滾動後柔和進場

- **Real-time reading progress tracking with a dynamic footer progress bar**  
  誦讀時即時計算進度，並顯示於 Footer 的進度條

- **Responsive Web Design for both desktop and mobile devices**  
  RWD 設計，手機與桌機皆可流暢使用

- **Annotation tooltips for enhanced comprehension of sutra content**  
  支援註解 tooltip 顯示，輔助理解經文內容

- **Structured with Vue Router, including About and Contact subpages**  
  Vue Router 結構，支援 About / Contact 子頁面


## Tech Stack 技術棧

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [SCSS](https://sass-lang.com/)
- [GitHub Pages](https://pages.github.com/)
- [Custom Domain + Subdomain](https://yuanologue.com)

## Live Preview 線上預覽

[sutra-reader.yuanologue.com](https://sutra-reader.yuanologue.com)

## Installation & Development 安裝與開發

```bash
npm install
npm run dev
