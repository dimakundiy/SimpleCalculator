
import CalculatorService from '../services/CalculatorService';


export const EXECUDE_OPERATION_PENDING = "EXECUDE_OPERATION_PENDING";
export const EXECUDE_OPERATION_SUCCESS = "EXECUDE_OPERATION_SUCCESS";
export const EXECUDE_OPERATION_ERROR = "EXECUDE_OPERATION_ERROR";


const api_serv = new CalculatorService();

export default function ex_operation(data) {

    return dispatch => {
        dispatch(exOperationPending(true));
        dispatch(exOperationError(false));

        const res = api_serv.Ex_Operation(data);
        res.then(response => {
            if (response.error == null) {
                dispatch(exOperationSUCCESS(response));

            } else {
                dispatch(exOperationError(response.error));
            }
        });
    }
}

function exOperationPending(data) {
    return {
        type: EXECUDE_OPERATION_PENDING,
        payload: data
    }
}

function exOperationSUCCESS(data) {
    return {
        type: EXECUDE_OPERATION_SUCCESS,
        payload: data
    }
}

function exOperationError(data) {
    return {
        type: EXECUDE_OPERATION_ERROR,
        payload: data
    }
}