import * as actionTypes from "./actionTypes";
import {isFullscreenModal} from "../components/modals/modalTypes";

const initialState = {
	users: [],
	modal: {
		open: false
	}
};

/*
 Refactor notes:
 The reducer need to be splitted to userReducer, modalReducer and loadingReducer using combineReducers.
*/

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.CREATE_USER: {
			return {
				...state,
				users: [action.payload.user, ...state.users]
			}
		}
		case actionTypes.EDIT_USER: {
			const {users} = state;
			const editedUser = action.payload;
			const updatedUsers = users.map(u => u.id === editedUser.id ? editedUser : u);

			return {
				...state,
				users: updatedUsers
			}
		}
		case actionTypes.DELETE_USER: {
			const {users} = state;
			const deletedUser = action.payload;
			const updatedUsers = users.filter(u => u.id !== deletedUser.id);

			return {
				...state,
				users: [...updatedUsers]
			};
		}
		case actionTypes.OPEN_MODAL: {
			return {
				...state,
				modal: {
					open: true,
					props: action.payload.props,
					type: action.payload.type,
					fullscreen: isFullscreenModal(action.payload.type)
				}
			}
		}
		case actionTypes.CLOSE_MODAL: {
			return {
				...state,
				modal: {
					open: false
				}
			};
		}
		case actionTypes.LOADING: {
			return {
				...state,
				loading: true
			}
		}
		case actionTypes.LOADING_DONE: {
			return {
				...state,
				loading: false
			}
		}
		default:
			return state;
	}
};

export default reducer;
