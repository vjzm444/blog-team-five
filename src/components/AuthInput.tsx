import './authInput.scss';
import React from 'react';

interface AuthInputProps {
  title: string;
  name: string;
  placeholder: string;
  maxLength: number;
  type: string;
  onChangeFunc: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
}

const AuthInput = (props: AuthInputProps) => {
  return (
    <>
      <div className='title'>{props.title} </div>
      <div className='default-input'>
        <input
          className='theme-wishket wishket-text'
          maxLength={props.maxLength}
          name={props.name}
          placeholder={props.placeholder}
          id={props?.id}
          type='text'
          onChange={props.onChangeFunc}
        />
      </div>
    </>
  );
};

export default AuthInput;
