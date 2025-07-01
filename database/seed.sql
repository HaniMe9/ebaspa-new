-- EBASPA Database Seed Data
-- Sample data for testing and development

-- Insert sample users
INSERT INTO users (id, email, name, password, role, email_verified) VALUES
('user_001', 'admin@ebaspa.org', 'Admin User', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj/RK.s5u.Gi', 'ADMIN', CURRENT_TIMESTAMP),
('user_002', 'member1@consulting.com', 'John Doe', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj/RK.s5u.Gi', 'MEMBER', CURRENT_TIMESTAMP),
('user_003', 'member2@training.com', 'Jane Smith', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj/RK.s5u.Gi', 'MEMBER', CURRENT_TIMESTAMP),
('user_004', 'member3@tech.com', 'Mike Johnson', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj/RK.s5u.Gi', 'MEMBER', CURRENT_TIMESTAMP),
('user_005', 'member4@legal.com', 'Sarah Wilson', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj/RK.s5u.Gi', 'MEMBER', CURRENT_TIMESTAMP),
('user_006', 'member5@research.com', 'David Brown', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj/RK.s5u.Gi', 'MEMBER', CURRENT_TIMESTAMP),
('user_007', 'member6@sme.com', 'Lisa Davis', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj/RK.s5u.Gi', 'MEMBER', CURRENT_TIMESTAMP);

-- Insert admin
INSERT INTO admins (id, user_id, role) VALUES
('admin_001', 'user_001', 'SUPER_ADMIN');

-- Insert sample members
INSERT INTO members (id, user_id, organization_name, contact_person, email, phone, website, address, city, region, membership_type, status, description, services, certifications) VALUES
('member_001', 'user_002', 'Ethiopian Business Consulting Group', 'John Doe', 'member1@consulting.com', '+251 911 123 456', 'www.ebcg.com', 'Bole Road, Addis Ababa', 'Addis Ababa', 'Addis Ababa', 'FULL', 'ACTIVE', 'Leading business consulting firm specializing in SME development and strategic planning.', ARRAY['Business Strategy', 'SME Development', 'Market Research'], ARRAY['ISO 9001', 'Business Excellence Award 2023']),
('member_002', 'user_003', 'Addis Training Institute', 'Jane Smith', 'member2@training.com', '+251 922 234 567', 'www.addistraining.com', 'Kazanchis, Addis Ababa', 'Addis Ababa', 'Addis Ababa', 'FULL', 'ACTIVE', 'Professional training institute offering capacity building programs for businesses.', ARRAY['Training Programs', 'Capacity Building', 'Skills Development'], ARRAY['TVET Certified', 'Training Excellence Award']),
('member_003', 'user_004', 'Tech Solutions Ethiopia', 'Mike Johnson', 'member3@tech.com', '+251 933 345 678', 'www.techsolutions.et', 'ICT Park, Addis Ababa', 'Addis Ababa', 'Addis Ababa', 'FULL', 'ACTIVE', 'Technology solutions provider helping businesses digitize their operations.', ARRAY['Digital Transformation', 'Software Development', 'IT Consulting'], ARRAY['Microsoft Partner', 'Google Cloud Partner']),
('member_004', 'user_005', 'Legal Advisory Services', 'Sarah Wilson', 'member4@legal.com', '+251 944 456 789', 'www.lasethiopia.com', 'Kazanchis, Addis Ababa', 'Addis Ababa', 'Addis Ababa', 'FULL', 'ACTIVE', 'Comprehensive legal services for businesses, ensuring compliance and risk management.', ARRAY['Legal & Compliance', 'Business Law', 'Regulatory Affairs'], ARRAY['Bar Association Member', 'Legal Excellence Award']),
('member_005', 'user_006', 'Market Research Ethiopia', 'David Brown', 'member5@research.com', '+251 955 567 890', 'www.mrethiopia.com', 'Bole, Addis Ababa', 'Addis Ababa', 'Addis Ababa', 'ASSOCIATE', 'ACTIVE', 'Specialized market research and data analytics services for informed business decisions.', ARRAY['Market Research', 'Data Analytics', 'Business Intelligence'], ARRAY['Research Excellence Award', 'Data Quality Certified']),
('member_006', 'user_007', 'SME Growth Partners', 'Lisa Davis', 'member6@sme.com', '+251 966 678 901', 'www.smeethiopia.com', 'Meskel Square, Addis Ababa', 'Addis Ababa', 'Addis Ababa', 'FULL', 'ACTIVE', 'Dedicated to supporting small and medium enterprises with growth strategies and development.', ARRAY['SME Support', 'Business Development', 'Growth Consulting'], ARRAY['SME Excellence Award', 'Growth Partner Certified']);

-- Insert sample events
INSERT INTO events (id, title, description, type, start_date, end_date, location, is_online, max_capacity, price, status) VALUES
('event_001', 'Digital Transformation Workshop for SMEs', 'Learn how to leverage technology to grow your business and improve operational efficiency. This comprehensive workshop covers digital tools, automation, and best practices for modern businesses.', 'WORKSHOP', '2024-02-15 09:00:00', '2024-02-15 17:00:00', 'Addis Ababa, Ethiopia', FALSE, 50, 0.00, 'PUBLISHED'),
('event_002', 'Annual BDS Conference 2024', 'Join industry leaders and experts for the premier business development services conference. Network with peers, learn from experts, and discover new opportunities.', 'CONFERENCE', '2024-03-20 08:00:00', '2024-03-20 18:00:00', 'Addis Ababa, Ethiopia', FALSE, 200, 2000.00, 'PUBLISHED'),
('event_003', 'Policy Advocacy Roundtable', 'Discussion on current policy challenges and opportunities in the BDS sector. Engage with policymakers and industry leaders.', 'NETWORKING', '2024-02-28 14:00:00', '2024-02-28 17:00:00', 'Addis Ababa, Ethiopia', FALSE, 30, 0.00, 'PUBLISHED'),
('event_004', 'Capacity Building Training Series', 'Comprehensive training program for business advisory service providers. Enhance your skills and knowledge.', 'TRAINING', '2024-04-10 10:00:00', '2024-04-10 16:00:00', 'Addis Ababa, Ethiopia', FALSE, 75, 1500.00, 'PUBLISHED'),
('event_005', 'SME Growth Strategies Workshop', 'Practical strategies for small and medium enterprises to scale their operations.', 'WORKSHOP', '2023-12-15 09:00:00', '2023-12-15 17:00:00', 'Addis Ababa, Ethiopia', FALSE, 45, 0.00, 'COMPLETED'),
('event_006', 'BDS Policy Forum 2023', 'Annual policy discussion forum with government officials and industry leaders.', 'CONFERENCE', '2023-11-20 08:00:00', '2023-11-20 18:00:00', 'Addis Ababa, Ethiopia', FALSE, 120, 1500.00, 'COMPLETED');

-- Insert sample news
INSERT INTO news (id, title, content, excerpt, author, category, tags, published, published_at) VALUES
('news_001', 'EBASPA Launches New Digital Transformation Program', 'The Ethiopian Business Advisory Service Providers Association (EBASPA) is proud to announce the launch of its comprehensive Digital Transformation Program for SMEs. This initiative aims to help Ethiopian businesses leverage technology to improve their operations and competitiveness in the digital economy.

The program includes workshops, training sessions, and one-on-one consulting services designed to address the specific needs of small and medium enterprises. Participants will learn about digital tools, automation, e-commerce, and best practices for modern business operations.

"We are excited to launch this program at a time when digital transformation is crucial for business survival and growth," said the EBASPA Executive Director. "Our goal is to ensure that Ethiopian SMEs are not left behind in the digital revolution."

The program will be rolled out across major cities in Ethiopia, starting with Addis Ababa, and will be available to both EBASPA members and non-members at different pricing tiers.', 'EBASPA Team', 'Announcements', ARRAY['Digital Transformation', 'SMEs', 'Technology'], TRUE, CURRENT_TIMESTAMP),
('news_002', 'New Partnership with Ministry of Trade and Industry', 'EBASPA has signed a landmark partnership agreement with the Ministry of Trade and Industry to strengthen the business advisory services sector in Ethiopia. This collaboration will focus on capacity building, policy advocacy, and the development of industry standards.

The partnership will enable EBASPA to work more closely with government agencies to address the challenges facing business advisory service providers and their clients. It also opens up new opportunities for members to participate in government-funded programs and initiatives.

"This partnership represents a significant milestone for our association and the entire BDS sector," said the EBASPA President. "We look forward to working with the Ministry to create a more supportive environment for business development services in Ethiopia."

The agreement includes provisions for regular consultations, joint training programs, and collaborative research projects aimed at improving the quality and accessibility of business advisory services.', 'EBASPA Team', 'Partnerships', ARRAY['Government Partnership', 'Policy Advocacy', 'Capacity Building'], TRUE, CURRENT_TIMESTAMP),
('news_003', 'Member Spotlight: Ethiopian Business Consulting Group', 'This month, we shine the spotlight on Ethiopian Business Consulting Group (EBCG), one of our most active and innovative members. Founded in 2018, EBCG has been at the forefront of business development services in Ethiopia, helping hundreds of SMEs achieve sustainable growth.

EBCG specializes in strategic planning, market research, and organizational development. Their team of experienced consultants has worked with clients across various sectors, including manufacturing, agriculture, and services.

"We are proud to be part of EBASPA and contribute to the development of Ethiopia''s business ecosystem," said John Doe, Managing Director of EBCG. "The association has provided us with valuable networking opportunities and professional development resources."

EBCG''s recent projects include helping a local manufacturing company increase its production capacity by 40% and supporting an agricultural cooperative to access new markets. Their success stories demonstrate the positive impact that quality business advisory services can have on Ethiopian businesses.', 'Featured member Ethiopian Business Consulting Group shares their success stories and contributions to Ethiopia''s business ecosystem.', 'EBASPA Team', 'Member Spotlight', ARRAY['Member Spotlight', 'Success Stories', 'Consulting'], TRUE, CURRENT_TIMESTAMP);

-- Insert sample resources
INSERT INTO resources (id, title, description, type, url, category, tags, downloads, published) VALUES
('resource_001', 'SME Growth Toolkit', 'Comprehensive toolkit for small and medium enterprises looking to scale their operations. Includes templates, checklists, and best practices.', 'TOOLKIT', 'https://ebaspa.org/resources/sme-growth-toolkit.pdf', 'Business Development', ARRAY['SMEs', 'Growth', 'Toolkit'], 150, TRUE),
('resource_002', 'Digital Marketing Guide for Ethiopian Businesses', 'Step-by-step guide to implementing digital marketing strategies for Ethiopian businesses. Covers social media, email marketing, and online advertising.', 'DOCUMENT', 'https://ebaspa.org/resources/digital-marketing-guide.pdf', 'Marketing', ARRAY['Digital Marketing', 'Social Media', 'Advertising'], 89, TRUE),
('resource_003', 'Business Plan Template', 'Professional business plan template with Ethiopian market considerations. Includes financial projections and market analysis sections.', 'DOCUMENT', 'https://ebaspa.org/resources/business-plan-template.docx', 'Business Planning', ARRAY['Business Plan', 'Template', 'Financial Planning'], 234, TRUE),
('resource_004', 'Capacity Building Training Video Series', 'Comprehensive video series covering essential business skills and knowledge for Ethiopian entrepreneurs and business owners.', 'VIDEO', 'https://ebaspa.org/resources/capacity-building-videos/', 'Training', ARRAY['Training', 'Capacity Building', 'Video Series'], 67, TRUE),
('resource_005', 'Market Research Methodology Guide', 'Detailed guide on conducting market research in the Ethiopian context. Includes survey design, data collection, and analysis techniques.', 'DOCUMENT', 'https://ebaspa.org/resources/market-research-guide.pdf', 'Research', ARRAY['Market Research', 'Methodology', 'Data Analysis'], 112, TRUE);

-- Insert sample contacts
INSERT INTO contacts (id, name, email, phone, subject, message, inquiry_type, status) VALUES
('contact_001', 'Abebe Kebede', 'abebe@example.com', '+251 911 111 111', 'Membership Inquiry', 'I am interested in joining EBASPA. Could you please provide information about membership requirements and benefits?', 'Membership', 'RESOLVED'),
('contact_002', 'Fatima Ahmed', 'fatima@business.com', '+251 922 222 222', 'Training Programs', 'I would like to know about upcoming training programs for business development. Are there any programs suitable for startup founders?', 'Training', 'IN_PROGRESS'),
('contact_003', 'Tadesse Haile', 'tadesse@consulting.com', '+251 933 333 333', 'Partnership Opportunity', 'Our consulting firm is interested in partnering with EBASPA on capacity building initiatives. Please let me know how we can collaborate.', 'Partnership', 'NEW'),
('contact_004', 'Mariam Hassan', 'mariam@sme.com', '+251 944 444 444', 'Business Advisory Services', 'I need help with developing a business strategy for my small manufacturing company. Can you recommend any EBASPA members who specialize in this area?', 'Services', 'RESOLVED'),
('contact_005', 'Yohannes Tekle', 'yohannes@tech.com', '+251 955 555 555', 'Digital Transformation Support', 'Our company is looking to digitize our operations. Do you have any programs or resources that can help us with this transition?', 'Technology', 'IN_PROGRESS');

-- Insert sample donations
INSERT INTO donations (id, name, email, amount, currency, message, payment_method, status) VALUES
('donation_001', 'Anonymous Donor', 'anonymous@example.com', 1000.00, 'USD', 'Supporting the great work EBASPA is doing for Ethiopian businesses.', 'card', 'COMPLETED'),
('donation_002', 'Ethiopian Business Group', 'info@ebg.com', 5000.00, 'USD', 'We believe in the mission of EBASPA and want to support capacity building initiatives.', 'bank', 'COMPLETED'),
('donation_003', 'Development Partner', 'partner@dev.org', 2500.00, 'USD', 'Supporting SME development in Ethiopia through EBASPA programs.', 'card', 'COMPLETED'),
('donation_004', 'Local Entrepreneur', 'entrepreneur@local.com', 500.00, 'USD', 'Thank you for the support you provided to my business. Happy to give back.', 'card', 'PENDING'),
('donation_005', 'International Foundation', 'foundation@int.org', 10000.00, 'USD', 'Supporting sustainable business development in Ethiopia.', 'bank', 'COMPLETED');

-- Insert sample payments
INSERT INTO payments (id, member_id, amount, currency, type, status, payment_method, description) VALUES
('payment_001', 'member_001', 5000.00, 'ETB', 'MEMBERSHIP', 'COMPLETED', 'bank', 'Annual membership fee 2024'),
('payment_002', 'member_002', 5000.00, 'ETB', 'MEMBERSHIP', 'COMPLETED', 'card', 'Annual membership fee 2024'),
('payment_003', 'member_003', 5000.00, 'ETB', 'MEMBERSHIP', 'COMPLETED', 'bank', 'Annual membership fee 2024'),
('payment_004', 'member_004', 5000.00, 'ETB', 'MEMBERSHIP', 'COMPLETED', 'card', 'Annual membership fee 2024'),
('payment_005', 'member_005', 3000.00, 'ETB', 'MEMBERSHIP', 'COMPLETED', 'bank', 'Associate membership fee 2024'),
('payment_006', 'member_006', 5000.00, 'ETB', 'MEMBERSHIP', 'COMPLETED', 'card', 'Annual membership fee 2024');

-- Insert sample event registrations
INSERT INTO event_registrations (id, event_id, name, email, phone, organization, status) VALUES
('reg_001', 'event_001', 'Abebe Kebede', 'abebe@example.com', '+251 911 111 111', 'Tech Startup Ethiopia', 'CONFIRMED'),
('reg_002', 'event_001', 'Fatima Ahmed', 'fatima@business.com', '+251 922 222 222', 'Green Solutions Ltd', 'CONFIRMED'),
('reg_003', 'event_002', 'Tadesse Haile', 'tadesse@consulting.com', '+251 933 333 333', 'Haile Consulting', 'CONFIRMED'),
('reg_004', 'event_002', 'Mariam Hassan', 'mariam@sme.com', '+251 944 444 444', 'Hassan Manufacturing', 'PENDING'),
('reg_005', 'event_003', 'Yohannes Tekle', 'yohannes@tech.com', '+251 955 555 555', 'Digital Ethiopia', 'CONFIRMED');

-- Insert sample event members (many-to-many relationship)
INSERT INTO event_members (id, event_id, member_id, role) VALUES
('em_001', 'event_001', 'member_001', 'organizer'),
('em_002', 'event_001', 'member_002', 'facilitator'),
('em_003', 'event_002', 'member_001', 'organizer'),
('em_004', 'event_002', 'member_003', 'speaker'),
('em_005', 'event_003', 'member_004', 'facilitator'),
('em_006', 'event_004', 'member_002', 'organizer'),
('em_007', 'event_004', 'member_005', 'facilitator'); 