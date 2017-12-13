const redux = require("redux");
const reactRedux = require("react-redux");

const SET_SEARCH_TERM = "setSearch";
const SET_USER_ID = "setUserID";
const initialState = {
    searchTerm: "",
    userID: 0
};

const rootReducer = (state=initialState, action) => {
    switch (action.type){
        case SET_SEARCH_TERM: 
            return reduceSearchTerm(state, action);
        case SET_USER_ID:
            return reduceUserID(state, action);
        default:
            return state;
    }
};

const reduceSearchTerm = (state, action) => {
    const newState = {};
    Object.assign(newState, state, {searchTerm: action.value});
    return newState;
}

const reduceUserID = (state, action) => {
    const newState = {};
    Object.assign(newState, state, {userID: action.value});
    return newState;
}

const store = redux.createStore(rootReducer);

const mapStateToProps = (state) => { 
    return {searchTerm: state.searchTerm, userID: state.userID}
};

const mapDispatchToProps = (dispatch) => {
    return {
        setSearchTerm: (searchTerm) => {
            dispatch({type: SET_SEARCH_TERM, value: searchTerm});
        },
        setUserID: (userID) => {
            dispatch({type: SET_USER_ID, value: userID});
        }
    };
}

const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps);

export {connector, store};