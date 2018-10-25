export const actionTypes = {
    ADD : 'ADD', 
    REMOVE: 'REMOVE'
}


export const addTodo = (item) => {
    return{
        type: actionTypes.ADD,
        payload: item
    }
}
export const removeTodo = (index) => {
    return {
        type: actionTypes.REMOVE,
        payload: index
    }
}