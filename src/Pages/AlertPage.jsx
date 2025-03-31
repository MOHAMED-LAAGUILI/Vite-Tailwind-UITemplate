import { AlertOctagon } from "lucide-react";
import Alert03 from "../Components/Alert/FancyAlert0";
import ToastExample from "../Components/Alert/Toast";
import SharpCard from "../Components/BodyCard";
import Alert04 from "./../Components/Alert/FancyAlert";
function AlertPage() {
  return (
    <>
      <SharpCard title={"Alerts"} Icon={AlertOctagon} classes={""}>
        <Alert04 />
        <ToastExample />
        <Alert03 />
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Other Resources: &nbsp;|&nbsp;
            <a
              href="https://devsnap.me/react-notifications"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              react-notifications
            </a>
            &nbsp;|&nbsp;
          </p>
        </div>
      </SharpCard>
    </>
  );
}

export default AlertPage;
