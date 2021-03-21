import React, { useState } from 'react';
import { Image, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './PokeItemStyle';
import gball from 'pokedex-rn-2/assets/gball.png';
import loading from 'pokedex-rn-2/assets/loading.webp';
import TextComponent from 'pokedex-rn-2/app/components/TextComponent';
import { Feather } from '@expo/vector-icons';

export default function PokeItem(props) {
	const [imgSrc, setImgSrc] = useState(
		props.index === 0
			? gball
			: {
					uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.index}.png`,
			  },
	);
	return (
		<View style={[styles.fullWidth, styles.flex1, styles.row, styles.justifyContentSpaceBetween]}>
			<View style={[styles.row, styles.centerObjects]}>
				<Image
					style={styles.img}
					source={imgSrc}
					onError={() => {
						setImgSrc(gball);
					}}
					defaultSource={loading}
				/>
				<TextComponent size="title" color="black" text={props.name} />
			</View>
			<View style={[styles.row, styles.centerObjects]}>
				<TextComponent size="title" color="black" text={'#' + props.index} />
				<Feather name={'chevron-right'} size={25} color="black" />
			</View>
		</View>
	);
}

PokeItem.propTypes = {
	index: PropTypes.string,
	name: PropTypes.string,
	url: PropTypes.string,
};

PokeItem.defaultProps = {
	index: '0',
	name: 'Unknown',
	url: '',
};
