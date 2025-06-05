import React from 'react';
import { connect } from 'react-redux';
import GeneratorScreenComponent from '../Component/GenerateMeme.component';

class GeneratorScreen extends React.Component {

  render() {
    const { navigation } = this.props;
    return (
      <GeneratorScreenComponent navigation={navigation} />
    );
  }
}

const mapStateToProps = (state) => {
};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(GeneratorScreen);