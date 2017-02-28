import React from 'react';
import Header from './Header';
import TrainPickerContainer from './TrainPickerContainer';

const styles = {
  container: {
    maxWidth: '960px',
    margin: '0 auto'
  },
  flexContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  }
};

const Main = () => {
  return (
    <div style={styles.container}>
      <Header title="Trains"/>
      <main>
        <div style={styles.flexContainer}>
          <TrainPickerContainer/>
        </div>
      </main>
    </div>
  );
};

export default Main;
