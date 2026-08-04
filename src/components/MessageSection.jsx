import { motion } from "framer-motion";
import eventConfig from "../data/eventConfig";

export default function MessageSection() {
  const { message } = eventConfig;

  return (
    <section className="relative w-full py-16 flex flex-col items-center px-8 z-20">
      <div className="relative w-full max-w-[340px]">
        {/* العصافير الذهبية أعلى الكارت */}
        {/* <img src={message.birdIcon} alt="" className="absolute -top-8 left-4 w-14 -scale-x-100 z-30" />
        <img src={message.birdIcon} alt="" className="absolute -top-8 right-4 w-14 z-30" /> */}

        {/* الكارت العنابي المقوس */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="relative flex flex-col items-center bg-gradient-to-b from-[#6b1825] to-[#3a0b12] rounded-t-[160px] rounded-b-md border border-gold shadow-ornate pt-20 pb-24 px-6 text-center z-10"
        >
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-gold-light to-gold shadow-[0_0_15px_rgba(216,185,120,0.8)]" />
          
          {/* الجملة بخط الديواني الفخم */}
          <p dir="rtl" className="font-diwani text-gold-light text-4xl leading-relaxed mb-1 tracking-wide drop-shadow-md">
            {message.arabicLine1}
          </p>
          <p dir="rtl" className="font-diwani text-gold-light text-4xl leading-relaxed mb-8 tracking-wide drop-shadow-md">
            {message.arabicLine2}
          </p>

          <p className="font-display text-parchment-light text-xs leading-6 tracking-widest mb-6">{message.englishQuote}</p>
          
          <h3 className="font-display text-[#D8B978] text-[0.8rem] tracking-[0.2em] leading-snug mb-3 uppercase">
            These kids are<br />getting engaged
          </h3>

          <div className="relative w-56 h-56 mb-8 p-1 border-2 border-[#D8B978] rounded-md shadow-[0_0_15px_rgba(216,185,120,0.4)] bg-[#3a0b12] overflow-hidden">
            <img 
              src={message.coupleImage || "src/assets/our-photo.jpg"} 
              alt="Our Engagement" 
              className="w-full h-full object-cover object-bottom rounded-sm scale-105"
            />
          </div>

          <a href={message.rsvpLink} className="pill-btn">{message.rsvpLabel}</a>

          <input 
            type="text" 
            placeholder="Guest Name..." 
            className="mt-5 w-3/4 max-w-[180px] bg-transparent border-b border-[#D8B978]/50 text-center text-[#D8B978] placeholder-[#D8B978]/40 font-display text-xs pb-1 focus:outline-none focus:border-[#D8B978] transition-colors"
            autoComplete="off"
            spellCheck="false"
          />
        </motion.div>

        {/* الموسيقيين (Oud & Flute) */}
        <img src={message.musicianLeftImage} alt="" className="absolute -bottom-12 left-[-57px] top-[-315px] w-[45%] z-30 drop-shadow-xl pointer-events-none" />
        <img src={message.musicianRightImage} alt="" className="absolute -bottom-12 right-[-57px] top-[-315px] w-[45%] z-30 drop-shadow-xl pointer-events-none" />
      </div>
    </section>
  );
}