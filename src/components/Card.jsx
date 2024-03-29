import React from 'react'



function Card({img, title, text}) {
    
  return (
    <>
    
<div class="max-w-sm w-[250px] lg:w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a>
        <img class="rounded-t-lg h-40 w-full" src={img} alt="" />
    </a>
    <div class="p-3">
        <a>
            <h5 class="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p class="mb-2 font-normal text-sm text-gray-700 dark:text-gray-400">{text}</p>
        <a class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-400 rounded-lg hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-400dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Visitar Web
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

    </>
  )
}

export default Card
