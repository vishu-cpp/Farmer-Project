import React from 'react'
// import link, { Link } from 'react-router-dom'


function Cards({item}) {
    // console.log(item);
  return (
    <>
    <div className='mt-4 p-3'>
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 dark:bg-slate-600 dark:text-white duration-200">
      <figure>
        <img
          src= {item.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {item.name}
          <div className="badge badge-secondary">{item.category}</div>
        </h2>
        <p>{item.name}</p>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">Rs{item.price}</div>
            <div className="cursor-pointer px-3 py-2 rounded-full border-[2px] hover:bg-green-500 hover:text-white duration-300">Take a look!</div>
        </div>
      </div>
        </div>

    </div>
    </>
  )
}

export default Cards