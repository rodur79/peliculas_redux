import tipos from '../actions/tipos';

const initialState={
    test:"prueba de redux",
    fecha:new Date()
}
  
export default (state=initialState,action)=>{
    switch(action.type){
      case tipos.UPDATE_FECHA:
        return Object.assign({},state,{
          fecha:action.payload
        });
      default:
        return state;
    }
}