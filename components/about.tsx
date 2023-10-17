import Image from 'next/image';

const About = () => {
  return (
    <div className='bg-[#3C3C3B] overflow-hidden'>
      <div className='relative '>
        <Image
          src='/Blood.svg'
          alt='blood'
          width={229}
          height={212}
          className='absolute top-0 right-1 w-[72px] h-[66px] lg:w-[229px] lg:h-[212px] lg:right-[358px] z-10'
        />
        <div className='lg:hidden mx-auto text-center pt-6'>
          <p className='text-white text-[40px] font-black leading-none '>
            DIRTY BADASS
          </p>
          <p className='text-[#578FDE] text-[30px] font-black mb-[22px]'>
            REBEL SOCKERS
          </p>
        </div>
        <Image
          src='/about.png'
          alt='about'
          width={410.461}
          height={419.843}
          className='mx-auto w-[197px] lg:w-[410.461px] lg:h-[419.843] lg:absolute lg:-top-[170px] lg:left-[71px]'
        />
        <Image
          src='/tridiamond.png'
          alt='tridiamond'
          width={153.771}
          height={43.373}
          className='mx-auto w-[79.805px] h-[22.50px] lg:w-[153.771px] lg:h-[43.373px] lg:absolute lg:top-[49.13px] lg:right-[107.16px]'
        />
      </div>
      <div className='pt-[37.5px] px-[27px] lg:px-0 lg:pt-[200px] lg:ml-[530px] text-center z-10'>
        <p className='text-[#69C1ED] text-[32px] lg:text-[48px] font-medium uppercase leading-none'>
          Ever wonder
        </p>
        <p className='text-[#ECECEC] text-5xl font-black uppercase'>
          Where they come from?
        </p>
      </div>
      <div className='flex flex-col lg:flex-row gap-5 lg:ml-[130px] px-[27px] mt-8 text-center lg:text-left z-10'>
        <p className='lg:w-[380px] text-[#69C1ED] font-medium text-[26px] leading-9 z-10'>
          Imagine being part of a community where being yourself is celebrated,
          where you can break free from the mundane and live life on your own
          terms. That&apos;s what being a Socker is all about
        </p>
        <p className='lg:w-[780px] text-[#ECECEC] text-[22px] font-normal leading-[30px] z-10'>
          You may have felt it growing up - that voice in your head urging you
          to go against the grain and do things differently. And now that
          you&apos;re an adult, you have the power to make your own choices and
          live your best life. No more living by someone else&apos;s rules.{' '}
          <br />
          <br />
          At Sockers, we embrace this spirit of independence and individuality.
          We don&apos;t care about fitting in or following social norms.
          Instead, we chart our own paths and blaze our own trails. <br />
          <br />
          And it&apos;s not just about art or NFTs. Being a Socker is a way of
          life - a feeling that transcends any one specific thing. We come
          together on the blockchain as Dirty Sockers to celebrate our shared
          ethos and support one another as we pursue our dreams.
          <br />
          <br /> We&apos;re building a vibrant, dynamic community of Dirty
          Sockers - one that&apos;s flat and democratised, where everyone has a
          voice and every idea is welcome. Together, we&apos;re exploring new
          horizons, learning from one another, and making money while we do it.
          <br />
          <br /> So if you&apos;re ready to embrace your inner Socker and join a
          community of like-minded individuals, we invite you to come be a part
          of the Dirty Socker way. The world is your oyster, and as a Socker,
          anything is possible.
        </p>
      </div>

      <Image
        src='/news.png'
        alt='news'
        width={1972}
        height={960}
        style={{ position: 'relative', zIndex: 1001 }}
      />
      <Image
        src='/webvis.svg'
        alt='webvis'
        width={1759}
        height={657}
        style={{ zIndex: 1001 }}
      />

      <div className='absolute bg-[#1938bb]/60 filter blur-[200px] w-[413px] h-[413px] lg:w-[1215px] lg:h-[1215px] rounded-full top-[1525px] -left-[250px] -z-1' />
      <div className='absolute bg-[#6BC6EE] filter blur-[200px] w-[259px] h-[259px] lg:w-[1059px] lg:h-[1059px] rounded-full top-[1969px] lg:top-[1881px] right-0 -z-2' />
    </div>
  );
};

export default About;
