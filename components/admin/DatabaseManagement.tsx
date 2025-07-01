'use client'

import { useState } from 'react'
import { 
  Database, HardDrive, Activity, AlertTriangle,
  RefreshCw, Search, Filter, Download, Upload,
  CheckCircle, XCircle, Clock, Settings
} from 'lucide-react'

// Define the type for a database
interface Database {
  name: string
  type: string
  size: string
  tables: number
  status: string
  lastBackup: string
  performance: {
    connections: number
    queryTime: string
    cacheHitRate: string
  }
}

const dbConfig = {
  databases: [
    {
      name: 'EBASPA_MAIN',
      type: 'MySQL',
      size: '2.5GB',
      tables: 45,
      status: 'online',
      lastBackup: '2024-03-20 00:00:00',
      performance: {
        connections: 25,
        queryTime: '45ms',
        cacheHitRate: '95%'
      }
    },
    {
      name: 'EBASPA_ANALYTICS',
      type: 'PostgreSQL',
      size: '1.8GB',
      tables: 20,
      status: 'online',
      lastBackup: '2024-03-20 00:00:00',
      performance: {
        connections: 15,
        queryTime: '35ms',
        cacheHitRate: '92%'
      }
    },
    {
      name: 'EBASPA_ARCHIVE',
      type: 'MySQL',
      size: '5.2GB',
      tables: 30,
      status: 'online',
      lastBackup: '2024-03-20 00:00:00',
      performance: {
        connections: 10,
        queryTime: '50ms',
        cacheHitRate: '90%'
      }
    }
  ],
  backupSchedules: [
    {
      database: 'EBASPA_MAIN',
      frequency: 'Daily',
      time: '00:00',
      type: 'Full',
      retention: '30 days',
      location: 'Cloud Storage'
    },
    {
      database: 'EBASPA_ANALYTICS',
      frequency: 'Daily',
      time: '01:00',
      type: 'Full',
      retention: '30 days',
      location: 'Cloud Storage'
    },
    {
      database: 'EBASPA_ARCHIVE',
      frequency: 'Weekly',
      time: 'Sunday 00:00',
      type: 'Full',
      retention: '90 days',
      location: 'Cloud Storage'
    }
  ],
  recentQueries: [
    {
      id: 1,
      database: 'EBASPA_MAIN',
      query: 'SELECT * FROM members WHERE status = "active"',
      duration: '42ms',
      timestamp: '2024-03-20 10:30:00',
      status: 'success'
    },
    {
      id: 2,
      database: 'EBASPA_ANALYTICS',
      query: 'UPDATE user_metrics SET last_login = NOW()',
      duration: '35ms',
      timestamp: '2024-03-20 10:25:00',
      status: 'success'
    },
    {
      id: 3,
      database: 'EBASPA_MAIN',
      query: 'INSERT INTO activity_log (user_id, action) VALUES (123, "login")',
      duration: '38ms',
      timestamp: '2024-03-20 10:20:00',
      status: 'success'
    }
  ]
}

export default function DatabaseManagement() {
  const [selectedDB, setSelectedDB] = useState<Database | null>(null)
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Database Management</h1>
          <p className="text-gray-600">Monitor and manage database operations</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <Database className="h-8 w-8 text-blue-500" />
              <span className="text-sm font-medium text-blue-500">Active</span>
            </div>
            <h3 className="text-lg font-semibold">Databases</h3>
            <p className="text-gray-600">3 databases online</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <HardDrive className="h-8 w-8 text-green-500" />
              <span className="text-sm font-medium text-green-500">Storage</span>
            </div>
            <h3 className="text-lg font-semibold">Total Size</h3>
            <p className="text-gray-600">9.5GB used</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <Activity className="h-8 w-8 text-purple-500" />
              <span className="text-sm font-medium text-purple-500">Performance</span>
            </div>
            <h3 className="text-lg font-semibold">Avg Response</h3>
            <p className="text-gray-600">43ms query time</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <AlertTriangle className="h-8 w-8 text-yellow-500" />
              <span className="text-sm font-medium text-yellow-500">Status</span>
            </div>
            <h3 className="text-lg font-semibold">Health Check</h3>
            <p className="text-gray-600">All systems normal</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Database List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-6">Database Overview</h2>
                <div className="space-y-6">
                  {dbConfig.databases.map((db, index) => (
                    <div
                      key={index}
                      className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer"
                      onClick={() => setSelectedDB(db)}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Database className="w-5 h-5 text-gray-500 mr-3" />
                          <div>
                            <h3 className="font-semibold">{db.name}</h3>
                            <p className="text-sm text-gray-500">{db.type}</p>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          db.status === 'online' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {db.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Size:</span>
                          <span className="ml-2 font-medium">{db.size}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Tables:</span>
                          <span className="ml-2 font-medium">{db.tables}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Cache Hit:</span>
                          <span className="ml-2 font-medium">{db.performance.cacheHitRate}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Queries */}
            <div className="mt-8 bg-white rounded-lg shadow">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Recent Queries</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Database
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Query
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Duration
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {dbConfig.recentQueries.map((query) => (
                        <tr key={query.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {query.database}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <code className="bg-gray-100 px-2 py-1 rounded">
                              {query.query}
                            </code>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {query.duration}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              query.status === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                            }`}>
                              {query.status}
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

          {/* Right Column - Backup Schedules */}
          <div>
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Backup Schedules</h2>
                <div className="space-y-4">
                  {dbConfig.backupSchedules.map((schedule, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{schedule.database}</h3>
                        <span className="text-sm text-gray-500">{schedule.frequency}</span>
                      </div>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {schedule.time}
                        </div>
                        <div className="flex items-center">
                          <HardDrive className="w-4 h-4 mr-2" />
                          {schedule.location}
                        </div>
                        <div className="flex items-center">
                          <RefreshCw className="w-4 h-4 mr-2" />
                          Retention: {schedule.retention}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-8 bg-white rounded-lg shadow">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between p-3 text-left border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center">
                      <Download className="w-5 h-5 mr-3 text-blue-500" />
                      <span>Backup Database</span>
                    </div>
                    <span className="text-sm text-gray-500">Now</span>
                  </button>
                  <button className="w-full flex items-center justify-between p-3 text-left border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center">
                      <Upload className="w-5 h-5 mr-3 text-green-500" />
                      <span>Restore Database</span>
                    </div>
                    <span className="text-sm text-gray-500">Select</span>
                  </button>
                  <button className="w-full flex items-center justify-between p-3 text-left border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center">
                      <Settings className="w-5 h-5 mr-3 text-purple-500" />
                      <span>Optimize Tables</span>
                    </div>
                    <span className="text-sm text-gray-500">Run</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 