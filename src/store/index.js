import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../redux/reducers';

const middlewares = [];
middlewares.push(thunkMiddleware);

if (process.env.NODE_ENV === 'development') {
  const loggerMiddleware = createLogger({
    diff: false,
    collapsed: false
  });
  middlewares.push(loggerMiddleware);
}

const createStoreWithMiddleware = compose(applyMiddleware(...middlewares))(
  createStore
);
const store = createStoreWithMiddleware(rootReducer);

export default store;
