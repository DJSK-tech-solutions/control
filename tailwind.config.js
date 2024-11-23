// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Existing system colors remain the same
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom colors for the dashboard
        stats: {
          forest: '#34573B',
          background: 'rgba(255, 255, 255, 0.1)'
        },
        brand: {
          green: {
            50: '#E8F5E9',
            100: '#C8E6C9',
            200: '#A5D6A7',
            300: '#81C784',
            400: '#66BB6A',
            500: '#4CAF50',
            600: '#2E7D32',
            700: '#388E3C',
            800: '#2E7D32',
            900: '#1B5E20'
          },
          red: {
            50: '#FFF3F3',
            100: '#FFEBEE',
            200: '#FFCDD2',
            300: '#EF9A9A',
            400: '#EF5350',
            500: '#FF4B4B'
          },
          blue: {
            50: '#E3F2FD',
            500: '#364A1580'
          },
          brown: {
            50: '#364A1580',
            500: '#2196F3'
          }
        }
      },
      width: {
        'stat-card': '281px'
      },
      height: {
        'stat-card': '181px'
      },
      borderRadius: {
        'stat': '12px'
      },
      backdropBlur: {
        'stat': '35px'
      },
      boxShadow: {
        'stat': '0px 74px 181.9px 0px rgba(22, 25, 46, 0.1)'
      },
      fontSize: {
        'stat': ['32px', '40px']
      },
      backgroundImage: {
        'gradient-overall': 'linear-gradient(135deg, transparent, #E8F5E9 150%)',
        'gradient-consumers': 'linear-gradient(90deg, transparent, #FFF3E0)',
        'gradient-shop': 'linear-gradient(90deg, transparent, #E8F5E9)',
        'gradient-delivery': 'linear-gradient(90deg, transparent, #FFE4E4)'
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/forms')
  ],
}// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Original shadcn colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom colors
        forest: '#34573B',
        stats: {
          background: 'rgba(255, 255, 255, 0.1)'
        }
      },
      width: {
        'stat-card': '281px'
      },
      height: {
        'stat-card': '181px'
      },
      borderRadius: {
        'stat': '12px'
      },
      boxShadow: {
        'stat': '0px 74px 181.9px 0px rgba(22, 25, 46, 0.1)'
      },
      backgroundImage: {
        'gradient-overall': 'linear-gradient(135deg, transparent, #E8F5E9 150%)',
        'gradient-consumers': 'linear-gradient(90deg, transparent, #FFF3E0)',
        'gradient-shop': 'linear-gradient(90deg, transparent, #E8F5E9)',
        'gradient-delivery': 'linear-gradient(90deg, transparent, #FFE4E4)'
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/forms')
  ],
}