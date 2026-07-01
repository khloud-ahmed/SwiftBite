---
name: Vibrant Modernity
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#5a4136'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#8e7164'
  outline-variant: '#e2bfb0'
  surface-tint: '#a04100'
  primary: '#a04100'
  on-primary: '#ffffff'
  primary-container: '#ff6b00'
  on-primary-container: '#572000'
  inverse-primary: '#ffb693'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#5d5f5f'
  on-tertiary: '#ffffff'
  tertiary-container: '#989999'
  on-tertiary-container: '#2f3132'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcc'
  primary-fixed-dim: '#ffb693'
  on-primary-fixed: '#351000'
  on-primary-fixed-variant: '#7a3000'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display-lg:
    fontFamily: Work Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Work Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Work Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  headline-lg-mobile:
    fontFamily: Work Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max-width: 1280px
  gutter: 24px
  margin-desktop: 40px
  margin-mobile: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

This design system is built on the pillars of speed, freshness, and professional reliability. By transitioning to a high-energy orange palette while maintaining a rigorous, grid-based card layout, the UI balances the urgency of quick service with the stability of a premium tool. 

The aesthetic follows a **Corporate / Modern** approach with a focus on high-clarity information architecture. It leverages generous whitespace and crisp typography to ensure that the vibrant primary color acts as a functional beacon rather than a distraction. The emotional response is intended to be one of confidence and efficiency—minimizing friction for the user while providing a stimulating visual experience that feels immediate and fresh.

## Colors

The color strategy is dominated by the primary orange (#FF6B00), which is used exclusively for interactive elements, progress indicators, and key highlights. This ensures that the "action color" is unmistakable.

- **Primary (#FF6B00):** Used for primary buttons, active navigation states, selection toggles, and brand iconography.
- **Secondary (#1A1A1A):** Used for high-contrast headings and primary text to ensure maximum legibility and a grounded feel.
- **Tertiary/Surface (#F5F5F5):** Used for subtle card backgrounds or disabled states to provide soft contrast against the pure white page background.
- **Neutral (#666666):** Reserved for secondary body text and metadata.
- **Functional Colors:** Error and success states are kept standard but high-contrast to ensure accessibility and professional trust.

## Typography

The typography system utilizes **Work Sans** across all levels to maintain a clean, versatile, and grounded feel. The scale emphasizes clear hierarchy through bold weights for headings and generous line heights for body text.

- **Headlines:** Use Bold (700) or SemiBold (600) weights. Tighter letter spacing on larger sizes ensures a punchy, modern look.
- **Body Text:** Use Regular (400) weight. Optimized for readability with a 1.5x line-height ratio.
- **Labels:** Use Medium (500) or SemiBold (600) weights in smaller sizes to ensure they remain legible when used in buttons or as metadata tags.
- **Mobile scaling:** Headlines scale down to prevent excessive wrapping on smaller viewports while maintaining visual weight.

## Layout & Spacing

This design system employs a **Fixed Grid** model for desktop and a **Fluid Grid** for mobile devices. The rhythm is based on an 8px base unit to ensure mathematical consistency across all components.

- **Desktop:** A 12-column grid with a maximum container width of 1280px. Gutters are fixed at 24px to provide ample "breathing room" between content cards.
- **Mobile:** A 4-column fluid grid with 16px side margins. 
- **Alignment:** Content is predominantly left-aligned to mirror natural reading patterns, supporting the professional and straightforward brand promise.
- **Vertical Rhythm:** Elements are stacked using defined increments (8px, 16px, 32px) to create a structured sense of hierarchy.

## Elevation & Depth

To maintain a clean and professional aesthetic, depth is communicated through **Tonal Layers** and **Ambient Shadows**. The design avoids heavy textures in favor of light, diffused shadows that lift cards off the pure white background.

- **Base Layer:** Pure white (#FFFFFF) background.
- **Card Layer:** Subtle 1px borders (#F5F5F5) combined with a soft, low-opacity shadow (0px 4px 12px rgba(0,0,0,0.05)).
- **Interactive Hover:** When a card or element is hovered, the shadow deepens slightly and the orange primary color may appear as a subtle 2px bottom border or accent to indicate focus.
- **Overlays:** Modals and dropdowns use a more pronounced shadow (0px 12px 32px rgba(0,0,0,0.12)) to clearly separate them from the underlying content.

## Shapes

The shape language is defined as **Rounded**, utilizing a 0.5rem (8px) base radius. This provides a modern, friendly feel that softens the high-contrast color palette without appearing overly "bubbly" or juvenile.

- **Standard Elements (Buttons, Inputs, Cards):** 8px (0.5rem) corner radius.
- **Large Elements (Feature Banners):** 16px (1rem) corner radius.
- **Small Elements (Chips, Tags):** 24px (1.5rem) to create a pill-shaped effect for secondary categorizations.

## Components

### Buttons
- **Primary:** Solid Orange (#FF6B00) with White text. No border. On hover, the color shifts to a slightly deeper orange.
- **Secondary:** White background with an Orange (#FF6B00) 1px border and Orange text.
- **Tertiary:** Transparent background with Gray (#666666) text, shifting to Orange on hover.

### Inputs & Selection
- **Text Fields:** White background with a light gray border. On focus, the border changes to Orange (#FF6B00) with a 1px thickness.
- **Checkboxes/Radios:** When active, these are filled with Orange (#FF6B00).

### Cards
- **Product Cards:** Utilize the 8px corner radius and the ambient shadow defined in the Elevation section. Images should be top-aligned with no padding to the top and sides, while text content resides in a padded container below.

### Chips & Status
- **Freshness Tags:** Use the pill-shaped (rounded-xl) radius.
- **Active Indicators:** A small Orange dot or highlight used to show "Live" or "New" status.

### Navigation
- **Active State:** Navigation links use a bold weight and an Orange bottom indicator (2px) to denote the current page, ensuring the user always knows their location within the system.