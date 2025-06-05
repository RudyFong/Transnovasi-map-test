import React from 'react';

import { connect } from 'react-redux';
import { View } from 'react-native';
import MainRoutes from './Routes/index.routes';


const mapDispatchToProps = (dispatch) => ({

});

class AppComponent extends React.Component {


  componentDidMount() {

  }

  render() {
    const { } = this.props;
    return (
      <View style={{ flexGrow: 1 }}>
        <MainRoutes />
      </View>
    );
  }
}

export default connect(null, mapDispatchToProps)(AppComponent);
