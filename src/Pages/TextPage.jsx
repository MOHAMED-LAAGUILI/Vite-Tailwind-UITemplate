import FancyText from "../Components/Text/FancyText";
import HandWrittenTitle from "../Components/Text/HandWriting";
import MatrixText from "../Components/Text/MatrixText";


function TextPage() {
  return (
    <>
      <FancyText text={"Text  1"} center size={"3xl"}/>

<HandWrittenTitle />
<MatrixText text="Matrix text"/>

    </>
  );
}

export default TextPage;
