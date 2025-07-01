# EBASPA Database Setup

This directory contains all the database-related files for the EBASPA website.

## 📁 Files Overview

- **`init.sql`** - Database schema initialization script
- **`seed.sql`** - Sample data for testing and development
- **`setup.sh`** - Automated database setup script
- **`README.md`** - This documentation file

## 🗄️ Database Schema

The EBASPA database includes the following main entities:

### Core Tables
- **`users`** - User authentication and profiles
- **`members`** - Organization and member information
- **`admins`** - Admin user management
- **`events`** - Event management and details
- **`news`** - News articles and publications
- **`resources`** - Publications, toolkits, and training materials
- **`contacts`** - Contact form submissions
- **`donations`** - Donation tracking
- **`payments`** - Payment processing

### Relationship Tables
- **`event_members`** - Many-to-many relationship between events and members
- **`event_registrations`** - Event registration records
- **`accounts`** - OAuth provider accounts (NextAuth)
- **`sessions`** - User sessions (NextAuth)
- **`verification_tokens`** - Email verification tokens (NextAuth)

## 🚀 Quick Setup

### Option 1: Automated Setup (Recommended)

1. **Make the setup script executable:**
   ```bash
   chmod +x database/setup.sh
   ```

2. **Run the setup script:**
   ```bash
   ./database/setup.sh
   ```

The script will:
- Check if PostgreSQL is installed and running
- Create database user and database
- Run the initialization script
- Load sample data
- Update your `.env.local` file

### Option 2: Manual Setup

1. **Create database and user:**
   ```sql
   CREATE USER ebaspa_user WITH PASSWORD 'ebaspa_password';
   CREATE DATABASE ebaspa_new OWNER ebaspa_user;
   GRANT ALL PRIVILEGES ON DATABASE ebaspa_new TO ebaspa_user;
   ```

2. **Run initialization script:**
   ```bash
   psql -U ebaspa_user -d ebaspa_new -f database/init.sql
   ```

3. **Load sample data (optional):**
   ```bash
   psql -U ebaspa_user -d ebaspa_new -f database/seed.sql
   ```

4. **Update your `.env.local`:**
   ```env
   DATABASE_URL="postgresql://ebaspa_user:ebaspa_password@localhost:5432/ebaspa_new"
   ```

## 📊 Sample Data

The `seed.sql` file includes:

### Users & Authentication
- **Admin user:** `admin@ebaspa.org` / `password123`
- **6 member users** with different organization types

### Members
- Ethiopian Business Consulting Group
- Addis Training Institute
- Tech Solutions Ethiopia
- Legal Advisory Services
- Market Research Ethiopia
- SME Growth Partners

### Events
- Digital Transformation Workshop for SMEs
- Annual BDS Conference 2024
- Policy Advocacy Roundtable
- Capacity Building Training Series
- Past events (completed)

### News Articles
- EBASPA Launches New Digital Transformation Program
- New Partnership with Ministry of Trade and Industry
- Member Spotlight: Ethiopian Business Consulting Group

### Resources
- SME Growth Toolkit
- Digital Marketing Guide
- Business Plan Template
- Capacity Building Training Videos
- Market Research Methodology Guide

### Other Data
- Contact form submissions
- Donations
- Payments
- Event registrations

## 🔧 Database Configuration

### Environment Variables

Add these to your `.env.local`:

```env
# Database
DATABASE_URL="postgresql://ebaspa_user:ebaspa_password@localhost:5432/ebaspa_new"

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

### Prisma Commands

After setting up the database:

```bash
# Generate Prisma client
npm run db:generate

# Push schema to database (if using Prisma)
npm run db:push

# Run migrations (if using Prisma migrations)
npm run db:migrate

# Open Prisma Studio (database GUI)
npm run db:studio
```

## 🔐 Default Credentials

### Admin Access
- **Email:** `admin@ebaspa.org`
- **Password:** `password123`
- **URL:** `http://localhost:3000/admin`

### Member Access
- **Email:** `member1@consulting.com`
- **Password:** `password123`
- **URL:** `http://localhost:3000/membership/login`

## 📈 Database Performance

### Indexes
The database includes indexes on:
- User emails
- Member emails and status
- Event dates and status
- News publication status
- Resource publication status
- Payment status
- Contact status
- Donation status

### Triggers
Automatic `updated_at` timestamp updates for all tables.

## 🔄 Database Maintenance

### Backup
```bash
# Create backup
pg_dump -U ebaspa_user -d ebaspa_new > backup_$(date +%Y%m%d_%H%M%S).sql

# Restore backup
psql -U ebaspa_user -d ebaspa_new < backup_file.sql
```

### Reset Database
```bash
# Drop and recreate
dropdb -U ebaspa_user ebaspa_new
createdb -U ebaspa_user ebaspa_new
psql -U ebaspa_user -d ebaspa_new -f database/init.sql
psql -U ebaspa_user -d ebaspa_new -f database/seed.sql
```

## 🛠️ Troubleshooting

### Common Issues

1. **PostgreSQL not running:**
   ```bash
   # Ubuntu/Debian
   sudo systemctl start postgresql
   
   # macOS
   brew services start postgresql
   ```

2. **Permission denied:**
   ```bash
   # Make sure you're using the correct user
   sudo -u postgres psql
   ```

3. **Database connection failed:**
   - Check if PostgreSQL is running
   - Verify connection string in `.env.local`
   - Ensure database user has proper permissions

4. **Prisma client not generated:**
   ```bash
   npm run db:generate
   ```

### Getting Help

- Check PostgreSQL logs: `tail -f /var/log/postgresql/postgresql-*.log`
- Test connection: `psql -U ebaspa_user -d ebaspa_new -h localhost`
- Verify schema: `\dt` (in psql)

## 📝 Notes

- All passwords in sample data are hashed with bcrypt
- The database uses PostgreSQL-specific features like arrays and enums
- Sample data is for development/testing only
- Remember to change default passwords in production
- Consider using environment-specific database configurations

## 🔗 Related Files

- `prisma/schema.prisma` - Prisma schema definition
- `lib/prisma.ts` - Prisma client configuration
- `.env.local` - Environment variables
- `package.json` - Database-related scripts 