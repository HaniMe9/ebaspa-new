'use client'

import { useState, useEffect } from 'react'
import { 
  Users, Settings, Database, Shield, 
  Plus, Edit, Trash2, Search, LogOut 
} from 'lucide-react'
import SecurityManagement from './SecurityManagement'
import SystemMonitoring from './SystemMonitoring'
import BackupManagement from './BackupManagement'
import UserManagement from './UserManagement'
import DatabaseManagement from './DatabaseManagement'

type MenuItem = {
  id: string
  name: string
  icon: React.ElementType
  component: React.ComponentType
}

const menuItems: MenuItem[] = [
  { id: 'users', name: 'User Management', icon: Users, component: UserManagement },
  { id: 'security', name: 'Security', icon: Shield, component: SecurityManagement },
  { id: 'system', name: 'System Monitoring', icon: Settings, component: SystemMonitoring },
  { id: 'backup', name: 'Backup', icon: Database, component: BackupManagement },
  { id: 'database', name: 'Database', icon: Database, component: DatabaseManagement }
]

export default function AdminDashboard() {
  const [activeMenu, setActiveMenu] = useState('users')
  const [searchTerm, setSearchTerm] = useState('')
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState<any>(null)

  const ActiveComponent = menuItems.find(item => item.id === activeMenu)?.component || UserManagement

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/admin/logout', {
        method: 'POST'
      })
      window.location.href = '/admin/login'
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleAdd = () => {
    setShowAddModal(true)
  }

  const handleEdit = (item: any) => {
    setSelectedItem(item)
    setShowEditModal(true)
  }

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        const response = await fetch(`/api/admin/${activeMenu}/${id}`, {
          method: 'DELETE'
        })
        
        if (response.ok) {
          // Refresh data
          // You'll need to implement this based on your data fetching strategy
        } else {
          throw new Error('Delete failed')
        }
      } catch (error) {
        console.error('Delete failed:', error)
      }
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">EBASPA Admin</h2>
          <p className="text-sm text-gray-600 mt-1">System Administration</p>
        </div>
        
        <nav className="mt-6">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => setActiveMenu(item.id)}
                className={`w-full flex items-center px-6 py-3 text-left ${
                  activeMenu === item.id
                    ? 'bg-primary-50 border-r-4 border-primary-500'
                    : 'hover:bg-gray-50'
                }`}
              >
                <Icon className="h-5 w-5 text-gray-600" />
                <span className="ml-3 text-sm font-medium text-gray-900">
                  {item.name}
                </span>
              </button>
            )
          })}
        </nav>

        <div className="absolute bottom-0 w-64 p-6">
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Sign Out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            <button
              onClick={handleAdd}
              className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
            >
              <Plus className="h-5 w-5 mr-2" />
              Add New
            </button>
          </div>

          {/* Active Component */}
          <ActiveComponent />
        </div>
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h3 className="text-lg font-bold mb-4">Add New Item</h3>
            {/* Add form will go here */}
            <div className="flex justify-end mt-6">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 mr-2"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700">
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h3 className="text-lg font-bold mb-4">Edit Item</h3>
            {/* Edit form will go here */}
            <div className="flex justify-end mt-6">
              <button
                onClick={() => setShowEditModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 mr-2"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 