const NewsLetter = () => {
    return (
        <section className="w-full py-16 text-white px-4">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
                <div className="lg:col-span-2 my-4">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Want tips & tricks to optimize your flow?</h1>
                    <p>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className="my-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                        <input type="email" placeholder="Enter Email..."
                            className="p-3 flex w-full rounded-tl-md rounded-bl-md text-black outline-0 border-0" />
                        <button className='bg-blue-800 w-[200px] rounded-tr-md rounded-br-md font-medium my-6 mx-auto py-3'>Send</button>
                    </div>
                    <p>
                        We care bout the protection of your data. Read our{' '}
                        <span className='text-[#00df9a]'>Privacy Policy.</span>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default NewsLetter;