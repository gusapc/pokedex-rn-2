import React /*{useEffect, useState}*/ from 'react';
import { View, RefreshControl, FlatList, TouchableOpacity } from 'react-native';
import { TextComponent, HeaderNavbar, PokeItem, Divider } from 'pokedex-rn-2/app/components';
import { PokeListContainer } from 'pokedex-rn-2/app/containers';
import styles from './HomeScreenStyle';

export default function HomeScreen(props) {
	const renderItem = ({ item, index }) => (
		<TouchableOpacity
			onPress={() => props.navigation.navigate('PokemonDetailsScreen', item)}
			style={[styles.baseHorizontalPadding, styles.smallVerticalPadding]}
		>
			<PokeItem index={index + 1} name={item.name} />
		</TouchableOpacity>
	);
	return (
		<View style={styles.container}>
			<PokeListContainer>
				{({ isLoading, error, fetch, reload, list }) => (
					<FlatList
						data={list}
						keyExtractor={(item) => item.name}
						onEndReached={fetch}
						renderItem={renderItem}
						ItemSeparatorComponent={() => <Divider />}
						refreshControl={<RefreshControl refreshing={isLoading} onRefresh={reload} />}
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
						ListFooterComponent={() => <View style={{ height: 100 }} />}
						ListHeaderComponent={() => (
							<HeaderNavbar
								left={<React.Fragment />}
								right={<React.Fragment />}
								center={
									<TextComponent
										color={'black'}
										weight={'bold'}
										size="huge"
										align="center"
										text="Pokedex"
									/>
								}
							/>
						)}
					/>
				)}
			</PokeListContainer>
		</View>
	);
}
