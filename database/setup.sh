#!/bin/bash

# EBASPA Database Setup Script
# This script sets up the PostgreSQL database for the EBASPA website

echo "🗄️  Setting up EBASPA Database..."

# Database configuration
DB_NAME="ebaspa_new"
DB_USER="ebaspa_user"
DB_PASSWORD="ebaspa_password"
DB_HOST="localhost"
DB_PORT="5432"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check if PostgreSQL is installed
if ! command -v psql &> /dev/null; then
    print_error "PostgreSQL is not installed. Please install PostgreSQL first."
    echo "Installation instructions:"
    echo "  Ubuntu/Debian: sudo apt-get install postgresql postgresql-contrib"
    echo "  CentOS/RHEL: sudo yum install postgresql postgresql-server"
    echo "  macOS: brew install postgresql"
    echo "  Windows: Download from https://www.postgresql.org/download/windows/"
    exit 1
fi

print_status "PostgreSQL is installed"

# Check if PostgreSQL service is running
if ! pg_isready -h $DB_HOST -p $DB_PORT &> /dev/null; then
    print_error "PostgreSQL service is not running. Please start PostgreSQL service."
    echo "Start commands:"
    echo "  Ubuntu/Debian: sudo systemctl start postgresql"
    echo "  CentOS/RHEL: sudo systemctl start postgresql"
    echo "  macOS: brew services start postgresql"
    echo "  Windows: Start from Services or use pg_ctl"
    exit 1
fi

print_status "PostgreSQL service is running"

# Create database user if it doesn't exist
echo "Creating database user..."
if ! psql -h $DB_HOST -p $DB_PORT -U postgres -c "SELECT 1 FROM pg_roles WHERE rolname='$DB_USER'" | grep -q 1; then
    psql -h $DB_HOST -p $DB_PORT -U postgres -c "CREATE USER $DB_USER WITH PASSWORD '$DB_PASSWORD';"
    print_status "Database user created"
else
    print_warning "Database user already exists"
fi

# Create database if it doesn't exist
echo "Creating database..."
if ! psql -h $DB_HOST -p $DB_PORT -U postgres -lqt | cut -d \| -f 1 | grep -qw $DB_NAME; then
    psql -h $DB_HOST -p $DB_PORT -U postgres -c "CREATE DATABASE $DB_NAME OWNER $DB_USER;"
    print_status "Database created"
else
    print_warning "Database already exists"
fi

# Grant privileges
echo "Setting up permissions..."
psql -h $DB_HOST -p $DB_PORT -U postgres -d $DB_NAME -c "GRANT ALL PRIVILEGES ON DATABASE $DB_NAME TO $DB_USER;"
psql -h $DB_HOST -p $DB_PORT -U postgres -d $DB_NAME -c "GRANT ALL ON SCHEMA public TO $DB_USER;"

# Run initialization script
echo "Running database initialization..."
if [ -f "database/init.sql" ]; then
    psql -h $DB_HOST -p $DB_PORT -U $DB_USER -d $DB_NAME -f database/init.sql
    print_status "Database schema created"
else
    print_error "init.sql file not found in database directory"
    exit 1
fi

# Run seed data script
echo "Loading sample data..."
if [ -f "database/seed.sql" ]; then
    psql -h $DB_HOST -p $DB_PORT -U $DB_USER -d $DB_NAME -f database/seed.sql
    print_status "Sample data loaded"
else
    print_warning "seed.sql file not found, skipping sample data"
fi

# Update .env.local with database connection
echo "Updating .env.local with database connection..."
if [ -f ".env.local" ]; then
    # Backup existing .env.local
    cp .env.local .env.local.backup
    print_status "Backed up existing .env.local"
    
    # Update DATABASE_URL
    sed -i "s|DATABASE_URL=.*|DATABASE_URL=\"postgresql://$DB_USER:$DB_PASSWORD@$DB_HOST:$DB_PORT/$DB_NAME\"|" .env.local
    print_status "Updated DATABASE_URL in .env.local"
else
    print_warning ".env.local not found, please create it manually with:"
    echo "DATABASE_URL=\"postgresql://$DB_USER:$DB_PASSWORD@$DB_HOST:$DB_PORT/$DB_NAME\""
fi

echo ""
print_status "Database setup completed successfully!"
echo ""
echo "Database Information:"
echo "  Database Name: $DB_NAME"
echo "  Database User: $DB_USER"
echo "  Database Host: $DB_HOST"
echo "  Database Port: $DB_PORT"
echo ""
echo "Connection String:"
echo "  postgresql://$DB_USER:$DB_PASSWORD@$DB_HOST:$DB_PORT/$DB_NAME"
echo ""
echo "Next steps:"
echo "  1. Run 'npm run db:generate' to generate Prisma client"
echo "  2. Run 'npm run dev' to start the development server"
echo "  3. Access the admin panel at http://localhost:3000/admin"
echo "     - Email: admin@ebaspa.org"
echo "     - Password: password123"
echo ""
print_warning "Remember to change the default passwords in production!" 