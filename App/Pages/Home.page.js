import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HomeScreenComponent from '../Component/Home.component';


class HomeScreen extends React.Component {

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