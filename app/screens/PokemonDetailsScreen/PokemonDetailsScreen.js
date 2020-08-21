import React, { useEffect, useState } from 'react';
import { View, Image } from 'react-native';

import styles from './PokemonDetailsScreenStyle';
import { TextComponent, HeaderNavbar, StatsItem, Divider } from 'pokedex-rn-2/app/components';
import { Feather } from '@expo/vector-icons';
import gball from 'pokedex-rn-2/assets/gball.png';
import loading from 'pokedex-rn-2/assets/loading.jpg';
export default function PokemonDetailsScreen(props) {
	const name = props.navigation.getParam('name', '');
	const url = props.navigation.getParam('url', '');
	const index = props.navigation.getParam('index', 0);
	const [imgSrc, setImgSrc] = useState(
		url
			? {
					uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`,
			  }
			: gball,
	);
	return (
		<View style={styles.container}>
			<HeaderNavbar
				bgColor="redPokeball"
				left={
					<Feather onPress={() => props.navigation.goBack()} name={'chevron-left'} size={35} color="white" />
				}
				right={<React.Fragment />}
				center={<TextComponent color={'white'} weight={'bold'} size="title" align="center" text={name} />}
			/>
			<View style={[styles.baseMargin, styles.row, styles.centerObjects]}>
				<Image
					style={styles.img}
					source={imgSrc}
					onError={() => {
						setImgSrc(gball);
					}}
					defaultSource={loading}
				/>
			</View>
		</View>
	);
}
