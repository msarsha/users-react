import React from 'react'
import './App.css'
import UsersGrid from "./components/UsersGrid";
import {Button} from "@material-ui/core";
import {connect} from "react-redux";
import {createRandom} from "./store/actions";

function App(props) {
	return (
			<React.Fragment>
				<div className="buttons">
					<Button variant="contained" color="primary">
						New
					</Button>
					<Button variant="contained" color="primary" onClick={props.createRandom}>
						Random
					</Button>
				</div>
				{<UsersGrid users={props.users}/>}
			</React.Fragment>
	)
}

const mapStateToProps = (state, ownProps) => {
	return {users: state.users};
};

const mapDispatchToProps =  {
	createRandom
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
