import React from 'react'

function Timeline() {
    return (
        <div className='p-4 '>
            <h1 className='text-3xl  my-5 font-semibold'>Timeline</h1>

            <ol class="relative border-s border-gray-500 ">
                <li class="mb-10 ms-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-black "></div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-600 ">08/06/2024</time>
                    <h3 class="text-lg font-semibold text-gray-900 ">N2023004 Lucy</h3>
                    <p class="mb-4 text-base font-normal text-gray-500 capitalize">Boarding started (Boarding) (usa)</p>
                  
                </li>
                <li class="mb-10 ms-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-black "></div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-600 ">08/06/2024 </time>
                    <h3 class="text-lg font-semibold text-gray-900 ">U2023011 Doyal:</h3>
                    <p class="text-base font-normal text-gray-500 capitalize"> Cancelled reservation to Mr Donald Walker (system)</p>
                </li>
                <li class="mb-10 ms-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-black "></div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-600 ">07/06/2024 </time>
                    <h3 class="text-lg font-semibold text-gray-900 "> Neglect: </h3>
                    <p class="text-base font-normal text-gray-500 capitalize">closed 1054 Green Mountain Court (Owner given citation) (usa)</p>
                </li>
                <li class="mb-10 ms-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-black "></div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-600 ">06/06/2024</time>
                    <h3 class="text-lg font-semibold text-gray-900 "> Neglect: </h3>
                    <p class="text-base font-normal text-gray-500 capitalize">opened 1054 Green Mountain Court (usa)</p>
                </li>
                <li class="mb-10 ms-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-black "></div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-600 ">06/06/2024 </time>
                    <h3 class="text-lg font-semibold text-gray-900 "> D2023009 Rupert: </h3>
                    <p class="text-base font-normal text-gray-500 capitalize">entered the shelter (usa)</p>
                </li>
                <li class="mb-10 ms-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-black "></div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-600 ">05/06/2024  </time>
                    <h3 class="text-lg font-semibold text-gray-900 ">B2022003 Ripley: </h3>
                    <p class="text-base font-normal text-gray-500 capitalize">trial adoption to Mr David Smith (usa)</p>
                </li>
            </ol>


        </div>
    )
}

export default Timeline