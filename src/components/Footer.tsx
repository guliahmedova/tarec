const Footer = () => {
    return (
        <footer className="max-w-[1240px] mx-auto py-10 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
            <div>
                <h1 className="w-full text-3xl font-bold text-blue-800">Tarec.</h1>
                <p className="py-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
            </div>

            <div className="lg:col-span-2 flex justify-between mt-6">
                <div>
                    <h6 className="font-medium text-gray-400">Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm cursor-pointer'>Analytics</li>
                        <li className='py-2 text-sm cursor-pointer'>Marketing</li>
                        <li className='py-2 text-sm cursor-pointer'>Commerce</li>
                        <li className='py-2 text-sm cursor-pointer'>Insights</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Support</h6>
                    <ul>
                        <li className='py-2 text-sm cursor-pointer'>Pricing</li>
                        <li className='py-2 text-sm cursor-pointer'>Documentation</li>
                        <li className='py-2 text-sm cursor-pointer'>Guides</li>
                        <li className='py-2 text-sm cursor-pointer'>API Status</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Company</h6>
                    <ul>
                        <li className='py-2 text-sm cursor-pointer'>About</li>
                        <li className='py-2 text-sm cursor-pointer'>Blog</li>
                        <li className='py-2 text-sm cursor-pointer'>Jobs</li>
                        <li className='py-2 text-sm cursor-pointer'>Press</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Legal</h6>
                    <ul>
                        <li className='py-2 text-sm cursor-pointer'>Claim</li>
                        <li className='py-2 text-sm cursor-pointer'>Policy</li>
                        <li className='py-2 text-sm cursor-pointer'>Terms</li>
                    </ul>
                </div>
            </div>

        </footer>
    )
}

export default Footer