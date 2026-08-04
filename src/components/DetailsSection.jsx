import { motion } from "framer-motion";
import eventConfig from "../data/eventConfig";

export default function DetailsSection() {
  const { details } = eventConfig;

  return (
    <section className="relative w-full flex flex-col items-center pt-10 pb-0 z-10">
      
      {/* العود الجانبي والورد */}
      <img src={details.oudLeftImage} alt="" className="absolute top-10 left-3 w-16 z-20 pointer-events-none" />
      <img src={details.oudRightImage} alt="" className="absolute top-10 right-3 w-16 z-20 pointer-events-none" />

      <motion.img 
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        src={details.chandelierImage} alt="Chandelier" className="w-48 mb-8" 
      />

      {/* الـ Location */}
      <div className="flex flex-col items-center text-center mb-10 px-10">
        <h2 className="font-display text-ink text-xl tracking-[0.15em] mb-2">{details.venueName}</h2>
        <p className="font-display text-ink text-sm tracking-[0.15em] mb-4">{details.venueCity}</p>
        <a href={details.locationLink} className="pill-btn">{details.locationLabel}</a>
      </div>

      {/* الموعد */}
      <div className="flex flex-col items-center text-center mb-10">
        <div className="w-10 h-10 border-2 border-ink rounded flex flex-col items-center justify-center mb-3">
           {/* أيقونة نتيجة مبسطة بالـ CSS عشان نوفر SVG */}
           <div className="flex gap-1 mb-1"><span className="w-1 h-1 bg-ink rounded-full"/><span className="w-1 h-1 bg-ink rounded-full"/><span className="w-1 h-1 bg-ink rounded-full"/></div>
           <div className="flex gap-1"><span className="w-1 h-1 bg-ink rounded-full"/><span className="w-1 h-1 bg-ink rounded-full"/><span className="w-1 h-1 bg-ink rounded-full"/></div>
        </div>
        <p className="font-display text-ink text-lg tracking-[0.1em]">{details.dateDay}<sup>{details.dateOrdinal}</sup>{details.dateMonthYear}</p>
        <p className="font-display text-ink text-md tracking-[0.15em]">{details.dateWeekday}</p>
      </div>

      {/* الوقت */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="w-10 h-10 border-2 border-ink rounded-full flex items-center justify-center mb-3 relative">
          <div className="w-1 h-3 bg-ink absolute top-2"></div>
          <div className="w-2 h-1 bg-ink absolute right-3"></div>
        </div>
        <p className="font-display text-ink text-sm tracking-[0.15em] mb-1">{details.timeLabel}</p>
        <p className="font-display text-ink text-lg tracking-[0.15em]">{details.time}</p>
      </div>

      {/* صورة القصر في النهاية */}
      <img src={details.palaceArtworkImage} alt="Palace" className="w-full h-auto object-cover mt-auto" />
    </section>
  );
}