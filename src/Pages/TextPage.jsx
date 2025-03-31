import FancyText from "../Components/Text/FancyText";
import HandWrittenTitle from "../Components/Text/HandWriting";
import SectionTitle from "../Components/Text/SectionTitle";
import MatrixText from "./../Components/Text/MatrixText";
import AnimatedText from "../Components/Text/AnimatedText";
import { Star, Text } from "lucide-react";
import Nike from "../Components/Text/Text4";
import Text_05 from "../Components/Text/Text5";
import SharpCard from "../Components/BodyCard";

function TextPage() {
  return (
    <div className=" mt-10">
      <SharpCard title={"AnimatedText"} Icon={Text}>
        <AnimatedText text={"Hello World"} />
      </SharpCard>

      <SharpCard title={"FancyText"} Icon={Text}>
        <FancyText text={"Text  1"} center size={"3xl"} />
      </SharpCard>

      <SharpCard title={"SectionTitle"} Icon={Text}>
        <SectionTitle
          icon={<Star />}
          title="Hero 1"
          subtitle=""
          description=""
          classes=""
        />{" "}
      </SharpCard>

      <SharpCard title={"HandWrittenTitle"} Icon={Text}>
        <HandWrittenTitle />
      </SharpCard>

      <SharpCard title={"HandWrittenTitle"} Icon={Text}>
        <Text_05 text="SUIIIIIIIIIIII" />
      </SharpCard>

      <SharpCard title={"HandWrittenTitle"} Icon={Text}>
        <MatrixText />
      </SharpCard>

      <SharpCard title={"HandWrittenTitle"} Icon={Text}>
        <Nike text="Click or hover me" />
      </SharpCard>
    </div>
  );
}

export default TextPage;
