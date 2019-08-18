import React from 'react'
import './App.css'
import UsersGrid from "./components/UsersGrid";
import {Button} from "@material-ui/core";
import {connect} from "react-redux";
import {createRandom, openModal} from "./store/actions";
import NoUsers from "./components/NoUsers";
import Dialog from "@material-ui/core/Dialog";
import ModalContainer from "./components/modals/ModalContainer";
import {modalTypes} from "./components/modals/modalTypes";
import {closeModal} from "./store/actionCreators";

function App(props) {
	return (
			<React.Fragment>
				<div className="buttons">
					<Button variant="contained" color="primary" onClick={props.newUserModal}>
						New
					</Button>
					<Button variant="contained" color="primary" onClick={props.createRandom}>
						Random
					</Button>
				</div>
				{props.users.length ? <
					ersGrid users={props.users}/> : <NoUsers/>}

				<Dialog fullScreen={props.modal.fullscreen} open={props.modal.open} onClose={props.modal.closeModal}>
					<ModalContainer/>
				</Dialog>
			</React.Fragment>
	)
}

const mapStateToProps = (state) => {
	return {users: state.users, modal: state.modal};
};

const mapDispatchToProps = dispatch => {
	return {
		createRandom: () => {
			dispatch(createRandom())
		},
		newUserModal: () => {
			dispatch(openModal(modalTypes.NEW_USER))
		},
		closeModal: () => {
			dispatch(closeModal());
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
