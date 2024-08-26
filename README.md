# Food Ordering App 🚀

# Description

`This is a modern and responsive food ordering application built with React.js and Tailwind CSS. The app allows users to browse through a list of restaurants and dishes, place orders, and track their food in real time. The application fetches live data directly from the Swiggy website, ensuring that users always have access to the most up-to-date information.`

## Features
- Real-time Data: The app integrates with Swiggy's live API to fetch real-time data, including restaurant details, menu items, and availability.
- Responsive Design: Built with Tailwind CSS, the app is fully responsive and works seamlessly across various devices.
- Efficient Bundling: Parcel is used as the bundler, ensuring fast builds and optimized performance.
- Interactive UI: The React.js framework is utilized to create a dynamic and interactive user interface.
- Easy to Use: The app is designed to be user-friendly, making it simple for users to search for restaurants, view menus, and place orders.

## Technologies Used
 - React.js: JavaScript library for building user interfaces.
- Tailwind CSS: A utility-first CSS framework for quickly styling the app.
- Parcel: A fast, zero-configuration web application bundler.
- Swiggy API: To fetch live data from the Swiggy platform.

# API Integration

* The application integrates with the Swiggy API to retrieve real-time data. This includes:

- Restaurant Listings: Fetches a list of nearby restaurants.
- Menu Items: Displays the available dishes for each restaurant.
- Order Tracking: Provides real-time tracking information for orders.

# Folder Structure

├── src
│   ├── components    # Reusable UI components
│   ├── pages         # Different pages of the application
│   ├── services      # API calls and data fetching logic
│   ├── styles        # Global styles and Tailwind CSS configurations
│   ├── App.js        # Main application component
│   └── index.js      # Entry point for React
├── public            # Static files (HTML, images, etc.)
├── package.json      # Project dependencies and scripts
├── tailwind.config.js# Tailwind CSS configuration
└── README.md         # Project documentation


# Redux toolkit 
 - Install @reduxjs/toolkit and react-redux
 - Build  store
 - Connect store to app
 - Slice (cart slice)
 - dispatch(action)
 - selector