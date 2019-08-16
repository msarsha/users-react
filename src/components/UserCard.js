import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

import IconButton from "@material-ui/core/IconButton";
import EditIcon from '@material-ui/icons/Edit'
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap'
import React from "react";

const UserCard = ({user}) => {
	return (
			<Card className='user-card'>
				<div className="card-actions">
					<IconButton>
						<EditIcon />
					</IconButton>
					<IconButton>
						<ZoomOutMapIcon />
					</IconButton>
				</div>
				<CardMedia
						component="img"
						alt="Contemplative Reptile"
						height="250"
						image={user.image}
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
