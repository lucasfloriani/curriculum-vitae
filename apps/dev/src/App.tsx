import { PDFViewer } from "@react-pdf/renderer";
import Curriculum from "curriculum";
import "pdf-fonts/registerFontsWeb";

const App = () => (
  <PDFViewer>
    <Curriculum language="pt-BR" />
  </PDFViewer>
);

export default App;
