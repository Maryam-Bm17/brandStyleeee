import React, { useEffect } from 'react'
import './Input.css';
import { useReducer } from 'react';
import validator from '../Validator/Validator';


const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE': {
      return {
        ...state,
        value: action.value,
        isValid: validator(action.value, action.validations),
      }
    }
    default: {
      return state

    }

  }
}


export default function Input(props) {

  console.log(props.validations);

  const [mainInput, dispatch] = useReducer(inputReducer, {
    value: '',
    isValid: false
  });

  const { value,isValid } = mainInput;
   const {id,onInputHandler} = props;
   useEffect(() => {
     onInputHandler(id,value,isValid)
   }, [value])

  const onChangeHandler = (event) => {
    console.log(event.target.value);
    dispatch({
      type: 'CHANGE',
      value: event.target.value,
      validations: props.validations,
      isValid: true
    })
  }



  const element = props.element === 'input' ? (<input type={props.type} placeholder={props.placeholder} className={props.className} onChange={onChangeHandler} value={mainInput.value} />) : (
    <textarea placeholder={props.placeholder} className={props.className} onChange={onChangeHandler} value={mainInput.value} />
  )




  return (
    <div>
      {element}
    </div>
  )
}
