import React from "react"

export default function Year({entities}) {
    return (
        <section class="text-gray-600 body-font overflow-hidden">
            <div class="container px-5 py-24 mx-auto">
                <div class="-my-8 divide-y-2 divide-gray-100">

                {entities.map(entity => {
                    return (
                        <div class="py-8 flex flex-wrap md:flex-nowrap">
                            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span class="font-semibold title-font text-gray-700 text-2xl">{ entity[0] }</span>
                            </div>
                            <div class="md:flex-grow">
                            <p class="leading-relaxed">{entity[1] }</p>
                            </div>
                        </div>
                    )
                })}

                </div>
        </div>
        </section>
    )
}