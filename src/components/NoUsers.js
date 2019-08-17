import React from "react";
import Typography from "@material-ui/core/Typography";


const NoUsers = () => {
	return (
			<div className="no-users">
				<Typography variant="h5" component="h3">
					No users created!
				</Typography>
				<Typography component="p">
					Create one by pressing the button above.
				</Typography>
			</div>
	);
};

export default NoUsers;
