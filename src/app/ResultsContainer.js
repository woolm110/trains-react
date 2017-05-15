import React, {Component, PropTypes} from 'react';
import _ from 'underscore';
import Request from 'axios';
import ResultsList from './ResultsList';
import Loading from './Loading';

const APP_KEY = '08d9182a9680140326f756a23cb14749';
const APP_ID = 'a2f34086';

const propTypes = {
  departureStation: PropTypes.string.isRequired,
  arrivalStation: PropTypes.string.isRequired
};

class ResultsContainer extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    const url = `//transportapi.com/v3/uk/train/station/${this.props.departureStation}/live.json?app_id=${APP_ID}&app_key=${APP_KEY}&calling_at=${this.props.arrivalStation}&train_status=passenger`;

    Request.get(url)
      .then(response => {
        this.setState({
          trains: response.data.departures.all,
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
            <ResultsList trains={this.state.trains}/>
          )
        }
      </div>
    );
  }
}

ResultsContainer.propTypes = propTypes;

export default ResultsContainer;
