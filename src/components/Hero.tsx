import Typed from 'react-typed';

const Hero = () => {
    return (
        <section className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-blue-800 font-bold">Growing with data analytics</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Grow with data.</h1>
                <div className='flex items-center justify-center'>
                    <p className="md:text-5xl sm:text-4xl text-sm font-bold">Fast, flexible financing for </p>
                    <Typed
                        className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-3 text-blue-800'
                        strings={['BTB', 'BTC', 'SASS']}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    />
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500 mt-4'>
                    Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.
                </p>
                <button className='bg-blue-800 w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Get Started</button>
            </div>
        </section>
    )
}

export default Hero;