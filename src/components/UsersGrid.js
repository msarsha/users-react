import React from 'react';
import UserCard from "./UserCard";

const UsersGrid = ({users}) => {
	return (
			<div className='users-grid'>
				{users.map((user, i) => <UserCard key={i} user={user}/>)}
			</div>
	);
};

export default UsersGrid;
