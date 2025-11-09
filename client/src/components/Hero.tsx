import bitcoinIcon from "@assets/generated_images/Bitcoin_icon_transparent_32eab3ce.png";
import cloudIcon from "@assets/generated_images/Small_pixel_cloud_transparent_d4e1225c.png";

export default function Hero() {
  return (
    <section 
      className="relative h-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-sky-300 via-sky-200 to-sky-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700"
      data-testid="section-hero"
    >
      {/* Floating clouds - small and subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <img src={cloudIcon} alt="" className="absolute top-20 left-10 w-16 h-12 pixelated" />
        <img src={cloudIcon} alt="" className="absolute top-32 right-20 w-20 h-14 pixelated" />
        <img src={cloudIcon} alt="" className="absolute top-48 left-1/4 w-14 h-10 pixelated" />
        <img src={cloudIcon} alt="" className="absolute bottom-40 right-1/3 w-18 h-12 pixelated" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src={bitcoinIcon} 
            alt="Bitcoin Core" 
            className="w-32 h-32 md:w-48 md:h-48 pixelated drop-shadow-2xl transparent-bg"
            data-testid="img-hero-logo"
          />
        </div>
        
        {/* Title */}
        <h1 
          className="font-serif text-5xl md:text-7xl mb-6 text-orange-500 dark:text-orange-400"
          style={{ 
            textShadow: '4px 4px 0px rgba(0,0,0,0.3)',
            letterSpacing: '0.05em'
          }}
          data-testid="text-hero-title"
        >
          BITCOIN CORE
        </h1>
        
        <p 
          className="font-sans text-2xl md:text-3xl mb-12 text-gray-800 dark:text-gray-200"
          data-testid="text-hero-subtitle"
        >
          THE MOST USELESS BITCOIN OF ALL TIME
        </p>

        {/* Mario-style button */}
        <button
          className="mario-button"
          data-testid="button-hero-cta"
          onClick={() => console.log('Buy BTC clicked')}
        >
          BUY THE WRONG BITCOIN
        </button>

        <p className="font-sans text-sm mt-8 text-gray-600 dark:text-gray-400" data-testid="text-hero-disclaimer">
          TICKER: $BTC • 100% COMEDY • 0% UTILITY
        </p>
      </div>

    </section>
  );
}