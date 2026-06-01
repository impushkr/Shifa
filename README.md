# Shifa (Women's Fashion E-Commerce App)

A modern and responsive Women's Fashion E-Commerce web application built using **React.js** and **Context API**.

This project allows users to browse products, view details, add items to cart, manage wishlist, and explore different fashion categories.

---

## Live Features

- Product Search
- Add to Cart
- Add to Wishlist
- Product Details Page
- Fully Responsive Design
- Scroll to Top on Route Change
- Related Products Section
- Share Product Feature
- Discount & Price Calculation
- Order Summary Section

---

## Tech Stack

- **React.js**
- **React Router DOM**
- **Context API (Cart, Wishlist, Search)**
- **Tailwind CSS**
- **Lucide React Icons**
- **Swiper.js (Carousel)**

---

## Project Structure

src/
│
├── components/
│ ├── Navbar.jsx
│ ├── Footer.jsx
│ ├── ScrollToTop.jsx
│ └── OfferCarousel.jsx
│
├── context/
│ ├── CartContext.jsx
│ ├── WishlistContext.jsx
│ └── SearchContext.jsx
│
├── data/
│ └── womens/
│
├── pages/
│ ├── Homepage.jsx
│ ├── Products.jsx
│ ├── ProductDetails.jsx
│ ├── Cart.jsx
│ └── Wishlist.jsx
│
└── App.jsx

---

## Installation & Setup

1. Clone the repository:

https://github.com/impushkr/Shifa.git

2. Navigate to project folder:

cd .\Shifa\


3. Install dependencies:

npm install


4. Start development server:

npm run dev


---

## Main Functionalities

### Cart System
- Increase / decrease quantity
- Remove items
- Calculate subtotal & discount
- Prevent duplicate entries

### Wishlist System
- Add / Remove products
- Move items to cart

### Product Details
- Dynamic routing using product ID
- Image gallery (desktop & mobile)
- Size selection validation
- Share product using Web Share API

---

## Future Improvements

- User Authentication
- Payment Gateway Integration
- Backend Integration
- Order History Page
- Product Filtering & Sorting

---

## Author

Built with ❤️ by **Pushkar Singh**

Frontend Developer | React Enthusiast

## Live Demo
https://shifa-closet.vercel.app/