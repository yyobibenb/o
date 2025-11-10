import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import trashIcon from "@assets/generated_images/Pixel_trash_bin_16ee9fbc.png";
import peopleIcon from "@assets/generated_images/Pixel_people_holding_hands_e166ac10.png";
import controllerIcon from "@assets/generated_images/Pixel_NES_controller_d0da5573.png";
import chartIcon from "@assets/generated_images/Pixel_upward_chart_e44fd95d.png";
import rocketIcon from "@assets/generated_images/Pixel_rocket_icon_10d64b01.png";
import coinIcon from "@assets/generated_images/Small_pixel_gold_coin_245aac52.png";
import starsIcon from "@assets/imagestart_1762618325107.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Features() {
  const [isVisible, setIsVisible] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(1000);
  const [showBuyModal, setShowBuyModal] = useState(false);
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
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('features');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const features = [
    {
      pixelIcon: trashIcon,
      title: "ZERO UTILITY",
      description: "ABSOLUTELY USELESS. EXACTLY AS INTENDED. NO PROMISES, NO LIES.",
      color: "bg-red-100 dark:bg-red-900/30"
    },
    {
      pixelIcon: peopleIcon,
      title: "COMMUNITY DRIVEN",
      description: "BUILT BY DEGENS, FOR DEGENS. JOIN THE MOVEMENT.",
      color: "bg-blue-100 dark:bg-blue-900/30"
    },
    {
      pixelIcon: controllerIcon,
      title: "PIXEL PERFECT",
      description: "RETRO VIBES. MODERN MEMES. TIMELESS COMEDY.",
      color: "bg-green-100 dark:bg-green-900/30"
    },
    {
      pixelIcon: chartIcon,
      title: "TO THE MOON?",
      description: "MAYBE. PROBABLY NOT. BUT WHAT IF? WAGMI OR NGMI?",
      color: "bg-purple-100 dark:bg-purple-900/30"
    }
  ];

  const floatingElements = [
    { icon: rocketIcon, left: '10%', delay: 0 },
    { icon: coinIcon, left: '25%', delay: 1 },
    { icon: chartIcon, left: '50%', delay: 2 },
    { icon: rocketIcon, left: '75%', delay: 3 },
    { icon: coinIcon, left: '90%', delay: 4 },
  ];

  return (
    <section 
      id="features"
      className="relative min-h-screen md:h-full flex items-center justify-center px-4 bg-gradient-to-br from-purple-300 via-pink-200 to-blue-300 dark:from-purple-900 dark:via-slate-800 dark:to-blue-900 overflow-hidden"
      data-testid="section-features"
    >
      {/* Pixel space stars background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.img
          src={starsIcon}
          alt=""
          className="w-full h-full object-cover pixelated"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Floating elements (rockets, coins, charts) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((element, i) => (
          <motion.img
            key={i}
            src={element.icon}
            alt=""
            className="absolute w-8 h-8 pixelated transparent-bg opacity-30"
            style={{
              left: element.left,
              top: '-40px'
            }}
            animate={{
              y: [0, viewportHeight + 80],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: element.delay
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto pt-24 pb-12 relative z-10">
        <motion.p
          className="font-sans text-sm text-center mb-4 text-gray-700 dark:text-gray-300 italic"
          data-testid="text-features-subtitle"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
        >
          Why we exist (we don't know either)
        </motion.p>

        <motion.h2 
          className="font-serif text-3xl sm:text-4xl md:text-6xl text-center mb-16 text-gray-900 dark:text-white px-4"
          style={{ textShadow: '3px 3px 0px rgba(0,0,0,0.2)' }}
          data-testid="text-features-title"
          initial={{ opacity: 0, y: -50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          WHY $BTC?
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                delay: index * 0.15,
                duration: 0.5,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                y: [0, -8, 0],
                transition: { duration: 1, repeat: Infinity }
              }}
            >
              <Card
                className="p-8 border-4 border-gray-800 dark:border-gray-600 bg-white dark:bg-slate-800 hover-elevate active-elevate-2 depth-layer-2"
                data-testid={`card-feature-${index}`}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <motion.div 
                    className={`p-4 rounded-lg ${feature.color} flex items-center justify-center`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <img 
                      src={feature.pixelIcon}
                      alt=""
                      className="w-12 h-12 pixelated transparent-bg"
                    />
                  </motion.div>
                  
                  <h3 
                    className="font-serif text-2xl text-gray-900 dark:text-white"
                    data-testid={`text-feature-title-${index}`}
                  >
                    {feature.title}
                  </h3>
                  
                  <p 
                    className="font-sans text-base text-gray-700 dark:text-gray-300"
                    data-testid={`text-feature-desc-${index}`}
                  >
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="font-sans text-lg text-gray-800 dark:text-gray-200 mb-8" data-testid="text-features-joke">
            THE ONLY BITCOIN THAT ADMITS IT'S A JOKE
          </p>
          <motion.button 
            className="mario-button"
            onClick={() => setShowBuyModal(true)}
            data-testid="button-features-cta"
            animate={{
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            GET YOUR $BTC NOW
          </motion.button>
          <p className="font-sans text-xs mt-4 text-gray-600 dark:text-gray-400 italic" data-testid="text-features-disclaimer">
            Seriously. Don't. But also do.
          </p>
        </motion.div>
      </div>

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
    </section>
  );
}
