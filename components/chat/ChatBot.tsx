'use client'

import { useState } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Define knowledge base for common questions
const knowledgeBase = {
  EBASPA: {
    about: "Ethiopian Business Advisory Service Providers Association (EBASPA) is a membership organization dedicated to developing Ethiopia's business development services ecosystem.",
    mission: "To strengthen Ethiopia's business advisory services sector by promoting excellence, fostering collaboration, and driving innovation in business development services.",
    vision: "To be the leading force in creating a world-class business advisory services ecosystem that powers Ethiopia's economic growth.",
    history: "Established in 2022, EBASPA emerged from the need to strengthen and standardize Ethiopia's business advisory services sector.",
    values: [
      "Excellence in service delivery",
      "Professional integrity",
      "Innovation and adaptability",
      "Collaboration and partnership",
      "Sustainable development"
    ],
    strategic_objectives: [
      "Enhance BDS provider capacity",
      "Promote industry standards",
      "Facilitate market linkages",
      "Drive policy advocacy",
      "Foster innovation"
    ],
    services: [
      {
        name: "Capacity Building Programs",
        examples: [
          "BDS Provider Certification",
          "Professional Development Workshops",
          "Specialized Training Programs",
          "Mentorship Programs"
        ]
      },
      {
        name: "Policy Advocacy",
        examples: [
          "Government Engagement",
          "Policy Research",
          "Stakeholder Consultations",
          "Position Papers"
        ]
      },
      {
        name: "Market Facilitation",
        examples: [
          "B2B Matchmaking",
          "Market Access Programs",
          "Trade Shows",
          "Business Linkages"
        ]
      },
      {
        name: "Standards & Accreditation",
        examples: [
          "Quality Standards Development",
          "Provider Accreditation",
          "Best Practice Guidelines",
          "Performance Monitoring"
        ]
      },
      {
        name: "SME Support Services",
        examples: [
          "Business Diagnostics",
          "Advisory Services",
          "Growth Planning",
          "Access to Finance"
        ]
      }
    ],
    impact: {
      achievements: [
        "Supporting 500+ SMEs across Ethiopia",
        "Training and certifying BDS providers",
        "Developing industry standards",
        "Facilitating market linkages",
        "Contributing to policy development"
      ],
      success_stories: [
        {
          title: "SME Growth Program",
          description: "Helped 50 SMEs achieve 30% average growth through targeted BDS support"
        },
        {
          title: "BDS Standards Implementation",
          description: "Developed and implemented quality standards adopted by 100+ providers"
        },
        {
          title: "Market Access Initiative",
          description: "Facilitated $2M+ in business deals through B2B matchmaking"
        }
      ]
    },
    partnerships: [
      {
        type: "Government",
        examples: ["Ministry of Trade", "SME Development Agency"]
      },
      {
        type: "International",
        examples: ["World Bank", "IFC", "UNDP"]
      },
      {
        type: "Private Sector",
        examples: ["Chamber of Commerce", "Sector Associations"]
      }
    ]
  },

  BDSEcosystem: {
    overview: "Ethiopia's BDS ecosystem is a network of organizations, institutions, and individuals working together to support business growth and development.",
    components: [
      {
        name: "Service Providers",
        types: [
          "Individual Consultants",
          "Consulting Firms",
          "Training Institutions",
          "Technical Experts"
        ]
      },
      {
        name: "Support Organizations",
        types: [
          "Government Agencies",
          "Development Partners",
          "Financial Institutions",
          "Research Centers"
        ]
      },
      {
        name: "Market Players",
        types: [
          "SMEs",
          "Large Enterprises",
          "Start-ups",
          "Industry Associations"
        ]
      }
    ],
    services: {
      strategic: [
        "Business Planning",
        "Market Research",
        "Strategy Development",
        "Investment Planning"
      ],
      operational: [
        "Process Improvement",
        "Quality Management",
        "HR Development",
        "Financial Management"
      ],
      specialized: [
        "Digital Transformation",
        "Export Development",
        "Innovation Management",
        "Green Business Solutions"
      ]
    },
    success_metrics: [
      "Business Growth Rate",
      "Job Creation",
      "Market Expansion",
      "Innovation Adoption",
      "Sustainability Improvements"
    ]
  },

  Membership: {
    categories: {
      individual: {
        description: "For independent BDS professionals",
        requirements: [
          "Minimum 2 years experience",
          "Professional certification",
          "Client references",
          "Annual fee payment"
        ],
        benefits: [
          "Professional recognition",
          "Training access",
          "Networking events",
          "Resource library"
        ]
      },
      corporate: {
        description: "For BDS firms and institutions",
        requirements: [
          "Business registration",
          "Quality certification",
          "Track record",
          "Annual fee payment"
        ],
        benefits: [
          "Corporate branding",
          "Team development",
          "Market access",
          "Industry influence"
        ]
      },
      associate: {
        description: "For related service providers",
        requirements: [
          "Relevant business focus",
          "Service alignment",
          "Annual fee payment"
        ],
        benefits: [
          "Ecosystem access",
          "Partnership opportunities",
          "Knowledge sharing",
          "Event participation"
        ]
      }
    },
    application_process: {
      steps: [
        {
          name: "Initial Application",
          details: [
            "Complete online form",
            "Submit required documents",
            "Pay application fee"
          ]
        },
        {
          name: "Document Verification",
          details: [
            "Credential check",
            "Reference verification",
            "Experience validation"
          ]
        },
        {
          name: "Review Process",
          details: [
            "Application assessment",
            "Committee review",
            "Decision making"
          ]
        },
        {
          name: "Onboarding",
          details: [
            "Welcome package",
            "Portal access",
            "Orientation session"
          ]
        }
      ],
      timeline: {
        standard: "3-5 business days",
        expedited: "24-48 hours (additional fee applies)"
      }
    }
  },

  AdminSystem: {
    roles: {
      system_admin: {
        description: "Full system control and configuration",
        access_areas: [
          "System Configuration",
          "User Management",
          "Security Settings",
          "Database Administration"
        ],
        responsibilities: [
          "System maintenance",
          "Security monitoring",
          "Performance optimization",
          "Backup management"
        ]
      },
      content_admin: {
        description: "Content and communication management",
        access_areas: [
          "Website Content",
          "News Management",
          "Event Updates",
          "Resource Library"
        ],
        responsibilities: [
          "Content updates",
          "Quality assurance",
          "User engagement",
          "Analytics monitoring"
        ]
      },
      member_admin: {
        description: "Membership and application management",
        access_areas: [
          "Member Profiles",
          "Application Processing",
          "Payment Verification",
          "Support Tickets"
        ],
        responsibilities: [
          "Application review",
          "Member support",
          "Status updates",
          "Report generation"
        ]
      }
    },
    features: {
      dashboard: {
        metrics: [
          "Active Members",
          "Pending Applications",
          "Recent Activities",
          "System Health"
        ],
        actions: [
          "Quick Approve/Reject",
          "Status Updates",
          "Notification Management",
          "Report Generation"
        ]
      },
      member_management: {
        functions: [
          "Profile Updates",
          "Payment Tracking",
          "Document Management",
          "Communication Log"
        ],
        tools: [
          "Bulk Operations",
          "Search & Filter",
          "Export Data",
          "Activity History"
        ]
      },
      security: {
        protocols: [
          "Two-Factor Authentication",
          "Role-Based Access",
          "Audit Logging",
          "Data Encryption"
        ],
        monitoring: [
          "Access Logs",
          "Security Alerts",
          "Performance Metrics",
          "Error Tracking"
        ]
      }
    },
    workflows: {
      member_approval: {
        steps: [
          "Application Review",
          "Document Verification",
          "Payment Confirmation",
          "Profile Activation"
        ],
        automations: [
          "Status Updates",
          "Email Notifications",
          "Task Assignment",
          "Follow-up Reminders"
        ]
      },
      content_management: {
        steps: [
          "Content Creation",
          "Review Process",
          "Publication",
          "Analytics Tracking"
        ],
        tools: [
          "Rich Text Editor",
          "Media Library",
          "Version Control",
          "SEO Tools"
        ]
      }
    }
  },

  Support: {
    channels: {
      email: "support@ebaspa.org",
      phone: "+251 11 234 5678",
      chat: "Available 9AM-5PM EAT",
      portal: "24/7 Self-service"
    },
    common_issues: {
      membership: [
        "Application Status",
        "Payment Issues",
        "Document Upload",
        "Access Problems"
      ],
      technical: [
        "Login Issues",
        "Password Reset",
        "System Errors",
        "Browser Compatibility"
      ],
      service: [
        "Service Information",
        "Event Registration",
        "Resource Access",
        "Certificate Requests"
      ]
    },
    response_times: {
      urgent: "2-4 hours",
      standard: "24 hours",
      non_critical: "48 hours"
    }
  }
}

