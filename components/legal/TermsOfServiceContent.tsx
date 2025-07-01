'use client'

import { motion } from 'framer-motion'

export default function TermsOfServiceContent() {
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

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing and using the EBASPA website and services, you accept and agree to be bound 
        by the terms and provision of this agreement.
      </p>

      <h2>2. Use License</h2>
      <p>
        Permission is granted to temporarily download one copy of the materials (information or software) 
        on EBASPA's website for personal, non-commercial transitory viewing only.
      </p>

      <h2>3. Membership Terms</h2>
      <p>As an EBASPA member, you agree to:</p>
      <ul>
        <li>Provide accurate and complete information during registration</li>
        <li>Maintain the confidentiality of your account credentials</li>
        <li>Use member benefits in accordance with our policies</li>
        <li>Pay membership fees on time</li>
        <li>Comply with our code of conduct and ethical standards</li>
      </ul>

      <h2>4. Prohibited Uses</h2>
      <p>You may not use our services to:</p>
      <ul>
        <li>Violate any applicable laws or regulations</li>
        <li>Infringe on intellectual property rights</li>
        <li>Transmit harmful, offensive, or inappropriate content</li>
        <li>Attempt to gain unauthorized access to our systems</li>
        <li>Interfere with the proper functioning of our services</li>
      </ul>

      <h2>5. Intellectual Property</h2>
      <p>
        The content on this website, including text, graphics, logos, and software, 
        is the property of EBASPA and is protected by copyright laws.
      </p>

      <h2>6. Disclaimer</h2>
      <p>
        The materials on EBASPA's website are provided on an 'as is' basis. EBASPA makes no warranties, 
        expressed or implied, and hereby disclaims and negates all other warranties including without 
        limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, 
        or non-infringement of intellectual property or other violation of rights.
      </p>

      <h2>7. Limitations</h2>
      <p>
        In no event shall EBASPA or its suppliers be liable for any damages (including, without limitation, 
        damages for loss of data or profit, or due to business interruption) arising out of the use or 
        inability to use the materials on EBASPA's website.
      </p>

      <h2>8. Accuracy of Materials</h2>
      <p>
        The materials appearing on EBASPA's website could include technical, typographical, or photographic 
        errors. EBASPA does not warrant that any of the materials on its website are accurate, complete, 
        or current.
      </p>

      <h2>9. Links</h2>
      <p>
        EBASPA has not reviewed all of the sites linked to its website and is not responsible for the 
        contents of any such linked site. The inclusion of any link does not imply endorsement by EBASPA 
        of the site.
      </p>

      <h2>10. Modifications</h2>
      <p>
        EBASPA may revise these terms of service for its website at any time without notice. By using 
        this website you are agreeing to be bound by the then current version of these Terms of Service.
      </p>

      <h2>11. Governing Law</h2>
      <p>
        These terms and conditions are governed by and construed in accordance with the laws of Ethiopia 
        and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
      </p>

      <h2>12. Contact Information</h2>
      <p>
        If you have any questions about these Terms of Service, please contact us at:
      </p>
      <div className="bg-gray-50 rounded-lg p-4">
        <p className="mb-2">
          <strong>Email:</strong> legal@ebaspa.org
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