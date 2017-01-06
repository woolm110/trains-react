import React, {Component} from 'react';

const styles = {
  button: {
    display: 'block',
    background: '#fff',
    border: 'none',
    color: '#000',
    padding: '12px 22px',
    margin: '0 auto 30px',
    borderRadius: '2px',
    fontSize: '14px'
  }
};

export class Button extends Component {
  render() {
    return (
      <button style={styles.button}>Get me home</button>
    );
  }
}
