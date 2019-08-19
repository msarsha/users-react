import './UsersGrid.css'
import React from 'react'
import UserCard from './UserCard'

const UsersGrid = ({ users, onEdit, onView }) => {
  return (
    <div className="users-grid">
      {users.map(user => (
        <UserCard key={user.id} user={user} onEdit={onEdit} onView={onView} />
      ))}
    </div>
  )
}

export default UsersGrid
