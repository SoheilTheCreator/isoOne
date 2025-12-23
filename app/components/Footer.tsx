import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{ fontFamily: "var(--font-vazir)" }}
      className="mt-20 bg-gray-900 text-gray-200"
    >
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* حقوق و شرایط */}
        <section>
          <p className="font-bold opacity-75 mb-4 text-xs">
            © ۲۰۲۵ نام شرکت شما. تمامی حقوق مادی و معنوی این وب‌سایت محفوظ است.
          </p>
          <p className="opacity-70 text-sm leading-6">
            استفاده از خدمات و محتوای این وب‌سایت به منزله پذیرش کامل شرایط و مقررات استفاده و سیاست‌های حریم خصوصی می‌باشد.  
            هرگونه بازتولید، انتشار، انتقال یا تغییر غیرمجاز محتوای این وب‌سایت، مشمول پیگرد قانونی طبق قوانین جاری خواهد بود.  
            شرکت هیچ‌گونه مسئولیتی در قبال خسارات مستقیم یا غیرمستقیم ناشی از استفاده یا اتکاء به اطلاعات ارائه‌شده در این وب‌سایت ندارد.
          </p>
        </section>

        {/* افتخارات */}
        <section>
          <h6 className="font-bold text-lg opacity-80 mb-4">بخشی از افتخارات ما</h6>
          <div className="grid grid-cols-2 gap-4">
            <img src="./e.png" alt="افتخار ۱" className="object-cover rounded-lg shadow-md"/>
            <img src="./cup.png" alt="افتخار ۲" className="object-cover rounded-lg shadow-md"/>
          </div>
        </section>

        {/* دسترسی سریع */}
        <section>
          <h6 className="font-bold text-lg opacity-80 mb-4">دسترسی سریع</h6>
          <nav>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-white transition">خانه</Link></li>
              <li><Link href="/Purchase" className="hover:text-white transition">ثبت سفارش</Link></li>
              <li><Link href="/Products" className="hover:text-white transition">محصولات</Link></li>
              <li><Link href="/About" className="hover:text-white transition">درباره ما</Link></li>
              <li><Link href="/Contact" className="hover:text-white transition">تماس با ما</Link></li>
              <li><Link href="/Support" className="hover:text-white transition">پشتیبانی</Link></li>
            </ul>
          </nav>
        </section>
      </div>

      {/* خط جداکننده پایین */}
      <div className="border-t border-gray-700 text-center py-4 text-xs opacity-60">
        ساخته شده با ❤️ توسط 
        <a href="">سهیل رشیدی</a> 
      </div>
    </footer>
  );
}