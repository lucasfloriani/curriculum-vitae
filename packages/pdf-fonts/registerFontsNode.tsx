import { Font } from "@react-pdf/renderer";

const registerRequiredFonts = (pathPrefix = ""): void => {
  const montserratNormalFonts = [
    `${pathPrefix}/Montserrat/Montserrat-Thin.ttf`,
    `${pathPrefix}/Montserrat/Montserrat-ExtraLight.ttf`,
    `${pathPrefix}/Montserrat/Montserrat-Light.ttf`,
    `${pathPrefix}/Montserrat/Montserrat-Regular.ttf`,
    `${pathPrefix}/Montserrat/Montserrat-Medium.ttf`,
    `${pathPrefix}/Montserrat/Montserrat-SemiBold.ttf`,
    `${pathPrefix}/Montserrat/Montserrat-Bold.ttf`,
    `${pathPrefix}/Montserrat/Montserrat-ExtraBold.ttf`,
    `${pathPrefix}/Montserrat/Montserrat-Black.ttf`,
  ];

  const montserratItalicFonts = [
    `${pathPrefix}/Montserrat/Montserrat-ThinItalic.ttf`,
    `${pathPrefix}/Montserrat/Montserrat-ExtraLightItalic.ttf`,
    `${pathPrefix}/Montserrat/Montserrat-LightItalic.ttf`,
    `${pathPrefix}/Montserrat/Montserrat-Italic.ttf`,
    `${pathPrefix}/Montserrat/Montserrat-MediumItalic.ttf`,
    `${pathPrefix}/Montserrat/Montserrat-SemiBoldItalic.ttf`,
    `${pathPrefix}/Montserrat/Montserrat-BoldItalic.ttf`,
    `${pathPrefix}/Montserrat/Montserrat-ExtraBoldItalic.ttf`,
    `${pathPrefix}/Montserrat/Montserrat-BlackItalic.ttf`,
  ];

  const leagueSpartanNormalFonts = [
    `${pathPrefix}/League_Spartan/LeagueSpartan-Thin.ttf`,
    `${pathPrefix}/League_Spartan/LeagueSpartan-ExtraLight.ttf`,
    `${pathPrefix}/League_Spartan/LeagueSpartan-Light.ttf`,
    `${pathPrefix}/League_Spartan/LeagueSpartan-Regular.ttf`,
    `${pathPrefix}/League_Spartan/LeagueSpartan-Medium.ttf`,
    `${pathPrefix}/League_Spartan/LeagueSpartan-SemiBold.ttf`,
    `${pathPrefix}/League_Spartan/LeagueSpartan-Bold.ttf`,
    `${pathPrefix}/League_Spartan/LeagueSpartan-ExtraBold.ttf`,
    `${pathPrefix}/League_Spartan/LeagueSpartan-Black.ttf`,
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
};

export default registerRequiredFonts;
