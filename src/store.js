
import Vuex from 'vuex'

const state = {
    user: null
}
const store = new Vuex.Store({
    state,
    getters: { //Get state Value
        user: (state)=>{
            return state.user;
        }
    }, 
    actions:{ //Action call mutation to change the state
        user(context, user){
            context.commit('user',user)
        }
    }, 
    mutations: {  //Change state value
        user(state,user){
            state.user = user;
        }
    }
})
export default store;