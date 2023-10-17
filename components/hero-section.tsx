import Image from 'next/image';
import CallToAction from './call-to-action';

const HeroSection = () => {
  return (
    <div className="h-[384px] lg:h-[924px] px-[27px] md:px-[130px] bg-[url('/hero.png')] bg-cover bg-center md:bg-center-bottom">
      <div className='hidden lg:block'>
        <div className='flex flex-col '>
          <p className='text-white text-[100px] mt-[100px] font-black leading-none'>
            DIRTY
          </p>
          <p className='text-white text-[100px] font-black leading-none'>
            BADASS
          </p>
          <p className='text-[#578FDE] text-[40px] font-black mb-[22px]'>
            REBEL SOCKERS
          </p>
        </div>

        <CallToAction />
        <div className='mt-[162px]'>
          <p className='text-white text-base font-medium leading-normal'>
            We are exclusively minting on
          </p>
          <Image src='./mintinOn.svg' alt='mintinOn' width={254} height={41} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
