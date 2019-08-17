import {CREATE_RANDOM_USER} from "./actionTypes";

const user = {
	fullName: 'test test',
	image: 'https://randomuser.me/api/portraits/men/22.jpg',
	email: 'test@test.com'
};

const initialState = {
	users: [user, user, user, user, user, user, user, user, user, user]
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_RANDOM_USER: {
			return {
				...state,
				users: [user, ...state.users]
			}
		}
		default:
			return state;
	}
};

export default reducer;