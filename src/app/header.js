import React, {Component} from 'react';

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    flex: 1,
    fontSize: '30px',
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  }
};

export class Header extends Component {
  render() {
    return (
      <header style={styles.header}>
        <h2 style={styles.title}>
          Trains
        </h2>
      </header>
    );
  }
}
