import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { result } from 'lodash';
import HomeScreenComponent from '../Component/Home.component';


class HomeScreen extends React.Component {
  static propTypes = {
    loadCurrencyYen: PropTypes.func,
    navigation: PropTypes.object,
    loadCurrencyParcel: PropTypes.func,
    loadCurrencyStatistic: PropTypes.func,
    parcelPrice: PropTypes.number,
    currencyYen: PropTypes.number,
    statisticList: PropTypes.array,
    getAutoClear: PropTypes.func
  }

  componentDidMount = () => {
  }

  render() {
    const { navigation } = this.props;
    return (
      <HomeScreenComponent navigation={navigation} />
    );
  }
}

const mapStateToProps = (state) => {
};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);