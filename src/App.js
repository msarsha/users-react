import React from 'react'
import './App.css'
import UsersGrid from "./components/UsersGrid";
import {Button} from "@material-ui/core";
import {connect} from "react-redux";
import {createRandomUser, openModal} from "./store/actions";
import NoUsers from "./components/NoUsers";
import Dialog from "@material-ui/core/Dialog";
import ModalContainer from "./components/modals/ModalContainer";
import {modalTypes} from "./components/modals/modalTypes";
import {closeModal} from "./store/actionCreators";

import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns";
import CircularProgress from "@material-ui/core/CircularProgress";

const getProgressStyles = () => {
	return {
		width: '25px',
		height: '25px'
	}
};

function App(props) {
	function renderUsersGrid() {
		return (
				<UsersGrid
						users={props.users}
						onEdit={(user) => {
							props.editUserModal(user);
						}}
						onView={(user) => {
							props.viewUser(user)
						}}
				/>
		);
	}

	return (
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<div className="buttons">
					<Button disabled={props.loading} variant="contained" color="primary" onClick={props.newUserModal}>
						New
					</Button>
					<Button disabled={props.loading} variant="contained" color="primary" onClick={props.createRandom}>
						{props.loading ? <CircularProgress className="button-progress" color="secondary" style={getProgressStyles()}/> : 'Random'}
					</Button>
				</div>
				{props.users.length ?
						renderUsersGrid()
						: <NoUsers/>}

				<Dialog fullScreen={props.modal.fullscreen} open={props.modal.open} onClose={props.modal.closeModal}>
					<ModalContainer/>
				</Dialog>
			</MuiPickersUtilsProvider>
	)
}

const mapStateToProps = ({users, modal, loading}) => {
	return {users, modal, loading};
};

const mapDispatchToProps = dispatch => {
	return {
		createRandom: () => {
			dispatch(createRandomUser())
		},
		newUserModal: () => {
			dispatch(openModal(modalTypes.NEW_USER))
		},
		editUserModal: (user) => {
			dispatch(openModal(modalTypes.EDIT_USER, {user}))
		},
		closeModal: () => {
			dispatch(closeModal());
		},
		viewUser: (user) => {
			dispatch(openModal(modalTypes.VIEW_USER, {user}))
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
