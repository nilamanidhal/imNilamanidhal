import images from "../Images";

// "All", "Full-stack projects",

//  "Front-end projects"
const projectData = [
 
  //Front-End Projects
  {
    title: "Swiggy Food Order",
    category: "Front-end projects",
    images: [images.swiggy],
    live: "https://zwiggi.netlify.app/",
    repo: "https://github.com/nilamanidhal/",
    alt: "Swiggy",
    desc: `Swiggy Clone - A Responsive Food Delivery Frontend with User Authentication

A fully responsive Swiggy clone showcasing real-world food delivery flows, equipped with user authentication and order history management for personalized experiences. Built to demonstrate practical frontend skills, UI structuring, and modular design.

✨ Features

✅ User Authentication: Sign up and log in to place and track orders securely
✅ Personalized Cart: Cart persists per user, allowing seamless checkout later
✅ Order History: Users can view their past orders and reorder easily
✅ Home Page Restaurant Listings: Displays restaurant cards with images, pricing, and ratings
🛒 Add-to-Cart Functionality: Add and manage items with real-time price updates
🔍 Search Filter: Quickly filter restaurants and food items
📱 Fully Responsive Design: Works seamlessly on mobiles, tablets, and desktops
⚡ Smooth Animations: Interactive hover and scroll effects for premium UX
📂 Clean Modular Code: Ready for scalability and feature extension
⚛️ Built with React (or HTML/CSS/JS) + Local Storage for state persistence`,
  },

  {
    title: "Weather Application",
    category: "Front-end projects",
    images: [
      images.weather,
    ],
    live: "https://nilamanidhal.github.io/weather_detection.github.io/",
    repo: "https://nilamanidhal.github.io/",
  
    alt: "Weather Application",
    desc: `A user-friendly weather application that provides real-time weather updates based on user search, designed to enhance your everyday planning with clean UI and accurate data fetching from a live API.

✨ Features

✅ Live Weather Fetching using a reliable weather API
📍 Search by City Name to get instant weather details
🌡️ Displays current temperature, humidity, and wind speed
🌥️ Shows weather condition descriptions (cloudy, clear, etc.)
📱 Fully Responsive Design for seamless use across mobile, tablet, and desktop
⚡ Clean, minimal UI for distraction-free information consumption
📂 Vanilla JavaScript Project demonstrating API handling and DOM manipulation
💾 Uses localStorage to persist last searched city for quick reloads`,
  },

  {
    title: "Cal.com",
    category: "Front-end projects",
    images: [
      images.cal,
    ],
    live: "",
    repo: "https://github.com/nilamanidhal/Qlith_Assignment1.github.io",
    alt: "Cal.com Web",
    desc: `This is a simple and responsive Age Calculator built using HTML, CSS, and JavaScript. It calculates the exact age in years, months, and days from the date of birth entered by the user.

    🚀 Features

        📦 Lightweight and beginner-friendly
        🛠️ Tech Stack

        HTML - For the structure of the app
        CSS - For styling`,
  },

  {
    title: "Previous Portfolio",
    category: "Front-end projects",
    images: [
      images.oldportfolio,
    ],
    live: "https://nilamani-portfolio.netlify.app/",
    repo: "https://github.com/nilamanidhal/",
    alt: "Old Portfolio",
    desc: `This is my old portfolio, if you have time check this out,`,
  },
];

export default projectData;
