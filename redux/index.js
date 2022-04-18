import { createStore } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension'
import { loadState, saveState } from '../services/storage-service';

let state = loadState("state");

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;

let persistedState = {}

if (state !== undefined) {
    persistedState = state
}

const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
    let state = store.getState();
    saveState({
        auth: state.auth,
        cart : state.cart
    });
});

export default store;
