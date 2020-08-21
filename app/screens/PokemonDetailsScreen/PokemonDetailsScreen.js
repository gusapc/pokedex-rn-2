import React, { useState } from 'react';
import { View, Image, ScrollView, ActivityIndicator } from 'react-native';
import { StatsContainer } from 'pokedex-rn-2/app/containers';
import styles from './PokemonDetailsScreenStyle';
import { TextComponent, HeaderNavbar, StatsItem, Divider } from 'pokedex-rn-2/app/components';
import { Feather } from '@expo/vector-icons';
import gball from 'pokedex-rn-2/assets/gball.png';
import { VictoryChart, VictoryArea, VictoryPolarAxis, VictoryTheme, VictoryBar } from 'victory-native';
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

	const emptyState = (error) =>
		error ? (
			<TextComponent
				color={'grey'}
				weight={'bold'}
				size="title"
				align="center"
				text={'Upss!! ocurrio un error inteta mas tarde'}
			/>
		) : (
			<View style={[styles.activityIndicatorContainer, styles.justifyContentCenter, styles.baseHorizontalMargin]}>
				<ActivityIndicator size="large" color={'red'} />
			</View>
		);

	return (
		<View style={styles.containerWhite}>
			<HeaderNavbar
				bgColor="redPokeball"
				left={
					<Feather onPress={() => props.navigation.goBack()} name={'chevron-left'} size={35} color="white" />
				}
				right={<React.Fragment />}
				center={<TextComponent color={'white'} weight={'bold'} size="title" align="center" text={name} />}
			/>
			<ScrollView>
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
				<View style={[styles.baseHorizontalMargin, styles.flex1]}>
					<StatsContainer url={url}>
						{({ isLoading, error, abilities, stats, types }) =>
							isLoading ? (
								emptyState(error)
							) : (
								<React.Fragment>
									{types.map((item, index) => (
										<React.Fragment key={`type${index}`}>
											<StatsItem
												iconName={index > 0 ? 'users' : 'user'}
												title={index > 0 ? 'Tipo secundario' : 'Tipo'}
												content={item.type?.name ?? ''}
											/>
											<Divider addVerticalMargin color="gray" />
										</React.Fragment>
									))}
									{abilities.map((item, index) => (
										<React.Fragment key={`ability${index}`}>
											<StatsItem
												iconName={item.is_hidden ? 'star' : 'sun'}
												title={item.is_hidden ? 'Habilidad Oculta' : 'Habilidad'}
												content={item.ability?.name ?? ''}
											/>
											<Divider addVerticalMargin color="gray" />
										</React.Fragment>
									))}
									{stats.map((item, index) => (
										<React.Fragment key={`stat${index}`}>
											<StatsItem
												iconName={index % 2 ? 'bar-chart' : 'bar-chart-2'}
												title={item.stat?.name ?? ''}
												content={String(item.base_stat)}
											/>
											<Divider addVerticalMargin color="gray" />
										</React.Fragment>
									))}

									{stats.length > 0 && (
										<VictoryChart polar theme={VictoryTheme.material}>
											{stats
												.map((item) => item.stat.name)
												.map((d, i) => (
													<VictoryPolarAxis
														dependentAxis
														key={i}
														label={d}
														labelPlacement="perpendicular"
														style={{ tickLabels: { fill: 'none' } }}
														axisValue={d}
													/>
												))}
											<VictoryBar
												style={{ data: { fill: 'tomato', width: 25 } }}
												data={stats.map((item) => ({ x: item.stat.name, y: item.base_stat }))}
											/>
										</VictoryChart>
									)}
								</React.Fragment>
							)
						}
					</StatsContainer>
				</View>
			</ScrollView>
		</View>
	);
}
