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
    case 'GET_BANKROLL_POSITIONS':
      return { ...state, positions: action.payload };
    case 'ADD_BANKROLL_POSITION':
      return {
        ...state,
        positions: [...state.positions, action.payload],
      };
    case 'DELETE_BANKROLL_POSITION':
      return {
        ...state,
        positions: state.positions.filter(
          (position) => position.id !== action.payload
        ),
      };
    case 'RESET_POSITIONS':
      return { ...state, positions: {} };
    case 'LOADING':
      return { ...state, isLoading: true };
    case 'LOADED':
      return { ...state, isLoading: false };
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
  dispatch({ type: 'LOADING' });
  try {
    const user_id = await AsyncStorage.getItem('remontada_user_id');
    const response = await strapiApi.get(
      `bankrolls?users_permissions_user=${user_id}`
    );

    dispatch({ type: 'GET_USER_BANKROLLS', payload: response.data });
  } catch (err) {
    dispatch({ type: 'ADD_ERROR', payload: err });
  }
  dispatch({ type: 'LOADED' });
};

// users_permissions_user NOT REQUIRED YET (Waiting for strapi update)
const newBankroll = (dispatch) => async ({ name, starter }) => {
  dispatch({ type: 'LOADING' });
  try {
    const user_id = await AsyncStorage.getItem('remontada_user_id');
    await strapiApi.post('bankrolls', {
      name,
      starter,
      current_balance: starter,
      users_permissions_user: user_id,
    });
  } catch (err) {
    console.log(err);
  }
  dispatch({ type: 'LOADED' });
};

const deleteBankroll = (dispatch) => async (id) => {
  dispatch({ type: 'LOADING' });
  try {
    await strapiApi.delete(`/bankrolls/${id}`);
  } catch (err) {
    console.log(err);
  }
  dispatch({ type: 'LOADED' });
};

const getCurrentBalance = (dispatch) => async (id) => {
  dispatch({ type: 'LOADING' });
  try {
    const response = await strapiApi.put(`/bankrolls/${id}`, {
      type: 'current_balance',
    });
  } catch (err) {
    console.log(err);
  }
  dispatch({ type: 'LOADED' });
};

// POSITIONS
const getBankrollPositions = (dispatch) => async (id) => {
  dispatch({ type: 'LOADING' });
  try {
    const response = await strapiApi.get(`/positions?bankroll=${id}`);
    dispatch({ type: 'GET_BANKROLL_POSITIONS', payload: response.data });
  } catch (err) {
    console.log(err.response.data);
  }
  dispatch({ type: 'LOADED' });
};

const postPosition = (dispatch) => async ({
  user_id,
  bet_id,
  bankroll_id,
  value,
}) => {
  dispatch({ type: 'LOADING' });

  try {
    const response = await strapiApi.post('/positions', {
      users_permissions_user: user_id,
      bet: bet_id,
      bankroll: bankroll_id,
      value,
    });

    // dispatch({ type: 'ADD_BANKROLL_POSITION', payload: response.data });

    // await strapiApi.put(`/bankrolls/${bankroll_id}`, {
    //   type: 'add_position',
    //   position_id: response.data.id,
    // });
  } catch (err) {
    console.log(err.response.data);
  }

  dispatch({ type: 'LOADED' });
};

const deletePosition = (dispatch) => async ({ position_id, bankroll_id }) => {
  try {
    // console.log('position_id =', position_id, 'bankroll_id =', bankroll_id);
    await strapiApi.delete(`/positions/${position_id}`);
    dispatch({ type: 'DELETE_BANKROLL_POSITION', payload: position_id });

    // await strapiApi.put(`bankrolls/${bankroll_id}`, {
    //   type: 'delete_position',
    //   position_id,
    // });
  } catch (err) {
    console.log(err.data);
  }
};

const resetPositions = (dispatch) => async () => {
  dispatch({ type: 'RESET_POSITIONS' });
};

// UTILS

// EXPORT
export const { Context, Provider } = createDataContext(
  BankrollReducer,
  {
    getBets,
    getUserBankrolls,
    newBankroll,
    deleteBankroll,
    getCurrentBalance,
    getBankrollPositions,
    postPosition,
    deletePosition,
    resetPositions,
  },
  {}
);
