# Hyperlocal Delivery Tracking System

A comprehensive delivery tracking system designed for small shops, pharmacies, and local vendors to manage home deliveries with real-time tracking and WhatsApp notifications.

## 🚀 Features

### Store Dashboard (Web App)
- Store signup/login with email/OTP
- Add delivery orders manually
- Assign delivery boy to each order
- Live tracking of delivery boys on Google Maps
- COD + UPI payment status tracking
- Automatic WhatsApp notifications to customers
- Delivery history and reports

### Delivery Partner App (PWA)
- Login via phone OTP
- View assigned deliveries
- Start/Stop delivery route
- Background live location sharing
- Mark delivery as complete
- Collect payment: Cash/UPI QR

### WhatsApp Integration
- Order updates sent automatically
- Share tracking link to customers
- Support for Meta WhatsApp API and Twilio

### Real-time Tracking
- Google Maps API integration
- Live moving markers for delivery personnel
- Shareable tracking links for customers

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 + React 18 + TailwindCSS
- **Mobile**: React PWA + Vite
- **Backend**: NestJS + Node.js
- **Database**: MongoDB
- **Real-time**: Socket.IO
- **Maps**: Google Maps API
- **Payments**: Razorpay (UPI + COD)
- **WhatsApp**: Meta WhatsApp API / Twilio
- **Authentication**: JWT + OTP
- **Monorepo**: TurboRepo

## 📁 Project Structure

```
hyperlocal-delivery/
├── apps/
│   ├── web/              # Store dashboard (Next.js)
│   ├── delivery-app/     # Delivery partner PWA (Vite)
│   └── backend/          # NestJS API server
├── packages/
│   ├── ui/               # Shared React components
│   ├── utils/            # Shared utilities
│   └── config/           # Shared configurations
├── package.json          # Root package.json
├── turbo.json           # TurboRepo configuration
└── README.md
```

## 🔧 Setup Instructions

### Prerequisites

- Node.js 18+
- MongoDB (local or cloud)
- Google Maps API key
- WhatsApp Business API credentials
- Razorpay account

### Installation

1. **Clone and install dependencies:**
   ```bash
   cd hyperlocal-delivery
   npm install
   ```

2. **Environment Configuration:**
   ```bash
   cp .env.example .env
   # Edit .env with your credentials
   ```

3. **Start MongoDB:**
   ```bash
   # If using local MongoDB
   mongod
   
   # Or use MongoDB Atlas cloud service
   ```

4. **Start Development Servers:**
   ```bash
   # Start all apps concurrently
   npm run dev
   
   # Or start individual apps:
   npm run dev:web          # Store dashboard (http://localhost:3000)
   npm run dev:delivery     # Delivery app (http://localhost:5173)
   npm run dev:backend      # API server (http://localhost:5000)
   ```

## 🔐 Authentication Flow

1. **Store Registration**: Email + OTP verification
2. **Delivery Partner**: Phone + OTP verification
3. **JWT Tokens**: Secure API access
4. **Role-based Access**: Store Admin, Delivery Boy, Customer

## 📱 API Endpoints

### Authentication
- `POST /auth/register` - Store registration
- `POST /auth/login` - User login
- `POST /auth/otp/send` - Send OTP
- `POST /auth/otp/verify` - Verify OTP

### Orders
- `POST /orders` - Create order
- `GET /orders` - Get orders
- `PUT /orders/:id/assign` - Assign delivery partner
- `PUT /orders/:id/status` - Update order status

### Delivery
- `GET /delivery/assigned` - Get assigned deliveries
- `POST /delivery/:id/start` - Start delivery
- `POST /delivery/:id/location` - Update location
- `POST /delivery/:id/complete` - Complete delivery

### Tracking
- `GET /tracking/:orderId` - Get order tracking
- `GET /tracking/:orderId/location` - Get real-time location

## 🔔 WhatsApp Message Templates

### Order Confirmation
```
✅ Order Confirmed!
Your order #{{ORDER_ID}} has been confirmed.
Items: {{ITEMS}}
Total: ₹{{TOTAL}}
Expected delivery: {{DELIVERY_TIME}}

Track your order: {{TRACKING_LINK}}
```

### Out for Delivery
```
🚚 Out for Delivery!
Your order #{{ORDER_ID}} is on the way.
Delivery partner: {{PARTNER_NAME}}
Current location: {{LOCATION}}

Track live: {{TRACKING_LINK}}
```

### Delivered
```
✅ Delivered!
Your order #{{ORDER_ID}} has been delivered.
Payment: {{PAYMENT_STATUS}}

Thank you for choosing us!
```

## 💰 Pricing Model

| Plan | Price | Features |
|------|-------|----------|
| Starter | ₹499/month | 50 deliveries + 1 delivery boy |
| Growth | ₹999/month | 200 deliveries + 5 delivery boys |
| Business | ₹1999/month | Unlimited + Custom branding |

## 🚀 Deployment

### Using Docker
```bash
# Build all services
docker-compose build

# Start services
docker-compose up -d
```

### Manual Deployment
- **Frontend**: Vercel/Netlify
- **Backend**: Railway/Render/Fly.io
- **Database**: MongoDB Atlas
- **CDN**: Cloudflare/AWS CloudFront

## 📊 Monitoring & Analytics

- Order completion rates
- Delivery time analytics
- Revenue tracking
- Customer satisfaction metrics
- Delivery partner performance

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support, email support@hyperlocal-delivery.com or join our Slack channel.

## 🎯 Roadmap

- [ ] AI-powered route optimization
- [ ] Multi-language support
- [ ] Customer app for order tracking
- [ ] Advanced analytics dashboard
- [ ] Integration with popular POS systems
- [ ] Fleet management for larger operations