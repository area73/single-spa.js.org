import Typography from "typography";

const typography = new Typography({
  baseFontSize: "16px",
  scaleRatio: 2.75,
  bodyColor: '#52555A',
  googleFonts: [
    {
      name: "Khula",
      styles: [
        "400",
        "700"
      ]
    }
  ],
  headerFontFamily: [
    "Khula",
    "Helvetica",
    "sans-serif"
  ],
  bodyFontFamily: [
    "Helvetica",
    "sans-serif"
  ],
  overrideStyles: () => ({
    h2: {
      marginTop: '2.5rem'
    }
  })
});

export default typography;