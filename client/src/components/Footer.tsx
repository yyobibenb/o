import investorIcon from "@assets/imgstart_1762618495260.png";
import { SiX, SiTelegram } from "react-icons/si";

export default function Footer() {
  return (
    <footer 
      className="relative min-h-screen md:h-full flex flex-col items-center justify-center px-4 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900"
      data-testid="footer"
    >
      
      <div className="max-w-6xl w-full mx-auto relative z-10 flex flex-col items-center justify-center gap-8 py-12">
        {/* Character with speech bubble */}
        <div className="relative flex flex-col items-center">
          {/* Speech bubble - text only without background */}
          <div 
            className="relative mb-8 max-w-md"
            data-testid="text-footer-quote"
          >
            <p className="font-serif text-base text-yellow-400 text-center leading-relaxed font-bold" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.8)' }}>
              NOT YOUR KEYS, NOT YOUR COINS.<br />
              NOT OUR PROBLEM, NOT OUR COINS EITHER.<br />
              JUST PURE CHAOS AND MEMES.
            </p>
          </div>
          
          {/* Pixel character */}
          <img 
            src={investorIcon}
            alt=""
            className="w-48 h-48 pixelated transparent-bg"
            data-testid="img-footer-character"
          />
        </div>

        {/* Footer info section */}
        <div className="w-full border-t border-slate-600 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left side - Logo and copyright */}
            <div className="flex flex-col gap-2">
              <p 
                className="font-serif text-sm text-yellow-400"
                data-testid="text-footer-copyright"
              >
                BTC CORE
              </p>
              <p 
                className="font-sans text-xs text-gray-400"
                data-testid="text-footer-disclaimer"
              >
                © 2025 BTC CORE. ALL WRONGS RESERVED.
              </p>
            </div>
            
            {/* Center - Links */}
            <div className="flex flex-col md:flex-row gap-4 text-center md:text-left">
              <button 
                className="font-sans text-sm text-gray-300 hover:text-white transition-colors"
                data-testid="link-footer-about"
                onClick={() => window.dispatchEvent(new CustomEvent('navigateToSection', { detail: { sectionIndex: 1 } }))}
              >
                About
              </button>
              <button 
                className="font-sans text-sm text-gray-300 hover:text-white transition-colors"
                data-testid="link-footer-features"
                onClick={() => window.dispatchEvent(new CustomEvent('navigateToSection', { detail: { sectionIndex: 2 } }))}
              >
                Features
              </button>
              <button 
                className="font-sans text-sm text-gray-300 hover:text-white transition-colors"
                data-testid="link-footer-tokenomics"
                onClick={() => window.dispatchEvent(new CustomEvent('navigateToSection', { detail: { sectionIndex: 3 } }))}
              >
                Tokenomics
              </button>
              <button 
                className="font-sans text-sm text-gray-300 hover:text-white transition-colors"
                data-testid="link-footer-roadmap"
                onClick={() => window.dispatchEvent(new CustomEvent('navigateToSection', { detail: { sectionIndex: 4 } }))}
              >
                Roadmap
              </button>
              <button 
                className="font-sans text-sm text-gray-300 hover:text-white transition-colors"
                data-testid="link-footer-buy"
                onClick={() => window.dispatchEvent(new CustomEvent('navigateToSection', { detail: { sectionIndex: 0 } }))}
              >
                Buy $BTC
              </button>
            </div>

            {/* Right side - Social icons */}
            <div className="flex gap-4">
              <a 
                href="https://x.com/bitcoincoremem" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-slate-700 hover-elevate active-elevate-2 rounded-sm border border-slate-600 text-white transition-colors"
                data-testid="link-footer-twitter"
              >
                <SiX className="w-5 h-5" />
              </a>
              <a 
                href="https://t.me/bitcoincorememe" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-slate-700 hover-elevate active-elevate-2 rounded-sm border border-slate-600 text-white transition-colors"
                data-testid="link-footer-telegram"
              >
                <SiTelegram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
