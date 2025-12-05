import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './HomeIndex.styles';



class HomeScreenComponent extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  componentDidMount =() => {

  }
  goToGenerateMap = () => {


    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View style={styles.styleMainContainer}>
        <TouchableOpacity onPress={() => this.goToGenerateMap()}>
          <View style={styles.buttonGenerate} >
            <Text style={styles.buttonText}>Go To Map</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}





export default HomeScreenComponent;
