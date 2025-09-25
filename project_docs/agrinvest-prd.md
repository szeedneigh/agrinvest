# AGRiNVEST Product Requirements Document (PRD)

## Executive Summary

AGRiNVEST is a web-first impact investing platform that connects young Filipino investors with smallholder farmers, providing interest-free capital to farmers while offering meaningful investment opportunities starting from as low as ₱50. The platform is built as a Progressive Web App (PWA) with full responsive design, ensuring optimal mobile experience while being accessible across all devices. The platform addresses the dual problem of financial vulnerability in agriculture and the lack of accessible impact investing channels for Filipino youth.

### Vision Statement
To democratize agricultural finance and empower the next generation of Filipino investors to become heroes in supporting the nation's food security.

### Mission Statement
Providing farmers with a shield against financial catastrophe and a weapon against unfair market practices, while enabling young Filipinos to create tangible impact with their spare change.

---

## 1. Product Overview

### 1.1 Product Description
AGRiNVEST is a dual-sided marketplace platform featuring:
- **For Farmers:** Interest-free funding, market data insights, and protection from predatory lending
- **For Investors:** Gamified social investing experience with low barriers to entry and meaningful impact

### 1.2 Core Value Propositions
- **Farmers:** "AGRiNVEST is a Shield and a Weapon" - protection from debt and market leverage through data
- **Investors:** "Turn your spare ₱50 into heroic impact" - accessible, meaningful investment opportunities

### 1.3 Market Context
- **Primary Market:** Philippines agricultural finance and impact investing
- **Target Geography:** Initial focus on Central Luzon rice farmers, expanding nationwide
- **Market Size:** 5.7M farming households, 1.8M Gen-Z/Millennial potential investors

---

## 2. Target Users & User Personas

### 2.1 Primary User Personas

#### Persona 1: "Maria the Rice Farmer"
- **Demographics:** 35-45 years old, Central Luzon rice farmer, tech-receptive
- **Pain Points:** 
  - Vulnerable to climate/pest-related crop failures
  - Trapped by high-interest loans from middlemen
  - Lacks market price transparency
- **Goals:** 
  - Secure funding without debt burden
  - Access fair market prices
  - Improve farm productivity
- **Tech Comfort:** Moderate (uses smartphone for basic tasks)

#### Persona 2: "Carlo the Student Investor"
- **Demographics:** 18-28 years old, university student or young professional
- **Pain Points:**
  - Wants to invest but thinks significant capital is required
  - Lacks trustworthy investment platforms
  - Desires meaningful impact beyond profit
- **Goals:**
  - Start investing with small amounts
  - Create positive social impact
  - Learn about investing while supporting local agriculture
- **Tech Comfort:** High (digital native, social media active)

### 2.2 Secondary Personas
- **LGU Representatives:** Partnership facilitators
- **Cooperative Leaders:** Farmer network connectors
- **Student Organization Leaders:** Investor community builders

---

## 3. User Stories & Use Cases

### 3.1 Investor User Stories

#### Core Investment Flow
- **As an investor**, I want to browse available farming projects so I can choose where to invest my money
- **As an investor**, I want to invest as little as ₱50 so I can start with what I can afford
- **As an investor**, I want to track my investments' progress so I can see the impact I'm making
- **As an investor**, I want to reinvest my returns easily so I can compound my impact

#### Social & Gamification
- **As an investor**, I want to earn badges for my investments so I feel recognized for my contributions
- **As an investor**, I want to share my impact on social media so I can inspire others
- **As an investor**, I want to see leaderboards so I can engage competitively with the community
- **As an investor**, I want to refer friends and earn rewards so I can grow the community

#### Wallet & Financial Management
- **As an investor**, I want an in-app wallet so I can manage my funds seamlessly
- **As an investor**, I want to withdraw to GCash so I can access my returns when needed
- **As an investor**, I want to see transparent fee structures so I understand all costs

### 3.2 Farmer User Stories

#### Funding & Capital Access
- **As a farmer**, I want to apply for interest-free funding so I can avoid predatory loans
- **As a farmer**, I want to submit my farming plans so investors can understand my project
- **As a farmer**, I want to receive funds quickly so I can respond to time-sensitive farming needs

#### Data & Market Intelligence
- **As a farmer**, I want to access market price data so I can negotiate better prices
- **As a farmer**, I want to record my harvest data so I can track my progress
- **As a farmer**, I want to receive agricultural insights so I can improve my farming practices

#### Communication & Updates
- **As a farmer**, I want to update my investors on crop progress so they stay engaged
- **As a farmer**, I want to share success stories so I can attract future funding

---

## 4. Core Features & Functional Requirements

### 4.1 Progressive Web Application (PWA)

#### 4.1.1 User Authentication & Onboarding
- **Multi-role registration** (Farmer/Investor)
- **Philippine mobile number verification** (SMS OTP)
- **Know Your Customer (KYC)** compliance
- **Guided onboarding flows** for each user type
- **Tutorial system** for first-time users
- **Responsive design** optimized for mobile, tablet, and desktop

