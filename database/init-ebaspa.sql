-- Drop database if exists and create new one
DROP DATABASE IF EXISTS ebaspa_db;
CREATE DATABASE ebaspa_db;

-- Switch to the database
USE ebaspa_db;

-- Create enum tables (MySQL doesn't support ENUM with custom types, so we'll use reference tables)
CREATE TABLE user_roles (
    role VARCHAR(50) PRIMARY KEY
);
INSERT INTO user_roles VALUES ('ADMIN'), ('MEMBER'), ('GUEST');

CREATE TABLE admin_roles (
    role VARCHAR(50) PRIMARY KEY
);
INSERT INTO admin_roles VALUES ('SUPER_ADMIN'), ('ADMIN'), ('CONTENT_ADMIN');

CREATE TABLE membership_types (
    type VARCHAR(50) PRIMARY KEY
);
INSERT INTO membership_types VALUES ('INDIVIDUAL'), ('CORPORATE'), ('ASSOCIATE'), ('HONORARY');

CREATE TABLE member_statuses (
    status VARCHAR(50) PRIMARY KEY
);
INSERT INTO member_statuses VALUES ('PENDING'), ('ACTIVE'), ('SUSPENDED'), ('EXPIRED');

CREATE TABLE event_types (
    type VARCHAR(50) PRIMARY KEY
);
INSERT INTO event_types VALUES ('CONFERENCE'), ('WORKSHOP'), ('TRAINING'), ('NETWORKING'), ('WEBINAR');

CREATE TABLE event_statuses (
    status VARCHAR(50) PRIMARY KEY
);
INSERT INTO event_statuses VALUES ('DRAFT'), ('PUBLISHED'), ('CANCELLED'), ('COMPLETED');

CREATE TABLE registration_statuses (
    status VARCHAR(50) PRIMARY KEY
);
INSERT INTO registration_statuses VALUES ('PENDING'), ('CONFIRMED'), ('CANCELLED'), ('ATTENDED');

CREATE TABLE resource_types (
    type VARCHAR(50) PRIMARY KEY
);
INSERT INTO resource_types VALUES ('DOCUMENT'), ('VIDEO'), ('AUDIO'), ('LINK'), ('TEMPLATE');

CREATE TABLE payment_types (
    type VARCHAR(50) PRIMARY KEY
);
INSERT INTO payment_types VALUES ('MEMBERSHIP'), ('EVENT'), ('DONATION'), ('OTHER');

CREATE TABLE payment_statuses (
    status VARCHAR(50) PRIMARY KEY
);
INSERT INTO payment_statuses VALUES ('PENDING'), ('COMPLETED'), ('FAILED'), ('REFUNDED');

CREATE TABLE contact_statuses (
    status VARCHAR(50) PRIMARY KEY
);
INSERT INTO contact_statuses VALUES ('NEW'), ('IN_PROGRESS'), ('RESOLVED'), ('CLOSED');

-- 1. Users and Authentication Tables
CREATE TABLE users (
    id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255),
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL DEFAULT 'MEMBER',
    emailVerified DATETIME,
    image VARCHAR(255),
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (role) REFERENCES user_roles(role)
) ENGINE=InnoDB;

CREATE TABLE admins (
    id VARCHAR(255) PRIMARY KEY,
    userId VARCHAR(255) UNIQUE NOT NULL,
    role VARCHAR(50) NOT NULL DEFAULT 'ADMIN',
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (role) REFERENCES admin_roles(role)
) ENGINE=InnoDB;

