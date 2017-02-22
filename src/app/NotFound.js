import React from 'react';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center'
  },
  text: {
    flex: 1,
    fontSize: '30px',
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  }
};

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.text}>Page not found</h1>
    </div>
  );
};

export default NotFound;
