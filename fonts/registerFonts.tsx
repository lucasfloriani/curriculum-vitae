import { Font } from "@react-pdf/renderer";

import MontserratThin from "./Montserrat/Montserrat-Thin.ttf";
import MontserratExtraLight from "./Montserrat/Montserrat-ExtraLight.ttf";
import MontserratLight from "./Montserrat/Montserrat-Light.ttf";
import MontserratRegular from "./Montserrat/Montserrat-Regular.ttf";
import MontserratMedium from "./Montserrat/Montserrat-Medium.ttf";
import MontserratSemiBold from "./Montserrat/Montserrat-SemiBold.ttf";
import MontserratBold from "./Montserrat/Montserrat-Bold.ttf";
import MontserratExtraBold from "./Montserrat/Montserrat-ExtraBold.ttf";
import MontserratBlack from "./Montserrat/Montserrat-Black.ttf";

import MontserratThinItalic from "./Montserrat/Montserrat-ThinItalic.ttf";
import MontserratExtraLightItalic from "./Montserrat/Montserrat-ExtraLightItalic.ttf";
import MontserratLightItalic from "./Montserrat/Montserrat-LightItalic.ttf";
import MontserratItalic from "./Montserrat/Montserrat-Italic.ttf";
import MontserratMediumItalic from "./Montserrat/Montserrat-MediumItalic.ttf";
import MontserratSemiBoldItalic from "./Montserrat/Montserrat-SemiBoldItalic.ttf";
import MontserratBoldItalic from "./Montserrat/Montserrat-BoldItalic.ttf";
import MontserratExtraBoldItalic from "./Montserrat/Montserrat-ExtraBoldItalic.ttf";
import MontserratBlackItalic from "./Montserrat/Montserrat-BlackItalic.ttf";

import LeagueSpartanThin from "./League_Spartan/LeagueSpartan-Thin.ttf";
import LeagueSpartanExtraLight from "./League_Spartan/LeagueSpartan-ExtraLight.ttf";
import LeagueSpartanLight from "./League_Spartan/LeagueSpartan-Light.ttf";
import LeagueSpartanRegular from "./League_Spartan/LeagueSpartan-Regular.ttf";
import LeagueSpartanMedium from "./League_Spartan/LeagueSpartan-Medium.ttf";
import LeagueSpartanSemiBold from "./League_Spartan/LeagueSpartan-SemiBold.ttf";
import LeagueSpartanBold from "./League_Spartan/LeagueSpartan-Bold.ttf";
import LeagueSpartanExtraBold from "./League_Spartan/LeagueSpartan-ExtraBold.ttf";
import LeagueSpartanBlack from "./League_Spartan/LeagueSpartan-Black.ttf";

const montserratNormalFonts = [
  MontserratThin,
  MontserratExtraLight,
  MontserratLight,
  MontserratRegular,
  MontserratMedium,
  MontserratSemiBold,
  MontserratBold,
  MontserratExtraBold,
  MontserratBlack,
];

const montserratItalicFonts = [
  MontserratThinItalic,
  MontserratExtraLightItalic,
  MontserratLightItalic,
  MontserratItalic,
  MontserratMediumItalic,
  MontserratSemiBoldItalic,
  MontserratBoldItalic,
  MontserratExtraBoldItalic,
  MontserratBlackItalic,
];

const leagueSpartanNormalFonts = [
  LeagueSpartanThin,
  LeagueSpartanExtraLight,
  LeagueSpartanLight,
  LeagueSpartanRegular,
  LeagueSpartanMedium,
  LeagueSpartanSemiBold,
  LeagueSpartanBold,
  LeagueSpartanExtraBold,
  LeagueSpartanBlack,
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
