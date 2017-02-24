import React, {Component} from 'react';
import Header from './Header';
import ColumnHeading from './ColumnHeading';
import ResultsContainer from './ResultsContainer';
import SelectBoxContainer from './SelectBoxContainer';

const styles = {
  container: {
    maxWidth: '960px',
    margin: '0 auto'
  },
  columnHeadingContainer: {
    display: 'flex'
  },
  column: {
    flex: '1',
    textAlign: 'center',
    color: '#fff',
    fontSize: '14px',
    minHeight: '50px'
  },
  selectBoxContainer: {
    display: 'flex',
    maxWidth: '400px',
    margin: '0 auto'
  }
};

class Main extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Header title="Trains"/>
        <main>
          <div style={styles.selectBoxContainer}>
            <SelectBoxContainer name="Departure"/>
            <SelectBoxContainer name="Destination"/>
          </div>
          <div style={styles.columnHeadingContainer}>
            <ColumnHeading text="Destination"/>
            <ColumnHeading text="Time"/>
            <ColumnHeading text="Platform"/>
          </div>
          <ResultsContainer departureStation="WAT" arrivalStation="QRB"/>
        </main>
      </div>
    );
  }
}

export default Main;
