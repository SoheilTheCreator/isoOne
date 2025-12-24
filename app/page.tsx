import ButtonCta from "./components/ButtonCta";
import ImageCard from './components/ImageCard'

export default function Home() {
  return (
      <main className="flex-col flex sm:flex-row-reverse mt-16">
       
      
        <figure className="md:max-w-[45%] w-[80%] flex flex-col justify-center items-center">
          <ImageCard url={"/ind01.jpg"} alt="broken"/>
          <br /><br />          
          <div className="z-10 mx-4">
            <p className="w-full text-center mb-2">انتخاب اول بیش از 25 مشتری</p>
            <div className="flex flex-row-reverse 
            justify-center items-center">
              {[1,2,3,4,5].map((x,i)=>(
              <div key={`temp-${i}`}
                className="rounded-full bg-white w-14 h-14 border-4 border-cyan-700">

              </div>))}

              <div className="mx-4">
                <p className="font-extrabold text-xl opacity-70">25+</p>
              </div>
            </div>
          </div>
        </figure>


         <section className="">
          <div style={{fontFamily: 'var(--font-vazir)'}} 
          className="text-[clamp(2rem,10vw,8rem)] leading-tight my-4 font-extrabold px-4 text-center ">یک قدم فراتر از ایمنی </div>
         <div className="my-8 py-8 flex justify-center items-center">
            <ButtonCta label="عضو خانواده ایزوگام یک شوید " action="redirct" url={'./Purchase'}/>
         </div>
        </section>
      </main>
  );
}
