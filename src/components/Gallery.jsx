import React from "react"

export default function Gallery({ links }) {
    return (
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-10 mx-auto">
    <div class="flex flex-wrap -m-4">

    { links.map(link => {
        return (
            <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={link[0]} />
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"></h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{link[1]}</h1>
            <p class="leading-relaxed">{link[2]}</p>
          </div>
        </div>
      </div>
        )
    }) }
    </div>
  </div>
</section>
    )
}