const redux = require("redux");
const reactRedux = require("react-redux");
const NEW_TAB = "newTab";
const NEW_ITEM = "newItem";
const initialState = {
    tabs: [{id: 0, title: "Testing", items: ["This works!", "Hip hip hooray!", "Ohhh yeah"]}]
};
let id = 1;

const rootReducer = (state=initialState, action) => {
    switch(action.type){
        case NEW_TAB:
            return reduceNewTab(state, action);
        case NEW_ITEM:
            return reduceNewItem(state, action);
        default:
            return state;
    }
}

const reduceNewTab = (state, action) => {
    const newState = {};
    Object.assign(newState, state, {tabs: state.tabs.concat([{id: id++, title: action.value, items: []}])});
    return newState;
}

const reduceNewItem = (state, action) => {
    const newState = {};
    let newTabs = state.tabs.slice();
    for(let i = 0; i < newTabs.length; i++){
        if(action.id === newTabs[i].id){
            newTabs[i].items.push(action.item);
            break;
        }
    }
    Object.assign(newState, state, {tabs: newTabs});
    return newState;
}

const store = redux.createStore(rootReducer);

const mapStateToProps = (state) => {
    return {tabs: state.tabs};
}

const mapDispatchToProps = (dispatch) => {
    return {
        newTab: (title) => {
            dispatch({type: NEW_TAB, value: title});
        },
        newItem: (id, item) => {
            dispatch({type: NEW_ITEM, id: id, item: item});
        }
    };
}

const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps);

export {connector, store};