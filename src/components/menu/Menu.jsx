import { AppBar, makeStyles, Slide } from "@material-ui/core";
import React from "react";
import MainAppBar from "./MainAppBar";

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
	},
	logo: {
		marginRight: theme.spacing(2),
	},
	sectionDesktop: {
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex",
		},
	},
	appbar: {
		background: "#fff",
	},
}));
function Menu({ hideOnScroll }) {
	const classes = useStyles();

	return (
		<div className={classes.grow}>
			<Slide appear={false} direction="down" in={!hideOnScroll}>
				<AppBar
					position={hideOnScroll ? "static" : "fixed"}
					className={classes.appbar}
				>
					<MainAppBar hideOnScroll={hideOnScroll} />
				</AppBar>
			</Slide>
		</div>
	);
}

export default Menu;
