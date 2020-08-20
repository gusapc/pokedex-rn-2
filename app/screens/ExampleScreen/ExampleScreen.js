import React /*{useEffect, useState}*/ from "react";
import { Text, View } from "react-native";
import HelloWorld from "pokedex-rn-2/app/components/HelloWorld";

import styles from "./ExampleScreenStyle";

export default function ExampleScreen(props) {
	return (
		<View style={styles.container}>
			<Text>ExampleScreen</Text>
			<HelloWorld />
		</View>
	);
}
