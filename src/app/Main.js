import React, {Component} from 'react';
import Header from './Header';
import ResultsContainer from './ResultsContainer';
import SelectBoxContainer from './SelectBoxContainer';
import Button from './Button';

const styles = {
  container: {
    maxWidth: '960px',
    margin: '0 auto'
  },
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  resultsContainer: {
    marginTop: '20px'
  },
  column: {
    flex: '1',
    textAlign: 'center',
    color: '#fff',
    fontSize: '14px',
    minHeight: '50px'
  }
};

class Main extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Header title="Trains"/>
        <main>
          <div style={styles.flexContainer}>
            <SelectBoxContainer name="Departure" defaultValue="WAT"/>
          </div>
          <div style={styles.flexContainer}>
            <SelectBoxContainer name="Departure" defaultValue="QRB"/>
          </div>
          <div style={styles.flexContainer}>
            <Button text="Find trains"/>
          </div>
          <div style={styles.resultsContainer}>
            <ResultsContainer departureStation="WAT" arrivalStation="QRB"/>
          </div>
        </main>
      </div>
    );
  }
}

export default Main;
