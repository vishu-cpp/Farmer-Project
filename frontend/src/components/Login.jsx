import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const userInfo ={
      fullname:data.fullname,
      email:data.email,
      password:data.password
    }
    await axios.post("https://farmer-project.onrender.com/user/login",userInfo)
    .then((res) =>{
      console.log(res.data)
      if(res.data){
        toast.success('Login successfully!');
        document.getElementById("my_modal_3").close();
        setTimeout(() => {
          
          window.location.reload();  //to reload window automatically 
          localStorage.setItem("Users",JSON.stringify(res.data.user));

        },1000);
        

      }
      
    }).catch((err) => {
      if(err.response){
        console.log(err);
        toast.error("error:" + err.response.data.message);
        setTimeout(() => {
          
        },2000);
      }
    })
  }
       
  return (

    <div className=''>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-600 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              
              onClick={()=> document.getElementById("my_modal_3").closeModal()}>
              ✕
            </Link>
          
          <h3 className="font-bold text-lg">Login</h3>
          {/* Login */}
          <div className='mt-4 space-y-2'>
            <span>Email</span>
            <br/>
            <input type="email"
            placeholder='Enter your Email' 
            className='w-80 px-3 py-1 rounded-md outline-none dark:text-gray-500'
            {...register("email", { required: true })}
            />
            <br />
            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
          </div>
        
        {/* Password */}
            <div className='mt-4 space-y-2'>
                <span>Password</span>
                <br/>
                <input type="password"
                placeholder='Enter your Password'
                className='w-80 px-3 py-1 rounded-md outline-none dark:text-gray-500'
                {...register("password", { required: true })}
                
                />
                <br />
                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
        {/* Button */}
            <div className='flex justify-around mt-4'>
                <button className='bg-green-500 text-white rounded-md px-3 py-1 hover:bg-green-700 duration-200'>Login</button>
                <p>Not Registered
                    <Link to="/signup" className='underline text-blue-500 cursor-pointer'>SignUP</Link>
                </p>
            </div>
          </form>

        </div>
        
      </dialog>
    </div>
    

)
}

export default Login