import React, {Component} from 'react';
import {Header} from './header';
import {ColumnHeading} from './columnHeading';
import {ResultsContainer} from './resultsContainer';

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

export class Main extends Component {
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
