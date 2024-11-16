const Announcements = () => {
    return (
        <div className='bg-white p-4 rounded-md'>
            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-semibold'>お知らせ</h1>
                <span className='text-xs text-gray-400'>View All</span>
            </div>
            <div className='flex flex-col gap-4 mt-4'>
            <div className='bg-kcbSky rounded-md p-4'>
                    <div className='flex items-center justify-between'>
                        <h2 className='font-medium'>インフルエンザ大流行！！</h2>
                        <span className='text-xs text-gray-400 bg-white px-1 py-1 rounded-md'>2024/11/16</span>
                    </div>
                    <p className='text-gray-400 text-sm mt-1'>インフルエンザが流行っています。ご注意を！！</p>
                </div>
                <div className='bg-kcbPurple rounded-md p-4'>
                    <div className='flex items-center justify-between'>
                        <h2 className='font-medium'>インフルエンザ大流行！！</h2>
                        <span className='text-xs text-gray-400 bg-white px-1 py-1 rounded-md'>2024/11/16</span>
                    </div>
                    <p className='text-gray-400 text-sm mt-1'>インフルエンザが流行っています。ご注意を！！</p>
                </div>
                <div className='bg-kcbYellow rounded-md p-4'>
                    <div className='flex items-center justify-between'>
                        <h2 className='font-medium'>インフルエンザ大流行！！</h2>
                        <span className='text-xs text-gray-400 bg-white px-1 py-1 rounded-md'>2024/11/16</span>
                    </div>
                    <p className='text-gray-400 text-sm mt-1'>インフルエンザが流行っています。ご注意を！！うぇ～い！！！</p>
                </div>
            </div>
        </div>
    )
}

export default Announcements