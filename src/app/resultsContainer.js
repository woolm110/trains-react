import React, {Component} from 'react';
import _ from 'underscore';
import Request from 'axios';
import {ResultsList} from './resultsList';

const APP_KEY = 'd9307fd91b0247c607e098d5effedc97';
const APP_ID = '03bf8009';

export class ResultsContainer extends Component {
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

  render() {
    return (
      <ResultsList trains={this.state.trains} isLoading={this.state.isLoading}/>
    );
  }
}

ResultsContainer.propTypes = {
  departureStation: React.PropTypes.string.isRequired,
  arrivalStation: React.PropTypes.string.isRequired
};