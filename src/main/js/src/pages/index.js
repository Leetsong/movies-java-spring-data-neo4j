import React from 'react';
import { connect } from 'dva';
import Navigation from '@/components/index/Navigation';
import MoviesPanel from '@/components/index/MoviesPanel';
import Graph from '@/components/index/Graph';

const NODE_COLOR_MAP = {
  'actor': '#888',
  'watch': '#BBB'
};

@connect(({ global }) => ({ movies: global.movies, graph: global.graph }))
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

  componentDidMount() {
    this.props.dispatch({
      type: 'global/fetch-graph'
    });
  }

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
    const { movies, graph } = this.props;
    const { displayedMovieDetail } = this.state;

    return (
      <div>
        { graph && <Graph 
          id="mountNode"
          data={graph}
          nodeLabelKey="label"
          nodeDegreeKey="degree"
          nodeDegreeRange={[0, 15]}
          nodeColorRange={Object.values(NODE_COLOR_MAP)}
          nodeStyle={{
            style: model => ({
              stroke: '#222',
              strokeWidth: '1.5px',
              fill: NODE_COLOR_MAP[model.label]
            }),
            label: model => ({
              text: model.title,
              stroke: '#b3b3b3',
              lineWidth: 2
            })
          }}
          edgeStele={{
            style: () => ({
              stroke: '#999',
              strokeOpacity: 0.6,
              strokeWidth: '1px'
            })
          }}
          style={{  
            position: 'absolute',
            top: 0,
            margin: 'auto',
            height: '100%',
            width: '100%' 
          }}
        /> }
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
