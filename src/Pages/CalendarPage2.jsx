import { Calendar } from "lucide-react"
import SharpCard from "../Components/BodyCard"
import EmployeeCalendar from "../Components/Calendar/Calendar2"

function Calendar2Page() {
  return (
    <>

<SharpCard title={"EmployeeCalendar"} Icon={Calendar} classes={""}>
   
   <EmployeeCalendar/>


</SharpCard>

    </>
  )
}

export default Calendar2Page