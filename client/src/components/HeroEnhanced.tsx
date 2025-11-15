import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import bitcoinIcon from "@assets/1001844792-no-bg-preview (carve.photos).png";
import cloudIcon from "@assets/image-removebg-preview_1762615554459.png";
import sunIcon from "@assets/generated_images/Pixel_art_retro_sun_da85e171.png";
import groundIcon from "@assets/ooooooooooooooooooo_1762616608772.png";
import coinIcon from "@assets/ooooooooooooooooooooooooooooooooo_1762617373620.png";
import sparkleIcon from "@assets/oooooooooooooooooooo_1762616618108.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { SiX, SiTelegram } from "react-icons/si";
import { Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function HeroEnhanced() {
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(1000);
  const { toast } = useToast();

  const contractAddress = "BTCgJqur2WtMrhk8o9SwxtQX8aHV8vyndd6QhfqrbBSB";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      toast({
        title: "Copied!",
        description: "Contract address copied to clipboard",
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy address",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    setViewportHeight(window.innerHeight);
  }, []);

  return (
    <>
      <section 
        id="hero"
        className="relative min-h-screen md:h-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-sky-300 via-sky-200 to-sky-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700"
        data-testid="section-hero"
      >
        {/* Pixel sun in top right */}
        <motion.img 
          src={sunIcon}
          alt=""
          className="absolute top-4 sm:top-8 right-2 sm:right-8 w-12 h-12 sm:w-20 sm:h-20 pixelated transparent-bg opacity-80"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Parallax clouds with motion */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <motion.img 
            src={cloudIcon} 
            alt="" 
            className="absolute top-20 left-10 w-16 h-12 pixelated transparent-bg"
            animate={{
              x: [0, 100],
              y: [0, -30]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.img 
            src={cloudIcon} 
            alt="" 
            className="absolute top-32 right-20 w-20 h-14 pixelated transparent-bg"
            animate={{
              x: [0, -120],
              y: [0, 40]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.img 
            src={cloudIcon} 
            alt="" 
            className="absolute top-48 left-1/4 w-14 h-10 pixelated transparent-bg"
            animate={{
              x: [0, 80],
              y: [0, -20]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.img 
            src={cloudIcon} 
            alt="" 
            className="absolute bottom-40 right-1/3 w-18 h-12 pixelated transparent-bg"
            animate={{
              x: [0, -90],
              y: [0, 30]
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.img 
            src={cloudIcon} 
            alt="" 
            className="absolute top-64 left-1/2 w-16 h-12 pixelated transparent-bg"
            animate={{
              x: [0, 70],
              y: [0, -25]
            }}
            transition={{
              duration: 19,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.img 
            src={cloudIcon} 
            alt="" 
            className="absolute bottom-56 left-16 w-22 h-16 pixelated transparent-bg"
            animate={{
              x: [0, 110],
              y: [0, -35]
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Falling coins */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          {[...Array(8)].map((_, i) => (
            <motion.img
              key={i}
              src={coinIcon}
              alt=""
              className="absolute w-6 h-6 pixelated transparent-bg"
              style={{
                left: `${(i * 12) + 5}%`,
                top: '-20px'
              }}
              animate={{
                y: [0, viewportHeight + 100],
                rotate: [0, 360],
              }}
              transition={{
                duration: 8 + i * 0.5,
                repeat: Infinity,
                ease: "linear",
                delay: i * 1.2
              }}
            />
          ))}
        </div>

        {/* Ground/terrain at bottom */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden opacity-40"
          style={{
            backgroundImage: `url(${groundIcon})`,
            backgroundRepeat: 'repeat-x',
            backgroundPosition: 'center top',
            backgroundSize: 'auto 130%',
            imageRendering: 'pixelated'
          }}
        />

        {/* Press Start blinking text */}
        <motion.div
          className="absolute top-4 sm:top-8 left-2 sm:left-8 font-serif text-xs sm:text-sm text-orange-500 dark:text-orange-400"
          animate={{
            opacity: [1, 0, 1]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          data-testid="text-press-start"
        >
          PRESS START
        </motion.div>

        {/* Score counter */}
        <div className="absolute top-12 sm:top-20 left-2 sm:left-8 font-serif text-xs text-gray-700 dark:text-gray-300" data-testid="text-score">
          Score: 000001 BTC
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 text-center">
          {/* Logo with bounce animation and sparkles */}
          <div className="relative mb-8 flex justify-center">
            {/* Sparkle effects around coin */}
            <motion.img
              src={sparkleIcon}
              alt=""
              className="absolute top-0 right-0 w-8 h-8 pixelated transparent-bg"
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.img
              src={sparkleIcon}
              alt=""
              className="absolute bottom-0 left-0 w-8 h-8 pixelated transparent-bg"
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2.5
              }}
            />
            <motion.img
              src={sparkleIcon}
              alt=""
              className="absolute top-1/2 left-0 w-8 h-8 pixelated transparent-bg"
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.25
              }}
            />
            <motion.img
              src={sparkleIcon}
              alt=""
              className="absolute top-1/2 right-0 w-8 h-8 pixelated transparent-bg"
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3.75
              }}
            />

            <motion.div 
              initial={{ y: -60, scale: 1.05, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                duration: 0.8
              }}
            >
              <img 
                src={bitcoinIcon} 
                alt="Bitcoin Core" 
                className="w-32 h-32 md:w-48 md:h-48 pixelated transparent-bg drop-shadow-2xl"
                data-testid="img-hero-logo"
              />
            </motion.div>
          </div>
          
          {/* Title with stagger animation */}
          <motion.h1 
            className="font-serif text-3xl sm:text-5xl md:text-7xl mb-6 text-orange-500 dark:text-orange-400"
            style={{ 
              textShadow: '4px 4px 0px rgba(0,0,0,0.3)',
              letterSpacing: '0.05em'
            }}
            data-testid="text-hero-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeOut"
            }}
          >
            BITCOIN CORE
          </motion.h1>
          
          <motion.p 
            className="font-sans text-base sm:text-2xl md:text-3xl mb-12 text-gray-800 dark:text-gray-200 px-2"
            data-testid="text-hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            THE MOST USELESS BITCOIN OF ALL TIME
          </motion.p>

          {/* CTA with pulsing animation */}
          <motion.button
            className="mario-button relative"
            data-testid="button-hero-cta"
            onClick={() => setShowBuyModal(true)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: [1, 1.06, 1]
            }}
            transition={{
              opacity: { delay: 1.2, duration: 0.4 },
              scale: {
                delay: 1.6,
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            BUY THE WRONG BITCOIN
          </motion.button>

          <motion.p 
            className="font-sans text-sm mt-8 text-gray-600 dark:text-gray-400" 
            data-testid="text-hero-disclaimer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            TICKER: $BTC • 100% COMEDY • 0% UTILITY
          </motion.p>

          {/* Additional comedy text */}
          <motion.p 
            className="font-sans text-xs mt-4 text-gray-500 dark:text-gray-500 italic" 
            data-testid="text-hero-tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            Because logic doesn't make memes go viral.
          </motion.p>
        </div>
      </section>

      {/* Buy BTC Modal */}
      <Dialog open={showBuyModal} onOpenChange={setShowBuyModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl text-orange-500 dark:text-orange-400">
              BUY $BTC
            </DialogTitle>
            <DialogDescription className="font-sans text-base">
              Get your Bitcoin Core tokens now!
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 py-6">
            <div className="text-center space-y-4">
              <p className="font-sans text-sm text-muted-foreground">
                Contract Address:
              </p>
              
              <div 
                className="p-4 bg-muted rounded-md border-2 border-border hover-elevate cursor-pointer transition-all"
                onClick={copyToClipboard}
                data-testid="button-copy-address"
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="font-mono text-xs break-all text-foreground" data-testid="text-contract-address">
                    {contractAddress}
                  </p>
                  <Copy className="w-4 h-4 flex-shrink-0 text-muted-foreground" />
                </div>
              </div>
              
              <div className="flex flex-col gap-3 mt-6">
                <a
                  href="https://jup.ag/swap/SOL-BTCgJqur2WtMrhk8o9SwxtQX8aHV8vyndd6QhfqrbBSB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button
                    className="w-full font-serif"
                    data-testid="button-modal-jupiter"
                  >
                    SWAP ON JUPITER
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Button
              variant="outline"
              className="w-full font-serif"
              onClick={() => setShowBuyModal(false)}
              data-testid="button-close-modal"
            >
              CLOSE
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
