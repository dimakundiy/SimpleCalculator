﻿
import initialState from '../store/initialState';
import {
    CLEAR_HISTORY_SUCCESS, EXECUDE_HISTORY_SUCCESS, EXECUDE_OPERATION_PENDING, EXECUDE_OPERATION_SUCCESS, EXECUDE_OPERATION_ERROR
} from '../actions/calculator';

export const reducer = (
    state = initialState.Operation,
    action
) => {
    switch (action.type) {
        case EXECUDE_OPERATION_ERROR:
            return {
                ...state,
                isError: action.payload
            }
        case EXECUDE_OPERATION_PENDING:
            return {
                ...state,
                isPending: true
            }
        case EXECUDE_OPERATION_SUCCESS:
            return {
                ...state,
                isPending: false,
                data: action.payload
            }
        case EXECUDE_HISTORY_SUCCESS:
            return {
                ...state,
                isPending: false,
                his: action.payload
            }
        case CLEAR_HISTORY_SUCCESS:
            return {
                ...state,
                isPending: false,
                his: action.payload
            }
        default:
            return state;
    }
}  