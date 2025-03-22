import FancyText from "../Components/Text/FancyText";
import HandWrittenTitle from "../Components/Text/HandWriting";
import SectionTitle from "../Components/Text/SectionTitle";
import MatrixText from "./../Components/Text/MatrixText";
import AnimatedText from "../Components/Text/AnimatedText";
import { Star } from "lucide-react";

function TextPage() {


  return (
    <div className=" mt-10">
      <AnimatedText text={"Hello World"} />

      <FancyText text={"Text  1"} center size={"3xl"} />

      <SectionTitle
        icon={<Star />}
        title="Hero 1"
        subtitle=""
        description=""
        classes=""
      />

      <HandWrittenTitle />

      <MatrixText />




  
  

 


   

    </div>
  );
}

export default TextPage;
