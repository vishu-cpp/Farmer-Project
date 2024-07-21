import React from "react";
import list from "../../public/list.json"
import Cards from "./Cards" 
import { Link } from "react-router-dom";
function Marketplace() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-20 item-center text-center justify-center">
        <h1 className="text-2xl md:text-4xl">
          Welcome to
          <span className="text-green-500"> MarketPlace</span>
        </h1>
        <p className="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          error, aspernatur, molestias, labore eaque quo veniam reiciendis
          dolorum debitis repellat qui optio iure minima veritatis quis dicta a
          magni commodi!
        </p>
        <Link to="/">
          <button className="mt-6 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-emerald-700 duration-300">Back</button>
        </Link>
      </div>
      <div className="mt-3 grid grid-cols-1 md:grid-cols-4">
        {
          list.map((item) =>(
            <Cards key={item.id} item={item} />
          ))

        }
      </div>
    </div>
  );
}

export default Marketplace;
