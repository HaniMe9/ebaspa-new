'use client'

import { motion } from 'framer-motion'

export default function CookiePolicyContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="prose prose-lg max-w-none"
    >
      <h2>What Are Cookies?</h2>
      <p>
        Cookies are small text files that are placed on your device when you visit our website. 
        They help us provide you with a better experience by remembering your preferences and 
        analyzing how you use our site.
      </p>

      <h2>How We Use Cookies</h2>
      <p>EBASPA uses cookies for the following purposes:</p>
      <ul>
        <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
        <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
        <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
        <li><strong>Marketing Cookies:</strong> Used to deliver relevant content and advertisements</li>
      </ul>

      <h2>Types of Cookies We Use</h2>
      
      <h3>Essential Cookies</h3>
      <p>
        These cookies are necessary for the website to function and cannot be switched off. 
        They are usually only set in response to actions made by you such as setting your 
        privacy preferences, logging in, or filling in forms.
      </p>

      <h3>Analytics Cookies</h3>
      <p>
        We use analytics cookies to understand how visitors interact with our website. 
        This helps us improve our site and provide better services to our members.
      </p>

      <h3>Functional Cookies</h3>
      <p>
        These cookies enable the website to provide enhanced functionality and personalization. 
        They may be set by us or by third-party providers whose services we have added to our pages.
      </p>

      <h2>Managing Your Cookie Preferences</h2>
      <p>
        You can control and manage cookies in various ways. Please note that removing or 
        blocking cookies may impact your user experience and parts of our website may no 
        longer be fully accessible.
      </p>

      <h3>Browser Settings</h3>
      <p>
        Most browsers allow you to refuse to accept cookies and to delete cookies. 
        The methods for doing so vary from browser to browser. Please refer to your 
        browser's help menu for more information.
      </p>

      <h3>Third-Party Cookies</h3>
      <p>
        Some cookies are placed by third-party services that appear on our pages. 
        We do not control these cookies and they are subject to the third party's 
        privacy policy.
      </p>

      <h2>Updates to This Policy</h2>
      <p>
        We may update this Cookie Policy from time to time to reflect changes in our 
        practices or for other operational, legal, or regulatory reasons. We will 
        notify you of any material changes by posting the new Cookie Policy on this page.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about our use of cookies, please contact us at:
      </p>
      <ul>
        <li>Email: info@ebaspa.org</li>
        <li>Phone: +251 11 123 4567</li>
        <li>Address: Addis Ababa, Ethiopia</li>
      </ul>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">
          <strong>Last updated:</strong> {new Date().toLocaleDateString()}
        </p>
      </div>
    </motion.div>
  )
} 