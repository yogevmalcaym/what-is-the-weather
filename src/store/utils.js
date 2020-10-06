export const createAction = type => data => ({type, data});
export const updateState = ({state, data}) => ({...state, ...data});
