import ControlsMobile from './ControlsMobile';
import Stats from './Stats';

export default function Info() {
  return (
    <div className='flex flex-col items-center'>
      <Stats />
      <ControlsMobile />
    </div>
  );
}
