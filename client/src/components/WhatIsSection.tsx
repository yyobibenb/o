import bitcoinIcon from "@assets/image-Photoroom_1762614419398.png";
import investorIcon from "@assets/generated_images/Pixel_investor_character_e448d81d.png";
import frogIcon from "@assets/generated_images/Pixel_meme_frog_242ebb40.png";
import computerIcon from "@assets/ooooooooooooooooooooooooooo_1762617215992.png";
import rocketIcon from "@assets/generated_images/Pixel_rocket_icon_10d64b01.png";
import moonIcon from "@assets/generated_images/Pixel_moon_icon_de57b2b4.png";
import diamondIcon from "@assets/generated_images/Pixel_diamond_hands_1690683e.png";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
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

export default function WhatIsSection() {
  const [viewportHeight, setViewportHeight] = useState(1000);
  const [showModal, setShowModal] = useState(false);
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

  const floatingMemes = [
    { icon: rocketIcon, delay: 0 },
    { icon: moonIcon, delay: 1 },
    { icon: diamondIcon, delay: 2 },
    { icon: rocketIcon, delay: 3 },
    { icon: moonIcon, delay: 4 },
    { icon: diamondIcon, delay: 5 },
  ];

  return (
    <section 
      className="relative min-h-screen md:h-full flex items-center justify-center px-4 bg-gradient-to-br from-sky-200 via-pink-100 to-purple-200 dark:from-slate-800 dark:via-purple-900 dark:to-slate-900 overflow-hidden"
      data-testid="section-what-is"
    >
      {/* Floating meme emojis rising like bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingMemes.map((meme, i) => (
          <motion.img
            key={i}
            src={meme.icon}
            alt=""
            className="absolute w-12 h-12 pixelated transparent-bg opacity-30"
            style={{
              left: `${(i * 15) + 10}%`,
              bottom: '-60px'
            }}
            animate={{
              y: [0, -viewportHeight - 100],
              rotate: [0, 360],
            }}
            transition={{
              duration: 12 + i * 0.8,
              repeat: Infinity,
              ease: "linear",
              delay: meme.delay
            }}
          />
        ))}
      </div>

      {/* Left side pixel investor character */}
      <motion.img
        src={investorIcon}
        alt=""
        className="absolute left-2 sm:left-8 bottom-1/4 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 pixelated transparent-bg opacity-70"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Right side pixel meme character */}
      <motion.img
        src={frogIcon}
        alt=""
        className="absolute right-2 sm:right-8 bottom-1/4 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 pixelated transparent-bg opacity-70"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-12 flex justify-center relative">
          <div className="absolute inset-0 bg-orange-400/20 rounded-full blur-3xl animate-pulse" />
          <motion.img 
            src={bitcoinIcon} 
            alt="Bitcoin Core" 
            className="w-24 h-24 md:w-32 md:h-32 pixelated transparent-bg relative z-10"
            data-testid="img-what-is-logo"
            animate={{
              y: [0, -8, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <h2 
          className="font-serif text-2xl sm:text-3xl md:text-5xl mb-8 text-gray-900 dark:text-white px-4"
          style={{ textShadow: '3px 3px 0px rgba(0,0,0,0.2)' }}
          data-testid="text-what-is-title"
        >
          WHAT IS BITCOIN CORE?
        </h2>
        
        <div className="font-sans text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 max-w-2xl mx-auto space-y-6 px-4">
          <div className="p-6 bg-white/50 dark:bg-slate-800/50 rounded-lg border-2 border-gray-300 dark:border-gray-600">
            <p className="text-2xl font-bold text-orange-500 dark:text-orange-400" data-testid="text-what-is-p1">
              THE WRONG BITCOIN
            </p>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-400 italic" data-testid="text-what-is-tribute">
              A proud tribute to all bad financial decisions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="p-4 bg-red-100 dark:bg-red-900/30 rounded-lg border-2 border-red-300 dark:border-red-700">
              <p className="font-bold text-red-700 dark:text-red-400" data-testid="text-what-is-p2">
                0% UTILITY
              </p>
            </div>
            <div className="p-4 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg border-2 border-yellow-300 dark:border-yellow-700">
              <p className="font-bold text-yellow-700 dark:text-yellow-400" data-testid="text-what-is-p3">
                100% COMEDY
              </p>
            </div>
            <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-lg border-2 border-green-300 dark:border-green-700">
              <p className="font-bold text-green-700 dark:text-green-400" data-testid="text-what-is-p4">
                1000% MEMES
              </p>
            </div>
          </div>

          {/* Pixel computer with typing text */}
          <div className="flex items-center justify-center gap-4 mt-8 p-4 bg-black/10 dark:bg-black/30 rounded-lg">
            <img 
              src={computerIcon}
              alt=""
              className="w-12 h-12 pixelated transparent-bg"
            />
            <p className="text-sm text-gray-700 dark:text-gray-300 font-mono" data-testid="text-what-is-computer">
              &gt; If Satoshi saw this, he'd laugh_
            </p>
          </div>

          <p className="text-xl text-gray-700 dark:text-gray-300 italic mt-8" data-testid="text-what-is-satoshi-quote">
            "IF SATOSHI SAW THIS, HE'D LAUGH. PROBABLY."
          </p>
        </div>

        <button 
          className="mario-button mt-12"
          onClick={() => setShowModal(true)}
          data-testid="button-what-is-join"
        >
          JOIN THE MEME
        </button>

        <p className="text-xs mt-4 text-gray-500 dark:text-gray-500 italic" data-testid="text-what-is-roi">
          Guaranteed 0 ROI. Infinite fun.
        </p>
      </div>

      {/* Buy BTC Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
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
              onClick={() => setShowModal(false)}
              data-testid="button-close-modal"
            >
              CLOSE
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
