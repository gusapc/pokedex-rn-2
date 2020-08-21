import React, { useEffect, useState } from 'react';
import styles from './TrainersScreenStyle';
import { View, FlatList, RefreshControl, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { HeaderNavbar, TextComponent, Divider } from 'pokedex-rn-2/app/components/';
import { FireListContainer } from 'pokedex-rn-2/app/containers';
import { Metrics } from 'pokedex-rn-2/app/styles';
import gball from 'pokedex-rn-2/assets/gball.png';

export default function TrainersScreen(props) {
	let pokeSize = Metrics.screenWidth / 7;
	const renderItem = ({ item }) => (
		<TouchableOpacity style={[styles.baseHorizontalPadding, styles.smallVerticalPadding]}>
			<TextComponent size={'title'} text={item.displayName} color="darkest" weight="medium" align="left" />
			<View style={[styles.row, styles.justifyContentSpaceBetween, styles.smallVerticalPadding]}>
				{[0, 1, 2, 3, 4, 5].map((i, index) => (
					<React.Fragment key={item.displayName + index}>
						<Image
							style={{
								height: pokeSize,
								width: pokeSize,
								borderRadius: 100,
								borderWidth: 2,
								borderColor: 'grey',
							}}
							source={
								item.team[index]
									? {
											uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.team[index].index}.png`,
									  }
									: gball
							}
							defaultSource={gball}
						/>
					</React.Fragment>
				))}
			</View>
		</TouchableOpacity>
	);

	return (
		<View style={styles.container}>
			<HeaderNavbar
				left={<React.Fragment />}
				right={<React.Fragment />}
				center={<TextComponent color={'black'} weight={'bold'} size="huge" align="center" text="Equipos" />}
			/>
			<FireListContainer fireMethod="fetchTeams">
				{({ isLoading, error, fetch, reload, list }) => (
					<FlatList
						data={list}
						keyExtractor={(item) => item.id}
						onEndReached={() => fetch()}
						renderItem={renderItem}
						ListEmptyComponent={() => {
							if (isLoading)
								return (
									<TextComponent color={'darkest'} size="huge" align="center" text="Cargando..." />
								);
							else if (error)
								return (
									<TextComponent
										color={'darkest'}
										size="huge"
										align="center"
										text="Intenta mas tarde"
									/>
								);
							else return <React.Fragment />;
						}}
						refreshControl={<RefreshControl refreshing={isLoading} onRefresh={reload} />}
						ItemSeparatorComponent={() => <Divider />}
					/>
				)}
			</FireListContainer>
		</View>
	);
}