// Helper function to find the best response
function findResponse(message: string): string {
  const msg = message.toLowerCase()
  
  // EBASPA Information
  if (msg.includes('about') && msg.includes('ebaspa')) {
    return `About EBASPA:\n${knowledgeBase.EBASPA.about}\n\nMission:\n${knowledgeBase.EBASPA.mission}\n\nVision:\n${knowledgeBase.EBASPA.vision}\n\nCore Values:\n${knowledgeBase.EBASPA.values.map(value => "• " + value).join('\n')}`
  }

  if (msg.includes('service') || msg.includes('program')) {
    const services = knowledgeBase.EBASPA.services.map(service => 
      `${service.name}:\n${service.examples.map(ex => "  - " + ex).join('\n')}`
    ).join('\n\n')
    return `EBASPA Services and Programs:\n\n${services}`
  }

  if (msg.includes('impact') || msg.includes('achievement')) {
    const stories = knowledgeBase.EBASPA.impact.success_stories.map(story =>
      `${story.title}:\n${story.description}`
    ).join('\n\n')
    return `EBASPA Achievements:\n${knowledgeBase.EBASPA.impact.achievements.map(a => "• " + a).join('\n')}\n\nSuccess Stories:\n${stories}`
  }

  // Ecosystem Information
  if (msg.includes('ecosystem')) {
    const components = knowledgeBase.BDSEcosystem.components.map(comp =>
      `${comp.name}:\n${comp.types.map(type => "  - " + type).join('\n')}`
    ).join('\n\n')
    return `BDS Ecosystem Overview:\n${knowledgeBase.BDSEcosystem.overview}\n\nKey Components:\n${components}`
  }

  // Membership Information
  if (msg.includes('member') && msg.includes('category')) {
    let response = 'Membership Categories:\n\n'
    for (const [type, info] of Object.entries(knowledgeBase.Membership.categories)) {
      response += `${type.charAt(0).toUpperCase() + type.slice(1)}:\n`
      response += `${info.description}\n\nRequirements:\n`
      response += `${info.requirements.map(req => "• " + req).join('\n')}\n\n`
      response += `Benefits:\n${info.benefits.map(ben => "• " + ben).join('\n')}\n\n`
    }
    return response
  }

  // Admin System Information
  if (msg.includes('admin') && msg.includes('role')) {
    let response = 'Administrative Roles:\n\n'
    for (const [role, info] of Object.entries(knowledgeBase.AdminSystem.roles)) {
      response += `${role.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}:\n`
      response += `${info.description}\n\nAccess Areas:\n`
      response += `${info.access_areas.map(area => "• " + area).join('\n')}\n\n`
      response += `Responsibilities:\n${info.responsibilities.map(resp => "• " + resp).join('\n')}\n\n`
    }
    return response
  }

  if (msg.includes('workflow')) {
    let response = 'Administrative Workflows:\n\n'
    for (const [type, info] of Object.entries(knowledgeBase.AdminSystem.workflows)) {
      response += `${type.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}:\n`
      response += `Steps:\n${info.steps.map(step => "• " + step).join('\n')}\n\n`
      response += `Tools/Automations:\n${('automations' in info && info.automations) ? info.automations.map((auto: string) => "• " + auto).join('\n') : ('tools' in info && info.tools) ? info.tools.map((tool: string) => "• " + tool).join('\n') : ''}\n\n`
    }
    return response
  }

  // Support Information
  if (msg.includes('support') || msg.includes('help')) {
    return `Support Channels:\n${Object.entries(knowledgeBase.Support.channels).map(([channel, info]) => `• ${channel}: ${info}`).join('\n')}\n\nResponse Times:\n${Object.entries(knowledgeBase.Support.response_times).map(([priority, time]) => `• ${priority}: ${time}`).join('\n')}\n\nCommon Issues:\n${Object.entries(knowledgeBase.Support.common_issues).map(([type, issues]) => `${type}:\n${issues.map(issue => "  - " + issue).join('\n')}`).join('\n\n')}`
  }

  // Default comprehensive response
  return "I can help you with comprehensive information about:\n\n" +
         "1. EBASPA:\n" +
         "   • About, Mission, and Vision\n" +
         "   • Services and Programs\n" +
         "   • Impact and Achievements\n" +
         "   • Partnerships\n\n" +
         "2. BDS Ecosystem:\n" +
         "   • Overview and Components\n" +
         "   • Services and Support\n" +
         "   • Success Metrics\n\n" +
         "3. Membership:\n" +
         "   • Categories and Requirements\n" +
         "   • Application Process\n" +
         "   • Benefits and Services\n\n" +
         "4. Administration:\n" +
         "   • Roles and Responsibilities\n" +
         "   • System Features\n" +
         "   • Workflows and Processes\n\n" +
         "5. Support:\n" +
         "   • Contact Channels\n" +
         "   • Common Issues\n" +
         "   • Response Times\n\n" +
         "What specific information would you like to know more about?"
}

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Array<{ type: 'user' | 'bot'; content: string }>>([
    { type: 'bot', content: 'Hello! I can help you with information about EBASPA, BDS, BDSP, and SME support. What would you like to know?' }
  ])
  const [input, setInput] = useState('')

  const toggleChat = () => setIsOpen(!isOpen)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    setMessages(prev => [...prev, { type: 'user', content: input }])
    
    // Get response from knowledge base
    const response = findResponse(input)
    
    // Add bot response with a small delay for natural feeling
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        type: 'bot', 
        content: response
      }])
    }, 500)

    setInput('')
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Toggle Button */}
      <button
        onClick={toggleChat}
        className="bg-primary-600 hover:bg-primary-700 text-white rounded-full p-3 shadow-lg transition-all duration-300"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute bottom-16 right-0 w-96 bg-white rounded-lg shadow-xl border border-gray-200"
          >
          {/* Chat Header */}
          <div className="bg-primary-600 text-white p-4 rounded-t-lg">
            <h3 className="font-semibold">EBASPA Assistant</h3>
          </div>

          {/* Messages Container */}
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.type === 'user'
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.content.split('\n').map((line, i) => (
                    <p key={i} className={i > 0 ? 'mt-1' : ''}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="border-t p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about BDS, BDSP, SMEs..."
                className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
              <button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 text-white rounded-lg px-4 py-2"
                aria-label="Send message"
              >
                <Send size={20} />
              </button>
            </div>
          </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Explicitly export the component
export { ChatBot }
export default ChatBot 