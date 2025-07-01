'use client'

import { useState } from 'react'
import { 
  Database, Calendar, Clock, HardDrive,
  CheckCircle, AlertTriangle, RefreshCw, Download,
  Upload, Trash2, Search, Filter
} from 'lucide-react'

const backupConfig = {
  schedules: [
    {
      id: 1,
      name: 'Daily Full Backup',
      frequency: 'Daily',
      time: '00:00',
      type: 'Full',
      retention: '30 days',
      status: 'active'
    },
    {
      id: 2,
      name: 'Hourly Incremental',
      frequency: 'Hourly',
      time: 'Every hour',
      type: 'Incremental',
      retention: '7 days',
      status: 'active'
    },
    {
      id: 3,
      name: 'Weekly Archive',
      frequency: 'Weekly',
      time: 'Sunday 00:00',
      type: 'Archive',
      retention: '1 year',
      status: 'active'
    }
  ],
  backupHistory: [
    {
      id: 'bk-001',
      type: 'Full',
      startTime: '2024-03-20 00:00:00',
      endTime: '2024-03-20 01:30:00',
      size: '250GB',
      status: 'completed',
      location: 'Main Storage'
    },
    {
      id: 'bk-002',
      type: 'Incremental',
      startTime: '2024-03-20 01:00:00',
      endTime: '2024-03-20 01:15:00',
      size: '25GB',
      status: 'completed',
      location: 'Main Storage'
    },
    {
      id: 'bk-003',
      type: 'Archive',
      startTime: '2024-03-19 00:00:00',
      endTime: '2024-03-19 02:00:00',
      size: '500GB',
      status: 'completed',
      location: 'Archive Storage'
    }
  ],
  storageLocations: [
    {
      name: 'Main Storage',
      type: 'Local',
      capacity: '2TB',
      used: '1.2TB',
      status: 'online'
    },
    {
      name: 'Cloud Backup',
      type: 'Cloud',
      capacity: '5TB',
      used: '3.1TB',
      status: 'online'
    },
    {
      name: 'Archive Storage',
      type: 'Network',
      capacity: '10TB',
      used: '7.5TB',
      status: 'online'
    }
  ]
}

// Define the type for a schedule
interface Schedule {
  id: number
  name: string
  frequency: string
  time: string
  type: string
  retention: string
  status: string
}

export default function BackupManagement() {
  const [selectedSchedule, setSelectedSchedule] = useState<Schedule | null>(null)
  const [selectedBackup, setSelectedBackup] = useState(null)

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Backup Management</h1>
          <p className="text-gray-600">Manage system backups, schedules, and restoration</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <Database className="h-8 w-8 text-blue-500" />
              <span className="text-sm font-medium text-blue-500">Active</span>
            </div>
            <h3 className="text-lg font-semibold">Backup Status</h3>
            <p className="text-gray-600">All systems protected</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <Calendar className="h-8 w-8 text-green-500" />
              <span className="text-sm font-medium text-green-500">Scheduled</span>
            </div>
            <h3 className="text-lg font-semibold">Next Backup</h3>
            <p className="text-gray-600">Today at 00:00</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <HardDrive className="h-8 w-8 text-purple-500" />
              <span className="text-sm font-medium text-purple-500">Available</span>
            </div>
            <h3 className="text-lg font-semibold">Storage</h3>
            <p className="text-gray-600">1.8TB free space</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <Clock className="h-8 w-8 text-orange-500" />
              <span className="text-sm font-medium text-orange-500">Recent</span>
            </div>
            <h3 className="text-lg font-semibold">Last Backup</h3>
            <p className="text-gray-600">2 hours ago</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Backup Schedules */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Backup Schedules</h2>
                  <button className="btn-primary text-sm">New Schedule</button>
                </div>
                <div className="space-y-4">
                  {backupConfig.schedules.map((schedule) => (
                    <div
                      key={schedule.id}
                      className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer"
                      onClick={() => setSelectedSchedule(schedule)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <Calendar className="w-5 h-5 mr-3 text-gray-500" />
                          <h3 className="font-semibold">{schedule.name}</h3>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          schedule.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {schedule.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                        <div>
                          <span className="font-medium">Frequency:</span> {schedule.frequency}
                        </div>
                        <div>
                          <span className="font-medium">Type:</span> {schedule.type}
                        </div>
                        <div>
                          <span className="font-medium">Time:</span> {schedule.time}
                        </div>
                        <div>
                          <span className="font-medium">Retention:</span> {schedule.retention}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Storage Locations */}
          <div>
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Storage Locations</h2>
                <div className="space-y-4">
                  {backupConfig.storageLocations.map((location, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{location.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          location.status === 'online' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {location.status}
                        </span>
                      </div>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>Type: {location.type}</p>
                        <p>Capacity: {location.capacity}</p>
                        <p>Used: {location.used}</p>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-500 rounded-full h-2"
                            style={{
                              width: `${(parseInt(location.used) / parseInt(location.capacity)) * 100}%`
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Backup History */}
        <div className="mt-8">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Backup History</h2>
                <div className="flex space-x-4">
                  <button className="flex items-center text-gray-600 hover:text-gray-900">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-gray-900">
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Start Time
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        End Time
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Size
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {backupConfig.backupHistory.map((backup) => (
                      <tr key={backup.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {backup.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {backup.type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {backup.startTime}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {backup.endTime}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {backup.size}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            backup.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {backup.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex space-x-3">
                            <button className="text-blue-600 hover:text-blue-900">
                              <Download className="w-4 h-4" />
                            </button>
                            <button className="text-green-600 hover:text-green-900">
                              <RefreshCw className="w-4 h-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-900">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
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