#### 4.1.2 AGRiNVEST Wallet System
- **Digital wallet** with Philippine Peso balance
- **GCash integration** for deposits/withdrawals
- **Transaction history** and statements with downloadable PDFs
- **Low-fee withdrawal processing** (target: <3% fee)
- **Auto-reinvestment** options
- **Mobile-optimized financial interface**

#### 4.1.3 Investment Marketplace
- **Project browsing** with filtering (crop type, region, risk level)
- **Project detail pages** with farmer profiles and farming plans
- **Investment interface** with amount selection (minimum ₱50)
- **Investment portfolio** dashboard with responsive charts
- **Real-time project status** updates
- **Touch-optimized interface** for mobile users

#### 4.1.4 Gamification Engine
- **Badge system** (First Investment, Community Builder, Impact Hero, etc.)
- **Leaderboards** (weekly/monthly top investors)
- **Achievement tracking** and progress visualization
- **Social sharing** integration (Facebook, Instagram, TikTok)
- **Referral program** with rewards
- **PWA notifications** for achievements and updates

#### 4.1.5 Farmer Management System
- **Farm profile creation** with photos and details
- **Funding request submission** with project timelines
- **Harvest tracking** and reporting tools
- **Investor communication** platform
- **Market price data** access
- **Mobile-friendly form inputs** and camera integration

#### 4.1.6 Data Collection & Analytics
- **Funding data aggregation** by region, crop type, season
- **Harvest outcome tracking** and success rate calculation
- **Market price monitoring** and trend analysis
- **User behavior analytics** for platform optimization
- **Responsive data visualization** across all device sizes

### 4.2 Admin & Partner Dashboards
- **Admin panel** for platform management
- **Partner dashboard** for cooperatives and LGUs
- **Analytics dashboard** with key metrics
- **Content management** for educational materials
- **Role-based access control** for different user types

### 4.3 Integration Requirements
- **GCash API** for payment processing
- **SMS gateway** for OTP verification
- **Social media APIs** for sharing functionality (Web Share API)
- **Mapping services** (Google Maps/Mapbox) for farm location visualization
- **PWA push notification** service (Firebase Cloud Messaging)
- **Camera API** for photo capture on mobile devices
- **Geolocation API** for location-based features
- **File API** for document uploads and management

---

## 5. Technical Requirements

### 5.1 Technology Stack
- **Frontend:** Next.js (PWA-enabled), TypeScript, Tailwind CSS
- **Component Library:** shadcn/ui with Radix UI primitives
- **PWA Features:** Service Workers, Web App Manifest, Offline Support
- **Backend:** Node.js with Express.js, TypeScript
- **Database:** PostgreSQL (primary), Redis (caching)
- **Cloud Infrastructure:** AWS or Google Cloud Platform
- **Payment Processing:** GCash API, local payment gateways
- **Analytics:** Mixpanel or Google Analytics
- **Mobile Optimization:** Responsive design, touch gestures, camera API

### 5.2 Performance Requirements
- **PWA load time:** <3 seconds on 3G connection
- **Time to Interactive (TTI):** <5 seconds on mobile devices
- **First Contentful Paint (FCP):** <2 seconds
- **API response time:** <500ms for 95% of requests
- **Uptime:** 99.9% availability
- **Concurrent users:** Support for 10,000+ simultaneous users
- **Lighthouse Score:** 90+ for Performance, Accessibility, SEO, and PWA

### 5.3 Security Requirements
- **Data encryption** in transit and at rest
- **PCI DSS compliance** for payment processing
- **BSP (Bangko Sentral ng Pilipinas) compliance** for financial operations
- **Two-factor authentication** for high-value transactions
- **Regular security audits** and penetration testing

### 5.4 Scalability Requirements
- **Horizontal scaling** capability for backend services
- **CDN implementation** for fast content delivery
- **Database sharding** strategy for large datasets
- **Microservices architecture** for modular development

### 5.5 PWA-Specific Requirements
- **Service Worker** implementation for offline functionality
- **Web App Manifest** for app-like installation experience
- **Responsive breakpoints** for mobile, tablet, and desktop (320px to 1920px+)
- **Touch gesture support** for mobile interactions
- **Camera API integration** for farmer photo uploads
- **Push notifications** for investor updates and achievements
- **Background sync** for data synchronization when online
- **App-like navigation** with browser history management

---

## 6. Success Metrics & KPIs

### 6.1 North Star Metric
- **Monthly Active Investors** (MAI)

### 6.2 Growth Metrics
- **Investor Acquisition Cost (IAC):** Target <₱100 per investor
- **K-Factor (Virality):** Target >1.2 for sustainable viral growth
- **Monthly Growth Rate:** Target 20% month-over-month
- **User Retention:** 30-day retention >40%, 90-day retention >25%

