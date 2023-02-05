import LoginPage from '../LoginPage/LoginPage';
import React from 'react';
import { Link} from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <div className='bg-gray-400 w-screen h-screen flex justify-center flex-col items-center'>
      <div className='bg-gray-300 flex justify-center flex-col items-center m-auto w-1/2 h-1/2 rounded-lg shadow-lg'>
        <h1 className='text-3xl'>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <Link to='/'>
          <button className='bg-slate-500 rounded-md p-2 hover:bg-slate-600'>
            Back to Home Page
          </button>
        </Link>
      </div>
    </div>
  );
}
