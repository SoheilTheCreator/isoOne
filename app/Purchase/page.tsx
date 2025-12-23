
export default function Purchase() {
  return (
      <div style={{fontFamily: 'var(--font-vazir)'}} 
      className="mt-8 bg-[#e3dac9] w-full rounded-2xl p-4 pt-12 flex flex-col justify-center items-center">
        <h3 className="text-center font-bold text-2xl mb-12 text-black"> درخواست ایزوگام </h3>
        <form action="" className="flex flex-col justify-center items-center text-black 
        w-[70%]">

          <div className="my-2 flex justify-between w-full">
           <div className="w-[30%]">
             <label htmlFor="" className="">نام و نام خانوادگی :</label>
           </div>
            <div className="w-[70%]">
              <input type="text" className="bg-white rounded-2xl mx-2 w-full"/>
            </div>
          </div>

          <div className="my-2 flex justify-between w-full">
           <div className="w-[30%]">
             <label htmlFor="">شماره تماس :</label>
           </div>
            <div className="w-[70%]">
              <input type="tel" className="bg-white rounded-2xl mx-2 w-full"/>
            </div>
          </div>

        <div className="my-2 flex justify-between w-full">
           <div className="w-[30%]">
             <label htmlFor="">محل استفاده :</label>
           </div>
            <div className="w-[70%]">
              <input type="text" className="bg-white rounded-2xl mx-2 w-full"/>
            </div>
          </div>

          <div className="my-2 flex justify-between w-full">
           <div className="w-[30%]">
             <label htmlFor="">برند  :</label>
           </div>
           <div className="w-[70%]">
            <select name="" id="" className="bg-white rounded-2xl w-full mx-2 px-2 py-2">
              <option value="">هرچی</option>
              <option value="">اکسیر</option>
              <option value="">دلیجان</option>
            </select>
           </div>
          </div>

          <div className="my-2 flex justify-between w-full">
           <div className="w-[30%]">
             <label htmlFor="">متراژ :</label>
           </div>
            <div className="w-[70%]">
              <input type="text" className="bg-white rounded-2xl mx-2 w-full"/>
            </div>
          </div>

          <div className="my-2 flex justify-between w-full">
            <div className="w-[30%]">
              <label htmlFor="">توضیحات :</label>
            </div>
            <div className="w-[70%]">
              <textarea name="" id="" className="bg-white rounded-2xl mx-2 w-full"></textarea>
            </div>
          </div>

          <br /><br /><br />
          <div className="my-2 flex justify-between w-full">
            <button className="
            bg-emerald-500 font-extrabold text-2xl py-4 rounded-2xl 
            border-none w-full">
                ثبت سفارش
            </button>
          </div>
        </form>

        <div className="text-black mt-4 text-xl">
          <a className="underline" href="">برای مشاوره و استعلام اینجا کلیک کنید</a>
        </div>
      </div>
  );
}
