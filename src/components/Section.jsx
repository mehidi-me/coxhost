import { Container } from "@material-ui/core";
import React from "react";

function Section({ children }) {
	return (
		<div style={{ padding: "100px 0" }}>
			<Container style={{ padding: 0 }}>{children}</Container>
		</div>
	);
}

export default Section;
