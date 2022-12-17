const initState =[]
const addCartReducer =(state=initState,action)=>{
    switch (action.type){
        case 'ADDCART':
            state = [...state,action.data]
            console.log(state)
            return state
            default:
                return state
    }
}
export default addCartReducer;