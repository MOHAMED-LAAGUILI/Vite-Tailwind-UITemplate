import Toolbar from "../Components/ToolBar/Toolbar1"
import ToolBar2 from "../Components/ToolBar/ToolBar2"
import SharpCard from "../Components/BodyCard";

function ToolBarPage() {
  return (
    <>

        
      <SharpCard title={"Toolbar"} Icon={"Bar"}>
      <Toolbar/>
      </SharpCard>

      
      <SharpCard title={"Toolbar2"} Icon={"Bar"}>
      <ToolBar2/>
      </SharpCard>

    </>
  )
}

export default ToolBarPage