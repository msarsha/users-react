import * as actionTypes from "./actionTypes";

export const createUser = (user) => ({
	type: actionTypes.CREATE_USER,
	payload: {user}
});

export const editUser = (user) => ({
	type: actionTypes.EDIT_USER,
	payload: user
});

export const deleteUser = (user) => ({
	type: actionTypes.DELETE_USER,
	payload: user
});

export const openModal = (type, props) => ({
	type: actionTypes.OPEN_MODAL,
	payload: {props, type}
});

export const closeModal = () => ({
	type: actionTypes.CLOSE_MODAL
});

export const loadingDone = () => ({
	type: actionTypes.LOADING_DONE
});

export const loading = () => ({
	type: actionTypes.LOADING
});
