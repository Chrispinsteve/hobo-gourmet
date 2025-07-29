# 🍽️ Hobo's Gourmet - Restaurant Website

A modern, responsive restaurant website built with HTML, CSS, and JavaScript. Features an interactive menu, shopping cart, reservation system, and enhanced user experience.

> **Note:** This demo uses Tailwind CSS CDN for simplicity. For production use, follow the Production Setup guide below.

## ✨ Features

- **Interactive Menu** with search and filtering
- **Shopping Cart** with persistent storage
- **Reservation System** with form validation
- **Responsive Design** for all devices
- **Accessibility** compliant with WCAG guidelines
- **Offline Support** with service worker
- **Performance Optimized** with lazy loading
- **Modern UI/UX** with smooth animations

## 🚀 Live Demo

Visit the live website: [Hobo's Gourmet](https://your-username.github.io/hobo-gourmet)

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Tailwind CSS
- **JavaScript (ES6+)** - Interactive functionality
- **Service Worker** - Offline capabilities
- **Local Storage** - Data persistence
- **Font Awesome** - Icons
- **Google Fonts** - Typography

## 🚀 Production Setup

### Option 1: CDN (Current - Recommended for Demo)
The current setup uses Tailwind CSS CDN which is perfect for demos and prototypes. It's fast, reliable, and doesn't require build tools.

### Option 2: Build Process (For Production)
For production deployment, you can replace the CDN with a proper build process:

```bash
# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer

# Initialize Tailwind
npx tailwindcss init

# Build CSS
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

### Current Status
✅ **Working Demo**: Uses Tailwind CDN for simplicity  
✅ **All Features**: Fully functional with CDN approach  
✅ **Performance**: Optimized for demo purposes  
✅ **Deployment Ready**: Works perfectly on GitHub Pages  

The CDN warning is expected for demo sites and doesn't affect functionality.

## 📱 Features Overview

### Menu System
- Real-time search functionality
- Category filtering (Burgers, Pizza, Pasta, etc.)
- Diet preference filters (Vegan, Gluten-Free, Spicy, Organic)
- Detailed dish information with customization options

### Shopping Cart
- Add/remove items with quantity controls
- Persistent cart data across sessions
- Real-time price calculations
- Customization options (spice level, portion size, toppings)

### Reservation System
- Date and time selection
- Party size options
- Special requests handling
- Form validation and user feedback

### User Experience
- Keyboard shortcuts (Ctrl+K for search, Ctrl+C for cart)
- Smooth scrolling and animations
- Mobile-responsive design
- Accessibility features
- Loading states and notifications

## 🎯 Key Improvements Made

1. **Performance Optimizations**
   - Lazy loading for images
   - Optimized animations
   - Service worker for offline support
   - Preloaded critical resources

2. **Enhanced Accessibility**
   - ARIA labels and roles
   - Keyboard navigation
   - Focus management
   - Screen reader support

3. **Modern JavaScript**
   - Object-oriented architecture
   - Error handling
   - Local storage integration
   - Performance monitoring

4. **SEO & Meta**
   - Comprehensive meta tags
   - Open Graph support
   - Twitter Card integration
   - Structured data ready

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Local web server (optional, for development)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/hobo-gourmet.git
cd hobo-gourmet
```

2. Serve the website locally:
```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx serve . -p 3000

# Using PHP
php -S localhost:8080
```

3. Open your browser and navigate to:
   - `http://localhost:8000/hobo.html` (Python)
   - `http://localhost:3000/hobo.html` (Node.js)
   - `http://localhost:8080/hobo.html` (PHP)

## 🎮 Usage

### Keyboard Shortcuts
- `Ctrl/Cmd + K` - Focus search bar
- `Ctrl/Cmd + C` - Open shopping cart
- `Escape` - Close modals
- `Tab` - Navigate through elements

### Menu Interaction
1. **Search**: Type in the search bar to filter dishes
2. **Filter**: Click category buttons or diet filters
3. **View Details**: Click "View Details" for customization
4. **Add to Cart**: Customize and add items to cart

### Cart Management
1. **Add Items**: Click "Add to Cart" buttons
2. **Customize**: Use the detail modal for options
3. **Manage**: Adjust quantities or remove items
4. **Checkout**: Proceed to checkout (demo functionality)

## 📁 Project Structure

```
hobo-gourmet/
├── hobo.html          # Main website file
├── sw.js             # Service worker for offline support
├── README.md         # Project documentation
└── .gitignore        # Git ignore file
```

## 🔧 Customization

### Adding New Dishes
Edit the `getDishData()` function in the JavaScript to add new menu items with detailed information.

### Styling Changes
Modify the CSS in the `<style>` section or add external stylesheets.

### Functionality Extensions
The modular JavaScript architecture makes it easy to add new features.

## 🌐 Deployment

### GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select main branch as source
4. Your site will be available at `https://username.github.io/repository-name`

### Other Platforms
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect GitHub repository
- **Firebase**: Use Firebase Hosting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Tailwind CSS** for the utility-first CSS framework
- **Font Awesome** for the beautiful icons
- **Google Fonts** for the typography
- **Unsplash** for the high-quality images

## 📞 Contact

For questions or support, please open an issue on GitHub.

---

**Built with ❤️ for modern web experiences** 