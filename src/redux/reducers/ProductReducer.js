import {createSlice} from '@reduxjs/toolkit'
// createSlice? reducer 만드는 걸 도와준다. 객체를 매개변수로 받는다.
// 3개의 매개변수: name, initialState, reducers
// name? action 값을 알아서 만들어줌
// reducers? 객체로 이루어져 있는데 함수를 받는다.

let initialState = {
    productList: [],
    selectedItem: null
}

// function productReducer(state=initialState, action) {
//     let {type, payload} = action
//     switch(type) {
//         case "GET_PRODUCT_SUCCESS":
//             return {...state, productList:payload.data};
//         case "DETAIL":
//             return {...state, selectedItem:payload.data}
//         default:
//             return {...state};
//     }
// }

// export default productReducer

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        getAllProducts(state, action){
            state.productList = action.payload.data;
        },
        getDetailProducts(state, action){
            state.selectedItem = action.payload.data;
        }
    }
})

console.log("productSlice", productSlice)

export const productActions = productSlice.actions
export default productSlice.reducer