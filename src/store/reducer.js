import {CREATE_RANDOM_USER} from "./actionTypes";

const initialState = {
	users: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_RANDOM_USER: {
			return {
				...state,
				users: [action.payload.user, ...state.users]
			}
		}
		default:
			return state;
	}
};

export default reducer;
