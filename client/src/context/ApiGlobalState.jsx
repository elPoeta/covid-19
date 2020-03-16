import React, { createContext, useReducer } from 'react';
import ApiReducer from './ApiReducer';
import { GET_STATS } from './actionTypes';

const initialState = {
  stats: {},
  statsDetail: []
}

export const ApiGlobalContext = createContext(initialState);

export const ApiGlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ApiReducer, initialState);

  
  const getGeneralStats = stats =>{
    dispatch({
      type: GET_STATS,
      payload: stats
    });
  }

  return (<ApiGlobalContext.Provider value={{
    stats: state.stats,
    statsDetail: state.statsDetail,
    getGeneralStats
  }}>
    {children}
  </ApiGlobalContext.Provider>);
}