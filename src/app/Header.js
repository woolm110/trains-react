import React, {PropTypes} from 'react';

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

const propTypes = {
  title: PropTypes.string
};

const Header = props => {
  return (
    <header style={styles.header}>
      <h2 style={styles.title}>
        {props.title}
      </h2>
    </header>
  );
};

Header.propTypes = propTypes;

export default Header;
