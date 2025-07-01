'use client'

import { useState } from 'react'
import { 
  Users, UserPlus, UserCheck, UserX,
  Shield, Key, Settings, Search,
  Filter, MoreVertical, Edit, Trash2
} from 'lucide-react'

const userConfig = {
  roles: {
    superAdmin: {
      name: 'Super Administrator',
      permissions: ['all'],
      level: 1
    },
    admin: {
      name: 'Administrator',
      permissions: ['user_management', 'content_management', 'system_settings'],
      level: 2
    },
    moderator: {
      name: 'Moderator',
      permissions: ['content_management', 'user_view'],
      level: 3
    },
    member: {
      name: 'Member',
      permissions: ['profile_management', 'content_view'],
      level: 4
    }
  },
  users: [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@ebaspa.org',
      role: 'superAdmin',
      status: 'active',
      lastLogin: '2024-03-20 10:30:00',
      created: '2024-01-01'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@ebaspa.org',
      role: 'admin',
      status: 'active',
      lastLogin: '2024-03-20 09:15:00',
      created: '2024-01-15'
    },
    {
      id: 3,
      name: 'Bob Wilson',
      email: 'bob@ebaspa.org',
      role: 'moderator',
      status: 'inactive',
      lastLogin: '2024-03-15 14:20:00',
      created: '2024-02-01'
    }
  ],
  activityLog: [
    {
      id: 1,
      user: 'John Doe',
      action: 'User created',
      target: 'New member account',
      timestamp: '2024-03-20 10:45:00'
    },
    {
      id: 2,
      user: 'Jane Smith',
      action: 'Role modified',
      target: 'Bob Wilson',
      timestamp: '2024-03-20 09:30:00'
    },
    {
      id: 3,
      user: 'System',
      action: 'Account locked',
      target: 'Inactive user',
      timestamp: '2024-03-19 23:00:00'
    }
  ]
}

// Define the type for a user
interface User {
  id: number
  name: string
  email: string
  role: string
  status: string
  lastLogin: string
  created: string
}

export default function UserManagement() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterRole, setFilterRole] = useState('all')

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
          <p className="text-gray-600">Manage user accounts, roles, and permissions</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <Users className="h-8 w-8 text-blue-500" />
              <span className="text-sm font-medium text-blue-500">Total</span>
            </div>
            <h3 className="text-lg font-semibold">Active Users</h3>
            <p className="text-gray-600">150 accounts</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <UserPlus className="h-8 w-8 text-green-500" />
              <span className="text-sm font-medium text-green-500">New</span>
            </div>
            <h3 className="text-lg font-semibold">Recent Signups</h3>
            <p className="text-gray-600">12 this week</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <Shield className="h-8 w-8 text-purple-500" />
              <span className="text-sm font-medium text-purple-500">Roles</span>
            </div>
            <h3 className="text-lg font-semibold">User Roles</h3>
            <p className="text-gray-600">4 active roles</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <UserX className="h-8 w-8 text-red-500" />
              <span className="text-sm font-medium text-red-500">Inactive</span>
            </div>
            <h3 className="text-lg font-semibold">Inactive Users</h3>
            <p className="text-gray-600">3 accounts</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - User List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">User Accounts</h2>
                  <button className="btn-primary text-sm flex items-center">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Add User
                  </button>
                </div>

                {/* Search and Filter */}
                <div className="flex space-x-4 mb-6">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      placeholder="Search users..."
                      className="w-full px-4 py-2 border rounded-lg"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
                  </div>
                  <select
                    className="px-4 py-2 border rounded-lg"
                    value={filterRole}
                    onChange={(e) => setFilterRole(e.target.value)}
                  >
                    <option value="all">All Roles</option>
                    {Object.entries(userConfig.roles).map(([key, role]) => (
                      <option key={key} value={key}>{role.name}</option>
                    ))}
                  </select>
                </div>

                {/* User List */}
                <div className="space-y-4">
                  {userConfig.users.map((user) => (
                    <div
                      key={user.id}
                      className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer"
                      onClick={() => setSelectedUser(user)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                            <span className="text-lg font-medium text-gray-600">
                              {user.name.charAt(0)}
                            </span>
                          </div>
                          <div className="ml-4">
                            <h3 className="font-semibold">{user.name}</h3>
                            <p className="text-sm text-gray-500">{user.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {user.status}
                          </span>
                          <span className="text-sm text-gray-500">{(() => {
                            const roles = userConfig.roles;
                            const roleKey = user.role as keyof typeof roles;
                            return roles[roleKey]?.name || user.role;
                          })()}</span>
                          <button className="text-gray-400 hover:text-gray-600">
                            <MoreVertical className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Role Management */}
          <div>
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Role Management</h2>
                <div className="space-y-4">
                  {Object.entries(userConfig.roles).map(([key, role]) => (
                    <div key={key} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{role.name}</h3>
                        <span className="text-sm text-gray-500">Level {role.level}</span>
                      </div>
                      <div className="space-y-2">
                        {role.permissions.map((permission, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-600">
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

            {/* Activity Log */}
            <div className="mt-8 bg-white rounded-lg shadow">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  {userConfig.activityLog.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <UserCheck className="w-5 h-5 text-gray-400" />
                      </div>
                      <div>
                        <p className="text-sm">
                          <span className="font-medium">{activity.user}</span>
                          {' '}{activity.action}{' '}
                          <span className="font-medium">{activity.target}</span>
                        </p>
                        <p className="text-xs text-gray-500">{activity.timestamp}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 