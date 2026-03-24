# 💒 WedlockBD - A Premium Matrimonial Platform (Client-Side)

Welcome to **WedlockBD**, a modern, feature-rich matrimonial platform designed to connect individuals seeking life partners. This is the **Frontend/Client-side** implementation built with React and Vite.

## 🌟 Key Features

*   **Interactive Discover Page:** Browse, filter, and search through verified biodatas with ease.
*   **Role-Based Dashboards:** 
    *   **User Dashboard:** Manage your own biodata, view saved favorites, check the status of your contact requests, and write success stories.
    *   **Admin Dashboard:** Oversee all users, approve premium biodata upgrade requests, manage contact requests, and view site analytics.
*   **Secure Contact Requests:** Users can securely request the contact information (Phone/Email) of other biodatas via an integrated Stripe Checkout flow.
*   **Premium Biodata Upgrades:** Users can pay via Stripe to upgrade their free biodata to a Premium Biodata for better visibility.
*   **Success Stories:** Couples who met through the platform can share their marriage success stories, which admins can feature on the homepage.
*   **Profile Analytics:** Track and display how many times a profile has been viewed.
*   **Responsive UI:** Fully styled using Tailwind CSS for a seamless experience on desktop and mobile.

## 🛠️ Technology Stack

*   **Framework:** React (Vite for fast tooling)
*   **Routing:** React Router v6
*   **Styling:** Tailwind CSS + DaisyUI
*   **HTTP Client:** Axios (Custom `axiosSecure` with JWT interceptors)
*   **Payments:** Stripe.js
*   **Image Hosting:** ImgBB API

## 🚀 Getting Started (Local Setup)

Follow these instructions to run the **WedlockBD Client** on your local machine.

### 1. Prerequisites
*   Node.js (v18+ recommended)
*   NPM or Yarn installed

### 2. Installation
Navigate into the client directory and install dependencies:
```bash
cd client
npm install
```

### 3. Environment Variables
Create a `.env.local` file in the root of the `client` directory and add your API keys:
```env
# ImgBB API Key for Profile Image Uploads
VITE_IMGBB_KEY=your_imgbb_secret_key

# Stripe Public Key for Checkout Sessions
VITE_STRIPE_PUBLIC_KEY=pk_test_your_stripe_public_key
```

### 4. API Configuration
Ensure that `baseURL` inside `src/hooks/useAxiosSecure.jsx` and `src/hooks/useAxiosPublic.jsx` is pointed to the correct backend server URL:
*   **For Local Development:** `http://localhost:5000`
*   **For Production:** `https://wedlock-bd-server.vercel.app`

### 5. Running the App
Start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

## 📦 Deployment Protocol
Before deploying to your hosting provider (like Firebase or Vercel):
1. Update Axios `baseURL` logic to point to the production backend.
2. Build the project using `npm run build`.
3. Ensure Environment Variables are configured in your hosting platform.
