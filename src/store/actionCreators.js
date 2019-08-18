import * as actionTypes from "./actionTypes";

export const createRandom = (user) => ({
	type: actionTypes.CREATE_RANDOM_USER,
	payload: {user}
});

export const openModal = (type, props) => ({
	type: actionTypes.OPEN_MODAL,
	payload: {props, type}
});

export const closeModal = () => ({
	type: actionTypes.CLOSE_MODAL
});
