import { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, User, Image } from 'lucide-react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';

const SignUp = () => {
  const { createUser, updateUserProfile, signInWithGoogle } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';
  const [showPassword, setShowPassword] = useState(false);
  const [errorMess, setErrorMess] = useState('');
  
  const { register, reset, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setErrorMess('');
    try {
      const imgFile = data?.photoURL[0];
      const formData = new FormData();
      formData.append('image', imgFile);
  
      const img_host_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`;
      const imgRes = await axiosPublic.post(img_host_url, formData, {
        headers: { 'content-type': 'multipart/form-data' },
      });
  
      if (imgRes.data.success) {
        await createUser(data.email, data.password);
        await updateUserProfile(data.name, imgRes.data.data.url);
  
        const userInfo = {
          name: data.name,
          email: data.email,
          image: imgRes.data.data.url,
        };
  
        const res = await axiosPublic.post('/users', userInfo);
        if (res.data.insertedId) {
          toast.success('Sign Up Successfully!');
          reset();
          navigate(from, { replace: true });
        }
      }
    } catch (error) {
      setErrorMess(error.message);
    }
  };
  

  const handleGoogleSignIn = async () => {
    setErrorMess('');
    try {
      const result = await signInWithGoogle();
      const user = result.user;
      const userInfo = {
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
        status: false,
      };
      await axiosPublic.post('/users', userInfo);
      toast.success('Sign Up Successfully!');
      navigate(from, { replace: true });
    } catch (error) {
      setErrorMess(error.message);
    }
  };

  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <Navbar />
        <div className='flex items-center justify-center my-12 md:my-16 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-md w-full space-y-8'>
            <div className='text-center'>
              <h2 className='text-2xl lg:text-3xl font-bold text-gray-800 mb-2'>
                Create Your Account
              </h2>
              <p className='text-gray-600'>Sign up to find your perfect match</p>
              {errorMess && <p className='text-red-600 mt-2'>{errorMess}</p>}
            </div>

            <div className='bg-slate-50 rounded-2xl shadow-xl p-8'>
              <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                {/* Name */}
                <div>
                  <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-2'>
                    Full Name
                  </label>
                  <div className='relative'>
                    <User className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400' />
                    <input
                      {...register("name")}
                      type="text"
                      id="name"
                      required
                      placeholder="Your Name"
                      className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200'
                    />
                  </div>
                </div>

                {/* Photo URL */}
                <div>
                  <label htmlFor='photoURL' className='block text-sm font-medium text-gray-700 mb-2'>
                    Profile Picture
                  </label>
                  <div className='relative'>
                    <Image className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400' />
                    <input
                      {...register("photoURL")}
                      type="file"
                      id="photoURL"
                      accept="image/*"
                      required
                      placeholder="Profile Picture URL"
                      className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200'
                    />
                  </div>
                </div>

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
                      placeholder="Your Email"
                      className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200'
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor='password' className='block text-sm font-medium text-gray-700 mb-2'>
                    Password
                  </label>
                  <div className='relative'>
                    <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400' />
                    <input
                      {...register("password", {
                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                        minLength: 6,
                        maxLength: 15,
                      })}
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      required
                      placeholder="Enter password"
                      className='w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200'
                    />
                    <button
                      type='button'
                      onClick={() => setShowPassword(!showPassword)}
                      className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600'
                    >
                      {showPassword ? <EyeOff className='h-5 w-5' /> : <Eye className='h-5 w-5' />}
                    </button>
                  </div>
                  <div className='text-red-600 mt-1 text-sm'>
                    {errors.password?.type === "minLength" && <span>At least 6 characters</span>}
                    {errors.password?.type === "maxLength" && <span>Maximum 15 characters</span>}
                    {errors.password?.type === "pattern" && <span>Include uppercase, lowercase, number & special character</span>}
                  </div>
                </div>

                <button
                  type='submit'
                  className='w-full bg-gradient-to-r from-pink-500 to-blue-500 text-white py-3 px-4 rounded-lg font-semibold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 transform hover:scale-105 shadow-lg'
                >
                  Sign Up
                </button>
              </form>

              <div className='mt-6 flex items-center justify-center space-x-2'>
                <button
                  onClick={handleGoogleSignIn}
                  className='flex items-center justify-center w-full bg-white border border-gray-300 rounded-lg p-3 hover:shadow-md transition-all duration-200'
                >
                  <FcGoogle className='h-5 w-5 mr-2' />
                  <span className='text-gray-700 font-medium'>Sign up with Google</span>
                </button>
              </div>

              <div className='mt-6 text-sm md:text-base text-center'>
                <p className='text-gray-600'>
                  Already have an account?{' '}
                  <Link to='/login' className='hover:text-blue-500 font-semibold'>
                    Login
                  </Link>
                </p>
              </div>
            </div>

            <div className='text-center text-gray-500 text-sm'>
              <p>By signing up, you agree to our Terms of Service and Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
