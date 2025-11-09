import flagIcon from "@assets/generated_images/Pixel_flag_icon_9734de05.png";
import chestIcon from "@assets/generated_images/Pixel_treasure_chest_385180ab.png";
import starIcon from "@assets/generated_images/Pixel_star_icon_85c06d01.png";

export default function Roadmap() {
  const levels = [
    { 
      number: 1,
      title: "LAUNCH",
      desc: "TOKEN DEPLOYED • LIQUIDITY ADDED • LETS GO",
      icon: flagIcon,
      status: "complete"
    },
    { 
      number: 2,
      title: "COMMUNITY",
      desc: "BUILD THE FAM • MEMES EVERYWHERE • VIRAL VIBES",
      icon: starIcon,
      status: "complete"
    },
    { 
      number: 3,
      title: "GAME MINI-VERSE",
      desc: "PIXEL GAMES • EARN BTC • PLAY 2 EARN BABY",
      icon: chestIcon,
      status: "locked"
    },
    { 
      number: 4,
      title: "CEX LISTINGS",
      desc: "BINANCE? COINBASE? TO THE MOON",
      icon: flagIcon,
      status: "locked"
    }
  ];

  return (
    <section 
      className="relative h-full flex items-center justify-center px-4 bg-gradient-to-b from-green-600 via-green-500 to-green-400 overflow-y-auto"
      data-testid="section-roadmap"
    >
      {/* Grass footer */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-green-700 border-t-4 border-green-800" />
      
      <div className="max-w-6xl mx-auto relative">
        <h2 
          className="font-serif text-4xl md:text-6xl text-center mb-20 text-white"
          style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.3)' }}
          data-testid="text-roadmap-title"
        >
          ROADMAP
        </h2>

        {/* Game map path */}
        <div className="grid md:grid-cols-2 gap-12 relative">
          {/* Path connecting levels */}
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-2 bg-yellow-600 border-2 border-yellow-800 -translate-y-1/2" />

          {levels.map((level, index) => (
            <div
              key={index}
              className="relative"
              data-testid={`level-${index}`}
            >
              {/* Level card */}
              <div className={`
                relative z-10 p-6 rounded-lg border-4 
                ${level.status === 'complete' 
                  ? 'bg-white border-yellow-500' 
                  : 'bg-gray-300 border-gray-500 opacity-75'
                }
              `}>
                {/* Level number badge */}
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-yellow-400 border-4 border-yellow-600 rounded-full flex items-center justify-center">
                  <span className="font-serif text-2xl text-gray-900">{level.number}</span>
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <img 
                    src={level.icon} 
                    alt={level.title}
                    className={`w-16 h-16 pixelated transparent-bg ${level.status === 'locked' ? 'grayscale' : ''}`}
                    data-testid={`img-level-icon-${index}`}
                  />
                </div>

                {/* Title */}
                <h3 
                  className="font-serif text-xl text-center mb-3 text-gray-900"
                  data-testid={`text-level-title-${index}`}
                >
                  LEVEL {level.number}: {level.title}
                </h3>

                {/* Description */}
                <p 
                  className="font-sans text-sm text-center text-gray-700"
                  data-testid={`text-level-desc-${index}`}
                >
                  {level.desc}
                </p>

                {/* Status badge */}
                {level.status === 'complete' && (
                  <div className="mt-4 text-center">
                    <span className="inline-block px-4 py-1 bg-green-500 text-white font-serif text-xs rounded-full border-2 border-green-700">
                      COMPLETE
                    </span>
                  </div>
                )}
                {level.status === 'locked' && (
                  <div className="mt-4 text-center">
                    <span className="inline-block px-4 py-1 bg-gray-600 text-white font-serif text-xs rounded-full border-2 border-gray-800">
                      LOCKED
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}