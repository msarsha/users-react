import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Tooltip from "@material-ui/core/Tooltip";

import IconButton from "@material-ui/core/IconButton";
import EditIcon from '@material-ui/icons/Edit'
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap'
import React from "react";

const UserCard = ({user}) => {
	return (
			<Card className="user-card">
				<div className="card-actions">
					<Tooltip title="Edit" placement="top">
						<IconButton>
							<EditIcon/>
						</IconButton>
					</Tooltip>
					<Tooltip title="Details" placement="top">
						<IconButton>
							<ZoomOutMapIcon/>
						</IconButton>
					</Tooltip>
				</div>
				<CardMedia
						component="img"
						alt="Contemplative Reptile"
						height="250"
						image={user.image || 'https://randomuser.me/api/portraits/men/47.jpg'}
						title="Contemplative Reptile"
				/>
				<CardContent>
					<Typography variant="subtitle2" color="textSecondary" component="p">
						{user.fullName}
					</Typography>
					<Typography variant="subtitle2" color="textSecondary" component="p">
						{user.email}
					</Typography>
				</CardContent>
			</Card>
	);
};

export default UserCard;
