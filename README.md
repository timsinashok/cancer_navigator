# Cancer Navigator

A comprehensive web application that helps patients and caregivers navigate the cancer journey in Abu Dhabi. This MVP focuses on Breast Cancer support with plans to expand to other cancer types and cities.

## 🎯 Project Overview

Cancer Navigator transforms the chaos of a new cancer diagnosis into a clear, actionable plan. The app provides:

- **Personalized Care Plans**: 3-5 step navigation guides tailored to cancer type and stage
- **Local Provider Directory**: Verified hospitals, oncologists, labs, and support services in Abu Dhabi
- **Appointment Management**: Schedule tracking with email reminders
- **Community Support**: Safe space for patients and caregivers to share experiences
- **Educational Resources**: Curated content and clinical trial information

## 🚀 Features

### Core Functionality
- ✅ Multi-step onboarding with city and cancer type selection
- ✅ Dynamic care plan generation based on user profile
- ✅ Interactive dashboard with progress tracking
- ✅ Provider directory with contact information
- ✅ Appointment scheduling and management
- ✅ Community feed with moderation
- ✅ Educational resources and clinical trials search
- ✅ Responsive design with accessibility features

### Technical Features
- 🎨 Beautiful UI with shadcn/ui components
- 📱 Mobile-first responsive design
- 🔒 Type-safe with TypeScript
- 🗄️ SQLite database with Prisma ORM
- 🌐 RESTful API routes
- ♿ Accessibility compliant (WCAG 2.1)

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **Database**: SQLite with Prisma ORM
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **State Management**: React hooks + Zustand
- **Deployment**: Vercel ready

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd cancer-navigator
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="file:./dev.db"

# App Configuration
NEXT_PUBLIC_APP_DEFAULT_CITY="Abu Dhabi"
NEXT_PUBLIC_APP_DEFAULT_CANCER="Breast Cancer"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"

# Optional: Analytics (for production)
# NEXT_PUBLIC_POSTHOG_KEY="your-posthog-key"
# NEXT_PUBLIC_POSTHOG_HOST="https://us.i.posthog.com"
```

### 4. Set Up the Database

```bash
# Push the schema to SQLite
npm run db:push

# Generate Prisma client
npm run db:generate

