import React from "react";
import { useState } from "react";
import './styles.css';





export default function Home(){
    
    return(
        <div className="Container_home">
            
            
            <input className="Input_boolean" 
            type={'boolean'} 
            placeholder='Digite aqui o número Binário' 
            /> 
            
            <input className="Input_boolean" 
            type={'boolean'} 
            placeholder='Digite aqui o número Decimal' 
            />

            <input className="Botao" type={'submit'} name="Submit"/>

        </div>
    );
}