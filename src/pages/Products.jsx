import { Link } from "react-router-dom";
import { useSearch } from "../context/SearchContext";

export default function Products({ data }) {
  // Getting searched items from Search Context
  const { searchedItem } = useSearch();

  // If data prop is passed use it, otherwise use searched items
  const productsData = data ? data : searchedItem;

  return (
    <>
      {/* If products length is more than 1 then show products */}
      {productsData.length > 1 ? (
        <>
          {/* Products Grid */}
          <div className="flex flex-wrap gap-3 justify-center px-3 mb-8 md:mt-20">
            
            {/* Looping through products */}
            {productsData.map((item) => (
              
              // Navigates to individual product detail page
              <Link to={`/products/${item.id}`}>
                
                {/* Product Card */}
                <div className="overflow-hidden w-[44vw] md:w-[29vw] lg:w-[20vw] xl:w-[15vw]">
                  
                  {/* Product Image */}
                  <div className="h-[27vh] w-full overflow-hidden md:h-[31vh] lg:h-[22vh] xl:h-[35vh]">
                    <img
                      src={item.imageUrl}
                      alt="Item Image"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="px-2 py-1 ">
                    
                    {/* Product Title (truncate if long) */}
                    <h1 className="font-semibold">
                      {item.title.length > 12
                        ? item.title.slice(0, 12) + " ..."
                        : item.title}
                    </h1>

                    {/* Product Subtitle (truncate if long) */}
                    <h2 className="text-sm text-gray-400">
                      {item.subTitle.length > 12
                        ? item.subTitle.slice(0, 18) + " ..."
                        : item.subTitle}
                    </h2>

                    {/* Discounted Price */}
                    <span className="font-semibold text-sm sm:text-sm ">
                      ₹{item.discountedPrice}
                    </span>

                    {/* If discount available then show original price & discount % */}
                    {item.discount > 0 ? (
                      <>
                        <span className="text-xs px-1 line-through text-gray-500 lg:text-sm">
                          ₹{item.price}
                        </span>
                        <span className="text-xs px-1 text-green-800 lg:text-sm">
                          ({item.discount}%OFF)
                        </span>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <>
          {/* If no products found */}
          <div className="w-[90vw] h-[50vh] md:h-[80vh] flex justify-center items-center pl-10 text-2xl font-semibold">
            <h1>Product not found !</h1>
          </div>
        </>
      )}
    </>
  );
}
