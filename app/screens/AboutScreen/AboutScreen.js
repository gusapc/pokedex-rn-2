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
				<TextComponent color={'black'} align={'center'} text={'Saludos equipo de Bankaya'} size={'subtitle'} />
			</View>
			<View style={[styles.baseVerticalMargin, styles.baseHorizontalMargin]}>
				<TextComponent
					color={'black'}
					align={'justify'}
					text={
						'Espero que sea de su agrado este proyecto sinceramente me hizo muy feliz ya que hace aproximadamente 2 años use el api de Pokemon para la primera versión de esta App, este es un rework de ese proyecto y más que una prueba técnica fue retomar algo que quería mejorar.'
					}
				/>
			</View>
			<View style={[styles.baseHorizontalMargin]}>
				<TextComponent
					color={'black'}
					align={'justify'}
					text={'Gracias por considerarme para la vacante, espero ser considerado.'}
				/>
			</View>
		</View>
	);
}
