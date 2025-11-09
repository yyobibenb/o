# Bitcoin Core (BTC) Memecoin Design Guidelines

## Design Approach
**Reference-Based Approach** inspired by memecoin.org, crypto landing pages (Shiba Inu, Dogecoin), and modern meme culture aesthetics. This is a playful, irreverent parody site that embraces maximalist meme design principles.

## Core Design Principles
1. **Unapologetically Playful**: Embrace chaos and humor - this is a parody of Bitcoin
2. **Visual Excess**: More is more - animated GIFs, bold typography, exaggerated elements
3. **Instant Impact**: Users should immediately understand this is satirical/fun
4. **Meme-Native**: Design should feel like it came from crypto Twitter

## Typography System
- **Primary Display**: Ultra-bold sans-serif for headlines (900 weight), all caps for maximum impact
- **Secondary Display**: Bold sans-serif (700 weight) for subheadings
- **Body**: Medium weight (500) sans-serif for readability
- **Accent**: Use Comic Sans MS or similar playful font ironically for special callouts
- **Scale**: Massive hero text (text-7xl to text-9xl), generous sizing throughout

## Layout System
**Spacing Primitives**: Use Tailwind units of 4, 8, 12, 16, 24 (p-4, h-8, gap-12, py-16, mb-24)

**Container Strategy**:
- Full-width hero sections with contained inner content (max-w-6xl)
- Asymmetric layouts where appropriate
- Generous padding (py-20 to py-32 on desktop, py-12 on mobile)

## Page Structure (6-7 sections)

### 1. Hero Section (90vh)
- Animated GIF logo of fake "Bitcoin Core" branding (spinning coin, glitchy effects)
- Massive headline: "BITCOIN CORE" with ticker "($BTC)" 
- Satirical tagline: "The REAL Bitcoin" or "Bitcoin, but make it meme"
- Dual CTA buttons with blurred backgrounds when over imagery
- Floating meme graphics (doge heads, rocket emojis, diamond hands)

### 2. Slogan/Hook Section
- Full-width banner with bold statement
- Example: "One $BTC to confuse them all" or "Not your keys, not our problem"
- Background: Gradient or animated pattern

### 3. "What is Bitcoin Core?" Section
- 2-column layout (desktop): Left = oversized satirical description, Right = meme image
- Stack to single column on mobile
- Copy should be obviously tongue-in-cheek about "being the original"

### 4. Tokenomics Grid
- 3-column grid (desktop) displaying supply metrics
- Cards with large numbers, playful icons
- Total Supply, Circulating Supply, "Vibe Check" metrics
- Use oversized numerals with small labels

### 5. Roadmap/Features
- Horizontal timeline or card grid
- Satirical milestones: "Phase 1: Confusion", "Phase 2: More Confusion", "Phase 3: Moon"
- Icons with exaggerated imagery (rockets, lambos, crying wojaks)

### 6. Community/Social Proof
- Grid of fake testimonials or community stats
- "Join 420,690 confused investors"
- Large social media icons linking to platforms

### 7. Footer CTA
- Final call-to-action section
- "Ready to make history's worst financial decision?"
- Newsletter signup (ironically titled)
- Links to socials, disclaimer

## Component Library

### Navigation
- Sticky header with animated logo
- Simple horizontal menu: About | Tokenomics | Community | Buy BTC (sarcastic)
- Mobile: Hamburger menu

### Buttons
- Oversized primary buttons with bold text
- Blurred background when placed over hero images
- Secondary outline style for less important actions

### Cards
- Elevated shadows, rounded corners (rounded-xl to rounded-2xl)
- Thick borders for emphasis
- Hover effects: gentle lift (transform scale)

### Typography Components
- Stat displays: Massive numbers with tiny labels underneath
- Quote blocks: Comic Sans for maximum irony
- Ticker symbols always in monospace font

## Images

### Large Hero Image
**Yes** - Full-width animated GIF or static hero background showing:
- Mock "Bitcoin Core" logo (parody of Bitcoin logo with exaggerated elements)
- Cosmic/space background or meme collage
- Floating cryptocurrency symbols and meme imagery

### Additional Images Needed:
1. **Hero Logo** (center): Animated spinning coin or glitchy Bitcoin logo variation
2. **About Section** (right column): Confused investor meme or "This is fine" dog
3. **Feature Icons**: Cartoon-style icons for each roadmap phase
4. **Background Patterns**: Repeating meme motifs, pixel art clouds, emoji rain
5. **Community Section**: Grid of placeholder avatar images (pepe, wojak, chad)

### Image Style
- Mix of animated GIFs and static images
- Deliberately low-fi/high-meme aesthetic
- Oversaturated, high contrast
- MS Paint-quality graphics are encouraged for irony

## Accessibility Notes
- Maintain proper heading hierarchy despite playful design
- Ensure text contrast meets WCAG standards even with bold colors
- Animated GIFs should have pause controls or be subtle enough not to trigger seizures
- Form inputs maintain consistent styling with clear labels

## Responsive Behavior
- Hero text scales dramatically: text-4xl (mobile) → text-9xl (desktop)
- Grid layouts: 1 column (mobile) → 2-3 columns (tablet) → 3-4 columns (desktop)
- Reduce padding on mobile: py-8 (mobile) vs py-20 (desktop)
- Stack all side-by-side content vertically below md: breakpoint

## Animation Budget
Minimal but impactful:
- Rotating/spinning logo in header
- Gentle float on hero graphics
- Hover scale on cards (scale-105)
- NO scroll-triggered animations (per user request)

This design should feel like a loving parody of both Bitcoin maximalism and memecoin culture - professionally executed but deliberately absurd in content.