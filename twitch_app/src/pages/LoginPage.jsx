import LoginSidebar from '../components/LoginSidebar'
import Login from '../components/Login'

export default function LoginPage() {
    return (
      <div className=" bg-white flex min-h-screen w-screen">
        <div className='flex'>
            <LoginSidebar />
            <Login />
         </div>
      </div>
    )
}
