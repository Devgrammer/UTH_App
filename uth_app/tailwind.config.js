/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.tsx", 
    "./app/**/*.{js,jsx,ts,tsx}", 
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      // ========== COLORS ONLY ==========
      colors: {
        // Brand Colors
        'brand': '#004532',           // Primary brand color
        'brand-dark': '#065f46',      // Darker shade
        'brand-light': '#059669',     // Lighter shade
        
        // Text Colors
        'text': '#191c1d',            // Primary text
        'text-light': '#3f4944',      // Secondary text
        'text-lighter': '#6b7280',    // Tertiary text
        'text-white': '#ffffff',      // White text
        
        // Background Colors
        'bg': '#f8f9fa',              // Main background
        'bg-white': '#ffffff',        // Card background
        'bg-gray': '#f3f4f5',         // Subtle gray
        'bg-dark': '#e5e7eb',         // Darker background
        
        // Status Colors
        'success': '#059669',         // Green for success
        'warning': '#fde68a',         // Yellow for warning
        'error': '#ef4444',           // Red for errors
        'info': '#8b5cf6',            // Purple for info
        
        // Border Colors
        'border': '#e5e7eb',          // Default border
        'border-dark': '#3f4944',     // Darker border
      },

      // ========== TYPOGRAPHY ==========
      fontFamily: {
        'sans': ['Inter-Regular', 'system-ui', 'sans-serif'],      // Reference the same key
        'inter': ['Inter-Regular'],     // Same key
        'inter-medium': ['Inter-Medium'],
        'inter-bold': ['Inter-Bold'],
        'heading': ['Manrope', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        // Headings
        'h1': ['3.75rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h3': ['2.25rem', { lineHeight: '1.3', fontWeight: '700' }],
        'h4': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h5': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h6': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        
        // Body text
        'body-lg': ['1.125rem', { lineHeight: '1.4', fontWeight: '500' }],
        'body': ['1rem', { lineHeight: '1.5', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'body-xs': ['0.75rem', { lineHeight: '1.5', fontWeight: '400' }],
        
        // Labels
        'label': ['0.875rem', { lineHeight: '1.4', fontWeight: '500' }],
        'label-sm': ['0.75rem', { lineHeight: '1.4', fontWeight: '500' }],
      },

      // ========== GRADIENTS ==========
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #004532, #065f46)',
      },
    },
  },
  plugins: [],
}