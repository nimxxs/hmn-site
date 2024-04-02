// ProductAll.js에 보면 getProducts 함수가 비동기 처리 되고 있다.
// getProducts 함수를 미들웨어로 옮기자.
// 그리고 ProductAll.js에서 getProducts함수는 미들웨어에 있는 getProducts함수를 불러줘야함.

// 미들웨어 함수
// 미들웨어 함수는 함수를 리턴한다.
// 매개변수는 dispatch, getState
// getState? 현재의 state를 받을 수 있음.

import ProductAll from "../../page/ProductAll";

function getProducts(searchQuery) {
    return async (dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/nimxxs/hnm-site/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();

        // action을 했으니 이제 data를 reducer로 보내줄 차례.
        // 보내는 방법은 dispatch 사용
        // payload: data -> data를 보내준다!
        dispatch({type: "GET_PRODUCT_SUCCESS", payload: {data}})
    }
}

function getProductDetail(id) {
    return async (dispatch) => {
        let url = `https://my-json-server.typicode.com/nimxxs/hnm-site/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();

        dispatch({type: "DETAIL", payload: {data}})
    }
    
}

// productAction이라는 객체를 반환할건데, 함수는 getProducts.
// 함수가 여러가지가 될 수 있으니, 여러 개의 함수를 하나의 객체에 담아서 return.
export const ProductAction = {getProducts, getProductDetail}