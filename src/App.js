import React from 'react'
import './App.css'
import UsersGrid from "./components/UsersGrid";
import {Button} from "@material-ui/core";

const user = {
	fullName: 'test test',
	image: 'https://randomuser.me/api/portraits/men/22.jpg',
	email: 'test@test.com'
};
const users = [user, user, user, user, user, user, user, user, user, user];

function App() {
	return (
			<React.Fragment>
				<div className="buttons">
					<Button variant="contained" color="primary">
						New
					</Button>
					<Button variant="contained" color="primary">
						Random
					</Button>
				</div>
				<UsersGrid users={users}/>
			</React.Fragment>
	)
}

export default App
