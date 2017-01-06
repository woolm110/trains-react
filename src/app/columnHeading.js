import React, {Component} from 'react';

const styles = {
  columnHeading: {
    flex: '1',
    textAlign: 'center',
    color: '#fff'
  }
};

export class ColumnHeading extends Component {
  render() {
    return (
      <div style={styles.columnHeading}><h3>{this.props.text}</h3></div>
    );
  }
}

ColumnHeading.propTypes = {
  text: React.PropTypes.string.isRequired
};
