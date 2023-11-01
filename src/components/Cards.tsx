import single from '../assets/single.png';
import double from '../assets/double.png';
import triple from '../assets/triple.png';

const Cards = () => {
    return (
        <section className="w-full py-[10rem] px-4 bg-white">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-300">
                    <img src={single} alt="" className='w-20 mx-auto mt-[-3rem' />
                    <h2 className='text-3xl font-bold text-center py-8'>
                        Single User
                    </h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                    </div>
                    <button className='bg-blue-800 w-[200px] text-white rounded-md font-medium my-6 mx-auto py-3'>Start Trial</button>
                </div>

                <div className="w-full shadow-xl flex flex-col p-4 my-4 md:my-0 bg-gray-200 rounded-lg hover:scale-110 duration-300">
                    <img src={double} alt="" className='w-20 mx-auto mt-[-3rem] bg-transparent' />
                    <h2 className='text-3xl font-bold text-center py-8'>
                        Single User
                    </h2>
                    <p className='text-center text-4xl font-bold'>$109</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                    </div>
                    <button className='bg-blue-950 w-[200px] text-white rounded-md font-medium my-6 mx-auto py-3'>Start Trial</button>
                </div>

                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-300">
                    <img src={triple} alt="" className='w-20 mx-auto mt-[-3rem]  bg-white' />
                    <h2 className='text-3xl font-bold text-center py-8'>
                        Single User
                    </h2>
                    <p className='text-center text-4xl font-bold'>$249</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                    </div>
                    <button className='bg-blue-800 w-[200px] text-white rounded-md font-medium my-6 mx-auto py-3'>Start Trial</button>
                </div>
            </div>
        </section>
    )
};

export default Cards;