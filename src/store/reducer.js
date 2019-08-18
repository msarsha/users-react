import * as actionTypes from "./actionTypes";
import {isFullscreenModal} from "../components/modals/modalTypes";

const initialState = {
	users: [],
	modal: {
		open: false
	}
};

//TODO split reducers and use combineReducers
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.CREATE_USER: {
			return {
				...state,
				users: [action.payload.user, ...state.users]
			}
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
		default:
			return state;
	}
};

export default reducer;
