import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setSorted} from 'actions';

const buttonStyle = {
  backgroundColor: '#eee',
  cursor: 'pointer',
  border: '1px solid #999',
}

class Buttons extends React.Component {
  render () {
    return (
      <div style={{display: 'flex'}}>
        <button style={buttonStyle} onClick={() => this.props.setSorted(true)}>Show Sorted</button>
        <button style={buttonStyle} onClick={() => this.props.setSorted(false)}>Show Unsorted</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('Buttons mapStateToProps');
  return {}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setSorted,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
