import { twMerge } from "tailwind-merge"

function UserInfo({data,className=""}) {

    return (
        <div dir="rtl" className={twMerge("flex flex-wrap p-4 gap-4",className)}>
            <div className="flex flex-col items-center justify-between bg-gray-800 p-4 rounded-md gap-2">
            <p className="py-1 px-4 bg-slate-700 text-white rounded-lg">{data.id}</p>
            <p> آیدی </p>
            </div>
            <div className="flex flex-col items-center justify-between bg-gray-800 p-4 rounded-md gap-2">
            <p className="py-1 px-4 bg-slate-700 text-white rounded-lg">{data.nationalId}</p>
            <p> کد ملی </p>
            </div>
            <div className="flex flex-col items-center justify-between bg-gray-800 p-4 rounded-md gap-2">
            <p className="py-1 px-4 bg-slate-700 text-white rounded-lg">{data.firstName}</p>
            <p> نام </p>
            </div>
            <div className="flex flex-col items-center justify-between bg-gray-800 p-4 rounded-md gap-2">
            <p className="py-1 px-4 bg-slate-700 text-white rounded-lg">{data.lastName}</p>
            <p> نام خانوادگی </p>
            </div>
            {/* <p> نام : {data.firstName}</p>
            <p> نام خانوادگی : {data.lastName}</p>
            <p> کد ملی : {data.nationalId}</p> */}
        </div>
    )
}

export default UserInfo
