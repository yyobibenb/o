import { Button } from "@/components/ui/button";
import bitcoinIcon from "@assets/1001844792-no-bg-preview (carve.photos).png";
import { Menu, X, Copy } from "lucide-react";
import { SiX, SiTelegram } from "react-icons/si";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

export default function NavigationEnhanced() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: "HOME", sectionIndex: 0 },
    { label: "ABOUT", sectionIndex: 1 },
    { label: "FEATURES", sectionIndex: 2 },
    { label: "TOKENOMICS", sectionIndex: 3 },
    { label: "ROADMAP", sectionIndex: 4 },
  ];

  const scrollToSection = (sectionIndex: number) => {
    window.dispatchEvent(new CustomEvent('navigateToSection', { detail: { sectionIndex } }));
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-4 border-foreground/20 transition-all duration-300"
      animate={{
        height: isScrolled ? "60px" : "70px",
        paddingTop: isScrolled ? "0.5rem" : "0.75rem",
        paddingBottom: isScrolled ? "0.5rem" : "0.75rem"
      }}
      data-testid="nav-main"
    >
      <div className="max-w-7xl mx-auto px-4 h-full">
        <div className="flex items-center h-full gap-6">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-2"
            animate={{
              scale: isScrolled ? 0.9 : 1
            }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={bitcoinIcon} 
              alt="BTC" 
              className="w-8 h-8 pixelated transparent-bg"
              data-testid="img-nav-logo"
            />
          </motion.div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 mr-4">
            {menuItems.map((item, index) => (
              <motion.button
                key={index}
                className="px-3 py-1.5 font-serif text-xs hover-elevate active-elevate-2 rounded-sm text-foreground transition-colors"
                data-testid={`link-nav-${index}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                onClick={() => scrollToSection(item.sectionIndex)}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Right side - Social icons and Buy button */}
          <div className="hidden md:flex items-center gap-2">
            {/* Social Icons */}
            <a 
              href="https://x.com/bitcoincoremem" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center hover-elevate active-elevate-2 rounded-sm text-foreground transition-colors"
              data-testid="link-nav-twitter"
            >
              <SiX className="w-4 h-4" />
            </a>
            <a 
              href="https://t.me/bitcoincorememe" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center hover-elevate active-elevate-2 rounded-sm text-foreground transition-colors"
              data-testid="link-nav-telegram"
            >
              <SiTelegram className="w-4 h-4" />
            </a>
            
            {/* Buy Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <Button
                size="sm"
                className="font-serif text-xs ml-2"
                onClick={() => setShowModal(true)}
                data-testid="button-nav-buy"
              >
                BUY $BTC
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-nav-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden" 
              data-testid="nav-mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="pb-4">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={index}
                    className="block w-full text-left px-4 py-3 font-serif text-xs hover-elevate text-foreground border-t border-border"
                    data-testid={`link-nav-mobile-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => {
                      scrollToSection(item.sectionIndex);
                      setIsOpen(false);
                    }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                {/* Social icons in mobile menu */}
                <div className="flex gap-4 px-4 pt-4 border-t border-border mt-2">
                  <a 
                    href="https://x.com/bitcoincoremem" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center hover-elevate rounded-sm text-foreground"
                  >
                    <SiX className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://t.me/bitcoincorememe" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center hover-elevate rounded-sm text-foreground"
                  >
                    <SiTelegram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
    </motion.nav>
  );
}
