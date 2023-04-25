import { useRef, useState } from 'react';
import StyledLogin from './styles';
import { auth } from '../../../../firebase';
import { setFbUser } from '../../../../services/actions';

async function login(email, password) {
  return auth
    .signInWithEmailAndPassword(email, password)
    .then((payload) => {
      setFbUser(payload.user);
    })
    .catch((e) => alert(e.message));
}

export default function LoginForm({ children }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
    } catch (e) {
      setError(e.message);
    }
    setLoading(false);
  }
  return (
    <StyledLogin>
      <div className='form-content'>
        {error && (
          <div className='login-alert' styles={{ color: 'red' }}>
            {error}
          </div>
        )}
        <div className='title'>Login</div>
        <form onSubmit={handleSubmit}>
          <div className='input-container'>
            <label className='username-login-label' htmlFor='email'>
              <span>Email</span>
              <input
                type='email'
                ref={emailRef}
                id='email'
                name='email'
                placeholder='example@email.com'
                autoComplete='email'
                required
              />
            </label>
            <label className='password-login-label' htmlFor='password'>
              <span>password</span>
              <input
                type='password'
                id='password'
                name='password'
                ref={passwordRef}
                placeholder='password'
                autoComplete='password'
                required
              />
            </label>
          </div>
          <button className='send-form' type='submit' disabled={loading}>
            Log in
          </button>
        </form>
        <span className='or'>or</span>
      </div>
      {children}
    </StyledLogin>
  );
}
