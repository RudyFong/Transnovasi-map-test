import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './Home.styles';



class HomeScreenComponent extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  goToGenerateMeme = () => {
    this.props.navigation.navigate('GenerateMeme');
  }

  render() {
    return (
      <View style={styles.styleMainContainer}>
        <TouchableOpacity onPress={() => this.goToGenerateMeme()}>
          <View style={styles.buttonGenerate} >
            <Text style={styles.buttonText}>Generate Meme</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}





export default HomeScreenComponent;
