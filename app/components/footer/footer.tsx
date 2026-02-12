'use client'
  import ConnectWithUs from './connectwithus'

const Footer = () => {
  return (
    <div className='bg-secondary  font-poppins  w-full '>
        <div className='flex flex-col items-center justify-center py-8'>
            <img src={'/logo.svg'} alt='Logo' className='mx-auto ' />
            <p className='text-center text-sm mb-4'><strong>Gray</strong>Cut</p>
            <h1 className='playfair text-4xl font-extrabold'>STOP GUESSING</h1>
        </div>
        <ConnectWithUs />
    </div>
  )
}

export default Footer