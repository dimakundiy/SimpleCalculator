import React from 'react';
import { combineReducers } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import * as Calc from './calculator';

const rootReducers = {
    routing: routerReducer,
    form: formReducer,
    calc: Calc.reducer
};



export default rootReducers;