CREATE TABLE sessions (
    id VARCHAR(255) PRIMARY KEY,
    sessionToken VARCHAR(255) UNIQUE NOT NULL,
    userId VARCHAR(255) NOT NULL,
    expires DATETIME NOT NULL,
    FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE accounts (
    id VARCHAR(255) PRIMARY KEY,
    userId VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    provider VARCHAR(255) NOT NULL,
    providerAccountId VARCHAR(255) NOT NULL,
    refresh_token TEXT,
    access_token TEXT,
    expires_at INT,
    token_type VARCHAR(255),
    scope VARCHAR(255),
    id_token TEXT,
    session_state TEXT,
    FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE KEY provider_account_id (provider, providerAccountId)
) ENGINE=InnoDB;

CREATE TABLE verification_tokens (
    identifier VARCHAR(255) NOT NULL,
    token VARCHAR(255) NOT NULL,
    expires DATETIME NOT NULL,
    UNIQUE KEY token_unique (identifier, token)
) ENGINE=InnoDB;

-- 2. Membership Management Tables
CREATE TABLE members (
    id VARCHAR(255) PRIMARY KEY,
    userId VARCHAR(255) UNIQUE NOT NULL,
    organizationName VARCHAR(255) NOT NULL,
    contactPerson VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(50),
    website VARCHAR(255),
    address TEXT,
    city VARCHAR(255),
    region VARCHAR(255),
    membershipType VARCHAR(50) NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'PENDING',
    registrationDate DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    expiryDate DATETIME,
    logo VARCHAR(255),
    description TEXT,
    services JSON,
    certifications JSON,
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (membershipType) REFERENCES membership_types(type),
    FOREIGN KEY (status) REFERENCES member_statuses(status)
) ENGINE=InnoDB;

-- 3. Event Management Tables
CREATE TABLE events (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    type VARCHAR(50) NOT NULL,
    startDate DATETIME NOT NULL,
    endDate DATETIME NOT NULL,
    location VARCHAR(255),
    isOnline BOOLEAN NOT NULL DEFAULT FALSE,
    maxCapacity INT,
    price DECIMAL(10,2),
    image VARCHAR(255),
    status VARCHAR(50) NOT NULL DEFAULT 'DRAFT',
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (type) REFERENCES event_types(type),
    FOREIGN KEY (status) REFERENCES event_statuses(status)
) ENGINE=InnoDB;

CREATE TABLE event_members (
    id VARCHAR(255) PRIMARY KEY,
    eventId VARCHAR(255) NOT NULL,
    memberId VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL DEFAULT 'participant',
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (eventId) REFERENCES events(id) ON DELETE CASCADE,
    FOREIGN KEY (memberId) REFERENCES members(id) ON DELETE CASCADE,
    UNIQUE KEY event_member_unique (eventId, memberId)
) ENGINE=InnoDB;

CREATE TABLE event_registrations (
    id VARCHAR(255) PRIMARY KEY,
    eventId VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    organization VARCHAR(255),
    status VARCHAR(50) NOT NULL DEFAULT 'PENDING',
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (eventId) REFERENCES events(id) ON DELETE CASCADE,
    FOREIGN KEY (status) REFERENCES registration_statuses(status)
) ENGINE=InnoDB;

-- 4. News Management Table
CREATE TABLE news (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    excerpt TEXT,
    image VARCHAR(255),
    author VARCHAR(255),
    category VARCHAR(255),
    tags JSON,
    published BOOLEAN NOT NULL DEFAULT FALSE,
    publishedAt DATETIME,
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- 5. Resource Management Table
CREATE TABLE resources (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    type VARCHAR(50) NOT NULL,
    url VARCHAR(255),
    filePath VARCHAR(255),
    category VARCHAR(255),
    tags JSON,
    downloads INT NOT NULL DEFAULT 0,
    published BOOLEAN NOT NULL DEFAULT FALSE,
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (type) REFERENCES resource_types(type)
) ENGINE=InnoDB;

-- 6. Payment Management Table
CREATE TABLE payments (
    id VARCHAR(255) PRIMARY KEY,
    memberId VARCHAR(255) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    type VARCHAR(50) NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'PENDING',
    transactionId VARCHAR(255),
    paymentMethod VARCHAR(255),
    description TEXT,
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (memberId) REFERENCES members(id) ON DELETE CASCADE,
    FOREIGN KEY (type) REFERENCES payment_types(type),
    FOREIGN KEY (status) REFERENCES payment_statuses(status)
) ENGINE=InnoDB;

-- 7. Contact Management Table
CREATE TABLE contacts (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'NEW',
    assignedTo VARCHAR(255),
    response TEXT,
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (assignedTo) REFERENCES users(id) ON DELETE SET NULL,
    FOREIGN KEY (status) REFERENCES contact_statuses(status)
) ENGINE=InnoDB;

-- 8. Benefits Management Table
CREATE TABLE benefits (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    membershipType VARCHAR(50) NOT NULL,
    icon VARCHAR(255),
    `order` INT NOT NULL DEFAULT 0,
    active BOOLEAN NOT NULL DEFAULT TRUE,
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (membershipType) REFERENCES membership_types(type)
) ENGINE=InnoDB;

-- 9. Donations Table
CREATE TABLE donations (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    message TEXT,
    anonymous BOOLEAN NOT NULL DEFAULT FALSE,
    transactionId VARCHAR(255),
    status VARCHAR(50) NOT NULL DEFAULT 'PENDING',
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (status) REFERENCES payment_statuses(status)
) ENGINE=InnoDB;

-- Create default admin user
INSERT INTO users (id, email, name, password, role, createdAt, updatedAt)
VALUES (
    'admin_default_id',
    'admin@ebaspa.org',
    'Admin User',
    '$2a$10$YaB6xpBcJe8Nc7rtUZEDPOAYtqhqGz2U5oYeK5Ir7psF9tEcseKlC', -- password: admin123
    'ADMIN',
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
);

INSERT INTO admins (id, userId, role, createdAt, updatedAt)
VALUES (
    'admin_role_default_id',
    'admin_default_id',
    'ADMIN',
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX users_email_idx ON users(email);
CREATE INDEX sessions_token_idx ON sessions(sessionToken);
CREATE INDEX accounts_user_id_idx ON accounts(userId);
CREATE INDEX verification_tokens_token_idx ON verification_tokens(token);
CREATE INDEX members_email_idx ON members(email);
CREATE INDEX members_status_idx ON members(status);
CREATE INDEX events_status_idx ON events(status);
CREATE INDEX events_date_idx ON events(startDate, endDate);
CREATE INDEX news_published_idx ON news(published, publishedAt);
CREATE INDEX payments_member_idx ON payments(memberId);
CREATE INDEX payments_status_idx ON payments(status);
CREATE INDEX contacts_status_idx ON contacts(status);
CREATE INDEX contacts_assigned_idx ON contacts(assignedTo); 