import React, {Component} from 'react';
import _ from 'underscore';
import Request from 'axios';

const APP_KEY = 'd9307fd91b0247c607e098d5effedc97';
const APP_ID = '03bf8009';
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

export class Results extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    const url = `http://transportapi.com/v3/uk/train/station/${this.props.departureStation}/live.json?app_id=${APP_ID}&app_key=${APP_KEY}&calling_at=${this.props.arrivalStation}&train_status=passenger`;
    Request.get(url)
      .then(response => {
        this.setState({
          trains: response.data.departures.all,
          isLoading: false
        });
      });
  }

  renderResults() {
    return (
      _.map(this.state.trains, train => {
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
        {this.state.isLoading ? this.renderLoading() : this.renderResults()}
      </div>
    );
  }
}

Results.propTypes = {
  departureStation: React.PropTypes.string.isRequired,
  arrivalStation: React.PropTypes.string.isRequired
};
