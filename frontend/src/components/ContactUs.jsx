
import Navbar from './Navbar';
import Footer from './Footer';
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';

function ContactUs() {
    // toast code 
    const {  
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
  return (
    <>
    <Navbar/>
    <div className='flex h-screen items-center justify-center'>

        <form onSubmit={handleSubmit(onSubmit)} method='dialog' className='dark:bg-slate-600 p-7 rounded-md'>
        <h1 className="text-2xl font-bold">ContactUS</h1>
        <div className='mt-4 space-y-2'>
            <p className='font-bold'>Name</p>
            <input type="text" id="namefield"
            className="grow rounded-md outline-none border-[2px] w-80 h-10 dark:text-gray-500"
            placeholder="Enter your Name"
            {...register("name", { required: true })}
            />
            <br />
            {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
        </div>

        <div className='mt-4 space-y-2'>
            <p className='font-bold'>Email</p>
            <input type="text"
            className="grow rounded-md outline-none border-[2px] w-80 h-10 dark:text-gray-500"
            placeholder="Enter your email address"
            {...register("email", { required: true })}
            />
            <br />
            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
        </div>
        <div className='mt-4 space-y-2'>
        <p className='font-bold'>Enter Your Message</p>
        <textarea
            type="text"
            placeholder="Enter Your Message"
            className=" textarea textarea-bordered textarea-lg w-full max-w-xs dark:text-gray-500"
            {...register("message", { required: true })}>

        </textarea>
        </div>
        <br />
        {errors.message && <span className='text-sm text-red-500'>This field is required</span>}
        <button className='bg-green-500 text-white rounded-md px-3 py-1 hover:bg-green-700 duration-200'
        onClick={ ()=>{
            
            const msg = "Submit SuccessFull";
            console.log(msg);
        }}>
            
            Submit
        </button>
        </form>
        
      
    </div>
    <Footer/>
    </>
  );
}

export default ContactUs