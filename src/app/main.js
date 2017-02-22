import React, {Component} from 'react';
import Header from './Header';
import ColumnHeading from './ColumnHeading';
import ResultsContainer from './ResultsContainer';

const styles = {
  container: {
    maxWidth: '960px',
    margin: '0 auto'
  },
  columnHeadingContainer: {
    display: 'flex'
  },
  columnsContainer: {
    display: 'flex'
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
        <Header/>
        <main>
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
