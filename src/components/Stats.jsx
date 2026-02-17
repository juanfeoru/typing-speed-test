import ControlsDesktop from './ControlsDesktop';

export default function Stats({ wpm = 40, accuracy = 94, time = '0:46' }) {
  return (
    <div className='mt-8 flex flex-col lg:flex-row lg:items-center lg:justify-between px-4 w-full max-w-[1440px] mx-auto'>
      <div className='flex justify-between w-full lg:w-auto lg:gap-8'>
        <div className='flex flex-col items-center lg:flex-row lg:gap-2'>
          <span className='text-neutral-400'>WPM:</span>
          <span className='text-white font-bold text-2xl'>{wpm}</span>
        </div>

        <div className='w-px bg-neutral-700'></div>

        <div className='flex flex-col items-center lg:flex-row lg:gap-2'>
          <span className='text-neutral-400'>Accuracy:</span>
          <span className='text-red-500 font-bold text-2xl'>{accuracy}%</span>
        </div>

        <div className='w-px bg-neutral-700'></div>

        <div className='flex flex-col items-center lg:flex-row lg:gap-2'>
          <span className='text-neutral-400'>Time:</span>
          <span className='text-yellow-400 font-bold text-2xl'>{time}</span>
        </div>
      </div>

      <ControlsDesktop />
    </div>
  );
}
