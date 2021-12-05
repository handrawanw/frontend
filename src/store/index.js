import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Axios
import axios from 'axios';
import { reduxSoldierMiddleware } from 'redux-soldier';
import { Provider } from 'react-redux';

// Reducer
import LoginStoreReducer from "./Login/index";
import UserStoreReducer from "./User/index";
import MasterBarangStoreReducer from "./MasterBarang/index";
import TransaksiPOStoreReducer from "./TransaksiPO/index";
import ReportPOStoreReducer from "./ReportPO/index";
import MasterSupplierStoreReducer from "./MasterSupplier/index";
// Reducer

// Function

///////////////////////////////////////////////////////////////
export const baseUrl = 'http://localhost:2021/api/v1';
///////////////////////////////////////////////////////////////
export const baseAxios = axios.create({ 
    baseURL: baseUrl,
    timeout: 50000,
    // withCredentials: true,
    headers: {
        token: localStorage.getItem('token')
    }
});

const rootReducer = combineReducers({
    UserStoreReducer,
    LoginStoreReducer,
    MasterBarangStoreReducer,
    TransaksiPOStoreReducer,
    ReportPOStoreReducer,
    MasterSupplierStoreReducer
});

export default function ReduxState(props) {
    
    //FOR DEVELOPMENT
    let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxSoldierMiddleware)));
    
    // FOR PRODUCTION
    // let store=createStore(rootReducer,applyMiddleware(reduxSoldierMiddleware));

    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    );
}
