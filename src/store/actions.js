import * as actionCreators from "./actionCreators";
import {loading} from "./actionCreators";
import {loadingDone} from "./actionCreators";

export const openModal = (type, props = null) => dispatch => {
	dispatch(actionCreators.openModal(type, props));
};

export const createRandomUser = () => {
	return async (dispatch) => {
		dispatch(loading());
		const randomUserResult = await fetch('https://randomuser.me/api/?inc=name,email,picture,login,dob,location').then(res => res.json());
		const mappedUser = randomUserResult.results.map(userResultMapper)[0];
		dispatch(actionCreators.createUser(mappedUser));
		dispatch(loadingDone());
	};
};

export const createUserAndCloseModal = (user) => dispatch => {
	mockRequestAndCloseModal(dispatch).then(() => {
		const userWithId = {...user, id: (new Date()).getTime()};
		userWithId.image = user.image || 'https://via.placeholder.com/600x400';
		dispatch(actionCreators.createUser(userWithId));
	});
};

export const editUserAndCloseModal = (user) => dispatch => {
	mockRequestAndCloseModal(dispatch).then(() => {
		dispatch(actionCreators.editUser(user));
	})
};

export const deleteUserAndCloseModal = (user) => dispatch => {
	mockRequestAndCloseModal(dispatch).then(() => {
		dispatch(actionCreators.deleteUser(user));
	});
};

const mockRequestAndCloseModal = (dispatcher) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, 1000)
	}).then(() => {
		dispatcher(actionCreators.closeModal());
	})
};

const userResultMapper = ({email, name, picture, login, dob, location}) => ({
	email: email,
	fullName: `${name.first} ${name.last}`,
	image: picture.large,
	id: login.uuid,
	bday: new Date(dob.date),
	address: location.street
});
