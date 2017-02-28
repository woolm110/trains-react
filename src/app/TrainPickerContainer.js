import React, {Component, PropTypes} from 'react';
import _ from 'underscore';
import Request from 'axios';
import ResultsContainer from './ResultsContainer';
import SelectBox from './SelectBox';
import Loading from './Loading';

const APP_KEY = 'd9307fd91b0247c607e098d5effedc97';
const APP_ID = '03bf8009';

const styles = {
  button: {
    flex: '1',
    textAlign: 'center',
    fontSize: '14px',
    padding: '7px',
    maxWidth: '100px',
    margin: '5px 0',
    background: 'white',
    border: '1px',
    borderRadius: '3px'
  },
  alignCenter: {
    textAlign: 'center'
  }
};

const propTypes = {
  defaultDepartureStation: PropTypes.string,
  defaultArrivalStation: PropTypes.string
};

const defaultProps = {
  defaultDepartureStation: 'WAT',
  defaultArrivalStation: 'QRB'
};

const bbox = {
  minLat: 51.28,
  maxLat: 51.696,
  minLon: 0.489,
  maxLon: 0.236
};

class TrainPickerContainer extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      isLoading: true,
      eventFired: false,
      hideButton: false
    };
  }

  componentDidMount() {
    const url = `http://transportapi.com/v3/uk/train/stations/bbox.json?app_id=${APP_ID}&app_key=${APP_KEY}&minlon=-${bbox.minLon}&minlat=${bbox.minLat}&maxlon=${bbox.maxLon}&maxlat=${bbox.maxLat}`;

    Request.get(url)
      .then(response => {
        this.setState({
          stations: response.data.stations,
          isLoading: false
        });
      });

    this.setState({
      departure: this.props.defaultDepartureStation,
      arrival: this.props.defaultArrivalStation
    });
  }

  handleSubmit(event) {
    this.setState({
      eventFired: true,
      hideButton: true
    });

    event.preventDefault();
  }

  handleChange(key, value) {
    this.setState({
      [key]: value
    });
  }

  render() {
    return (
      <div style={styles.alignCenter}>
        <form onSubmit={this.handleSubmit}>
          {
            this.state.isLoading ? (
              <Loading/>
            ) : (
              <div>
                <SelectBox stations={this.state.stations} name="departure" defaultValue={this.props.defaultDepartureStation} onSelectTrain={this.handleChange}/>
                <SelectBox stations={this.state.stations} name="arrival" defaultValue={this.props.defaultArrivalStation} onSelectTrain={this.handleChange}/>
              </div>
            )
          }
          {
            this.state.hideButton ? (
              ''
            ) : (
              <button style={styles.button} onClick={this.handleSubmit}>find trains</button>
            )
          }
        </form>
        {
          this.state.eventFired ? (
            <ResultsContainer departureStation={this.state.departure} arrivalStation={this.state.arrival}/>
          ) : (
            ''
          )
        }
      </div>
    );
  }
}

TrainPickerContainer.defaultProps = defaultProps;
TrainPickerContainer.propTypes = propTypes;

export default TrainPickerContainer;
