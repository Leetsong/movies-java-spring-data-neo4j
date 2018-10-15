import React from 'react';
export default class SearchBar extends React.Component {

  state = {
    value: 'Matrix'
  };

  handleChange = e => {
    console.log('CHANGE:', e.target.value);
    this.setState({
      ...this.state,
      value: e.target.value
    })
  };

  render() {
    const { onClick } = this.props;
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
          onClick={e => onClick(this.state.value)}
        >
          Search
        </button>
      </div>
  );

  }
}
