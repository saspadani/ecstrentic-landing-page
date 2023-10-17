import { Button } from './ui/button';

const CallToAction = () => {
  return (
    <div className='w-[300px] flex flex-col gap-4 lg:gap-2'>
      <Button size='lg' className='rounded-3xl border border-white'>
        Mint Lucky Edition
      </Button>
      <Button
        size='lg'
        className='bg-transparent rounded-3xl border border-white'
      >
        Buy OG Edition
      </Button>
      <Button
        size='lg'
        className='bg-transparent rounded-3xl border border-white'
      >
        Buy Early Edition
      </Button>
    </div>
  );
};

export default CallToAction;
