import { Button } from "@material-ui/core";
import React from "react";

function TopMenuButton({ Icon, title, onClick }) {
	return (
		<Button
			color="inherit"
			size="small"
			startIcon={<Icon />}
			style={{ textTransform: "none", marginRight: "15px" }}
			onClick={onClick}
		>
			{title}
		</Button>
	);
}

export default TopMenuButton;
