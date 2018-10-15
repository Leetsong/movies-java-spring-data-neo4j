import React from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends React.Component {

  static propTypes = {
    onClick: PropTypes.func.isRequired
  };

  state = {
    value: 'Matrix'
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      value: e.target.value
    })
  };

  render() {
    const { onClick: handleClick } = this.props;
    const { value } = this.state;

    return (
      <div className="navbar-form">
        <div className="form-group">
            <input
              type="text"
              value={value}
              placeholder="Search for Movie Title"
              className="form-control"
              name="search"
              onChange={this.handleChange}
            />
        </div>
        <button
          className="btn btn-default"
          onClick={e => handleClick(this.state.value)}
        >
          Search
        </button>
      </div>
    );
  }
}