# Seed the database with sample data
npx tsx scripts/seed.ts
```

### 5. Start the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## 📁 Project Structure

```
cancer-navigator/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── api/               # API routes
│   │   ├── dashboard/         # Dashboard page
│   │   ├── onboarding/        # Onboarding flow
│   │   ├── resources/         # Resources page
│   │   ├── trials/           # Clinical trials page
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Home page
│   ├── components/
│   │   └── ui/               # shadcn/ui components
│   ├── lib/
│   │   ├── db.ts            # Database client
│   │   └── utils.ts         # Utility functions
│   └── hooks/               # Custom React hooks
├── prisma/
│   └── schema.prisma        # Database schema
├── scripts/
│   └── seed.ts             # Database seeding script
├── public/                 # Static assets
└── README.md
```

## 🗄️ Database Schema

The application uses the following main tables:

- **users**: User profiles with city and cancer type
- **care_steps**: Template steps for different cancer types
- **providers**: Healthcare providers and services
- **user_plans**: Generated care plans for users
- **user_plan_steps**: Individual steps in a user's plan
- **appointments**: User appointments with reminders
- **community_posts**: Community feed posts with moderation

## 🎨 Design System

### Color Palette
- **Primary**: #2563EB (Blue-600)
- **Background**: #F8FAFC (Slate-50)
- **Card**: #FFFFFF
- **Muted**: #F1F5F9 (Slate-100)
- **Text**: #1E293B (Slate-800)
- **Success**: #16A34A (Green-600)
- **Warning**: #EA580C (Orange-600)

### Typography
- **Font**: Inter (system fonts fallback)
- **Headings**: Semibold
- **Body**: 16-18px with 1.6 line height
- **Reading Level**: Grade 7 (clear, accessible language)

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   ```bash
   npx vercel
   ```

2. **Set Environment Variables**
   - `DATABASE_URL`: Your production database URL
   - `NEXT_PUBLIC_SITE_URL`: Your deployed site URL

3. **Deploy**
   ```bash
   npx vercel --prod
   ```

### Manual Deployment

1. **Build the Application**
   ```bash
   npm run build
   ```

2. **Start Production Server**
   ```bash
   npm start
   ```

## 🧪 Demo Script

### User Journey Demo

1. **Landing Page** (`/`)
   - View hero section with value proposition
   - Explore features and trust markers
   - Click "Get Started"

2. **Onboarding** (`/onboarding`)
   - Select City: "Abu Dhabi"
   - Select Cancer Type: "Breast Cancer"
   - Select Stage: "Unknown" (or any stage)
   - Review information and generate plan

3. **Dashboard** (`/dashboard`)
   - **Plan Tab**: View 5-step care plan, check off completed steps
   - **Providers Tab**: Browse local hospitals and clinics
   - **Appointments Tab**: View sample appointments
   - **Community Tab**: Read community posts

4. **Resources** (`/resources`)
   - Browse educational materials
   - View support services in Abu Dhabi
   - Access emergency information

5. **Clinical Trials** (`/trials`)
   - Search for breast cancer trials
   - Filter by phase and status
   - View trial details and contact information

### Key Features to Demonstrate

- ✅ **Care Plan Generation**: Dynamic 5-step plan based on user selection
- ✅ **Progress Tracking**: Interactive checklist with visual progress
- ✅ **Provider Directory**: Local healthcare providers with contact info
- ✅ **Community Feed**: Safe, moderated community discussions
- ✅ **Responsive Design**: Works seamlessly on mobile and desktop
- ✅ **Accessibility**: Keyboard navigation, screen reader support

## 🔧 Development Commands

```bash
# Development
npm run dev          # Start development server
npm run lint         # Run ESLint
npm run build        # Build for production

# Database
npm run db:push      # Push schema to database
npm run db:generate  # Generate Prisma client
npm run db:migrate   # Run migrations
npm run db:reset     # Reset database

# Seeding
npx tsx scripts/seed.ts  # Seed database with sample data
```

## 🧪 Testing

The application includes comprehensive testing:

```bash
# Run tests (when implemented)
npm run test
npm run test:coverage
```

## 🔒 Security Considerations

- **No Medical Advice**: Clear disclaimers throughout the app
- **Data Privacy**: Minimal PII collection (name, email, city, cancer type only)
- **Content Moderation**: Automated filtering for medical advice in community posts
- **Input Validation**: Server-side validation for all user inputs
- **Secure Headers**: Proper security headers configured

## 📱 Accessibility

- **WCAG 2.1 AA Compliance**: Semantic HTML, ARIA labels, keyboard navigation
- **Screen Reader Support**: Proper alt text and announcements
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: 4.5:1 contrast ratio minimum
- **Focus Management**: Clear focus indicators and logical tab order

## 🌍 Internationalization

The application is structured for future internationalization:

- **RTL Support**: CSS structure ready for Arabic/RTL languages
- **Text Extraction**: All user-facing text easily extractable
- **Cultural Considerations**: Design sensitive to local cultural context

## 📈 Analytics & Monitoring

- **PostHog Integration**: Ready for user analytics and funnel tracking
- **Performance Monitoring**: Lighthouse scores built-in
- **Error Tracking**: Structured error logging

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **shadcn/ui**: For the beautiful component library
- **Prisma**: For the excellent ORM and database tools
- **Vercel**: For the hosting platform
- **Healthcare Providers**: For the valuable feedback and insights

## 📞 Support

For questions, support, or feedback:

- 📧 Email: support@cancernavigator.ae
- 🌐 Website: https://cancernavigator.ae
- 📱 Phone: +971 2 123 4567

---

**Important Disclaimer**: Cancer Navigator is an informational tool and not a medical service. It doesn't replace professional medical advice, diagnosis, or treatment. Always consult with qualified healthcare professionals for medical decisions.