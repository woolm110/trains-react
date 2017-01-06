import React, {Component} from 'react';
import _ from 'underscore';
import Request from 'superagent';
import {Header} from './header';
import {Columns} from './columns';

const styles = {
  container: {
    maxWidth: '960px',
    margin: '0 auto'
  },
  column: {
    width: '33.33%',
    float: 'left',
    textAlign: 'center',
    color: '#fff',
    fontSize: '14px',
    minHeight: '50px'
  }
};

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  componentWillMount() {
    const url = 'http://transportapi.com/v3/uk/train/station/WAT/live.json?app_id=03bf8009&app_key=d9307fd91b0247c607e098d5effedc97&calling_at=QRB&train_status=passenger';
    Request.get(url)
      .set('Accept', 'application/json')
      .then(response => {
        const res = JSON.parse(response.text);
        this.setState({
          trains: res.departures.all
        });
      });
  }

  render() {
    const trains = _.map(this.state.trains, train => {
      return (
        <div key={train.train_uid}>
          <div style={styles.column}>{train.destination_name}</div>
          <div style={styles.column}>{train.aimed_departure_time}</div>
          <div style={styles.column}>{train.platform}</div>
        </div>
      );
    });
    return (
      <div style={styles.container}>
        <Header/>
        <main>
          <Columns/>
          {trains}
        </main>
      </div>
    );
  }
}
