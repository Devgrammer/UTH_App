/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      // ========== COLORS ==========
      colors: {
        // Primary - Emerald Green Gradient Base
        primary: {
          DEFAULT: '#004532',
          container: '#065f46',
          fixed: '#059669',
          on_primary: '#ffffff',
          on_primary_fixed: '#ffffff',
        },

        // Secondary - For Partial Payments/Secondary Actions
        secondary: {
          DEFAULT: '#8b5cf6', // Violet for contrast
          fixed: '#c4b5fd',
          on_secondary_fixed: '#2e1065',
        },

        // Tertiary - For Pending States
        tertiary: {
          fixed: '#fde68a', // Warm yellow
          on_tertiary_fixed: '#78350f',
        },

        // Surface System - Tonal Layering
        surface: '#f8f9fa',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f3f4f5',
        'surface-container': '#e5e7eb',
        'surface-container-high': '#e5e7eb',

        // On-Surface Colors (Text & Icons)
        on_surface: '#191c1d',
        'on_surface-variant': '#3f4944',
        'on_surface-secondary': '#6b7280',

        // Outline (Ghost border fallback)
        outline: '#191c1d',
        outline_variant: '#3f4944',
      },

      // ========== TYPOGRAPHY ==========
      fontFamily: {
        'display': ['Manrope', 'system-ui', 'sans-serif'],
        'headline': ['Manrope', 'system-ui', 'sans-serif'],
        'title': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'label': ['Inter', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        // Display
        'display-lg': ['3.75rem', { lineHeight: '1.2', fontWeight: '700', fontFamily: 'Manrope' }],
        'display-md': ['3rem', { lineHeight: '1.2', fontWeight: '700', fontFamily: 'Manrope' }],
        'display-sm': ['2.25rem', { lineHeight: '1.3', fontWeight: '700', fontFamily: 'Manrope' }],

        // Headline
        'headline-lg': ['2rem', { lineHeight: '1.3', fontWeight: '600', fontFamily: 'Manrope' }],
        'headline-md': ['1.5rem', { lineHeight: '1.4', fontWeight: '600', fontFamily: 'Manrope' }],
        'headline-sm': ['1.25rem', { lineHeight: '1.4', fontWeight: '600', fontFamily: 'Manrope' }],

        // Title
        'title-lg': ['1.125rem', { lineHeight: '1.4', fontWeight: '500', fontFamily: 'Inter' }],
        'title-md': ['1rem', { lineHeight: '1.4', fontWeight: '500', fontFamily: 'Inter' }],
        'title-sm': ['0.875rem', { lineHeight: '1.4', fontWeight: '500', fontFamily: 'Inter' }],

        // Body
        'body-lg': ['1rem', { lineHeight: '1.5', fontWeight: '400', fontFamily: 'Inter' }],
        'body-md': ['0.875rem', { lineHeight: '1.5', fontWeight: '400', fontFamily: 'Inter' }],
        'body-sm': ['0.75rem', { lineHeight: '1.5', fontWeight: '400', fontFamily: 'Inter' }],

        // Label
        'label-lg': ['0.875rem', { lineHeight: '1.4', fontWeight: '500', fontFamily: 'Inter' }],
        'label-md': ['0.75rem', { lineHeight: '1.4', fontWeight: '500', fontFamily: 'Inter' }],
        'label-sm': ['0.6875rem', { lineHeight: '1.4', fontWeight: '500', fontFamily: 'Inter' }],
      },

      // ========== SPACING (Custom Tokens) ==========
      spacing: {
        '1': '4px',   // 0.25rem - Micro spacing
        '2': '8px',   // 0.5rem  - Small gap
        '3': '12px',  // 0.75rem - List item gutter
        '4': '16px',  // 1rem    - Standard padding
        '5': '20px',  // 1.25rem - Generous negative space
        '6': '24px',  // 1.5rem  - Editorial breathing room
        '8': '32px',  // 2rem
        '10': '40px', // 2.5rem
        '12': '48px', // 3rem
        '16': '64px', // 4rem
        '20': '80px', // 5rem
        '24': '96px', // 6rem    - Top page margin
      },

    

      // ========== BOX SHADOW (Ambient Depth) ==========
      boxShadow: {
        // Soft natural lift - no shadow, just surface layering
        'none': 'none',

        // Ambient shadow for floating cards
        'ambient': '0 8px 24px rgba(25, 28, 29, 0.06)',

        // Slightly elevated for interactive elements
        'elevated': '0 4px 12px rgba(25, 28, 29, 0.04)',

        // Focus state (ghost border + subtle shadow)
        'focus': '0 0 0 2px rgba(0, 69, 50, 0.2)',
      },

      // ========== BACKGROUND GRADIENTS ==========
      backgroundImage: {
        'emerald-polish': 'linear-gradient(135deg, #004532, #065f46)',
        'emerald-polish-reverse': 'linear-gradient(135deg, #065f46, #004532)',
      },

      // ========== BACKDROP BLUR (Glassmorphism) ==========
      backdropBlur: {
        'glass': '20px',
      },

      // ========== OPACITY ==========
      opacity: {
        '15': '0.15', // Ghost border fallback
        '20': '0.20', // Input focus border
        '80': '0.80', // Glass surface
      },

      // ========== CUSTOM UTILITIES ==========
      padding: {
        'asymmetrical-bottom': '1.5rem 1rem 2rem 1rem', // More bottom padding
        'asymmetrical-top': '2rem 1rem 1.5rem 1rem',   // More top padding
      },
    },
  },
  plugins: [],
}