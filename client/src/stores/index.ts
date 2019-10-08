import modules from "./modules";
import { createStore, Store } from "redux";

export default function configureStore():Store {
  const store = createStore(modules);
  return store;
}