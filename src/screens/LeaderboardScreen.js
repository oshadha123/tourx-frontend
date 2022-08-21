import React from 'react';
import {
	StyleSheet,
	View,
	Animated,
} from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
	},
	group: {
		width: 100,
		height: 150,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
	diamond: {
		width: 50,
		height: 50,
		backgroundColor: '#9A52C7',
	},
	groupColumn: {
		flexDirection: 'column',
	},
	groupRow: {
		flexDirection: 'row',
	},
});
// @flow



const ObjectAnimated = ({ value, opacity, y }) => (
	<Animated.View
		style={[styles.diamond, {
			opacity: value.interpolate({
				inputRange: [0, 1, 2, 3, 4, 5, 6, 7],
				outputRange: opacity,
			}),
			transform: [{
				rotateY: value.interpolate({
					inputRange: [0, 1, 2, 3, 4, 5, 6, 7],
					outputRange: y,
				}),
			}],
		}]}
	/>
);



class Diamond extends React.Component {
	constructor(props) {
		super(props);
		this.animatedValue = new Animated.Value(0);
	}

	UNSAFE_componentWillMount() {
		this.animate();
	}

	setTimingAnimated(originalValue, newValue, duration) {
		return Animated.timing(originalValue, {
			toValue: newValue,
			duration,
			useNativeDriver: true,
		});
	}

	animate() {
		Animated.sequence([
			this.setTimingAnimated(this.animatedValue, 0, 2),
			this.setTimingAnimated(this.animatedValue, 1, 2),
			this.setTimingAnimated(this.animatedValue, 2, 2),
			this.setTimingAnimated(this.animatedValue, 3, 2),
			this.setTimingAnimated(this.animatedValue, 4, 2),
			this.setTimingAnimated(this.animatedValue, 5, 2),
			this.setTimingAnimated(this.animatedValue, 6, 2),
			this.setTimingAnimated(this.animatedValue, 7, 2),
		]).start(() => {
			this.animatedValue.setValue(0);
			this.animate();
		});
	}

	render() {
		const { active } = this.props;
		return active ? (
			<View style={styles.container}>
				<View style={[styles.groupColumn, {
					transform: [{ rotateZ: '45deg' }],
				}]}
				>
					<View style={styles.groupRow}>
						<ObjectAnimated
							value={this.animatedValue}
							opacity={[1, 0, 0, 0, 1, 1, 1, 1]}
							y={['180deg', '0deg', '0deg', '0deg', '0deg', '0deg', '0deg', '0deg']}
						/>
						<ObjectAnimated
							value={this.animatedValue}
							opacity={[1, 1, 0, 0, 0, 1, 1, 1]}
							y={['0deg', '0deg', '180deg', '0deg', '0deg', '0deg', '0deg', '0deg']}
						/>
					</View>
					<View style={styles.groupRow}>
						<ObjectAnimated
							value={this.animatedValue}
							opacity={[1, 1, 1, 1, 0, 0, 0, 1]}
							y={['0deg', '0deg', '0deg', '0deg', '180deg', '0deg', '0deg', '0deg']}
						/>
						<ObjectAnimated
							value={this.animatedValue}
							opacity={[1, 1, 1, 0, 0, 0, 1, 1]}
							y={['0deg', '0deg', '0deg', '180deg', '0deg', '0deg', '0deg', '0deg']}
						/>
					</View>
				</View>
			</View>
		) : <React.Fragment />;
	}
}

export default Diamond;