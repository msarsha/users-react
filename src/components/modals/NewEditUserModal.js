import React, {useReducer, useState} from "react";
import {Button} from "@material-ui/core";
import {closeModal} from "../../store/actionCreators";
import {connect} from "react-redux";
import TextField from "@material-ui/core/TextField";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {createUser} from "../../store/actions";

const actionTypes = {
	INPUT_CHANGE: 'INPUT_CHANGE',
	FILE_CHANGE: 'FILE_CHANGE'
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

const fields = [
	{name: 'fullName', label: 'Full Name'},
	{name: 'address', label: 'Address'},
	{name: 'email', label: 'Email', type: 'email'}
];

const NewEditUserModal = (props) => {
	let form;

	const [valid, setValid] = useState(false);
	const [state, dispatch] = useReducer(userFormReducer, props.user || {});

	const handleInputChange = (name, value) => {
		dispatch({type: actionTypes.INPUT_CHANGE, value, name});
		setValid(form.checkValidity());
	};

	const handleFileChange = (name, value) => {
		const fr = new FileReader();
		fr.onloadend = (({target}) => {
			dispatch({type: actionTypes.INPUT_CHANGE, value: target.result, name})
		});
		fr.readAsDataURL(value);
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
						<Button
								color="inherit"
								disabled={!valid}
								onClick={() => {
									props.createUser(state)
								}}>
							SAVE
						</Button>
					</Toolbar>
				</AppBar>
				<form className="user-modal-form" ref={(node) => {
					form = node
				}}>
					<label htmlFor="image-picker-input">
						<div className="image-picker-container">
							<img src={state.image || 'https://via.placeholder.com/600x400'} height="350" alt="avatar"/>
							<input
									accept="image/*"
									id="image-picker-input"
									type="file"
									style={{display: 'none'}}
									onChange={(e) => {
										handleFileChange('image', e.target.files[0])
									}}
							/>
						</div>
					</label>
					{fields.map(f => (
							<TextField
									key={f.name}
									type={f.type || 'text'}
									value={state[f.name] || ''}
									onChange={(e) => {
										handleInputChange(f.name, e.target.value)
									}}
									label={f.label}
									style={{margin: 8}}
									fullWidth
									margin="normal"
									variant="outlined"
									required
							/>
					))}
				</form>
			</React.Fragment>
	)
			;
};

const mapDispatchToProps = (dispatch) => {
	return {
		closeModal: () => {
			dispatch(closeModal())
		},
		createUser: (user) => {
			dispatch(createUser(user))
		}
	};
};

export default connect(null, mapDispatchToProps)(NewEditUserModal);
