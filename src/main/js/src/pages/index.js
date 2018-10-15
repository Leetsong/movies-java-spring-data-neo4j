import React from 'react';
import { connect } from 'dva';
import Navigation from '@/components/index/Navigation';
import MoviesPanel from '@/components/index/MoviesPanel';

@connect(({ global }) => ({ movies: global.movies }))
class IndexPage extends React.Component {

  state = {
    displayedMovieDetail: {
      movie: null,
      rolesInfo: []
    }
  };

  handleSearch = input => {
    this.props.dispatch({
      type: 'global/search',
      payload: input
    });
  };

  handleClickMovie = m => {
    this.props.dispatch({
      type: 'global/search-movie',
      payload: m.title
    }).then(dm => {
      if (dm !== null) {
        this.setState({
          ...this.state,
          displayedMovieDetail: {
            movie: dm,
            rolesInfo: []
          }
        }, () => this.fetchDisplayedMovieRolesInfo(dm));
      }
    });
  };

  fetchDisplayedMovieRolesInfo(dm) {
    dm.roles.forEach(cast => {
      this.props.dispatch({
        type: 'global/search-person',
        payload: cast._links.person.href
      }).then(roleData => {
        if (roleData !== null) {
          const person = roleData.name;
          const job = cast.job || 'acted';
          const displayedMovieDetail = this.state.displayedMovieDetail;
          this.setState({
            ...this.state,
            displayedMovieDetail: {
              ...displayedMovieDetail,
              rolesInfo: [
                ...displayedMovieDetail.rolesInfo,
                person + " " + job + (job == 'acted' ? ' as ' + cast.roles.join(', ') : '')
              ]
            }
          });
        }
      });
    });
  }

  render() {
    const { movies } = this.props;
    const { displayedMovieDetail } = this.state;

    return (
      <div>
        <div id="graph">
        </div>
        <Navigation onSearch={this.handleSearch}/>
        <MoviesPanel
          movies={movies}
          displayedMovieDetail={displayedMovieDetail}
          onClickMovie={this.handleClickMovie}
        />
    </div>
    );
  }
}

export default IndexPage;
