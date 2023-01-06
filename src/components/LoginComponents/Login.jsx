import StyledLogin from './LoginStyles/styledLogin';
import { Link } from 'react-router-dom';

export default function LoginForm({ children }) {
  return (
    <StyledLogin>
      <div className='form-content'>
        <div className='title'>Login</div>
        <form>
          <div className='input-container'>
            <label htmlFor='username'>
              <span>username</span>
              <input
                type='text'
                id='username'
                name='username'
                placeholder='example@email.com'
              />
            </label>
          </div>
          <div className='input-container'>
            <label htmlFor='password'>
              <span>password</span>
              <input
                type='password'
                id='password'
                name='password'
                placeholder='password'
              />
            </label>
          </div>
          <button
            className='send-form'
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Send
          </button>
        </form>
        <span className='or'>
          or
        </span>
      </div>
      {children}
    </StyledLogin>
  );
}
