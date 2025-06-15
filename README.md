# Amazon India Clone

A fully functional Amazon India clone built with React, featuring authentic design, shopping cart functionality, and Indian pricing.

## ✅ Features

- 🛒 **Shopping Cart**: Add/remove items, update quantities
- 💰 **Indian Pricing**: All prices in Indian Rupees (₹)
- 📍 **Local Delivery**: Delivery to Indian cities
- 🎨 **Animations**: Smooth transitions and hover effects
- 📱 **Responsive**: Works on desktop and mobile
- 🔍 **Search**: Product search functionality
- ⏰ **Live Deals**: Countdown timer for daily deals
- 🇮🇳 **Indian Products**: Kurtas, Sarees, Indian brands
- 🖼️ **High-Quality Images**: All product images load properly

## 🚀 Quick GitHub Pages Deployment

### Step 1: Create Repository
1. Create a new **PUBLIC** repository on GitHub
2. Name it something like `amazon-india-clone`

### Step 2: Upload Files
1. Upload ALL files from this project to your repository
2. Make sure `index.html` is in the root directory

### Step 3: Enable GitHub Pages
1. Go to repository **Settings**
2. Scroll to **Pages** section
3. Under **Source**, select **"GitHub Actions"**
4. Wait 2-3 minutes for deployment

### Step 4: Access Your Site
- Visit: `https://[your-username].github.io/[repository-name]`
- Example: `https://johnsmith.github.io/amazon-india-clone`

## 🔧 Local Development

bash
# Clone repository
git clone https://github.com/your-username/amazon-india-clone.git
cd amazon-india-clone

# Start local server
python -m http.server 8000
# OR
npx serve .

# Open browser
http://localhost:8000


## 🐛 Troubleshooting

### ❌ Access Denied Error
- Ensure repository is **PUBLIC** (not private)
- Check that `index.html` exists in root directory
- Wait 5-10 minutes after enabling Pages

### ❌ Images Not Loading
- All images use Unsplash CDN with proper fallbacks
- Check browser console for any errors
- Images have loading animations and error handling

### ❌ Blank Page
- Open browser developer tools (F12)
- Check Console tab for JavaScript errors
- Ensure all component files are uploaded

## 📁 File Structure


├── index.html              # Main entry point
├── styles/main.css         # Styling
├── components/             # React components
│   ├── Header.js
│   ├── ProductCard.js
│   └── ...
├── utils/                  # Helper functions
├── .github/workflows/      # Auto-deployment
├── .nojekyll              # GitHub Pages config
└── README.md              # This file


## 🎯 Key Components

- **Header**: Amazon logo, search bar, cart
- **Categories**: Product categories with images
- **IndianBrands**: Popular Indian brand showcase
- **ProductGrid**: 16 Indian products with proper images
- **Deals**: Live countdown timer with special offers
- **Cart**: Full shopping cart functionality

## 📝 License

This project is for educational purposes only.

---

**Ready to deploy? Just follow the 4 steps above! 🚀**
