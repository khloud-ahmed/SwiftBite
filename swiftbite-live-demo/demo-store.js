// SwiftBite Live Demo State & Flow Coordinator
// Uses localStorage to synchronize states across multiple static HTML pages

(function () {
  // --- Seed Data ---
  const DEFAULT_RESTAURANTS = [
    {
      id: "lombardis",
      name: "Lombardi's Pizza",
      rating: 4.8,
      cuisines: "Italian • Pizza • Gourmet",
      time: "20-30 min",
      fee: "$2.99 Fee",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNwLO14Oj3IZGGjxEiw8PQO9jurXbHDE6jcANT3BNnsZ8NLFEjVXRMpHJFh8qBrcCMYzWHFY9yQFPDc7egzUVNqc7JGp8tSFanBqfh-U4xRFiTGBdKpUjZqGBai5SBMEpaHTCmDt81gtZVKok64TRMO3FUVL94D14pcEv5fLPY5vVbKU2gEToqQ9G_MUEsPAzIVbN0UQVIU3NUlSTLTfboSPmfSi7aHvhK_aPOxssMulzffagjUBonEbIewgRGP-E5Yp0RXfoZ-BHg",
      cover: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
      logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4RmuyhIWTEiUsRwl6jLHPHCFfJw5BwOpmzjMmtXXaCuqivVBH0iSsEktTX3bCznMs_XDu6J6-LEpO1L_5n_YENjIpxjHYlX-XaYXpQJi2ZgAiBG1DbAoWU7p-Yu3CSHN0CV1bmCMLPSOnJLytAFQeBcIRh0NLfuz6S4y8suCzqYHYURwZDZYLf51it8wB_lX1Fww7s0k5SxwWldxDdLSMXFxazUQYUtSL86zkuPP9I25CWtw8e4c9Lj9rCukYu3O3hk9jrgXIkBnG"
    },
    {
      id: "sushikazu",
      name: "Sushi Kazu",
      rating: 4.6,
      cuisines: "Japanese • Sushi • Healthy",
      time: "30-45 min",
      fee: "$0.00 Fee",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpd0j3E2Sbzqq4QWxw8joWDgRtRGuC9_VWc9I9QWBUwsSsaNhRZ3HFj-7GE3aGWOWUvZ8ZU1PToKwZ9__1pdkiueZZ8bST56cz_37mUUMnXvGPYJ6oQ3XWKqHE9YnjIiQUVbZt28H1AZOVM7m3-MsuFRU9HJXrbTtTd_aa3PuOZeJAoyZinPqIObxQjeTqGzxLh_5VpXc19sn4xwP9_wuXxuuduvBsiovPXJbZjJ85G-G6rBnmRVEVR0VyJvQnzLHmNkWtACjhw7MD",
      cover: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
      logo: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=100&q=80"
    },
    {
      id: "irongrill",
      name: "Iron Grill Burgers",
      rating: 4.9,
      cuisines: "American • Burgers • Fast Food",
      time: "15-25 min",
      fee: "$1.49 Fee",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDss1DhT95H8ix3GxrC4jgbdIFGaD3baVBp2IirbBD36DuAPrsH6jb_UYcJiF6G-HTsy1fR2qwFr-R_Pre6DMgJCyPL7rE7vOjvC7LpSA6fAWInSSTHaHc_YIv59jsoIBqnF4PIiXcPl0DYHomu40EYYM4dm_IGqty8XpLGuGQ_l5_XRf__q7LOWHGfx0wJ63A3p9y_4GSSQRsX9KYKwvwDipTQidNdWv8IbIjDMdbj4TBCx9iKYngTk3vi-4LufMgDDK6hzCON_d5K",
      cover: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=1200&q=80",
      logo: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=100&q=80"
    },
    {
      id: "purelygreen",
      name: "Purely Green",
      rating: 4.7,
      cuisines: "Salads • Bowls • Vegan",
      time: "20-35 min",
      fee: "$3.99 Fee",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLWkZZk0k_tb1mA6e6zKC51HWpSkpK2ZYKHlQr2HUVgdQTENLoLCEu-DsdUeY6Q8NRLtFASm8aLO-HQPehe3ltxOLo41ee380PEEPRhob91LzJFagpEz5rDS5NC3r9pqZcvLCMVs25GCBoFAB2rn-bgjhEaMjlfdX9YwqG74ap1cKI_IuSOEHaeYpZW3G2jhHjWi92M_D9e7J4UsTeJrtIH7PUbRmeATooDiPuwid2IU090gkYmqPWFsMqbmcS0hytuwLnhzG-cyl0",
      cover: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
      logo: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=100&q=80"
    }
  ];

  const DEFAULT_MENU_ITEMS = {
    lombardis: [
      { id: "l1", name: "Truffle Avocado Toast", price: 18.50, description: "Sourdough bread, smashed organic avocado, white truffle oil, chili flakes, and micro-greens.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBA5_QqJon8J5KVF3GsmKpiWBfmmis0b7WSM8U3eCVdhh8pYIqVs2brx6yy3XtmNE_hD8N5MrtXUmKXuVBR-4XInPckpZot9Er2c7BF7BO_OSXkUrPa1JveZunhD2ec9GKccK3hexUHIivfXpGDKQ1FJhrjq6Vdv_3XtkzUEHOc9oKnSMMDBzQupRKrPSJZIzEYmEDf7aDNxcip18Ooy0Vw7XMqI_1bi88qjtpwat3tvhRjCWDdsVUaIyY24_XOX7qbV80H6iO9RBMv", category: "Popular" },
      { id: "l2", name: "Artisan Burrata Pizza", price: 22.00, description: "Wood-fired thin crust, fresh burrata, san marzano tomatoes, and basil infused oil.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDQGG71Yv0aobmq3SHdqQoMK3ri5Z_MPvA0c7meLdD33w3aoPjb_2Mc-8eRJuQNKlhnGrVQ2O-DOTh2XUv-0jHqsdvK62PIZig0S1g6ekZGE2aEKvJLMKTNkFiymX9J0aRx5hARm0pXnBk3b2xEW7jYuaNirWSABoTkNtbtS3ikmNu6nrFMOjnfkkANux4t5i8rvt2uMv7iACQKYJHh8PhNwzbY4xOp1qjq1HP2Xo_gSoFaxLEAIFz78CNMkzkT1vCRdUuW7u94htH", category: "Popular" },
      { id: "l3", name: "Classic Margherita Pizza", price: 16.50, description: "San Marzano tomatoes, fresh mozzarella, fresh basil, and extra virgin olive oil.", image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=400&q=80", category: "Main Course" },
      { id: "l4", name: "Chocolate Lava Cake", price: 9.00, description: "Rich chocolate cake with a warm, molten chocolate center, served with vanilla bean ice cream.", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80", category: "Desserts" }
    ],
    sushikazu: [
      { id: "s1", name: "Premium Sushi Platter", price: 34.00, description: "Chef's selection of 8 nigiri pieces and one spicy tuna roll.", image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=400&q=80", category: "Popular" },
      { id: "s2", name: "Salmon Sashimi (5pcs)", price: 18.00, description: "Fresh, thinly sliced Atlantic salmon served with wasabi and pickled ginger.", image: "https://images.unsplash.com/photo-1534482421-64566f976cfa?auto=format&fit=crop&w=400&q=80", category: "Main Course" },
      { id: "s3", name: "Dragon Roll", price: 21.50, description: "Eel and cucumber inside, sliced avocado and unagi sauce on top.", image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=400&q=80", category: "Main Course" },
      { id: "s4", name: "Matcha Mochi Ice Cream", price: 8.50, description: "Traditional sweet pounded rice dough wrapped around rich matcha ice cream.", image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=400&q=80", category: "Desserts" }
    ],
    irongrill: [
      { id: "i1", name: "Iron Grill Burger", price: 19.50, description: "Grass-fed beef patty, cheddar, bacon, caramelized onions, house sauce on brioche bun.", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80", category: "Popular" },
      { id: "i2", name: "Power Protein Bowl", price: 19.00, description: "Quinoa, kale, roasted chickpeas, grilled salmon, and honey-tahini dressing.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgxK6gqSl1g_cTq_dX-uPQ2kiJx-IcXkMOQ1TT1iqteyWwFR-YSZEny69ibwDcyn7GcU_osrJtDwSRK-HfaoyrirEKn9KEVHp41BdHWw1KfrxE9RQHqHaTgfuIPgKLfygAMyiJAHpluVo7eozFMOPCLDz2f3xSsRhc_BbLdUVVcJ7Jjs-8Hl0GfsEfMlFvLZsnqgVkki9Yedo0ZMBcu0lv_g_EBsDLnMVg2aAc1m9PqC0ML4e0_kd1LhlH6XsIEgUs8rzV-cidVGZl", category: "Main Course" },
      { id: "i3", name: "Angus Ribeye Steak", price: 45.00, description: "12oz grass-fed angus, garlic herb butter, and honey-glazed seasonal carrots.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGqenZjlrO347_HJQFIh70LK1zayzMIW1NF7mz1voqV06c_XeEaxrxmosl5rMELhANxNdt8THIWfDnYuyvxx9Xz9XotZe4hXuWiX63osmld9v1WHlRI8lMo7Ru-Eqvre5yDCVZOHc7jdmgR2LMa8l2sBvnGaM0X5JlRl35N_Bd-3RrviSAWQDeiNzw0jkbWA_d264OuzxVcSvIyQMoqGeP12W1kjlrQKSVh_j7tivEaqV4vkPduuOXsLwP-exbGAiTGqtILyounN8j", category: "Main Course" }
    ],
    purelygreen: [
      { id: "p1", name: "Wellness Buddha Bowl", price: 15.50, description: "Roasted sweet potatoes, quinoa, sliced avocado, steamed kale, tahini dressing.", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80", category: "Popular" },
      { id: "p2", name: "Kale & Quinoa Power Salad", price: 14.00, description: "Organic kale, tri-color quinoa, dried cranberries, goat cheese, vinaigrette.", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80", category: "Popular" }
    ]
  };

  const DEFAULT_USER = {
    name: "Khloud Ahmed",
    email: "khloud@swiftbite.com",
    phone: "+1 (555) 123-4567",
    address: "123 Market St, New York, NY"
  };

  // --- Initializer ---
  function initStore() {
    if (!localStorage.getItem("sb_initialized")) {
      localStorage.setItem("sb_restaurants", JSON.stringify(DEFAULT_RESTAURANTS));
      localStorage.setItem("sb_menu_items", JSON.stringify(DEFAULT_MENU_ITEMS));
      localStorage.setItem("sb_user", JSON.stringify(DEFAULT_USER));
      localStorage.setItem("sb_cart", JSON.stringify({ restaurantId: null, items: [] }));
      localStorage.setItem("sb_orders", JSON.stringify([]));
      localStorage.setItem("sb_initialized", "true");
    }
  }

  // --- Public Store API ---
  const store = {
    init: initStore,

    // Restaurants
    getRestaurants: () => JSON.parse(localStorage.getItem("sb_restaurants") || "[]"),
    getRestaurant: (id) => store.getRestaurants().find(r => r.id === id) || store.getRestaurants()[0],
    
    // Menu items
    getMenuItems: (restaurantId) => {
      const items = JSON.parse(localStorage.getItem("sb_menu_items") || "{}");
      return items[restaurantId] || [];
    },
    saveMenuItem: (restaurantId, item) => {
      const allItems = JSON.parse(localStorage.getItem("sb_menu_items") || "{}");
      if (!allItems[restaurantId]) allItems[restaurantId] = [];
      
      if (item.id) {
        // Edit existing
        const idx = allItems[restaurantId].findIndex(i => i.id === item.id);
        if (idx !== -1) allItems[restaurantId][idx] = item;
      } else {
        // Create new
        item.id = "custom_" + Date.now();
        allItems[restaurantId].push(item);
      }
      localStorage.setItem("sb_menu_items", JSON.stringify(allItems));
      window.dispatchEvent(new Event("storage"));
    },
    deleteMenuItem: (restaurantId, itemId) => {
      const allItems = JSON.parse(localStorage.getItem("sb_menu_items") || "{}");
      if (allItems[restaurantId]) {
        allItems[restaurantId] = allItems[restaurantId].filter(i => i.id !== itemId);
        localStorage.setItem("sb_menu_items", JSON.stringify(allItems));
        window.dispatchEvent(new Event("storage"));
      }
    },

    // User
    getUser: () => JSON.parse(localStorage.getItem("sb_user") || "null"),
    setUser: (user) => {
      localStorage.setItem("sb_user", JSON.stringify(user));
      window.dispatchEvent(new Event("storage"));
    },
    logout: () => {
      localStorage.removeItem("sb_user");
      window.dispatchEvent(new Event("storage"));
    },

    // Cart
    getCart: () => JSON.parse(localStorage.getItem("sb_cart") || '{"restaurantId":null,"items":[]}'),
    addToCart: (restaurantId, dish) => {
      let cart = store.getCart();
      if (cart.restaurantId !== restaurantId) {
        // If items from different restaurant, clear first
        cart = { restaurantId: restaurantId, items: [] };
      }
      const existing = cart.items.find(i => i.id === dish.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        cart.items.push({
          id: dish.id,
          name: dish.name,
          price: dish.price,
          quantity: 1
        });
      }
      localStorage.setItem("sb_cart", JSON.stringify(cart));
      window.dispatchEvent(new Event("storage"));
    },
    updateCartQuantity: (dishId, delta) => {
      const cart = store.getCart();
      const item = cart.items.find(i => i.id === dishId);
      if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
          cart.items = cart.items.filter(i => i.id !== dishId);
        }
        if (cart.items.length === 0) {
          cart.restaurantId = null;
        }
      }
      localStorage.setItem("sb_cart", JSON.stringify(cart));
      window.dispatchEvent(new Event("storage"));
    },
    removeFromCart: (dishId) => {
      const cart = store.getCart();
      cart.items = cart.items.filter(i => i.id !== dishId);
      if (cart.items.length === 0) {
        cart.restaurantId = null;
      }
      localStorage.setItem("sb_cart", JSON.stringify(cart));
      window.dispatchEvent(new Event("storage"));
    },
    clearCart: () => {
      localStorage.setItem("sb_cart", JSON.stringify({ restaurantId: null, items: [] }));
      window.dispatchEvent(new Event("storage"));
    },

    // Orders
    getOrders: () => JSON.parse(localStorage.getItem("sb_orders") || "[]"),
    getOrder: (id) => store.getOrders().find(o => o.id === id),
    placeOrder: (address, payment) => {
      const cart = store.getCart();
      const user = store.getUser();
      const restaurant = store.getRestaurant(cart.restaurantId);
      
      if (!cart.items || cart.items.length === 0) return null;

      const itemsPrice = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const deliveryFee = restaurant.id === "sushikazu" ? 0 : 2.99;
      const tax = itemsPrice * 0.08;
      const serviceFee = 2.00;
      const total = itemsPrice + deliveryFee + tax + serviceFee;

      const newOrder = {
        id: "order_" + Math.floor(Math.random() * 900000 + 100000),
        restaurantId: restaurant.id,
        restaurantName: restaurant.name,
        restaurantLogo: restaurant.logo,
        items: cart.items,
        subtotal: itemsPrice,
        deliveryFee: deliveryFee,
        tax: tax,
        serviceFee: serviceFee,
        total: total,
        status: "Pending", // Pending, Preparing, Dispatched, Delivered
        timestamp: new Date().toISOString(),
        customer: user || { name: "Guest User" },
        address: address || user?.address || "123 Market St, New York, NY",
        payment: payment || "Card Ending in 4242"
      };

      const orders = store.getOrders();
      orders.unshift(newOrder);
      localStorage.setItem("sb_orders", JSON.stringify(orders));
      store.clearCart();
      window.dispatchEvent(new Event("storage"));
      return newOrder;
    },
    updateOrderStatus: (orderId, status) => {
      const orders = store.getOrders();
      const order = orders.find(o => o.id === orderId);
      if (order) {
        order.status = status;
        localStorage.setItem("sb_orders", JSON.stringify(orders));
        window.dispatchEvent(new Event("storage"));
      }
    },
    
    // Active restaurant helper
    getActiveRestaurantId: () => {
      return localStorage.getItem("sb_active_restaurant_id") || "lombardis";
    },
    setActiveRestaurantId: (id) => {
      localStorage.setItem("sb_active_restaurant_id", id);
    },

    // Reset database
    resetDemo: () => {
      localStorage.removeItem("sb_initialized");
      localStorage.removeItem("sb_restaurants");
      localStorage.removeItem("sb_menu_items");
      localStorage.removeItem("sb_user");
      localStorage.removeItem("sb_cart");
      localStorage.removeItem("sb_orders");
      localStorage.removeItem("sb_active_restaurant_id");
      store.init();
      window.location.reload();
    }
  };

  // Run initialization
  store.init();
  window.SwiftBiteStore = store;

  // --- Auto-binding on DOM Content Loaded ---
  document.addEventListener("DOMContentLoaded", () => {
    updateGlobalHeader();
    injectDemoHub();
    window.addEventListener("storage", () => {
      updateGlobalHeader();
    });
  });

  function updateGlobalHeader() {
    // 1. Update Cart count
    const cart = store.getCart();
    const cartCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    
    const countBadges = document.querySelectorAll(".cart-count, [class*='shopping_cart'] + span");
    countBadges.forEach(badge => {
      badge.textContent = cartCount;
      if (cartCount === 0) {
        badge.style.display = "none";
      } else {
        badge.style.display = "flex";
      }
    });

    const cartButtons = document.querySelectorAll("button:contains('Cart'), button.bg-primary-container");
    cartButtons.forEach(btn => {
      if (btn.textContent.includes("Cart") || btn.querySelector("span")?.textContent === "shopping_cart") {
        // If it's a Text Button
        if (btn.textContent.trim().startsWith("Cart")) {
          btn.innerHTML = `Cart (${cartCount})`;
        }
      }
    });

    // 2. User profile/login state binding
    const user = store.getUser();
    const signInButtons = Array.from(document.querySelectorAll("button, a")).filter(el => {
      return el.textContent.trim().toLowerCase().includes("sign in") || el.textContent.trim().toLowerCase().includes("signin");
    });

    signInButtons.forEach(btn => {
      if (user) {
        // Replace with profile pill
        if (btn.tagName === "BUTTON") {
          btn.outerHTML = `
            <div id="user-profile-pill" class="flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded-full font-label-md text-label-md cursor-pointer hover:bg-surface-variant relative group">
              <span class="material-symbols-outlined text-[20px] text-primary">account_circle</span>
              <span>${user.name}</span>
              <div class="absolute right-0 top-full mt-2 w-48 bg-white border border-outline-variant/30 rounded-xl shadow-lg hidden group-hover:block z-50 text-left py-2">
                <a href="./admin.html" class="block px-4 py-2 text-body-md hover:bg-surface-container text-on-surface">Admin Dashboard</a>
                <a href="./partner-orders.html" class="block px-4 py-2 text-body-md hover:bg-surface-container text-on-surface">Partner Dashboard</a>
                <hr class="my-1 border-outline-variant/20">
                <button onclick="SwiftBiteStore.logout(); window.location.reload();" class="w-full text-left px-4 py-2 text-body-md text-error hover:bg-error/5">Sign Out</button>
              </div>
            </div>
          `;
        } else {
          btn.outerHTML = `<a href="#" onclick="SwiftBiteStore.logout(); window.location.reload();" class="text-on-surface-variant hover:text-primary transition-colors text-body-md font-bold">Sign Out</a>`;
        }
      }
    });
  }

  // Inject a floating navigator panel for easy demonstration
  function injectDemoHub() {
    if (document.getElementById("demo-hub")) return;

    const div = document.createElement("div");
    div.id = "demo-hub";
    div.className = "fixed bottom-4 right-4 z-[9999] font-sans";
    div.innerHTML = `
      <style>
        #demo-hub-btn {
          width: 56px;
          height: 56px;
          background: #FF6B00;
          color: white;
          border-radius: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(255,107,0,0.4);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          user-select: none;
        }
        #demo-hub-btn:hover {
          transform: scale(1.08) rotate(15deg);
        }
        #demo-hub-menu {
          position: absolute;
          bottom: 70px;
          right: 0;
          width: 320px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.12);
          padding: 20px;
          display: none;
          flex-direction: column;
          gap: 16px;
          animation: slideUp 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        #demo-hub.open #demo-hub-menu {
          display: flex;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(15px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .demo-section-title {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #8c8c8c;
          border-bottom: 1px solid rgba(0,0,0,0.06);
          padding-bottom: 6px;
        }
        .demo-link-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }
        .demo-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 10px;
          font-size: 13px;
          font-weight: 600;
          color: #333;
          text-decoration: none;
          transition: all 0.2s;
        }
        .demo-btn:hover {
          background: #FF6B00;
          color: white;
          border-color: #FF6B00;
        }
        .demo-action-btn {
          width: 100%;
          padding: 10px;
          background: rgba(0, 0, 0, 0.05);
          border: none;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
        }
        .demo-action-btn:hover {
          background: #ba1a1a;
          color: white;
        }
      </style>
      <div id="demo-hub-menu">
        <div class="flex items-center justify-between">
          <div style="font-weight: 800; font-size: 16px; color: #1a1a1a;">SwiftBite Demo Hub</div>
          <span style="font-size: 11px; font-weight: 700; background: #e2f0d9; color: #385723; padding: 2px 8px; border-radius: 99px;">Live Simulation</span>
        </div>
        
        <div>
          <div class="demo-section-title">1. Customer Experience</div>
          <div class="demo-link-grid" style="margin-top:8px;">
            <a href="./index.html" class="demo-btn">
              <span class="material-symbols-outlined" style="font-size:16px;">explore</span>
              Discover
            </a>
            <a href="./menu.html" class="demo-btn">
              <span class="material-symbols-outlined" style="font-size:16px;">restaurant</span>
              Menu
            </a>
            <a href="./checkout.html" class="demo-btn">
              <span class="material-symbols-outlined" style="font-size:16px;">shopping_cart</span>
              Checkout
            </a>
            <a href="./track.html" class="demo-btn">
              <span class="material-symbols-outlined" style="font-size:16px;">local_shipping</span>
              Track Order
            </a>
          </div>
        </div>

        <div>
          <div class="demo-section-title">2. Restaurant Dashboard</div>
          <div class="demo-link-grid" style="margin-top:8px;">
            <a href="./partner-orders.html" class="demo-btn">
              <span class="material-symbols-outlined" style="font-size:16px;">receipt_long</span>
              Live Orders
            </a>
            <a href="./partner-menu.html" class="demo-btn">
              <span class="material-symbols-outlined" style="font-size:16px;">menu_book</span>
              Edit Menu
            </a>
          </div>
        </div>

        <div>
          <div class="demo-section-title">3. Admin Overview</div>
          <div style="margin-top:8px;">
            <a href="./admin.html" class="demo-btn" style="display:flex; justify-content:center;">
              <span class="material-symbols-outlined" style="font-size:16px;">dashboard</span>
              System Overview Admin
            </a>
          </div>
        </div>

        <button onclick="SwiftBiteStore.resetDemo()" class="demo-action-btn">
          Reset Demo Data
        </button>
      </div>
      
      <div id="demo-hub-btn">
        <span class="material-symbols-outlined" style="font-size:28px;">layers</span>
      </div>
    `;

    document.body.appendChild(div);

    const btn = document.getElementById("demo-hub-btn");
    btn.addEventListener("click", () => {
      div.classList.toggle("open");
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      if (!div.contains(e.target)) {
        div.classList.remove("open");
      }
    });
  }

  // Extend query selector logic for contains (simple polyfill helper)
  if (!Array.prototype.contains) {
    // Just a quick check for jquery-like contains selectors in elements
  }
})();
