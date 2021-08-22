import { Button, Grid, makeStyles } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import parse from "html-react-parser";
import React from "react";
import { Link } from "react-scroll";
import cardBg from "../../../../assets/card-bg.svg";

const useStyle = makeStyles((theme) => ({
	content: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	card: {
		//background: "linear-gradient(120deg,#f5592a,#f80155)",
		height: "auto",
		width: "350px",
		transition: ".5s",
		position: "relative",
		borderRadius: "10px",
		boxShadow: "0 0 25px 0 rgb(20 27 201 / 17%)",
		margin: "20px",
		background: "#fff",
		zIndex: "1",
		// "&::before": {
		// 	borderRadius: "10px",
		// 	backgroundImage: "linear-gradient(120deg,#f5592a,#f80155)",
		// 	position: "absolute",
		// 	width: "100%",
		// 	height: "0%",
		// 	left: "0",
		// 	top: "0",
		// 	webkitTransition: "all .4s ease-in-out",
		// 	transition: "all .4s ease-in-out",
		// 	opacity: "0",
		// 	visibility: "hidden",
		// 	zIndex: "-1",
		// 	content: '""',
		// },
		// "&:hover": {
		// 	"&::before": {
		// 		height: "100%",
		// 		opacity: "1",
		// 		visibility: "visible",
		// 	},
		// 	"& $h5": {
		// 		color: "#fff",
		// 	},
		// },
	},
	topbg: {
		top: "0",
		left: "0",
		content: '""',
		width: "100%",
		zIndex: "-1",
		minHeight: "100%",
		position: "absolute",
		backgroundRepeat: "no-repeat",
		backgroundSize: "contain",
		//filter:"invert(11%) sepia(92%) saturate(5057%) hue-rotate(333deg) brightness(110%) contrast(106%)",
	},
	h3: {
		color: "#FFF",
		lineHeight: "1",
		fontSize: "28px",
		fontWeight: "700",
		marginBottom: "20px",
	},
	priceBox: {
		width: "128px",
		height: "128px",
		margin: "0px auto",
		//lineHeight: "128px",
		borderRadius: "50%",
		textAlign: "center",
		marginBottom: "30px",
		backgroundColor: "white",
		boxShadow: "0px 0px 25px 0px rgb(20 27 201 / 5%)",
	},
	price: {
		fontSize: "24px",
		marginLeft: "9px",
		marginTop: "42px",
		fontWeight: "700",
		position: "relative",
		color: "#29156b",
		display: "inline-block",
	},
	button: {
		textTransform: "none",
		fontWeight: 700,
		backgroundImage:
			"-webkit-linear-gradient(-100deg, #fb0054 0%, #f55b2a 100%)",
		margin: "30px 0",
	},
}));
const ProductCard = ({
	name,
	description,
	price,
	id,
	type,
	onClick,
	currency,
	loadingAddCart,
	resultAddCart,
}) => {
	const classes = useStyle();

	return (
		<Grid item md={4} className={classes.content}>
			<div className={classes.card}>
				<div
					className={classes.topbg}
					style={{ backgroundImage: `url(${cardBg})` }}
				></div>
				<div style={{ textAlign: "center" }}>
					<h3 className={classes.h3}>{name}</h3>
				</div>
				<div style={{ padding: "0 30px" }}>
					<div className={classes.priceBox}>
						<span className={classes.price}>
							{currency === 1 ? "$" : "৳"}
							{price}
						</span>
						<p style={{ margin: 0, fontSize: "14px" }}>
							{type}
						</p>
					</div>
					<div
						style={{
							color: "#61648e",
							lineHeight: "25px",
							whiteSpace: "pre-wrap",
						}}
					>
						{parse(description)}
					</div>
					<Link to="setpStepper" spy={true} smooth={true}>
						<Button
							onClick={() => onClick(id, type)}
							color="secondary"
							variant="contained"
							className={classes.button}
							startIcon={<AddShoppingCartIcon />}
						>
							Add To Cart
						</Button>
					</Link>
					{/* <Button
						onClick={() => onClick(id, type)}
						color="secondary"
						variant="contained"
						className={classes.button}
						startIcon={
							resultAddCart ? null : (
								<AddShoppingCartIcon />
							)
						}
					>
						{resultAddCart ? (
							resultAddCart.result === "added" && (
								<CheckCircleIcon />
							)
						) : loadingAddCart ? (
							<CircularProgress
								size={20}
								style={{ color: "#fff" }}
							/>
						) : (
							"Add To Cart"
						)}
					</Button> */}
				</div>
			</div>
		</Grid>
	);
};

export default ProductCard;
