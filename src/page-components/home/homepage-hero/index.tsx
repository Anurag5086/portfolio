import React from 'react'

function HomePageHero() {
    return (
        <>
            <div className="text-center">
                <h1 className="text-white">My image will be here</h1>
            </div>
            <div className="text-center md:text-left">
                <h1 className="text-white text-5xl font-semibold mb-5">Anurag Gupta</h1>
                <h1 className="text-white text-2xl font-semibold">Developer. Designer. Dreamer. Thinker.</h1>
                <button className="text-black pr-4 pl-4 pt-2 pb-2 mt-16 rounded-xl bg-white">Download CV</button>
                <button className="text-white border-white border-2 pr-7 pl-7 pt-2 pb-2 mt-12 ml-7 rounded-xl bg-black">Know Me</button>
            </div>
        </>
    )
}

export default HomePageHero
