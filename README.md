# Morning Star Health Care Services - Website

Official website for Morning Star Health Care Services - Leading integrated healthcare network providing comprehensive OHC services, occupational health, pre-employment medical examinations, ambulance services, and home healthcare solutions across India.

## 🏥 About

Founded in 2021 in Kanyakumari, Tamil Nadu by Dr. Subash David (Founder & CEO), Morning Star Health Care Services is a trusted healthcare provider operating across:
- Bangalore (2022)
- Chennai (2022)
- Hyderabad (2024)
- Kolkata (2025)
- Tamil Nadu

## 🚀 Tech Stack

- **React 19.1.0** - UI Library
- **Vite 6.3.5** - Build Tool
- **Tailwind CSS 3.4.1** - Styling
- **React Router 7.10.1** - Routing
- **Framer Motion 12.23.26** - Animations
- **GSAP 3.14.2** - Advanced Animations
- **React Hook Form 7.68.0** - Form Management
- **EmailJS 4.4.1** - Contact Form
- **Lucide React** - Icons

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Get your EmailJS credentials from: https://www.emailjs.com/

## 📁 Project Structure

```
ambulanceService/
├── public/
│   ├── robots.txt
│   └── favicon.png
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── WhatsAppChat.jsx
│   │   ├── StickyContactBar.jsx
│   │   └── ui/
│   │       └── Button.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── images/
│   ├── videos/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
└── tailwind.config.js
```

## 🎨 Features

- ✅ Responsive Design (Mobile, Tablet, Desktop)
- ✅ Modern UI with Tailwind CSS
- ✅ Smooth Animations (Framer Motion + GSAP)
- ✅ SEO Optimized (Meta Tags + Structured Data)
- ✅ Contact Form with EmailJS
- ✅ WhatsApp Integration
- ✅ Sticky Contact Bar
- ✅ 404 Error Page
- ✅ Fast Loading (Vite)
- ✅ Clean Code Structure

## 📱 Pages

1. **Home** - Hero section, services overview, statistics, testimonials
2. **About** - Company history, founder profile, expansion timeline
3. **Services** - 7 healthcare services with detailed information
4. **Projects** - 13+ completed and ongoing projects
5. **Contact** - Contact form, location map, contact information

## 🛠️ Deployment

### Netlify (Recommended)

Already configured with `netlify.toml`. Simply:
1. Connect your GitHub repository
2. Netlify will auto-deploy

### Manual Build

```bash
npm run build
# Upload 'dist' folder to your hosting
```

## 📞 Contact Information

- **Phone**: +91 97901 54835
- **Email**: morningstarhealthcareservicess@gmail.com
- **Website**: https://morningstarhealthcare.in

## 📄 License

Copyright © 2021-2026 Morning Star Health Care Services. All rights reserved.

## 👨‍💻 Development

Developed with ❤️ for Morning Star Health Care Services