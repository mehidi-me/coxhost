import { Button, makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
	button: {
		textTransform: "none",
		fontSize: "16px",
		marginLeft: "30px",
		color: "#000",
	},
}));
function MenuButton({ children }) {
	const classes = useStyle();
	return (
		<Button color="inherit" className={classes.button}>
			{children}
		</Button>
	);
}

export default MenuButton;
