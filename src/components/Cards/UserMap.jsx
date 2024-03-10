import Map from "../Map/Map"
import UserInfo from "./UserInfo"
function UserMap({data}) {
    return (
        <div className="w-[40vw] ">
       <UserInfo  className="justify-between px-0" data={data}/>   
            <Map position={data.position}/>
        </div>
    )
}

export default UserMap
