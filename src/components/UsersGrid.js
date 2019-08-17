import React from 'react';
import UserCard from "./UserCard";

const UsersGrid = ({users}) => {
	return (
			<div className='users-grid'>
				{users.map((user) => <UserCard key={user.id} user={user}/>)}
			</div>
	);
};

export default UsersGrid;
