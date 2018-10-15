import * as service from '../services/service';

export default {
  namespace: 'global',

  state: {
    movies: []
  },

  reducers: {
    'save-movies' (state, { payload: movies }) {
      return {
        ...state,
        movies
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
    }
  },
};
