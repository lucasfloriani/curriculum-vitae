import { Font } from "@react-pdf/renderer";

const montserratNormalFonts = [
  "src/fonts/Montserrat/Montserrat-Thin.ttf",
  "src/fonts/Montserrat/Montserrat-ExtraLight.ttf",
  "src/fonts/Montserrat/Montserrat-Light.ttf",
  "src/fonts/Montserrat/Montserrat-Regular.ttf",
  "src/fonts/Montserrat/Montserrat-Medium.ttf",
  "src/fonts/Montserrat/Montserrat-SemiBold.ttf",
  "src/fonts/Montserrat/Montserrat-Bold.ttf",
  "src/fonts/Montserrat/Montserrat-ExtraBold.ttf",
  "src/fonts/Montserrat/Montserrat-Black.ttf",
];

const montserratItalicFonts = [
  "src/fonts/Montserrat/Montserrat-ThinItalic.ttf",
  "src/fonts/Montserrat/Montserrat-ExtraLightItalic.ttf",
  "src/fonts/Montserrat/Montserrat-LightItalic.ttf",
  "src/fonts/Montserrat/Montserrat-Italic.ttf",
  "src/fonts/Montserrat/Montserrat-MediumItalic.ttf",
  "src/fonts/Montserrat/Montserrat-SemiBoldItalic.ttf",
  "src/fonts/Montserrat/Montserrat-BoldItalic.ttf",
  "src/fonts/Montserrat/Montserrat-ExtraBoldItalic.ttf",
  "src/fonts/Montserrat/Montserrat-BlackItalic.ttf",
];

const leagueSpartanNormalFonts = [
  "src/fonts/League_Spartan/LeagueSpartan-Thin.ttf",
  "src/fonts/League_Spartan/LeagueSpartan-ExtraLight.ttf",
  "src/fonts/League_Spartan/LeagueSpartan-Light.ttf",
  "src/fonts/League_Spartan/LeagueSpartan-Regular.ttf",
  "src/fonts/League_Spartan/LeagueSpartan-Medium.ttf",
  "src/fonts/League_Spartan/LeagueSpartan-SemiBold.ttf",
  "src/fonts/League_Spartan/LeagueSpartan-Bold.ttf",
  "src/fonts/League_Spartan/LeagueSpartan-ExtraBold.ttf",
  "src/fonts/League_Spartan/LeagueSpartan-Black.ttf",
];

const registerFonts = (
  family: string,
  fontStyle: "normal" | "italic",
  listOfFontsInOrder: string[]
) => {
  Font.register({
    family,
    fonts: listOfFontsInOrder.map((fontFile, index) => ({
      fontStyle,
      fontWeight: (index + 1) * 100,
      src: fontFile,
    })),
  });
};

registerFonts("Montserrat", "normal", montserratNormalFonts);
registerFonts("Montserrat", "italic", montserratItalicFonts);
registerFonts("League Spartan", "normal", leagueSpartanNormalFonts);
