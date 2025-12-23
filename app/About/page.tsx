
export default function Contact() {
  return (
      <main style={{ fontFamily: "var(--font-vazir)"}}>
        <figure className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
          <img
            src="./l02.jpeg"
            alt="broken"
            className="w-full h-auto transform hover:scale-105 transition duration-500 ease-in-out"
          />
          <h2 className="absolute bottom-4 right-4 text-white text-2xl font-extrabold bg-black/50 px-3 py-1 rounded">
            تماس با ما
          </h2>
        </figure>

        <section className=" h-[50vh] p-4">
           <p className="mb-4 p-4">
      ما همواره آماده شنیدن نظرات، پیشنهادات و پرسش‌های شما هستیم. تیم پشتیبانی
      ایزوگام یک تلاش می‌کند در کوتاه‌ترین زمان ممکن پاسخگوی نیازهای شما باشد.
    </p>
    <p className="mb-4">
      برای تماس مستقیم می‌توانید از طریق شماره تلفن یا ایمیل زیر اقدام کنید:
    </p>
    <ul className="list-disc p-4 mb-4">
      <li>📞
         تلفن:

      </li>
      <li>✉️ ایمیل: info@yourcompany.com</li>
    </ul>
    <p className="mb-4">
      همچنین می‌توانید از طریق فرم تماس در همین صفحه، پیام خود را برای ما ارسال
      کنید. کارشناسان ما در اسرع وقت با شما ارتباط برقرار خواهند کرد.
    </p>
    <p>
      🏢
      آدرس دفتر مرکزی: 
      <br />
      یجایی حالا

    </p>

        </section>
      </main>
  );
}
