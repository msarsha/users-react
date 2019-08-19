import * as actionTypes from "./actionTypes";

export const createUser = (user) => ({
	type: actionTypes.CREATE_USER,
	payload: {user}
});

export const openModal = (type, props) => ({
	type: actionTypes.OPEN_MODAL,
	payload: {props, type}
});

export const editUser = (user) => ({
	type: actionTypes.EDIT_USER,
	payload: user
});

export const closeModal = () => ({
	type: actionTypes.CLOSE_MODAL
});
