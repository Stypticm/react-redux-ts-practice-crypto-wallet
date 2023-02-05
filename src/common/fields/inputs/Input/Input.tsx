import React from 'react';

import styles from './Input.module.css';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  isError?: boolean;
  helperText?: string;
}

export const Input: React.FC<InputProps> = ({ isError = false, helperText, ...props }) => {
  return (
    <>
      <input className={`${styles.custom_input} ${isError ? styles.input_error : ''}`} {...props} />
      {isError && helperText && <div className={`${styles.input_helper_text}`}>{helperText}</div>}
    </>
  );
};
