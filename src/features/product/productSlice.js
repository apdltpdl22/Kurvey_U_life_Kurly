import {createSlice} from '@reduxjs/toolkit';
const axios = require('axios');

const initialState = {
  product: {},
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    resetProduct: (state, action) => {
      // state.product = {};
    },
  },
});

export const getProductAsync = productId => async dispatch => {
  try {
    const response = await axios.get('/api/v1/product/' + productId);
    dispatch(setProduct(response.data.data));
  } catch (err) {
    console.log(err);
  }
};
export const purchaseProductAsync = ({productId, close}) => async (state, dispatch) => {
  try {
    const userToken = localStorage.getItem('userToken');
    console.log('state', state)
    // console.log('purchase-userToken', userToken, 
    // 'productId:', productId)
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : true,
        Authorization: `Bearer ${userToken}`,
      },
    };

    const response = await axios.post(
      '/api/v1/product',
      {
        productId: Number(productId),
      },
      config,
    );
    console.log('purchaseProductAsync response', response);
    alert('결제가 완료되었습니다.')
    close();
  } catch (err) {
    console.log(err);
  }
};

export const {setProduct, resetProduct} = productSlice.actions;
export const productSelector = state => state.product;
export default productSlice.reducer;
