import React, {Component} from 'react';
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
  loading: {
    textAlign: 'center',
    color: '#fff',
    fontSize: '18px'
  }
};

export class ResultsList extends Component {
  renderResults() {
    return (
      _.map(this.props.trains, train => {
        if (train.platform > 10) {
          return (
            <div style={styles.columnsContainer} key={train.train_uid}>
              <div style={styles.column}>{train.destination_name}</div>
              <div style={styles.column}>{train.aimed_departure_time}</div>
              <div style={styles.column}>{train.platform}</div>
            </div>
          );
        }
      })
    );
  }

  renderLoading() {
    return (
      <div style={styles.loading}>Loading...</div>
    );
  }

  render() {
    return (
      <div>
        {this.props.isLoading ? this.renderLoading() : this.renderResults()}
      </div>
    );
  }
}

ResultsList.propTypes = {
  isLoading: React.PropTypes.bool,
  trains: React.PropTypes.array
};
