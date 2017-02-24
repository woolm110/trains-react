import React, {Component, PropTypes} from 'react';
import _ from 'underscore';

const styles = {
  select: {
    flex: '1',
    textAlign: 'center',
    fontSize: '14px',
    minHeight: '40px'
  }
};

const propTypes = {
  stations: PropTypes.array,
  name: PropTypes.string
};

class SelectBox extends Component {
  renderValues() {
    return (
      _.map(_.sortBy(this.props.stations, 'name'), train => {
        return (
          <option value={train.station_code} key={train.station_code}>{train.name}</option>
        );
      })
    );
  }

  render() {
    return (
      <select style={styles.select} name={this.props.name}>
        {this.renderValues()}
      </select>
    );
  }
}

SelectBox.propTypes = propTypes;

export default SelectBox;
