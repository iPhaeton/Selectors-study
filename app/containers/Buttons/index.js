import * as React from 'react';

const buttonStyle = {
  backgroundColor: '#eee',
  cursor: 'pointer',
  border: '1px solid #999',
}

class Buttons extends React.Component {
  render () {
    return (
      <div style={{display: 'flex'}}>
        <button style={buttonStyle}>Show Sorted</button>
        <button style={buttonStyle}>Show Unsorted</button>
      </div>
    )
  }
}

export default Buttons;
