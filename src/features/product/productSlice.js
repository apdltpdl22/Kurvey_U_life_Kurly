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
    localStorage.setItem('productId', response.data.data.id);
    console.log(response.data.data.id);
  } catch (err) {
    console.log(err);
  }
};
export const purchaseProductAsync = ({productId, close}) => async (dispatch) => {
  try {
    const userToken = localStorage.getItem('userToken');
    // console.log('purchase-userToken', userToken, 
    // 'productId:', productId)

    const productId = localStorage.getItem('productId');
    console.log('ppp', productId);
    
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
