import createRootReducer from "./modules";
import { createStore, Store } from "redux";
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();
const rootReducer = createRootReducer(history);

export default function configureStore():Store {
  return createStore(rootReducer);
}