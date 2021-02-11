import createDataContext from './createDataContext';
import strapiApi from '../api/strapiApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

// REDUCER
const BankrollReducer = (state, action) => {
  switch (action.type) {
    case 'GET_BETS':
      return { ...state, bets: action.payload };
    case 'GET_USER_BANKROLLS':
      return { ...state, bankrolls: action.payload };
    case 'ADD_ERROR':
      return { ...state, errorMsg: action.payload };
    default:
      return state;
  }
};

// ACTIONS
const getBets = (dispatch) => async () => {
  try {
    const response = await strapiApi.get('/bets');
    dispatch({ type: 'GET_BETS', payload: response.data });
  } catch (err) {
    dispatch({ type: 'ADD_ERROR', payload: err });
  }
};

const getUserBankrolls = (dispatch) => async () => {
  try {
    const user_id = await AsyncStorage.getItem('remontada_user_id');
    const response = await strapiApi.get(
      `bankrolls?users_permissions_user=${user_id}`
    );

    dispatch({ type: 'GET_USER_BANKROLLS', payload: response.data });
  } catch (err) {
    dispatch({ type: 'ADD_ERROR', payload: err });
  }
};
// UTILS

// EXPORT
export const { Context, Provider } = createDataContext(
  BankrollReducer,
  { getBets, getUserBankrolls },
  {}
);
