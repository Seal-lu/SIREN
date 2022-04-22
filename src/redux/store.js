import {createStore} from 'redux'

const reducer = (prevState,action)=>{
    console.log(action);
    return  prevState
}
const store = createStore(reducer);
export default store
