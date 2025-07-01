#!/bin/bash

# Database configuration
DB_NAME="ebaspa"
DB_USER="postgres"
DB_PASSWORD="postgres"

# Create database if it doesn't exist
psql -U $DB_USER -c "CREATE DATABASE $DB_NAME;" || true

# Run the initialization script
psql -U $DB_USER -d $DB_NAME -f init-users.sql 