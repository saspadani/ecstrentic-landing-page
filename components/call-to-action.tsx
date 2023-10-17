import { Button } from './ui/button';

const CallToAction = () => {
  return (
    <div className='flex flex-col gap-4 lg:gap-2'>
      <Button size='lg'>Mint Lucky Edition</Button>
      <Button size='lg' variant='outline'>
        Buy OG Edition
      </Button>
      <Button size='lg' variant='outline'>
        Buy Early Edition
      </Button>
    </div>
  );
};

export default CallToAction;
