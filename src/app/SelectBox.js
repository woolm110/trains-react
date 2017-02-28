import React, {Component, PropTypes} from 'react';
import _ from 'underscore';

const styles = {
  select: {
    flex: '1',
    textAlign: 'center',
    fontSize: '14px',
    height: '30px',
    border: '1px',
    display: 'block',
    margin: '0 auto 10px'
  }
};

const propTypes = {
  stations: PropTypes.array,
  name: PropTypes.string,
  defaultValue: PropTypes.string,
  onSelectTrain: PropTypes.func
};

class SelectBox extends Component {
  constructor() {
    super();
    this.handleSelectTrain = this.handleSelectTrain.bind(this);
  }

  renderValues() {
    return (
      _.map(_.sortBy(this.props.stations, 'name'), train => {
        return (
          <option value={train.station_code} key={train.station_code}>{train.name}</option>
        );
      })
    );
  }

  handleSelectTrain(event) {
    this.props.onSelectTrain(event.target.name, event.target.value);
  }

  render() {
    return (
      <select style={styles.select} name={this.props.name} defaultValue={this.props.defaultValue} onChange={this.handleSelectTrain}>
        {this.renderValues()}
      </select>
    );
  }
}

SelectBox.propTypes = propTypes;

export default SelectBox;
