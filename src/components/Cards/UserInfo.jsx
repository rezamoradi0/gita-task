import { twMerge } from "tailwind-merge"



function UserInfo({data,className=""}) {
    return (
        <div dir="rtl" className={twMerge("flex flex-wrap md:flex-nowrap p-4 gap-4 items-center justify-center",className)}>
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
            <p className="py-1 px-4 bg-slate-700 text-white rounded-lg ">{data.lastName}</p>
            <p className="whitespace-nowrap text-nowrap"> نام خانوادگی </p>
            </div>
        </div>
    )
}

export default UserInfo
