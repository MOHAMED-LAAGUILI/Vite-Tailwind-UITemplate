import { User, UserCheck2, UserCircle } from 'lucide-react'
import GlassLogin from '../Components/Auth/Auth2'
import LoginPage from '../Components/Auth/TabAuth'
import SharpCard from '../Components/BodyCard'
import Auth3 from '../Components/Auth/Auth3'

function AuthPage() {
  return (
    <>
      <SharpCard title={"LoginPage1"} Icon={User} classes={""}>
      <LoginPage/>
      </SharpCard>
      
      <SharpCard title={"GlassLogin"} Icon={UserCircle} classes={""}>
      <GlassLogin/>
      </SharpCard>

      <SharpCard title="Smooth elegant Login" Icon={UserCheck2}>
      <Auth3/>
      </SharpCard>
    </>
  )
}

export default AuthPage