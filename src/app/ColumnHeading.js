import React, {Component, PropTypes} from 'react';

const styles = {
  columnHeading: {
    flex: '1',
    textAlign: 'center',
    color: '#fff'
  }
};

const propTypes = {
  text: PropTypes.string.isRequired
};

class ColumnHeading extends Component {
  render() {
    return (
      <div style={styles.columnHeading}><h3>{this.props.text}</h3></div>
    );
  }
}

ColumnHeading.propTypes = propTypes;

export default ColumnHeading;
