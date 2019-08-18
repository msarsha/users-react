import React, {useReducer} from "react";
import {Button} from "@material-ui/core";
import {closeModal} from "../../store/actionCreators";
import {connect} from "react-redux";
import TextField from "@material-ui/core/TextField";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const actionTypes = {
	INPUT_CHANGE: 'INPUT_CHANGE'
};

const userFormReducer = (state, action) => {
	switch (action.type) {
		case actionTypes.INPUT_CHANGE: {
			return {
				...state,
				[action.name]: action.value
			}
		}
		default:
			return state;
	}
};

const NewEditUserModal = (props) => {
	const fields = [
		{name: 'fullName', label: 'Full Name'},
		{name: 'address', label: 'Address'},
		{name: 'email', label: 'Email'}
	];

	const [state, dispatch] = useReducer(userFormReducer, props.user || {});

	const handleInputChange = (name, value) => {
		dispatch({type: actionTypes.INPUT_CHANGE, value, name})
	};

	return (
			<React.Fragment>
				<AppBar>
					<Toolbar className="user-modal-toolbar">
						<Button color="inherit" onClick={props.closeModal}>
							CLOSE
						</Button>
						<Typography variant="h5">
							Create New User
						</Typography>
						<Button color="inherit">
							SAVE
						</Button>
					</Toolbar>
				</AppBar>
				<form className="user-modal-form">
					{fields.map(f => (
							<TextField
									key={f.name}
									value={state[f.name] || ''}
									onChange={(e) => {
										handleInputChange(f.name, e.target.value)
									}}
									label={f.label}
									style={{margin: 8}}
									fullWidth
									margin="normal"
									variant="outlined"
							/>
					))}
				</form>
			</React.Fragment>
	);
};

const mapDispatchToProps = {
	closeModal
};

export default connect(null, mapDispatchToProps)(NewEditUserModal);
