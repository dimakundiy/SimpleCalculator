import React from 'react';


export default class CalculatorService{

    _baseUrl = 'api/';

    Ex_Operation = async (data) =>{
        const res = await this.getResource('Calculator/Calculate?exp=' + data);
        console.log(res);
        return res;
    }

    getResource = async (url) => {
        const res = await fetch(this._baseUrl + url);
        if(!res.ok){
            return {error: "Invalid data"}
        }
        return await res.json();
    }

    setResourceWithData = (url, data) => fetch(
        this._baseUrl + url,
        {mode: 'no-cors',
            method: "post",
            body: data
        }
    );

    setResource =  (url, data) => fetch(
            this._baseUrl + url,
            {
                method: "post",
                headers: new Headers({
                    'Content-Type': 'application/json',
                }),
                body: JSON.stringify(data)
            }
        );
        

}