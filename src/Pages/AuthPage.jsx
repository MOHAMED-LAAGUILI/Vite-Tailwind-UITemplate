import { User, UserCircle } from 'lucide-react'
import GlassLogin from '../Components/Auth/Auth2'
import LoginPage from '../Components/Auth/TabAuth'
import SharpCard from '../Components/BodyCard'

function AuthPage() {
  return (
    <>
      <SharpCard title={"LoginPage1"} Icon={User} classes={""}>
      <LoginPage/>
      </SharpCard>
      <SharpCard title={"GlassLogin"} Icon={UserCircle} classes={""}>
      <GlassLogin/>
      </SharpCard>
    </>
  )
}

export default AuthPage