import React from 'react';

import styles from './LoginPage.module.css';

import { Input } from '@common/fields';
import { Button } from '@common/buttons';
import { Link } from 'react-router-dom';

const validateIsEmpty = (value: string) => {
  if (!value) return 'field require';
  return null;
};

const validateUserName = (value: string) => {
  return validateIsEmpty(value);
};

const validatePassword = (value: string) => {
  return validateIsEmpty(value);
};

const loginFormValidateSchema = {
  username: validateUserName,
  password: validatePassword
};

const validateLoginForm = (name: keyof typeof loginFormValidateSchema, value: string) => {
  return loginFormValidateSchema[name](value);
};

interface FormErrors {
  username: string | null;
  password: string | null;
}

const LoginPage: React.FC = () => {
  const [formValue, setFormValue] = React.useState({ username: '', password: '' });
  const [formErrors, setFormErrors] = React.useState<FormErrors>({
    username: null,
    password: null
  });

  return (
    <div className={styles.page}>
      <div className={styles.page_container}>
        <div className={styles.header}>WBC</div>
        <div className={styles.form_container}>
          <div className={styles.input_container}>
            <Input
              placeholder='username'
              value={formValue.username}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const username = event.target.value;
                setFormValue({ ...formValue, username });
                const error = validateLoginForm('username', username);
                setFormErrors({ ...formErrors, username: error });
              }}
              {...(!!formErrors.username && {
                isError: !!formErrors.username,
                helperText: formErrors.username
              })}
            />
          </div>
          <div className={styles.input_container}>
            <Input
              type='password'
              value={formValue.password}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const password = event.target.value;
                setFormValue({ ...formValue, password });
                const error = validateLoginForm('password', password);
                setFormErrors({ ...formErrors, password: error });
              }}
              {...(!!formErrors.password && {
                isError: !!formErrors.password,
                helperText: formErrors.password
              })}
            />
          </div>
          <Button onClick={() => console.log('Clicked')}>Sign in</Button>
        </div>
        <Link to='/registration'>
          <div className={styles.signup_container}>Create new account</div>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
