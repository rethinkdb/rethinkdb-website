import Typography from 'typography'

const fonts = [
  'Roboto',
  '-apple-system',
  'system-ui',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Helvetica Neue',
  'Arial',
  'sans-serif',
]

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  googleFonts: [
    {
      name: 'Roboto',
      styles: ['400', '400i', '700'],
    },
  ],
  headerFontFamily: fonts,
  bodyFontFamily: fonts,
  headerWeight: 400,
  bodyWeight: 400,
  boldWeight: 700,
})

export default typography
