import React, { PureComponent } from 'react';
import { bool, string } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Container extends PureComponent {

  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>CONTENT</div>
    );
  }

}

const mapDispatchToProps = dispatch => bindActionCreators({
//add actions
}, dispatch);

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
