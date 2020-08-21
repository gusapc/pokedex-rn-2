import React from 'react';
import { TouchableOpacity, View, ScrollView } from 'react-native';

import styles from './TeamScreenStyle';
import { useGenericObj } from 'pokedex-rn-2/app/hooks';
import { Divider, PokeItem } from 'pokedex-rn-2/app/components';

export default function TeamScreen(props) {
	const [teamInfo, teamLoader] = useGenericObj('TEAM', 'fetchCurrentUserTeam');
	return (
		<View style={[styles.containerWhite, styles.flex1]}>
			<ScrollView>
				{teamInfo.data.team.map((item, index, list) => (
					<React.Fragment key={String(index)}>
						<TouchableOpacity
							onPress={() => props.navigation.navigate('PokemonDetailsScreen', { ...item })}
							style={[styles.baseHorizontalPadding, styles.smallVerticalPadding, { height: 100 }]}
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
