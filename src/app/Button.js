import React, {Component, PropTypes} from 'react';
import _ from 'underscore';

const styles = {
  button: {
    flex: '1',
    textAlign: 'center',
    fontSize: '14px',
    padding: '10px',
    maxWidth: '100px',
    margin: '10px 0',
    background: 'white',
    border: '1px',
    borderRadius: '3px'
  }
};

const propTypes = {
  text: PropTypes.string
};

class Button extends Component {
  render() {
    return (
      <button style={styles.button}>{this.props.text}</button>
    );
  }
}

Button.propTypes = propTypes;

export default Button;
