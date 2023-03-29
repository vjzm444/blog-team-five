import './authInput.scss';
import React from 'react';

interface AuthInputProps {
  title: string;
  id: string;
  name: string;
  placeholder: string;
  maxLength: number;
  type: string;
  value: string;
  onChangeFunc: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMode: boolean;
  errMsg: string;
}

const AuthInput = (props: AuthInputProps) => {
  return (
    <>
      <label className='title' htmlFor={props.id}>
        {props.title}
      </label>
      <div className={props.errorMode ? 'default-input error' : 'default-input'}>
        <input
          className='wishket-text'
          maxLength={props.maxLength}
          name={props.name}
          placeholder={props.placeholder}
          id={props.id}
          type={props.type}
          onChange={props.onChangeFunc}
          autoComplete='off'
          required
        />
      </div>
      <span className={props.errorMode ? 'instructions' : 'offscreen'}>{props.errMsg}</span>
    </>
  );
};

export default AuthInput;
