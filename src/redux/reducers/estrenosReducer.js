import tipos from '../actions/tipos';

const initialState={
    data:[]
}
  
export default (state=initialState,action)=>{
    switch(action.type){
      case tipos.GET_ESTRENOS_FULFILLED:
        const {results} = action.payload.data;
        const peliDestacada = results[Math.floor(Math.random()*results.length)];
        return Object.assign({},state,{
          data:results,
          peliDestacada
        });
      default:
        return state;
    }
}