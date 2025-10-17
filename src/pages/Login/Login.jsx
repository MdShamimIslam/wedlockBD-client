import { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import SpinnerSVG from '../../component/common/SpinnerSVG';

const Login = () => {
  const { signIn, signInWithGoogle } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';
  const [showPassword, setShowPassword] = useState(false);
  const [errorMess, setErrorMess] = useState('');
  const { register, reset, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    setErrorMess('');
    try {
      await signIn(data.email, data.password);
      reset();
      toast.success('Login Successfully!');
      navigate(from, { replace: true });
    } catch (error) {
      setErrorMess(error.message);
    }
  };
  

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      const user = result.user;
      const userInfo = {
        name: user.displayName,
        email: user.email,
          image: user.photoURL
      };
      await axiosPublic.post('/users', userInfo);
      toast.success('Sign In Successfully!');
      navigate(from, { replace: true });
    } catch (error) {
      setErrorMess(error.message);
    }
  };

  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <Navbar />
        <div className='flex items-center justify-center my-16 md:my-20 lg:my-24 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-md w-full space-y-8'>
            <div className='text-center'>
              <h2 className='text-2xl lg:text-3xl font-bold text-gray-800 mb-2'>
                Welcome Back
              </h2>
              <p className='text-gray-600'>Sign in to find your perfect match</p>
              {errorMess && <p className='text-red-600 mt-2'>{errorMess}</p>}
            </div>

            <div className='bg-slate-50 rounded-2xl shadow-xl p-8'>
              <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                {/* Email */}
                <div>
                  <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
                    Email Address
                  </label>
                  <div className='relative'>
                    <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400' />
                    <input
                      {...register("email")}
                      type="email"
                      id="email"
                      required
                      className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200'
                      placeholder='Enter your email'
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label htmlFor='password' className='block text-sm font-medium text-gray-700 mb-2'>
                    Password
                  </label>
                  <div className='relative'>
                    <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400' />
                    <input
                      id='password'
                      name='password'
                      {...register("password", {
                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                        minLength: 6,
                        maxLength: 15,
                      })}
                      type={showPassword ? 'text' : 'password'}
                      required
                      className='w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200'
                      placeholder='Enter your password'
                    />
                    <button
                      type='button'
                      onClick={() => setShowPassword(!showPassword)}
                      className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600'
                    >
                      {showPassword ? <EyeOff className='h-5 w-5' /> : <Eye className='h-5 w-5' />}
                    </button>
                  </div>
                </div>

                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <input
                      id='remember-me'
                      name='remember-me'
                      type='checkbox'
                      className='h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded'
                    />
                    <label htmlFor='remember-me' className='ml-2 block text-sm text-gray-700'>
                      Remember me
                    </label>
                  </div>
                  <Link className='text-sm text-primary-600 hover:text-primary-500'>
                    Forgot password?
                  </Link>
                </div>
                <div className='text-red-600'>
                  {errors.password?.type === "minLength" && (
                    <span>At least 6 characters</span>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <span>Minimum 15 characters</span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <span>
                      At least one uppercase, lowercase, special character, and number
                    </span>
                  )}
                </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-5 w-full bg-gradient-to-r from-pink-500 to-blue-500 text-white py-3 px-4 rounded-lg font-semibold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex justify-center items-center gap-2"
                    >
                      { isSubmitting && <SpinnerSVG/> }
                      {isSubmitting ? "Signing you in..." : "Sign In"}
                  </button>
              </form>

              {/* Or login with Google */}
              <div className='mt-6 flex items-center justify-center space-x-2'>
                <button
                  onClick={handleGoogleSignIn}
                  className='flex items-center justify-center w-full bg-white border border-gray-300 rounded-lg p-3 hover:shadow-md transition-all duration-200'
                >
                  <FcGoogle className='h-5 w-5 mr-2' />
                  <span className='text-gray-700 font-medium'>Sign in with Google</span>
                </button>
              </div>

              <div className='mt-6 text-sm md:text-base text-center'>
                <p className='text-gray-600'>
                  Don&apos;t have an account?{' '}
                  <Link to='/signUp' className='hover:text-blue-500 font-semibold'>
                    Create Account
                  </Link>
                </p>
              </div>
            </div>

            <div className='text-center text-gray-500 text-sm'>
              <p>By signing in, you agree to our Terms of Service and Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
