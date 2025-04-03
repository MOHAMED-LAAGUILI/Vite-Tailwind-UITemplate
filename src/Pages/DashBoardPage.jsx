import { CircuitBoard } from "lucide-react";
import SharpCard from "../Components/BodyCard";
import DashBoardItems from './../Components/DashboardItems/DashboardItems1';
import DashboardItems2 from "./../Components/DashboardItems/DashboardItems2";

export default function DashBoardPage() {
  return (
    <>
    <SharpCard title={"Dashboard 1"} Icon={CircuitBoard} classes={""}>
   
   <DashBoardItems/>

   
      </SharpCard>

      <SharpCard title={"Dashboard 2"} Icon={CircuitBoard} classes={""}>
   
   <DashboardItems2/>

   
      </SharpCard>
    </>
  )
}
