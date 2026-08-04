import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import eventConfig from "../data/eventConfig";

function useCountdown(targetIso) {
  const target = new Date(targetIso).getTime();
  const [remaining, setRemaining] = useState(() => Math.max(target - Date.now(), 0));

  useEffect(() => {
    const id = setInterval(() => setRemaining(Math.max(target - Date.now(), 0)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const pad = (n) => String(Math.floor(n)).padStart(2, "0");
  return {
    days: pad(remaining / (1000 * 60 * 60 * 24)),
    hours: pad((remaining / (1000 * 60 * 60)) % 24),
    minutes: pad((remaining / (1000 * 60)) % 60),
    seconds: pad((remaining / 1000) % 60)
  };
}

export default function HeroSection() {
  const { couple, hero } = eventConfig;
  const { days, hours, minutes, seconds } = useCountdown(hero.countdownTarget);

  // مرجع لعنصر الـ audio
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // دالة تشغيل/إيقاف الصوت
  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.log("Error playing audio:", err);
        });
      }
    }
  };

  // محاولة التشغيل مع أول ضغطة على الشاشة في أي مكان (لو مقدرش يشتغل لوحده)
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => console.log("Autoplay blocked:", err));
      }
      // بنشيل المراقب بعد أول لمسة
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
    };

    document.addEventListener("click", handleFirstInteraction);
    document.addEventListener("touchstart", handleFirstInteraction);

    return () => {
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, [isPlaying]);

  return (
    <section className="relative min-h-[100svh] flex flex-col items-center pt-8 pb-0">
      
      {/* عنصر الصوت المخفي اللي المتصفح بيقرأه بشكل مباشر */}
      <audio ref={audioRef} src={hero.audioSrc} loop preload="auto" />

      {/* الستارة العلوية */}
      <img src={hero.curtainTopImage} alt="" className="absolute top-[-4px] inset-x-0 left-[63px] w-[294px] h-[177px] object-cover z-30" />
      
      {/* الستاير الجانبية */}
      <img src={hero.curtainLeftImage} alt="" className="absolute top-0 -left-[19px] -mt-[41px] h-[58%] w-[49%] object-cover object-right z-20 " />
      <img src={hero.curtainRightImage} alt="" className="absolute top-0 right-[-12px] -mt-[41px] h-[58%] w-[49%] object-cover object-left z-20" />

      {/* النصوص */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center text-center mt-32 px-12"
      >
        <div className="font-display text-5xl tracking-widest text-ink mb-6">{couple.monogram}</div>
        <p className="font-display text-[0.7rem] tracking-[0.25em] text-ink mb-4">{hero.eyebrow}</p>
        
        <div className="flex items-center justify-center gap-6 font-display text-3xl tracking-widest text-ink mb-2">
          <span>{couple.groomFirst}</span>
          <span className="font-body italic text-2xl">&amp;</span>
          <span>{couple.brideFirst}</span>
        </div>

        <p className="font-display text-[0.7rem] tracking-[0.25em] text-ink mt-4 mb-6">{hero.invite}</p>
        <div className="font-display text-3xl tracking-[0.15em] text-maroon-dark mb-4">{days}:{hours}:{minutes}:{seconds}</div>
        
        {/* زرار الصوت */}
        <button 
          onClick={(e) => {
            e.stopPropagation(); // عشان مايتعارضش مع ضغطة الشاشة العادية
            toggleAudio();
          }}
          className="flex flex-col items-center gap-1 text-ink font-body italic text-sm cursor-pointer z-50 relative"
        >
          <span>{isPlaying ? "Tap to Pause" : hero.listenLabel}</span>
          <span className="text-xl">{isPlaying ? "⏸" : "♪"}</span>
        </button>
      </motion.div>

      {/* السلم والشخصية (أسفل الشاشة) */}
      <div className="relative w-full flex-1 min-h-[350px] flex items-end justify-center mt-4">
        <img src={hero.staircaseImage} alt="Stairs" className="absolute bottom-0 w-full object-cover z-10" />
        <img src={hero.characterImage} alt="Singer" className="relative z-20 w-[45%] mb-[15%] left-[17px] top-[-28px]" />
      </div>
    </section>
  );
}