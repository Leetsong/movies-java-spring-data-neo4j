import * as service from '../services/service';

export default {
  namespace: 'global',

  state: {
    movies: [],
    graph: null
  },

  reducers: {
    'save-movies' (state, { payload: movies }) {
      return {
        ...state,
        movies
      };
    },
    'save-graph' (state, { payload: graph }) {
      const nodes = graph.nodes.map((n, i)=> ({
        ...n,
        id: `node-${i}`,
        degree: 1
      }));
      const edges = graph.links.map((e, i) => ({
        id: `edge-${i}`,
        source: nodes[e.source].id,
        target: nodes[e.target].id
      }));
      return {
        ...state,
        graph: {
          nodes,
          edges
        }
      };
    }
  },

  effects: {
    *'search' ({ payload: q }, { call, put }) {
      const result = yield call(service.search, q);
      if (result !== null) {
        yield put({
          type: 'save-movies',
          payload: result['_embedded'].movies
        });
      }
    },
    *'search-movie' ({ payload: m }, { call }) {
      const result = yield call(service.searchMovie, m);
      if (result !== null) {
        return result;
      } else {
        return null;
      }
    },
    *'search-person' ({ payload: href }, { call }) {
      const result = yield call(service.searchPerson, href);
      if (result !== null) {
        return result;
      } else {
        return null;
      }
    },
    *'fetch-graph' (_, { call, put }) {
      const result = yield call(service.fetchGraph);
      if (result !== null) {
        yield put({
          type: 'save-graph',
          payload: result
        });
      }
    }
  },
};
