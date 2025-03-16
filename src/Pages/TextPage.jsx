import { Star } from "lucide-react";
import FancyText from "../Components/Text/FancyText";
import HandWrittenTitle from "../Components/Text/HandWriting";
import SectionTitle from "../Components/Text/SectionTitle";
import MatrixText from './../Components/Text/MatrixText';


function TextPage() {
  return (
    <>
      <FancyText text={"Text  1"} center size={"3xl"}/>

<HandWrittenTitle />

    <MatrixText/>


    <SectionTitle
        icon={<Star />}
        title="Hero 1"
        subtitle=""
        description=""
        classes=""

      />

    </>

  );
}

export default TextPage;
