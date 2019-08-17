import {CREATE_RANDOM_USER} from "./actionTypes";

export const createRandom = (user) => ({
	type: CREATE_RANDOM_USER,
	payload: {user}
});
