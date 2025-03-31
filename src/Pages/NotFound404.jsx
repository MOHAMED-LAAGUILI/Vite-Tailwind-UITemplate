import { LucideGhost } from "lucide-react";
import SharpCard from "../Components/BodyCard";
import NotFoundPage1 from "../Components/NotFound404/Notfound1";

function NotFound404() {
  return (
    <>
      <SharpCard title={"NotFound404"} Icon={LucideGhost} classes={""}>
        <NotFoundPage1 />
      </SharpCard>
    </>
  );
}

export default NotFound404;
