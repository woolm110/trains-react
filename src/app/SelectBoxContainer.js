import React, {Component, PropTypes} from 'react';
import _ from 'underscore';
import Request from 'axios';
import SelectBox from './SelectBox';
import Loading from './Loading';

const APP_KEY = 'd9307fd91b0247c607e098d5effedc97';
const APP_ID = '03bf8009';

const propTypes = {
  name: PropTypes.string
};

class SelectBoxContainer extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    const url = `http://transportapi.com/v3/uk/train/stations/bbox.json?app_id=${APP_ID}&app_key=${APP_KEY}&minlon=-0.489&minlat=51.28&maxlon=0.236&maxlat=51.686`;

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
            <SelectBox stations={this.state.stations} name={this.props.name}/>
          )
        }
      </div>
    );
  }
}

SelectBoxContainer.propTypes = propTypes;

export default SelectBoxContainer;
