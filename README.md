<p align="center">
  <a href="https://glamping-webapp.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Demo-Click%20Here-brightgreen" alt="Live Demo" />
  </a>
</p>

![Glamping Banner](updated-banner.png)

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="50" style="margin-right: 5px;" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" alt="ViteJS Logo" width="50" style="margin-right: 5px;" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" width="50" style="margin-right: 5px;" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" width="50" style="margin-right: 5px;" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" width="50" />       
</p>

<br/>

This project is built with Node.js and uses Express for the backend. MongoDB is utilized as the database.

## 📋 Table of Contents

1. 📖 [Introduction](#introduction)
2. 🛠️ [Tech Stacks](#tech-stacks)
3. ✨ [Features](#features)
4. 🚀 [Quick Start](#quick-start)
5. 📡 [API Endpoints](#api-endpoints)
6. 📚 [Sources](#sources)
   - 🎨 [UX/UI Design](#uxui-design)
   - 📷 [Picture Sources](#picture-sources)
7. 📞 [Contact Information](#contact-information)

## 📖 Introduction

Starlight Haven Glamping is a single page web application designed for glamping businesses catering to campers, or 'glampers,' who seek a luxurious camping experience in tents with facilities and amenities.

The web app is designed to be fully responsive, providing a seamless experience across devices like desktops, tablets, and smartphones. The layout and functionality adjust dynamically for optimal usability on any screen size.

## 🛠️ Tech Stacks

This project is built using the following technologies:

- **React**
- **Vite**
- **Express**
- **MongoDB**
- **Tailwindcss**

## ✨ Features

- **Comprehensive Sections**: Includes Hero, About, Accommodation, Experience (with sub-sections for Activities and Amenities), Gallery, Testimonials, Footer, and a Reservation Form.
- **Responsiveness**: Fully mobile-responsive design ensuring optimal user experience on all devices.
- **Secure Authentication**:
  - Registration and login functionality using JWT tokens with local Passport strategy.
  - Google authentication for convenient and secure user sign-in.
- **Modern Design Trends**: Features contemporary design elements like parallax hero section and footer & bento grids that enhance visual appeal.
- **Smart Reservation Form**: Automatically fills out parts of the reservation form with user information retained after login, streamlining the booking process.
- **Reservation Confirmation**: Automated email confirmations to secure and confirm reservations.

## 🚀 Quick Start

1. Clone this repository.
2. Install dependencies in the client and server directories using `npm install`.
3. Create a `.env` file in the client and server directories.
4. Add the following environment variables to the `.env` file:

   Client:

   - `VITE_BASE_URL=`

   Server:

   - `MONGODB_URL=`
   - `CLIENT_URL =`
   - `MAIL_HOST=`
   - `MAIL_PORT=`
   - `MAIL_SECURE=`
   - `MAIL_USERNAME=`
   - `MAIL_PASSWORD=`
   - `MAIL_FROM=`
   - `SECRET_KEY=`
   - `GOOGLE_CLIENT_ID=`
   - `GOOGLE_CLIENT_SECRET=`
   - `GOOGLE_CALLBACK_URL=`

5. Start the client and server with `npm run dev`.

## 📡 API Endpoints

### Reservations Endpoint

- **Path:** `api/reservations`
- **Method:** `POST`
- **Description:** Handles reservations for tents, including capturing reservation details and sending confirmation emails.

### Users Endpoint

- **Path:** `api/users`
- **Description:** Manages user registration, login, and authentication including support for Google OAuth.

## 🎨 UX/UI Design

I created & designed it.

## 📷 Picture Sources

The pictures used in this project are sourced from [Pexels](https://www.pexels.com/) and [Unsplash](https://unsplash.com/), which provide free-to-use images. All images included in this repository are licensed for use in this project.

## 📞 Contact Information

For any questions, feedback, or collaboration opportunities, feel free to reach out!

- **Email:** [My Email Address](mailto:nikkielizatran@gmail.com)
- **GitHub:** [My GitHub Profile](https://github.com/iamnikkixo)
