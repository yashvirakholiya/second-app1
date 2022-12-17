const initState = 0
const updateNum =(state=initState,action)=>{
    switch (action.type){
        case 'INCREMENT':
            console.log('increment')
            return state = state+1
        case 'DECREMENT':
                console.log('DEcrement')
                return state = state-1
                default:
                    return state
    }
}
export default updateNum;