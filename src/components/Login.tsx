import { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/AuthContext';
import icon from '../../public/google_sign_in.png'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { user } = UserContext()
  const navigate = useNavigate()

  const handleSignIn = async (e:React.MouseEvent<HTMLElement>) => {
    await signInWithEmailAndPassword(auth, email, password)
  }

  const handleGoogleSignIn = async (e:React.MouseEvent<HTMLElement>) => {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
  }

  useEffect(() => {
    if (user) {
      navigate('/dashboard')
    }
  }, [user])

  return (
    <div className='min-w-screen min-h-screen bg-slate-100 flex justify-center items-center'>
      <div className='p-6 border rounded-lg shadow w-2/5 bg-white'>
        <h1 className='text-center text-5xl font-bebas'>TODO APP</h1>
        <h2 className='text-center mb-6 italic'>chrisen.dev</h2>
        <div className='mb-3'>
          <label className='block'>Email address</label>
          <input
            className='px-4 py-2 border w-full'
            type='text'
            value={email}
            placeholder='Enter email address'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-6'>
          <label className='block'>Password</label>
          <input
            className='px-4 py-2 border w-full'
            type='password'
            value={password}
            placeholder='Enter password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='mb-6'>
          <button
            className='p-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white w-full'
            onClick={handleSignIn}>
            Sign in
          </button>
        </div>
        <div className="relative flex pb-5 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-400">or</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div className='w-full flex justify-center'>
          <button
            className='border border-black font-bold rounded-full shadow'
            onClick={handleGoogleSignIn}>
              <img src={icon} className='h-10 hover:' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login