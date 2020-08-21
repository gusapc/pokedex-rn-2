import React /*{useEffect, useState}*/ from 'react';
import { View, RefreshControl, FlatList } from 'react-native';
import { TextComponent, HeaderNavbar } from 'pokedex-rn-2/app/components';
import { PokeListContainer } from 'pokedex-rn-2/app/containers';
import styles from './HomeScreenStyle';

export default function HomeScreen(props) {
	return (
		<View style={styles.container}>
			<PokeListContainer>
				{({ isLoading, error, fetch, reload, list }) => (
					<FlatList
						data={list}
						keyExtractor={(item) => item.name}
						onEndReached={fetch}
						renderItem={({ item }) => <TextComponent text={item.name ?? 'hue'} />}
						refreshControl={<RefreshControl refreshing={isLoading} onRefresh={reload} />}
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
