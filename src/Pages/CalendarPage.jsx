import { Calendar1 } from "lucide-react"
import SharpCard from "../Components/BodyCard"
import HolidayCalendar from "../Components/Calendar/Calendar"

function CalendarPage() {
  return (
    <>
        <SharpCard title={"HolidayCalendar"} Icon={Calendar1} classes={""}>
   
        <HolidayCalendar/>

    
      </SharpCard>



    </>
  )
}

export default CalendarPage