// import React, { useEffect, useState } from "react";

// import Cards from "./Cards" 
// import { Link } from "react-router-dom";
// import axios from "axios";
// import book from "../../../backend/model/book.model.js"
// function Marketplace() {
//   const [book,setBook]=useState([])
//   //to get the data from the backend
//   useEffect(() => {
//     const getBook = async()=>{
//       try{
//           const res = await axios.get("https://farmer-project.onrender.com/book");
//           console.log(res.data);
//           setBook(res.data);
//       } 
//       catch(error){
//         console.log("error")

//       }
//     }
//     getBook();
//   },[])

//   return (
//     <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
//       <div className="mt-20 item-center text-center justify-center">
//         <h1 className="text-2xl md:text-4xl p-3">
//           Welcome to
//           <span className="text-green-500"> MarketPlace</span>
//         </h1>
//         <p className="mt-3">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
//           error, aspernatur, molestias, labore eaque quo veniam reiciendis
//           dolorum debitis repellat qui optio iure minima veritatis quis dicta a
//           magni commodi!
//         </p>
//         <Link to="/">
//           <button className="mt-6 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-emerald-700 duration-300">Back</button>
//         </Link>
//       </div>
//       <div className="mt-3 grid grid-cols-1 md:grid-cols-4">
//         {
//           book.map((item) =>(
//             <Cards key={item.id} item={item} />
//           ))

//         }
//       </div>
//     </div>
//   );
// }

// export default Marketplace;


import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";

function Marketplace() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://farmer-project.onrender.com/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    getBook();
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-20 text-center">
        <h1 className="text-2xl md:text-4xl p-3">
          Welcome to <span className="text-green-500">MarketPlace</span>
        </h1>
        <p className="mt-3">
          Explore a variety of books available for you!
        </p>
        <Link to="/">
          <button className="mt-6 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-emerald-700 duration-300">
            Back
          </button>
        </Link>
      </div>
      <div className="mt-3 grid grid-cols-1 md:grid-cols-4 gap-4">
        {book.length > 0 ? (
          book.map((item) => <Cards key={item._id || item.id} item={item} />)
        ) : (
          <p className="text-center col-span-4 mt-6">No books available.</p>
        )}
      </div>
    </div>
  );
}

export default Marketplace;
