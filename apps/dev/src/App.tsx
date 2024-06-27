import { PDFViewer } from "@react-pdf/renderer";
import Curriculum from "curriculum";
import "pdf-fonts/registerFontsWeb";

const App = () => {
  return (
    <PDFViewer>
      <Curriculum language="pt-BR" />
    </PDFViewer>
  );
};

export default App;
