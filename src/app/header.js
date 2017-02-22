import React from 'react';

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

const Header = () => {
  return (
    <header style={styles.header}>
      <h2 style={styles.title}>
        Trains
      </h2>
    </header>
  );
};

export default Header;
