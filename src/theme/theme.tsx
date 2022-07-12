import { extendTheme } from '@chakra-ui/react';
import '@fontsource/poppins';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'poppins, sans-serif',
        color: '#000000',
        backgroundColor: '#FFFAFA',
        background: 'linear-gradient(to right, #FFFFFF, #FFEFBA)',
      },

      h1: { fontSize: '3rem', fontWeight: '900', maxWidth: '70ch', lineHeight: '1.6' },
      h2: { fontSize: '2rem', fontWeight: '800', maxWidth: '70ch', lineHeight: '1.6' },
      h3: { fontSize: '1rem', fontWeight: '600', maxWidth: '70ch', lineHeight: '1.6' },
      p: { fontSize: '1rem', maxWidth: '70ch', lineHeight: '1.6' },
      ul: { listStyleType: 'none', gap: '24px' },
      a: { textDecoration: 'none !important' },
    },
    '.chakra-box': {
      // borderColor: 'red !important',
      opacity: 1,
      paddingRight: '5em',
    },
  },

  components: {},
  colors: {
    brand: {
      primary: '#000000',
      secondary: '#FFFAFA',
    },
  },

  layerStyles: {
    header_footer: {
      backgroundColor: 'brand.primary',
      color: 'brand.secondary',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1em 1.5em',
    },
    Hero: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      paddingTop: '1em',
      paddingBottom: '1em',
      textAlign: 'center',
    },

    ButtonStyle: {
      display: 'block',
      padding: '10px 16px 9px',
      width: '100px',
      border: '1px solid black',
      borderRadius: '2px',
      outline: 'none',
    },
    ButtonContactStyle: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      border: '0.2em solid black',
      gap: '1em',
      padding: '10px 16px 9px',
      backgroundColor: '#FFFFFF',
    },
    ProjectImage: {
      fit: 'cover',
      align: 'center',
      width: '100%',
      height: `{{ base: '100%', sm: '400px', lg: '500px' }}`,
    },
  },
  textStyles: {
    ButtonStyle: {
      textTransform: 'uppercase',
      fontWeight: '600',
      transform: 'translateZ(0)',
      background: 'brand.primary',
    },
  },
  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
    '2xl': '1536px',
  },
});

export default theme;

// Extra small devices (<768px): width: auto (or no width)
// Small Devices (≥576px): width: 540px
// Medium Devices (≥768px): width: 720px
// Larger Devices (≥992px): width: 960px
// XLarge Devices (≥1200px): width: 1140px
