import React, { useContext } from 'react';

import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './AboutScreenStyle';
import { TextComponent, HeaderNavbar } from 'pokedex-rn-2/app/components';
import { Context } from 'pokedex-rn-2/app/Context';

export default function AboutScreen(props) {
	const { isSignedIn } = useContext(Context);
	return (
		<View style={styles.containerWhite}>
			{!isSignedIn && (
				<HeaderNavbar
					statusBar="dark-content"
					left={<React.Fragment></React.Fragment>}
					center={<TextComponent color={'black'} weight={'bold'} size="huge" align="center" text="About" />}
					right={<Feather onPress={() => props.navigation.goBack()} name={'x'} size={35} color={'black'} />}
				/>
			)}
			<View style={styles.baseTopMargin}>
				<TextComponent color={'black'} align={'center'} text={'Saludos'} size={'subtitle'} />
			</View>
			<View style={[styles.baseVerticalMargin, styles.baseHorizontalMargin]}>
				<TextComponent color={'black'} align={'justify'} text={`Esta es una prueba técnica que muestra el uso de React Native`} />
			</View>
			<View style={[styles.baseHorizontalMargin]}>
				<TextComponent
					color={'black'}
					align={'justify'}
					text={'Gracias.'}
				/>
			</View>
		</View>
	);
}
