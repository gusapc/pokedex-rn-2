import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

export default function AuthLoadingContainer(props) {
	return props.children({ isSignedIn: true });
}

AuthLoadingContainer.propTypes = {
	// data: PropTypes.array
};

AuthLoadingContainer.defaultProps = {
	// data: []
};
