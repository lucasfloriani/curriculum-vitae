import { Font } from "@react-pdf/renderer";

// This can either be a valid URL, or an absolute path if you're using react-pdf on Node.
const montserratNormalFonts = [
  require("./Montserrat/Montserrat-Thin.ttf"),
  require("./Montserrat/Montserrat-ExtraLight.ttf"),
  require("./Montserrat/Montserrat-Light.ttf"),
  require("./Montserrat/Montserrat-Regular.ttf"),
  require("./Montserrat/Montserrat-Medium.ttf"),
  require("./Montserrat/Montserrat-SemiBold.ttf"),
  require("./Montserrat/Montserrat-Bold.ttf"),
  require("./Montserrat/Montserrat-ExtraBold.ttf"),
  require("./Montserrat/Montserrat-Black.ttf"),
];

const montserratItalicFonts = [
  require("./Montserrat/Montserrat-ThinItalic.ttf"),
  require("./Montserrat/Montserrat-ExtraLightItalic.ttf"),
  require("./Montserrat/Montserrat-LightItalic.ttf"),
  require("./Montserrat/Montserrat-Italic.ttf"),
  require("./Montserrat/Montserrat-MediumItalic.ttf"),
  require("./Montserrat/Montserrat-SemiBoldItalic.ttf"),
  require("./Montserrat/Montserrat-BoldItalic.ttf"),
  require("./Montserrat/Montserrat-ExtraBoldItalic.ttf"),
  require("./Montserrat/Montserrat-BlackItalic.ttf"),
];

const leagueSpartanNormalFonts = [
  require("./League_Spartan/LeagueSpartan-Thin.ttf"),
  require("./League_Spartan/LeagueSpartan-ExtraLight.ttf"),
  require("./League_Spartan/LeagueSpartan-Light.ttf"),
  require("./League_Spartan/LeagueSpartan-Regular.ttf"),
  require("./League_Spartan/LeagueSpartan-Medium.ttf"),
  require("./League_Spartan/LeagueSpartan-SemiBold.ttf"),
  require("./League_Spartan/LeagueSpartan-Bold.ttf"),
  require("./League_Spartan/LeagueSpartan-ExtraBold.ttf"),
  require("./League_Spartan/LeagueSpartan-Black.ttf"),
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
