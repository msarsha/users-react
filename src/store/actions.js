import * as actionCreators from "./actionCreators";

export const createRandomUser = () => {
	return async (dispatch) => {
		const randomUserResult = await fetch('https://randomuser.me/api/?inc=name,email,picture,login,dob,location').then(res => res.json());
		const mappedUser = randomUserResult.results.map(userResultMapper)[0];
		dispatch(actionCreators.createUser(mappedUser));
	};
};

export const openModal = (type, props = null) => dispatch => {
	dispatch(actionCreators.openModal(type, props));
};

export const createUser = (user) => dispatch => {
	console.log("creating user");
	// mock request to server
	setTimeout(() => {
		const userWithId = {...user, id: (new Date()).getTime()};
		dispatch(actionCreators.createUser(userWithId));
		dispatch(actionCreators.closeModal());
		console.log("user created");
	}, 1000)
};

const userResultMapper = ({email, name, picture, login, dob, location}) => ({
	email: email,
	fullName: `${name.first} ${name.last}`,
	image: picture.large,
	id: login.uuid,
	bday: new Date(dob.date),
	address: location.street
});
