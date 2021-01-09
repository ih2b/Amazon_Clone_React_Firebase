export const initialState ={
    basket:[],
    total: 0,
    user:null
};
const reducer = (state,action) =>{
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket:[...state.basket, action.item],
                total: state.total+action.item.price
            };
        case "EMPTY_BASKET":
            return{
                ...state,
                basket:[]
            }
        case 'REMOVE_FROM_BASKET':
            const index =state.basket.findIndex(
                (basketItem)=> basketItem.id ===action.id
            );
            let newBasket =[...state.basket];
            if(index >=0){
                newBasket.splice(index,1);
            }else {
                console.log('no such id')
            }
            return{
                ...state,
                basket: newBasket
            }
        case 'SET_USER':
            return {
                    ...state,
                    user: action.user
            };
        default:
            return state;
    }
};
export default reducer;     