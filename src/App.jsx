import HeroSection from "./components/HeroSection";
import MessageSection from "./components/MessageSection";
import DetailsSection from "./components/DetailsSection";

export default function App() {
  return (
    <main className="min-h-screen bg-ink flex justify-center items-start">
      {/* الـ Container ملموم على قد المحتوى بالظبط */}
      <div className="relative w-full max-w-[420px] bg-parchment bg-parchment-texture shadow-2xl overflow-hidden flex flex-col">
        
        {/* الأعمدة الخشبية الجانبية اللي مكملة في كل الصفحات */}
        <div className="absolute inset-y-0 left-0 w-4 border-r-2 border-gold-dark bg-[#5a3a22] z-50 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-4 border-l-2 border-gold-dark bg-[#5a3a22] z-50 pointer-events-none"></div>

        <HeroSection />
        <MessageSection />
        <DetailsSection />
      </div>
    </main>
  );
}