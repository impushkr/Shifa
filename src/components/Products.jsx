export default function Products({ data }) {
  console.log(data);
  return (
    <div className="flex flex-wrap gap-3 justify-center px-3 mb-8 md:mt-20">
      {data.map((item) => (
        <div className="overflow-hidden rounded-lg w-[44vw] md:w-[30vw] xl:w-[15vw]">
          <div className="h-[27vh] w-full overflow-hidden xl:h-[35vh]">
            <img
              src={item.imageUrl}
              alt="Item Image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="px-2 ">
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
      ))}
    </div>
  );
}
