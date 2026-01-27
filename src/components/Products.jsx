import { Link } from "react-router-dom";
import { useSearch } from "../context/SearchContext";

export default function Products({ data }) {
  const { searchedItem } = useSearch();
  const productsData = searchedItem.length > 0 ? searchedItem : data;
  return (
    <>
    {productsData ? (<>
      <div className="flex flex-wrap gap-3 justify-center px-3 mb-8 md:mt-20">
      {productsData.map((item) => (
        <Link to={`/products/${item.id}`}>
          <div className="overflow-hidden w-[44vw] md:w-[29vw] lg:w-[20vw] xl:w-[15vw]">
            <div className="h-[27vh] w-full overflow-hidden md:h-[31vh] lg:h-[22vh] xl:h-[35vh]">
              <img
                src={item.imageUrl}
                alt="Item Image"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="px-2 py-1 ">
              <h1 className="font-semibold">
                {item.title.length > 12
                  ? item.title.slice(0, 12) + " ..."
                  : item.title}
              </h1>
              <h2 className="text-sm text-gray-400">
                {item.subTitle.length > 12
                  ? item.subTitle.slice(0, 18) + " ..."
                  : item.subTitle}
              </h2>
              <span className="font-semibold text-sm sm:text-sm ">
                ₹{item.discountedPrice}
              </span>

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
    </div></>):(<><div className="w-[90vw] h-[50vh] md:h-[80vh] flex justify-center items-center pl-10 text-2xl font-semibold">
      <h1>Product not found !</h1>
      </div></>)
      
    }</>
  );
}
