// import axios from 'axios'
const redux=require('redux');
const createStore =redux.createStore;
const applyMiddleware=redux.applyMiddleware;
const thunkMiddleware=require('redux-thunk').default;
const axios =require('axios');

// const {API}=require('./backend'); 


const initialState={
    loading:false,
    error:'',
    users:'',
    users1:''



}
// const FETCH_USERS_REQUEST='FETCH-USER-REQUEST',
// const FETCH_USERS_SUCCESS='FETCH_USERS_SUCCESS',
// const FETCH_USERS_FAILURE='FETCH_USERS_FAILURE'

const fetchUsersRequest=()=>{
    return {
        type:"FETCH_USERS_REQUEST",
    }
}
const fetchUsersSuccess=(users,users1)=>{
       return {
           type:"FETCH_USERS_SUCCESS",
           payload:users,
           payload1:users1
           
       }
}
const fetchUsersFailure=(error)=>{
    return {
        type:'FETCH_USERS_FAILURE',
        payload:error,
        payload1:error,
    }      

}

const reducer=(state=initialState,action)=>{
  switch(action.type){
      case 'FETCH_USERS_REQUEST':
          return {
              ...state,
              loading:true
           
        }
        case 'FETCH_USERS_SUCCESS':
            return{
                loading:false,
                users:action.payload,
                users1:action.payload1,
                error:''
            }
            case 'FETCH_USERS_FAILURE':
                return{
                    loading:false,
                    users:[],
                    error:action.payload
                }
                default: return state
  }
}
export const fetchUsers=()=>{
    return function(dispatch){
        dispatch(fetchUsersRequest())
      axios.get('/players').then(response=>{
           const users=response.data[0,0];
           const users1=response.data[0,1];
        console.log(users);
        console.log(users1);
      
        dispatch(fetchUsersSuccess(users,users1));
      }).catch(error=>{
            //   console.log(error.message);
              dispatch(fetchUsersFailure(error.message))
      });
    }
} 
const store=createStore(reducer,applyMiddleware(thunkMiddleware))
store.subscribe(()=>{
    // console.log(store.getState()
    // )
})
store.dispatch(fetchUsers())

export default store