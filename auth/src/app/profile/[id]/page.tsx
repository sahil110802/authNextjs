export default function UserProfile({params}:any) {
    return(
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h1>Profile</h1>
            <p className="text-4xl">profile page 
            <span className="ml-2 rounded text-black p-2 bg-orange-500">{params.id}</span></p>
        </div>
    )
}