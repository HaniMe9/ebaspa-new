'use client'

import { motion } from 'framer-motion'

export default function PrivacyPolicyContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="prose prose-lg max-w-none"
    >
      <div className="bg-gray-50 rounded-2xl p-8 mb-8">
        <p className="text-gray-600 mb-0">
          <strong>Last updated:</strong> December 2024
        </p>
      </div>

      <h2>1. Information We Collect</h2>
      <p>
        EBASPA collects information you provide directly to us, such as when you:
      </p>
      <ul>
        <li>Apply for membership</li>
        <li>Register for events or training programs</li>
        <li>Contact us through our website</li>
        <li>Subscribe to our newsletter</li>
        <li>Use our member portal</li>
      </ul>

      <h2>2. Types of Information</h2>
      <p>We may collect the following types of information:</p>
      <ul>
        <li><strong>Personal Information:</strong> Name, email address, phone number, organization details</li>
        <li><strong>Business Information:</strong> Company name, business type, services offered</li>
        <li><strong>Usage Information:</strong> How you interact with our website and services</li>
        <li><strong>Technical Information:</strong> IP address, browser type, device information</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Process membership applications and manage member accounts</li>
        <li>Provide access to member benefits and resources</li>
        <li>Organize and manage events and training programs</li>
        <li>Send newsletters and updates about our services</li>
        <li>Improve our website and services</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>4. Information Sharing</h2>
      <p>
        We do not sell, trade, or otherwise transfer your personal information to third parties 
        without your consent, except as described in this policy or as required by law.
      </p>

      <h2>5. Data Security</h2>
      <p>
        We implement appropriate security measures to protect your personal information 
        against unauthorized access, alteration, disclosure, or destruction.
      </p>

      <h2>6. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access your personal information</li>
        <li>Correct inaccurate information</li>
        <li>Request deletion of your information</li>
        <li>Opt-out of marketing communications</li>
        <li>Withdraw consent for data processing</li>
      </ul>

      <h2>7. Cookies and Tracking</h2>
      <p>
        We use cookies and similar technologies to improve your experience on our website. 
        You can control cookie settings through your browser preferences.
      </p>

      <h2>8. Third-Party Services</h2>
      <p>
        Our website may contain links to third-party websites. We are not responsible 
        for the privacy practices of these external sites.
      </p>

      <h2>9. Children's Privacy</h2>
      <p>
        Our services are not intended for children under 13. We do not knowingly collect 
        personal information from children under 13.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this privacy policy from time to time. We will notify you of any 
        changes by posting the new policy on this page.
      </p>

      <h2>11. Contact Us</h2>
      <p>
        If you have questions about this privacy policy, please contact us at:
      </p>
      <div className="bg-gray-50 rounded-lg p-4">
        <p className="mb-2">
          <strong>Email:</strong> privacy@ebaspa.org
        </p>
        <p className="mb-2">
          <strong>Phone:</strong> +251 911 123 456
        </p>
        <p className="mb-0">
          <strong>Address:</strong> EBASPA Office, Addis Ababa, Ethiopia
        </p>
      </div>
    </motion.div>
  )
} 