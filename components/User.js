import { useSession, signIn, signOut } from "next-auth/react"
// import Image from "next/image";

export default function User() {
    const {data: session} = useSession();
    if(session){
        return (
            <>
                <img 
                    onClick={signOut} 
                    src={session.user.image} 
                    alt="user profile"
                    className="h-10 w-10 p-1 hover:bg-gray-400 rounded-full cursor-pointer"
                />
            </>
        )
    }
    return (
    <>
      <button onClick={signIn} className='bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md' >Sign In</button>
    </>
  )
}
