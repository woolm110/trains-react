import React, {Component, PropTypes} from 'react';
import _ from 'underscore';
import Request from 'axios';
import SelectBox from './SelectBox';
import Loading from './Loading';

const APP_KEY = 'd9307fd91b0247c607e098d5effedc97';
const APP_ID = '03bf8009';

const propTypes = {
  name: PropTypes.string,
  defaultValue: PropTypes.string
};

const bbox = {
  minLat: 51.28,
  maxLat: 51.696,
  minLon: 0.489,
  maxLon: 0.236
};

class SelectBoxContainer extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
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
  }

  render() {
    return (
      <div>
        {
          this.state.isLoading ? (
            <Loading/>
          ) : (
            <SelectBox stations={this.state.stations} name={this.props.name} defaultValue={this.props.defaultValue}/>
          )
        }
      </div>
    );
  }
}

SelectBoxContainer.propTypes = propTypes;

export default SelectBoxContainer;
