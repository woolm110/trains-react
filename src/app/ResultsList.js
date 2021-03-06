import React, {Component, PropTypes} from 'react';
import _ from 'underscore';

const styles = {
  columnsContainer: {
    display: 'flex'
  },
  column: {
    flex: '1',
    textAlign: 'center',
    color: '#fff',
    fontSize: '14px',
    minHeight: '50px'
  },
  resultsWrapper: {
    marginTop: '40px'
  }
};

const propTypes = {
  trains: PropTypes.array
};

class ResultsList extends Component {
  renderResults() {
    return (
      _.map(this.props.trains, train => {
        return (
          <div style={styles.columnsContainer} key={train.train_uid}>
            <div style={styles.column}>{train.destination_name}</div>
            <div style={styles.column}>{train.aimed_departure_time}</div>
            <div style={styles.column}>{train.platform}</div>
          </div>
        );
      })
    );
  }

  render() {
    return (
      <div style={styles.resultsWrapper}>
        {this.renderResults()}
      </div>
    );
  }
}

ResultsList.propTypes = propTypes;

export default ResultsList;
