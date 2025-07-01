# EBASPA Website

The official website for the Ethiopian Business Advisory Service Providers Association (EBASPA).

## 🚀 Features

### Core Functionality
- **Modern Next.js 14** with App Router and TypeScript
- **Responsive Design** with Tailwind CSS
- **Database Integration** with Prisma ORM and PostgreSQL
- **Authentication** with NextAuth.js
- **Admin Dashboard** for content management
- **Member Portal** with login and profile management

### Key Pages & Sections
- **Homepage** with hero section, services overview, and member highlights
- **About** with mission, vision, team, and legal information
- **Membership** with application forms, benefits, and member directory
- **Services** including capacity building, policy advocacy, market facilitation
- **Resources** with publications, toolkits, and training materials
- **News & Events** with articles, event management, and registration
- **Contact** with contact forms and location information
- **Admin Dashboard** for managing members, events, news, and resources

### Technical Features
- **SEO Optimized** with metadata and sitemap
- **Performance Optimized** with Next.js optimizations
- **Accessibility** compliant with WCAG guidelines
- **Security** with proper authentication and data validation
- **Email Integration** for notifications and confirmations

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email**: Nodemailer
- **Deployment**: Vercel (recommended)

## 📋 Prerequisites

- Node.js 18+ 
- PostgreSQL database
- npm or yarn package manager

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone <repository-url>
cd ebaspa-new
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/ebaspa_db"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Email (for notifications)
EMAIL_SERVER_HOST="smtp.gmail.com"
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER="your-email@gmail.com"
EMAIL_SERVER_PASSWORD="your-app-password"

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### 4. Database Setup
```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# (Optional) Run migrations
npm run db:migrate
```

### 5. Start Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
ebaspa-new/
├── app/                    # Next.js App Router pages
│   ├── about/             # About pages
│   ├── admin/             # Admin dashboard pages
│   ├── contact/           # Contact pages
│   ├── donate/            # Donation pages
│   ├── events/            # Events pages
│   ├── membership/        # Membership pages
│   ├── news/              # News pages
│   ├── resources/         # Resources pages
│   ├── services/          # Services pages
│   └── api/               # API routes
├── components/            # React components
│   ├── admin/            # Admin dashboard components
│   ├── contact/          # Contact form components
│   ├── events/           # Event components
│   ├── home/             # Homepage components
│   ├── layout/           # Layout components (Header, Footer)
│   ├── membership/       # Membership components
│   ├── news/             # News components
│   ├── resources/        # Resource components
│   └── services/         # Service components
├── lib/                  # Utility libraries
│   └── prisma.ts         # Prisma client
├── prisma/               # Database schema and migrations
│   └── schema.prisma     # Prisma schema
└── public/               # Static assets
```

## 🗄️ Database Schema

The application uses PostgreSQL with the following main entities:

- **Users**: Authentication and user management
- **Members**: Organization and member information
- **Events**: Event management and registration
- **News**: News articles and publications
- **Resources**: Publications, toolkits, and training materials
- **Contacts**: Contact form submissions
- **Donations**: Donation tracking
- **Payments**: Payment processing

## 🔐 Authentication

The application uses NextAuth.js for authentication with:

- **Credentials Provider**: Email/password login
- **Role-based Access**: Admin, Member, and Guest roles
- **Session Management**: JWT-based sessions
- **Protected Routes**: Admin dashboard and member portal

## 🎨 Customization

### Styling
- Modify `tailwind.config.js` for theme customization
- Update `app/globals.css` for global styles
- Component-specific styles are in their respective files

### Content
- Update content in component files
- Modify metadata in page files
- Update database with real content

### Configuration
- Environment variables in `.env.local`
- Database configuration in `prisma/schema.prisma`
- Next.js configuration in `next.config.js`

## 📧 Email Integration

The application includes email functionality for:

- Contact form confirmations
- Membership application notifications
- Event registration confirmations
- Admin notifications

Configure email settings in `.env.local` and implement email templates.

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### Other Platforms
1. Build the application: `npm run build`
2. Start production server: `npm start`
3. Configure environment variables
4. Set up database connection

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema to database
- `npm run db:migrate` - Run database migrations
- `npm run db:studio` - Open Prisma Studio

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions:
- Email: info@ebaspa.org
- Website: https://ebaspa.org

## 🔄 Updates

Keep the application updated by regularly:
- Updating dependencies: `npm update`
- Running database migrations: `npm run db:migrate`
- Checking for security updates: `npm audit`

---

**EBASPA** - Empowering Ethiopia's Business Ecosystem 