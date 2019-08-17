import * as actionCreators from "./actionCreators";

export const createRandom = () => {
	return async (dispatch) => {
		const randomUserResult = await fetch('https://randomuser.me/api/?inc=name,email,picture').then(res => res.json());
		const mappedUser = randomUserResult.results.map(userResultMapper)[0];
		dispatch(actionCreators.createRandom(mappedUser));
	};
};

const userResultMapper = (user) => ({
	email: user.email,
	fullName: `${user.name.first} ${user.name.last}`,
	image: user.picture.large,
	id: (new Date()).getTime()
});
