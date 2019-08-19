import React from 'react';
import UserCard from "./UserCard";

const UsersGrid = ({users, onEdit}) => {
	return (
			<div className='users-grid'>
				{users.map((user) => <UserCard key={user.id} user={user} onEdit={onEdit}/>)}
			</div>
	);
};

export default UsersGrid;
