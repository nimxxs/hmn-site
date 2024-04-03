import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
// createSlice? reducer 만드는 걸 도와준다. 객체를 매개변수로 받는다.
// 3개의 매개변수: name, initialState, reducers
// name? action 값을 알아서 만들어줌
// reducers? 객체로 이루어져 있는데 함수를 받는다.

let initialState = {
    productList: [],
    selectedItem: null,
    isLoading: false,
    error: null,
}

// createAsyncThunk: 매개변수는 string, 콜백함수.
// promise를 return 해야함.
// dispatch를 안해줘도 return으로 인해 알아서 action에 따라서 분리해서 호출함.
export const fetchProducts = createAsyncThunk('product/fetchAll', 
    async (searchQuery, thunkApi) => {
        try {
            let url = `https://my-json-server.typicode.com/nimxxs/hnm-site/products?q=${searchQuery}`;
            let response = await fetch(url);
            return await response.json();
        } catch(error) {
            thunkApi.rejectWithValue(error.message);
    }
});

export const fetchDetailProducts = createAsyncThunk('product/fetchDetail',
    async (id) => {
        let url = `https://my-json-server.typicode.com/nimxxs/hnm-site/products/${id}`;
        let response = await fetch(url);
        return await response.json();
    }
)

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
        // getAllProducts(state, action){
        //     state.productList = action.payload.data;
        // },
        // getDetailProducts(state, action){
        //     state.selectedItem = action.payload.data;
        // }
    },
    // redux란 state를 한군데 모아두는 장소일 뿐.. 비동기를 지원하는 건 아님.
    // reducers? 동기적으로 자신의 state를 바꾸는 경우.
    // extraReducers? 외부 라이브러리(ex. thunk)에 의해 state가 바뀌는 경우. (주로 비동기 처리)
    // 함수를 갖고 있고, 매개변수로 builder를 씀.
    // promise를 return하면 알아서 case를 3가지로 나눔.
    // case: pending(데이터 오는중), fulfilled(성공), rejected(에러).
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.productList = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
        .addCase(fetchDetailProducts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchDetailProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.selectedItem = action.payload;
        })
        .addCase(fetchDetailProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    }
})

console.log("productSlice", productSlice)

export const productActions = productSlice.actions
export default productSlice.reducer