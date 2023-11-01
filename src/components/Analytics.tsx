import laptop from '../assets/laptop.jpg';

const Analytics = () => {
    return (
        <section className="w-ful bg-white py-16 px-4 h-screen">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img src={laptop} alt="" className='w-[500px] mx-auto my-4' />
                <div className='flex flex-col justify-center'>
                    <p className='text-blue-800 text-bold uppercase'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                        molestiae delectus culpa hic assumenda, voluptate reprehenderit
                        dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
                        eveniet ex deserunt fuga?
                    </p>
                    <button className='bg-blue-800 w-[200px] text-white rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
                </div>
            </div>
        </section>
    )
};

export default Analytics;