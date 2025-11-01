# Seed Data for Hyperlocal Delivery System

## MongoDB Seed Data

```javascript
// db/seed.js
const mongoose = require('mongoose');
const { Store, DeliveryBoy, Order, User } = require('../src/models');

const seedData = {
  // Sample Store
  store: {
    name: "Krishna Grocery Store",
    owner: {
      name: "Rajesh Kumar",
      email: "rajesh@krishnastore.com",
      phone: "+919876543210"
    },
    address: {
      street: "123 MG Road",
      city: "Bangalore",
      state: "Karnataka",
      pincode: "560001",
      coordinates: {
        lat: 12.9716,
        lng: 77.5946
      }
    },
    settings: {
      deliveryRadius: 5, // km
      deliveryFee: 20,
      minOrderAmount: 200,
      maxOrderAmount: 5000,
      deliverySlots: [
        "09:00-11:00",
        "11:00-13:00", 
        "13:00-15:00",
        "15:00-17:00",
        "17:00-19:00"
      ]
    }
  },

  // Sample Delivery Boys
  deliveryBoys: [
    {
      name: "Arjun Singh",
      phone: "+919876543211",
      email: "arjun@delivery.com",
      vehicle: {
        type: "bike",
        number: "KA 01 AB 1234",
        capacity: "20kg"
      },
      currentLocation: {
        lat: 12.9716,
        lng: 77.5946
      },
      availability: true,
      rating: 4.8,
      totalDeliveries: 234
    },
    {
      name: "Priya Sharma",
      phone: "+919876543212",
      email: "priya@delivery.com",
      vehicle: {
        type: "bicycle",
        number: "WALKING",
        capacity: "10kg"
      },
      currentLocation: {
        lat: 12.9718,
        lng: 77.5948
      },
      availability: true,
      rating: 4.9,
      totalDeliveries: 156
    }
  ],

  // Sample Orders
  orders: [
    {
      orderNumber: "ORD001",
      customer: {
        name: "Amit Patel",
        phone: "+919876543213",
        address: {
          street: "456 Brigade Road",
          apartment: "Apt 201",
          landmark: "Near Brigade Mall",
          city: "Bangalore",
          state: "Karnataka",
          pincode: "560025",
          coordinates: {
            lat: 12.9689,
            lng: 77.5994
          }
        }
      },
      items: [
        {
          name: "Milk",
          quantity: 2,
          unit: "liters",
          price: 60,
          category: "dairy"
        },
        {
          name: "Bread",
          quantity: 1,
          unit: "loaf",
          price: 40,
          category: "bakery"
        },
        {
          name: "Eggs",
          quantity: 12,
          unit: "pieces",
          price: 96,
          category: "dairy"
        }
      ],
      totals: {
        subtotal: 196,
        deliveryFee: 20,
        tax: 10.8,
        total: 226.8
      },
      paymentMethod: "cod",
      paymentStatus: "pending",
      scheduledDelivery: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours from now
      status: "confirmed"
    },
    {
      orderNumber: "ORD002",
      customer: {
        name: "Sneha Gupta",
        phone: "+919876543214",
        address: {
          street: "789 Church Street",
          apartment: "Flat 302",
          landmark: "Near MG Road Metro",
          city: "Bangalore",
          state: "Karnataka",
          pincode: "560025",
          coordinates: {
            lat: 12.9698,
            lng: 77.5974
          }
        }
      },
      items: [
        {
          name: "Rice",
          quantity: 5,
          unit: "kg",
          price: 60,
          category: "grains"
        },
        {
          name: "Onions",
          quantity: 2,
          unit: "kg",
          price: 40,
          category: "vegetables"
        },
        {
          name: "Tomatoes",
          quantity: 1,
          unit: "kg",
          price: 50,
          category: "vegetables"
        }
      ],
      totals: {
        subtotal: 390,
        deliveryFee: 20,
        tax: 20.5,
        total: 430.5
      },
      paymentMethod: "upi",
      paymentStatus: "paid",
      scheduledDelivery: new Date(Date.now() + 3 * 60 * 60 * 1000), // 3 hours from now
      status: "out_for_delivery"
    }
  ],

  // Sample WhatsApp Templates
  whatsappTemplates: [
    {
      name: "order_confirmation",
      type: "template",
      language: "en",
      category: "TRANSACTIONAL",
      components: [
        {
          type: "BODY",
          parameters: [
            { type: "TEXT", text: "{{ORDER_ID}}" },
            { type: "TEXT", text: "{{CUSTOMER_NAME}}" },
            { type: "TEXT", text: "{{TOTAL_AMOUNT}}" },
            { type: "TEXT", text: "{{DELIVERY_TIME}}" }
          ]
        }
      ]
    },
    {
      name: "out_for_delivery",
      type: "template",
      language: "en",
      category: "TRANSACTIONAL",
      components: [
        {
          type: "BODY",
          parameters: [
            { type: "TEXT", text: "{{ORDER_ID}}" },
            { type: "TEXT", text: "{{PARTNER_NAME}}" },
            { type: "TEXT", text: "{{TRACKING_LINK}}" }
          ]
        }
      ]
    },
    {
      name: "delivery_completed",
      type: "template",
      language: "en",
      category: "TRANSACTIONAL",
      components: [
        {
          type: "BODY",
          parameters: [
            { type: "TEXT", text: "{{ORDER_ID}}" },
            { type: "TEXT", text: "{{PAYMENT_STATUS}}" }
          ]
        }
      ]
    }
  ]
};

module.exports = seedData;