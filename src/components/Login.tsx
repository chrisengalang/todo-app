import { useState } from 'react';
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = async (e:React.MouseEvent<HTMLElement>) => {
    await signInWithEmailAndPassword(auth, email, password)
  }

  const handleGoogleSignIn = async (e:React.MouseEvent<HTMLElement>) => {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
  }

  return (
    <div>
      <div>
        <h1>Sign in</h1>
        <div>
          <label>Email address</label>
          <input
            type='text'
            value={email}
            placeholder='Enter email address'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type='password'
            value={password}
            placeholder='Enter email address'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button
            onClick={handleSignIn}>
            Sign in
          </button>
        </div>
        <div>
          <button
            onClick={handleGoogleSignIn}>
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login