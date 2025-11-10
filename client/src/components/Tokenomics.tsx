import { motion } from "framer-motion";

export default function Tokenomics() {
  const distribution = [
    { 
      label: "ECOSYSTEM", 
      percent: 30, 
      color: "#4ade80",
      description: "30% STASHED AWAY TO GIVE BACK TO OUR COMMUNITY AND BUILD THE ECOSYSTEM.",
      year: "2025"
    },
    { 
      label: "AIRDROP", 
      percent: 25, 
      color: "#fbbf24",
      description: "25% TO THANK OUR FUN FANBASE THROUGH MULTIPLE AIRDROPS"
    },
    { 
      label: "CONTRIBUTORS", 
      percent: 17, 
      color: "#38bdf8",
      description: "17% FOR THE PARTNERS THAT BUILD WITH US AND SOLD US THEIR LAMBOS"
    },
    { 
      label: "PRIVATE SALE", 
      percent: 12, 
      color: "#f87171",
      description: "12% OF NONE WILL BE DISTRIBUTED TO EXTERNAL INVESTORS AND SUPER CREW HOLDERS VIA PRIVATE PRESALE"
    },
    { 
      label: "COMMUNITY PRESALE", 
      percent: 11, 
      color: "#fb923c",
      description: "11% OF NONE WILL BE DISTRIBUTED TO THE GREATER MEMELAND COMMUNITY VIA A FIRE SALE"
    },
    { 
      label: "ADVISORY", 
      percent: 3, 
      color: "#a78bfa",
      description: "3% FOR THE COUNSELING WE NEED TO PULL THROUGH"
    },
    { 
      label: "BINANCE LAUNCHPOOL", 
      percent: 2, 
      color: "#9ca3af",
      description: "2% FOR THE INITIAL LIQUIDITY OF EXCHANGE"
    }
  ];

  // Calculate pie chart segments
  let currentAngle = -90; // Start from top
  const segments = distribution.map((item) => {
    const startAngle = currentAngle;
    const sweepAngle = (item.percent / 100) * 360;
    currentAngle += sweepAngle;
    return {
      ...item,
      startAngle,
      sweepAngle
    };
  });

  const createPieSlicePath = (startAngle: number, sweepAngle: number, radius: number = 100) => {
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = ((startAngle + sweepAngle) * Math.PI) / 180;
    
    const x1 = 120 + radius * Math.cos(startRad);
    const y1 = 120 + radius * Math.sin(startRad);
    const x2 = 120 + radius * Math.cos(endRad);
    const y2 = 120 + radius * Math.sin(endRad);
    
    const largeArc = sweepAngle > 180 ? 1 : 0;
    
    return `M 120,120 L ${x1},${y1} A ${radius},${radius} 0 ${largeArc},1 ${x2},${y2} Z`;
  };

  return (
    <section 
      className="relative min-h-screen md:h-full flex items-center justify-center px-4 overflow-y-auto bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950"
      data-testid="section-tokenomics"
    >
      {/* Stars background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 1,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto py-12 relative z-10">
        <motion.h2 
          className="font-serif text-3xl sm:text-4xl md:text-6xl text-center mb-8 text-yellow-400"
          style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.5)' }}
          data-testid="text-tokenomics-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          TOKENOMICS
        </motion.h2>

        <motion.p
          className="text-center text-gray-300 mb-12 font-mono text-xs sm:text-sm max-w-3xl mx-auto px-4"
          data-testid="text-tokenomics-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          69 BILLION MEME WILL BE MINTED IN TOTAL AND THERE IS A 5 YEAR PLAN TO INCREASE IT. THEY WILL
          BE DISTRIBUTED INTO 7 MAIN POOLS, EACH WITH DIFFERENT UNLOCKING SCHEDULES.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Pie Chart */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <svg width="100%" height="100%" viewBox="0 0 240 240" className="drop-shadow-2xl max-w-[300px]">
              {segments.map((segment, index) => (
                <motion.g key={index}>
                  <motion.path
                    d={createPieSlicePath(segment.startAngle, segment.sweepAngle)}
                    fill={segment.color}
                    stroke="#1e293b"
                    strokeWidth="2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    className="cursor-pointer"
                    data-testid={`pie-slice-${index}`}
                  />
                  {/* Percentage label */}
                  <text
                    x={120 + 70 * Math.cos(((segment.startAngle + segment.sweepAngle / 2) * Math.PI) / 180)}
                    y={120 + 70 * Math.sin(((segment.startAngle + segment.sweepAngle / 2) * Math.PI) / 180)}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="font-bold text-xs fill-white"
                    style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}
                  >
                    {segment.percent}%
                  </text>
                </motion.g>
              ))}
            </svg>
          </motion.div>

          {/* Legend */}
          <div className="space-y-4">
            {distribution.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 group"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                data-testid={`legend-item-${index}`}
              >
                <div className="flex items-center gap-2 shrink-0">
                  <div 
                    className="w-4 h-4 sm:w-6 sm:h-6 rounded-full border-2 border-white/50 shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <div className="font-serif text-xs sm:text-sm text-white uppercase">
                    {item.label} ({item.percent}%)
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-sans text-[10px] sm:text-xs text-gray-300" data-testid={`text-tokenomics-desc-${index}`}>
                    {item.description}
                  </p>
                  {item.year && (
                    <p className="font-mono text-xs text-green-400 mt-1" data-testid={`text-tokenomics-year-${index}`}>
                      → {item.year}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="mt-12 text-center space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <p className="font-mono text-sm text-cyan-400" data-testid="text-tokenomics-cta">
            VIEW MORE ON ABOUT
          </p>
          <p className="font-sans text-lg text-gray-300" data-testid="text-tokenomics-supply">
            TOTAL SUPPLY: 21,000,000 $BTC
          </p>
          <p className="font-sans text-sm text-gray-400" data-testid="text-tokenomics-joke">
            JUST LIKE THE REAL BITCOIN. COINCIDENCE? I THINK NOT.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
