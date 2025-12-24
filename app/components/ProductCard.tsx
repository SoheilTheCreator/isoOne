import ButtonSmall from "./ButtonSmall";

export default function ProductCard() {
  return (
    <div className="bg-white h-[60vh] rounded-2xl overflow-hidden">
      <div className="h-full flex flex-col justify-center items-center">
        <div className="h-[60%] w-full flex items-center justify-center overflow-hidden">
          <img
            src="./prodtest.jpg"
            alt="brkn"
            className="object-contain w-full h-full transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>

        <div className="text-black px-6 h-[20%] w-full flex flex-col justify-center">
          <h3 className="font-bold text-2xl">عنوان کالا</h3>
          <p className="mt-2 font-extralight text-sm">توضیحات</p>
        </div>

        <div className=" h-[20%] w-full flex justify-center items-center">
          {/* extra content here */}
           <ButtonSmall label="ثبت سفارش" action="redirct" url={'./Purchase'} />
        </div>
      </div>
    </div>
  );
}