import React from "react";
import {connect} from "react-redux";
import {Typography} from "@material-ui/core";
import {format} from 'date-fns'
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close'
import {closeModal} from "../../store/actionCreators";

const ViewUserModal = ({user, dispatch}) => {
	const getTextStyle = () => {
		return {
			margin: '10px'
		}
	};

	return (
			<div className="user-view-modal">
				<IconButton className="user-view-close-btn" onClick={() => {dispatch(closeModal())}}>
					<CloseIcon/>
				</IconButton>
				<img src={user.image} height="250" alt="avatar"/>
				<div className="user-view-group">
					<span>Full Name:</span>
					<Typography variant="subtitle1" component="p" style={getTextStyle()}>
						{user.fullName}
					</Typography>
				</div>
				<div className="user-view-group">
					<span>Birth Date:</span>
					<Typography variant="subtitle1" component="p" style={getTextStyle()}>
						{format(user.bday, 'dd/MM/yyyy')}
					</Typography>
				</div>
				<div className="user-view-group">
					<span>Address:</span>
					<Typography variant="subtitle1" component="p" style={getTextStyle()}>
						{user.address}
					</Typography>
				</div>
				<div className="user-view-group">
					<span>Email:</span>
					<Typography variant="subtitle1" component="p" style={getTextStyle()}>
						{user.email}
					</Typography>
				</div>
			</div>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.modal.props.user
	};
};

export default connect(mapStateToProps)(ViewUserModal)
