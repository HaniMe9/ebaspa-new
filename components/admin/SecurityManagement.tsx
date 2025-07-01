'use client'

import { useState } from 'react'
import { Shield, Lock, AlertTriangle, Users, Key, FileText, Activity, Settings } from 'lucide-react'

const securityConfig = {
  accessLevels: [
    {
      name: 'Super Admin',
      permissions: ['Full system access', 'User management', 'Security settings', 'Database access'],
      requiredAuth: ['2FA', 'Biometric', 'Hardware key']
    },
    {
      name: 'System Admin',
      permissions: ['System maintenance', 'User support', 'Backup management'],
      requiredAuth: ['2FA', 'Biometric']
    },
    {
      name: 'Content Admin',
      permissions: ['Content management', 'Member management', 'Event management'],
      requiredAuth: ['2FA']
    }
  ],
  securityPolicies: [
    {
      name: 'Password Policy',
      rules: [
        'Minimum 12 characters',
        'Must include numbers and special characters',
        'Change required every 90 days',
        'No password reuse for 12 months'
      ]
    },
    {
      name: 'Access Control',
      rules: [
        'Role-based access control',
        'IP-based restrictions',
        'Session timeout after 30 minutes',
        'Concurrent session limits'
      ]
    },
    {
      name: 'Data Protection',
      rules: [
        'End-to-end encryption',
        'Regular backups',
        'Data classification',
        'Audit logging'
      ]
    }
  ],
  auditLogs: [
    {
      timestamp: '2024-03-20 10:30:15',
      user: 'admin@ebaspa.org',
      action: 'Security settings modified',
      details: 'Updated password policy',
      severity: 'high'
    },
    {
      timestamp: '2024-03-20 09:15:22',
      user: 'system@ebaspa.org',
      action: 'User access granted',
      details: 'New admin account created',
      severity: 'medium'
    }
  ]
}

export default function SecurityManagement() {
  const [activeTab, setActiveTab] = useState('overview')
  const [securityAlerts, setSecurityAlerts] = useState([
    {
      type: 'critical',
      message: 'Multiple failed login attempts detected',
      time: '5 minutes ago'
    },
    {
      type: 'warning',
      message: 'System updates pending installation',
      time: '1 hour ago'
    },
    {
      type: 'info',
      message: 'Security audit scheduled for next week',
      time: '2 hours ago'
    }
  ])

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Security Management</h1>
          <p className="text-gray-600">Manage system security and access controls</p>
        </div>

        {/* Security Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <Shield className="h-8 w-8 text-green-500" />
              <span className="text-sm font-medium text-green-500">Active</span>
            </div>
            <h3 className="text-lg font-semibold">Security Status</h3>
            <p className="text-gray-600">All systems operational</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <Lock className="h-8 w-8 text-blue-500" />
              <span className="text-sm font-medium text-blue-500">Protected</span>
            </div>
            <h3 className="text-lg font-semibold">Active Sessions</h3>
            <p className="text-gray-600">12 authenticated users</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <AlertTriangle className="h-8 w-8 text-yellow-500" />
              <span className="text-sm font-medium text-yellow-500">Monitoring</span>
            </div>
            <h3 className="text-lg font-semibold">Security Alerts</h3>
            <p className="text-gray-600">3 active alerts</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <Activity className="h-8 w-8 text-purple-500" />
              <span className="text-sm font-medium text-purple-500">Active</span>
            </div>
            <h3 className="text-lg font-semibold">System Health</h3>
            <p className="text-gray-600">98% uptime</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Access Levels */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Access Levels & Permissions</h2>
                <div className="space-y-6">
                  {securityConfig.accessLevels.map((level, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{level.name}</h3>
                        <span className="text-sm text-gray-500">
                          {level.requiredAuth.join(', ')}
                        </span>
                      </div>
                      <div className="space-y-2">
                        {level.permissions.map((permission, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <Key className="w-4 h-4 mr-2 text-green-500" />
                            {permission}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Security Alerts */}
          <div>
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Security Alerts</h2>
                <div className="space-y-4">
                  {securityAlerts.map((alert, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg ${
                        alert.type === 'critical'
                          ? 'bg-red-50'
                          : alert.type === 'warning'
                          ? 'bg-yellow-50'
                          : 'bg-blue-50'
                      }`}
                    >
                      <div className="flex items-start">
                        <AlertTriangle
                          className={`w-5 h-5 mr-3 ${
                            alert.type === 'critical'
                              ? 'text-red-500'
                              : alert.type === 'warning'
                              ? 'text-yellow-500'
                              : 'text-blue-500'
                          }`}
                        />
                        <div>
                          <p className="font-medium">{alert.message}</p>
                          <p className="text-sm text-gray-500">{alert.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Policies */}
        <div className="mt-8">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Security Policies</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {securityConfig.securityPolicies.map((policy, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-3">{policy.name}</h3>
                    <ul className="space-y-2">
                      {policy.rules.map((rule, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <Shield className="w-4 h-4 mr-2 text-blue-500" />
                          {rule}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Audit Logs */}
        <div className="mt-8">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Audit Logs</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Timestamp
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        User
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Action
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Details
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Severity
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {securityConfig.auditLogs.map((log, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {log.timestamp}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {log.user}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {log.action}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {log.details}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              log.severity === 'high'
                                ? 'bg-red-100 text-red-800'
                                : log.severity === 'medium'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-green-100 text-green-800'
                            }`}
                          >
                            {log.severity}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 