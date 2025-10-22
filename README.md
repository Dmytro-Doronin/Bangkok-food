# Bangkok Food — Modern Thai Restaurant App

**Bangkok Food** is a full-stack web application that demonstrates a clean **MVC-like architecture** using **Express.js** for the backend and **Vanilla JavaScript (ES Modules)** for the frontend.

### [Live Demo →](https://bangkok-food-ld5m.vercel.app/#/products)

The app allows users to:
- Browse dishes by categories (via a ribbon menu),
- Filter and sort by spiciness, nuts, and vegetarian options,
- Add dishes to the shopping cart,
- Manage item quantities directly in the cart,
- View product details and recommendations (carousel),
- Submit a delivery form with total price calculation.

---

## Screenshots
1. **Product Carousel (Recommendations)**  
   ![Carousel Screenshot](https://i.imgur.com/eCwhE1I.png) — shows horizontal carousel with recommendations.

2. **Homepage / Ribbon Menu**  
   ![Carousel Screenshot](https://i.imgur.com/KxQaCuP.png) — shows categories and ribbon scrolling arrows.

3. **Product Grid**  
   ![Carousel Screenshot](https://i.imgur.com/DReoFSo.png) — displays product cards with the "Add to cart" button.

4. **Shopping Cart Page**  
   ![Carousel Screenshot](https://i.imgur.com/AkIrPPT.png) — includes product list, quantity controls (+ / -), and total price.


## Project Architecture

The project follows an **MVC-like modular structure** for the frontend:
#### Client
```
src/
├── api/              # Communication with backend API
├── controllers/      # Handles events and updates views (like mini-MVC controllers)
├── lib/              # Small reusable helper functions
├── pages/            # Page-level components (e.g., ProductsPage, CartPage)
├── sections/         # Combined View + Controller parts (modular UI sections)
├── styles/           # SCSS / CSS files and mixins
├── utils/            # LocalStorage, cart logic, form updates
├── views/            # Pure HTML structure generators (no logic)
│
├── app.js            # Entry point for client logic
├── data.js           # Static data (categories, etc.)
└── router.js         # Custom SPA router
index.html            # Main HTML entry
```

#### Server 
```
server/
├── dist/                 # Compiled TypeScript output
├── node_modules/         # Dependencies
└── src/
    ├── controllers/      # Express route controllers (business logic)
    ├── db/               # MongoDB connection setup
    ├── repositories/     # Data access layer (Mongoose queries)
    ├── routes/           # API route definitions
    ├── types/            # TypeScript interfaces and models
    ├── utils/            # Shared server utilities
    ├── app.ts            # Express app setup
    ├── compositionRoot.ts# InversifyJS DI container bindings
    └── index.ts          # Server entry point
│
├── package.json          # Server dependencies
├── tsconfig.json         # TypeScript configuration
└── vercel.json           # Vercel deployment config
```

---

## Backend Overview

**Tech stack:**
- Node.js + Express.js
- MongoDB + Mongoose
- InversifyJS for dependency injection
- TypeScript with decorators enabled

## Frontend Overview

**Tech stack:**
- Pure JavaScript (no frameworks)
- Modular ES6 imports
- Components and controllers for each section
- State and UI synchronization via custom events
- Data persistence using localStorage


## Key Features
- Fully functional shopping cart with live quantity updates
- Dynamic ribbon navigation with scroll arrows
- Custom carousel with smooth transitions
- Modular structure close to MVC
- Real backend connection via REST API
- Responsive design with SCSS mixins (@mixin laptop etc.)
- Loading states and graceful error handling

## Environment Variables
#### Before running the backend, you need to create a .env file inside the /server directory.

##### Example .env file
```PORT=3002
MONGO_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>
```

## Local Development

#### 1. Install dependencies
npm install

#### 2. Run backend (dev mode)
npm run dev

#### 3. Open frontend (served from /client)
open http://localhost:3002

