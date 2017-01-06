import React, {Component} from 'react';

const styles = {
  columnHeadings: {
    width: '33.33%',
    float: 'left',
    textAlign: 'center',
    color: '#fff'
  }
};

export class Columns extends Component {
  render() {
    return (
      <div>
        <div style={styles.columnHeadings}><h3>Destination</h3></div>
        <div style={styles.columnHeadings}><h3>Time</h3></div>
        <div style={styles.columnHeadings}><h3>Platform</h3></div>
      </div>
    );
  }
}
