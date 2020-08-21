import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './TrainerProfileScreenStyle';
import { TextComponent, HeaderNavbar, Divider, PokeItem } from 'pokedex-rn-2/app/components';
import gball from 'pokedex-rn-2/assets/gball.png';
import loading from 'pokedex-rn-2/assets/loading.jpg';

export default function TrainerProfileScreen(props) {
	const displayName = props.navigation.getParam('displayName', '');
	const photoURL = props.navigation.getParam('photoURL', '');
	const team = props.navigation.getParam('team', '');

	const [imgSrc, setImgSrc] = useState(
		photoURL
			? {
					uri: photoURL,
			  }
			: gball,
	);
	return (
		<View style={styles.containerWhite}>
			<HeaderNavbar
				left={
					<Feather onPress={() => props.navigation.goBack()} name={'chevron-left'} size={35} color="black" />
				}
				right={<React.Fragment />}
				center={<TextComponent color={'black'} weight={'bold'} size="title" align="center" text="Perfil de" />}
			/>
			<ScrollView>
				<TextComponent color={'balck'} weight={'bold'} size="huge" align="center" text={displayName} />
				<View style={[styles.row, styles.flex1, styles.justifyContentCenter]}>
					<Image
						style={styles.img}
						source={imgSrc}
						onError={() => {
							setImgSrc(gball);
						}}
						defaultSource={loading}
					/>
				</View>
				{team.map((item, index, list) => (
					<React.Fragment key={String(index)}>
						<TouchableOpacity
							onPress={() => props.navigation.navigate('PokemonDetailsScreen', { ...item })}
							style={[styles.baseHorizontalPadding, styles.smallVerticalPadding]}
						>
							<PokeItem index={item.index} name={item.name} />
						</TouchableOpacity>
						{index !== list.length - 1 && <Divider addHorizontalMargin />}
					</React.Fragment>
				))}
			</ScrollView>
		</View>
	);
}
