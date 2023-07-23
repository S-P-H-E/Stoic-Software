import { useState } from "react"

export default function SideBarIcon({ icon, text, select}){
    return(
        <>
            {select ? (
            <div className="relative flex justify-center items-center h-12 w-12 my-2 mx-auto bg-white rounded-xl transition-all duration-200 ease-linear cursor-pointer shadow-lg group">
                <div className="invert">
                    {icon}
                </div>
                <span class="absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text-white bg-[var(--gray)] text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
                    {text}
                </span>
            </div>
            ) : (
            <div className="relative flex justify-center items-center h-12 w-12 my-2 mx-auto bg-[var(--gray)] hover:bg-white rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear cursor-pointer shadow-lg group">
                <div className=" transition-all group-hover:invert">
                    {icon}
                </div>
                <span class="absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text-white bg-[var(--gray)] text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
                    {text}
                </span>
            </div>
            )}
        </>
    )
}