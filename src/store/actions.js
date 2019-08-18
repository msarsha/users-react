import * as actionCreators from "./actionCreators";

export const createRandom = () => {
	return async (dispatch) => {
		const randomUserResult = await fetch('https://randomuser.me/api/?inc=name,email,picture,login,dob,location').then(res => res.json());
		const mappedUser = randomUserResult.results.map(userResultMapper)[0];
		dispatch(actionCreators.createRandom(mappedUser));
	};
};

export const openModal = (type, props = null) => dispatch => {
	dispatch(actionCreators.openModal(type, props));
};

const userResultMapper = ({email, name, picture, login, dob, location}) => ({
	email: email,
	fullName: `${name.first} ${name.last}`,
	image: picture.large,
	id: login.uuid,
	bday: new Date(dob.date),
	address: location.street
});