### 6.3 Farmer-Side Metrics
- **Number of Farmers Funded:** Target 1,000 farmers in Year 1
- **Total Capital Deployed:** Target ₱50M in Year 1
- **Crop Success Rate:** Track and maintain >85% success rate
- **Average Funding Amount:** Track optimal funding sizes

### 6.4 Platform Health Metrics
- **Total Value in Wallets (TVW):** Track locked value in ecosystem
- **Re-investment Rate:** Target >60% of returns reinvested
- **Transaction Volume:** Track platform liquidity
- **Average Session Duration:** Target >5 minutes per session

### 6.5 Financial Metrics
- **Revenue per User:** Track average revenue per investor
- **Gross Transaction Volume:** Monitor total money flow
- **Withdrawal Rate:** Track cash-out patterns
- **Operational Efficiency:** Monitor cost per transaction

---

## 7. Implementation Roadmap

### 7.1 Phase 1: Web MVP (Months 1-4)
**Goal:** Launch responsive web platform with PWA capabilities

#### Sprint 1-2: Foundation
- User authentication and basic profiles
- Responsive design foundation with mobile-first approach
- Simple wallet system with GCash integration
- Basic project listing and investment flow

#### Sprint 3-4: Core Features
- Complete investment marketplace with responsive design
- Basic gamification (badges, basic leaderboards)
- Farmer onboarding and project submission
- PWA implementation (service workers, manifest, offline support)

#### Sprint 5-6: Polish & Launch
- Advanced wallet features and transaction management
- Social sharing integration optimized for mobile
- Touch-optimized interface and mobile gestures
- Beta testing with select farmers and investors

### 7.2 Phase 2: Growth & Optimization (Months 5-8)
**Goal:** Scale user base and optimize web experience

- Advanced gamification and social features
- Referral program implementation
- Market data and insights for farmers
- PWA optimization and performance improvements
- Enhanced mobile web experience
- Push notifications implementation

### 7.3 Phase 3: Scale & Expansion (Months 9-12)
**Goal:** Expand geographically and add revenue streams

- B2B partnership integrations
- Advanced analytics and data licensing
- Expansion beyond Central Luzon
- Premium features and tiered services
- Advanced PWA features (background sync, improved offline capabilities)

### 7.4 Phase 4: Native Mobile Apps (Year 2)
**Goal:** Launch dedicated mobile applications

- React Native iOS app development
- React Native Android app development
- Enhanced mobile-specific features
- App store optimization and marketing
- Migration tools for web users to mobile apps

---

## 8. Risk Assessment & Mitigation

### 8.1 Technical Risks
- **Risk:** Payment processing failures
- **Mitigation:** Multiple payment gateway redundancy, comprehensive testing

- **Risk:** Platform scalability issues
- **Mitigation:** Cloud-native architecture, performance monitoring

### 8.2 Regulatory Risks
- **Risk:** BSP compliance challenges
- **Mitigation:** Early engagement with regulators, legal consultation

- **Risk:** Data privacy regulations
- **Mitigation:** GDPR-compliant data handling, regular audits

### 8.3 Market Risks
- **Risk:** Low farmer adoption
- **Mitigation:** Strong partner network, local community engagement

- **Risk:** Investor churn
- **Mitigation:** Strong gamification, transparent impact reporting

### 8.4 Financial Risks
- **Risk:** High crop failure rates
- **Mitigation:** Diversified portfolio, weather insurance partnerships

- **Risk:** Cash flow management
- **Mitigation:** Reserve funds, careful growth management

---

## 9. Compliance & Legal Requirements

### 9.1 Financial Regulations
- **BSP regulations** for electronic money institutions
- **Anti-Money Laundering (AMLA)** compliance
- **Know Your Customer (KYC)** requirements
- **Consumer protection** standards

### 9.2 Data Protection
- **Data Privacy Act of 2012** compliance
- **GDPR compliance** for international users
- **Secure data handling** protocols
- **User consent management**

### 9.3 Agricultural Partnerships
- **Cooperative registration** requirements
- **LGU partnership** agreements
- **Department of Agriculture** coordination
- **Farmer identification** and verification

---

## 10. Appendices

### 10.1 Competitive Analysis
- **Cropital:** Direct competitor, our advantages: gamification, web-first accessibility (no app store barriers), lower minimum investment (₱50 vs higher amounts)
- **Traditional Banks:** Higher barrier to entry, our advantages: accessibility through web platform, interest-free model, youth-focused UX
- **Microfinance:** Our advantages: interest-free model, digital-first approach, transparent pricing
- **Other FinTech Apps:** Our advantages: no app store dependencies, instant access via web, PWA capabilities providing app-like experience without downloads

### 10.2 Technical Architecture Diagram
[To be created during technical design phase]

### 10.3 User Interface Mockups
[To be created during design phase]

---

*Document Version: 1.0*  
*Last Updated: September 22, 2025*  
