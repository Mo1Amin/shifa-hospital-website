<div align="center">

# 🏥 Al-Shifa Hospital · مستشفى الشفاء

**A responsive Arabic (RTL) hospital website with light and dark themes.**

[![Live demo](https://img.shields.io/badge/Live%20demo-open-2563eb?style=for-the-badge&logo=googlechrome&logoColor=white)](https://mo1amin.github.io/shifa-hospital-website/)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

<img src="docs/preview.png" alt="Al-Shifa Hospital website on desktop and phone" width="100%">

</div>

## ✨ Features

- **Six pages:** home, services, doctors, news, sign-in and registration
- **Light and dark mode** with the choice remembered in `localStorage`
- **Right-to-left layout** for Arabic, using the Tajawal font
- **Responsive:** a mobile menu, and layouts that fit any screen with no sideways scrolling
- **Form validation** on sign-in and registration, with messages in Arabic
- **Details:** entrance animations, a scroll-to-top button and a custom cursor

> The sign-in and registration pages are a front-end demo; there is no server behind them.

## 🗂 Structure

```
index.html        Home
services.html     Services
doctors.html      Doctors (rendered from a data list)
news.html         News
Login.html        Sign in
register.html     Registration
style.css         Theme tokens, layout and components
js/               theme, animations, form validation, navigation
images/           Illustrations and doctor avatars
```

## ▶️ Run it

No build step. Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

---

<div align="center">Made by <a href="https://github.com/Mo1Amin">Mohamed Amin</a></div>
