import { useEffect } from "react";
import { initFlowbite } from "flowbite";
import SharpCard from "../Components/BodyCard";
import { TestTube } from "lucide-react";

export default function BlankPage2() {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (

        <SharpCard title="Settings" Icon={TestTube}>
  test 2
        </SharpCard>
   
  );
}