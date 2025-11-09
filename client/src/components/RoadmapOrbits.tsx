import { motion } from "framer-motion";
import bitcoinIcon from "@assets/image-Photoroom_1762614419398.png";
import moonIcon from "@assets/generated_images/Pixel_moon_planet_999c5e15.png";
import rocketIcon from "@assets/generated_images/Pixel_rocket_ship_8e2aacb9.png";
import fireIcon from "@assets/generated_images/Pixel_fire_icon_3c432410.png";
import giftIcon from "@assets/generated_images/Pixel_gift_box_f67caaee.png";

export default function RoadmapOrbits() {
  const phases = [
    {
      id: 1,
      title: "WHITELIST",
      date: "JUN 5, 2025",
      color: "from-yellow-400 to-yellow-600",
      planetImg: moonIcon,
      orbitRadius: 120,
      angle: 45
    },
    {
      id: 2,
      title: "TOKEN(C) LAUNCH",
      date: "NOV 5, 2025",
      color: "from-red-400 to-pink-600",
      planetImg: rocketIcon,
      orbitRadius: 160,
      angle: 135
    },
    {
      id: 3,
      title: "FIRE SALE",
      date: "OCT 26, 2025",
      color: "from-orange-500 to-red-600",
      planetImg: fireIcon,
      orbitRadius: 200,
      angle: 225
    },
    {
      id: 4,
      title: "AIRDROPS",
      date: "NOV 3, 2025",
      color: "from-cyan-400 to-blue-500",
      planetImg: giftIcon,
      orbitRadius: 240,
      angle: 315
    }
  ];

  return (
    <section 
      className="relative min-h-screen md:h-full flex items-center justify-center px-4 overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950"
      data-testid="section-roadmap"
    >
      {/* Stars background */}
      <div className="absolute inset-0">
        {[...Array(150)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>


      <div className="max-w-6xl mx-auto text-center relative z-10 flex flex-col items-center justify-center h-full">
        {/* Header with Bitcoin logo */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <motion.h2 
            className="font-serif text-4xl md:text-6xl text-yellow-400 relative"
            style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.5)' }}
            data-testid="text-roadmap-title"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            ROADMAP
          </motion.h2>
          
          <motion.div 
            animate={{
              rotate: [0, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <img 
              src={bitcoinIcon}
              alt=""
              className="w-20 h-20 pixelated transparent-bg drop-shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Orbital system */}
        <div className="relative w-full max-w-[650px] mx-auto aspect-square">

          {/* Orbit paths */}
          {[120, 160, 200, 240].map((radius, i) => (
            <div 
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-blue-400/30 hidden md:block"
              style={{
                width: `${radius * 2}px`,
                height: `${radius * 2}px`
              }}
            />
          ))}

          {/* Planets with labels - Desktop orbital layout */}
          <div className="hidden md:block">
            {phases.map((phase, index) => {
              const angleRad = (phase.angle * Math.PI) / 180;
              const xPos = Math.cos(angleRad) * phase.orbitRadius;
              const yPos = Math.sin(angleRad) * phase.orbitRadius;
              
              return (
                <motion.div
                  key={phase.id}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${xPos}px)`,
                    top: `calc(50% + ${yPos}px)`
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: 1, 
                    opacity: 1,
                    y: [0, -12, 0]
                  }}
                  transition={{
                    scale: { delay: index * 0.2, duration: 0.6 },
                    opacity: { delay: index * 0.2, duration: 0.6 },
                    y: {
                      duration: 4.5 + index * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5 + index * 0.3
                    }
                  }}
                  data-testid={`planet-${index}`}
                >
                  {/* Planet */}
                  <motion.div 
                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${phase.color} border-4 border-white/30 shadow-2xl flex items-center justify-center cursor-pointer hover-elevate active-elevate-2`}
                    style={{
                      transform: 'translate(-50%, -50%)'
                    }}
                    whileHover={{ scale: 1.15 }}
                  >
                    <img 
                      src={phase.planetImg}
                      alt=""
                      className="w-12 h-12 pixelated transparent-bg"
                    />
                  </motion.div>

                  {/* Label */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-40 text-center pointer-events-none" style={{ top: '60px' }}>
                    <div className="font-serif text-xs text-white uppercase tracking-wide" data-testid={`text-roadmap-phase-${index}`}>
                      {phase.title}:
                    </div>
                    <div className="font-mono text-[10px] text-cyan-300 mt-1" data-testid={`text-roadmap-date-${index}`}>
                      {phase.date}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {/* Mobile vertical list */}
          <div className="md:hidden grid grid-cols-2 gap-6 p-4">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.id}
                className="flex flex-col items-center"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                data-testid={`planet-mobile-${index}`}
              >
                <motion.div 
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${phase.color} border-4 border-white/30 shadow-2xl flex items-center justify-center`}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                >
                  <img 
                    src={phase.planetImg}
                    alt=""
                    className="w-12 h-12 pixelated transparent-bg"
                  />
                </motion.div>
                <div className="mt-3 text-center">
                  <div className="font-serif text-xs text-white uppercase tracking-wide" data-testid={`text-roadmap-phase-mobile-${index}`}>
                    {phase.title}
                  </div>
                  <div className="font-mono text-[10px] text-cyan-300 mt-1" data-testid={`text-roadmap-date-mobile-${index}`}>
                    {phase.date}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p 
          className="font-sans text-sm text-gray-400 mt-8 relative" 
          data-testid="text-roadmap-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          TO THE MOON AND BEYOND! (PROBABLY NOT)
        </motion.p>
      </div>
    </section>
  );
}
