import React, { useState } from 'react';
import { View, RefreshControl, FlatList, TouchableOpacity } from 'react-native';
import {
	TextComponent,
	HeaderNavbar,
	PokeItem,
	Divider,
	ModalFilter,
	FloatingButton,
} from 'pokedex-rn-2/app/components';
import { PokeListContainer, PokeonByRegionContainer } from 'pokedex-rn-2/app/containers';
import styles from './HomeScreenStyle';
// prettier-ignore
const filtersName = ['Todos', 'Kanto', 'Johto', 'Hoenn', 'Sinnoh', 'Sinnoh2', 'Johto2', 'Unova', 'Unova2', 'Conquest', 'Kalos', 'Kalos2', 'Hoenn2', 'Alola',];
// prettier-ignore
const filters = ['full', 'Kanto', 'Johto', 'Hoenn', 'Sinnoh', 'Sinnoh2', 'Johto2', 'Unova', 'Unova', 'Conquest', 'Kalos', 'Kalos2', 'Hoenn2', 'Alola',];

export default function HomeScreen(props) {
	const [tempfilter, setTempFilter] = useState('full');
	const [filter, setFilter] = useState('full');
	const [isVisible, setIsVisible] = useState(false);
	const renderItem = ({ item, index }) => {
		item.name = item.name.charAt(0).toUpperCase() + item.name.slice(1);
		return (
			<TouchableOpacity
				onPress={() =>
					props.navigation.navigate('PokemonDetailsScreen', { ...item, index: String(item.id ?? index + 1) })
				}
				style={[styles.baseHorizontalPadding, styles.smallVerticalPadding]}
			>
				<PokeItem index={String(item.id ?? index + 1)} name={item.name} />
			</TouchableOpacity>
		);
	};

	const renderList = ({ isLoading, error, fetch, reload, list }) => (
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
						<View style={[styles.doubleVerticalMargin, styles.doubleVerticaPadding]}>
							<TextComponent color={'darkest'} size="huge" align="center" text="Cargando..." />
						</View>
					);
				else if (error)
					return (
						<View style={[styles.doubleVerticalMargin, styles.doubleVerticaPadding]}>
							<TextComponent color={'darkest'} size="huge" align="center" text="Intenta mas tarde" />
						</View>
					);
				else return <React.Fragment />;
			}}
			ListFooterComponent={() => <View style={{ height: 100 }} />}
		/>
	);

	return (
		<View style={styles.containerWhite}>
			<HeaderNavbar
				left={<React.Fragment />}
				right={<React.Fragment />}
				center={
					<View>
						<TextComponent color={'black'} weight={'bold'} size="huge" align="center" text="Pokedex" />
						<TextComponent
							color={'black'}
							weight={'bold'}
							align="center"
							text={filter === 'full' ? 'Nacional' : filter}
						/>
					</View>
				}
			/>
			{filter === 'full' ? (
				<PokeListContainer>{(params) => renderList(params)}</PokeListContainer>
			) : (
				<PokeonByRegionContainer modelName={filter}>{(params) => renderList(params)}</PokeonByRegionContainer>
			)}

			<View style={styles.floatingBtn}>
				<FloatingButton
					onPress={() => setIsVisible(true)}
					iconName={'filter'}
					bgColor={'redPokeball'}
					iconColor={'white'}
				/>
			</View>
			<ModalFilter
				isVisible={isVisible}
				filtersName={filtersName}
				filters={filters}
				tempfilter={tempfilter}
				selectCircleTitleOnPress={(index) => setTempFilter(filters[index])}
				onTouchOutside={() => {
					setTempFilter(filter);
					setIsVisible(false);
				}}
				onPressCancel={() => {
					setTempFilter(filter);
					setIsVisible(false);
				}}
				onPressSuccess={() => {
					setIsVisible(false);
					if (tempfilter !== filter) {
						setFilter(tempfilter);
					}
				}}
			/>
		</View>
	);
}
