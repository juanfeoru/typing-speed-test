import { useState } from 'react';
import iconDownArrow from '../assets/icons/icon-down-arrow.svg';

export default function Controls() {
  const [showDropdown, setShowDropdown] = useState({
    difficulty: false,
    time: false,
  });

  const [selectedOption, setSelectedOption] = useState('Easy');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const toggleDropdown = (key) => {
    setShowDropdown((prev) => ({
      difficulty: key === 'difficulty' ? !prev.difficulty : false,
      time: key === 'time' ? !prev.time : false,
    }));
  };

  return (
    <div className='flex mt-4 lg:hidden justify-between w-full gap-2'>
      <div className='relative'>
        <button
          className='flex items-center justify-between gap-4 text-white border border-neutral-400 px-4 py-1 rounded-lg w-32'
          type='button'
          onClick={() => toggleDropdown('difficulty')}
        >
          {selectedOption}
          <img src={iconDownArrow} alt='down arrow' />
        </button>

        {showDropdown.difficulty && (
          <div className='absolute top-11 left-0 bg-neutral-800 rounded-lg border border-neutral-500 z-10 w-40'>
            <ul className='text-white'>
              <li className='p-2 border-b border-neutral-500'>
                <div className='flex items-center gap-2 px-2'>
                  <input
                    value='Easy'
                    checked={selectedOption === 'Easy'}
                    onChange={handleOptionChange}
                    type='radio'
                    name='difficulty'
                    id='easy'
                  />
                  <label htmlFor='easy'>Easy</label>
                </div>
              </li>
              <li className='p-2 border-b border-neutral-500'>
                <div className='flex items-center gap-2 px-2'>
                  <input
                    value='Medium'
                    checked={selectedOption === 'Medium'}
                    onChange={handleOptionChange}
                    type='radio'
                    name='difficulty'
                    id='medium'
                  />
                  <label htmlFor='medium'>Medium</label>
                </div>
              </li>
              <li className='p-2'>
                <div className='flex items-center gap-2 px-2'>
                  <input
                    value='Hard'
                    checked={selectedOption === 'Hard'}
                    onChange={handleOptionChange}
                    type='radio'
                    name='difficulty'
                    id='hard'
                  />
                  <label htmlFor='hard'>Hard</label>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className='relative'>
        <button
          className='flex items-center justify-between gap-4 text-white border border-neutral-400 px-4 py-1 rounded-lg w-37'
          type='button'
          onClick={() => toggleDropdown('time')}
        >
          Timed (60s)
          <img src={iconDownArrow} alt='down arrow' />
        </button>

        {showDropdown.time && (
          <div className='absolute top-11 right-0 bg-neutral-800 rounded-lg border border-neutral-500 z-10 w-40'>
            <ul className='text-white'>
              <li className='p-2 border-b border-neutral-500'>
                <div className='flex items-center gap-2 px-2'>
                  <input type='radio' name='mode' id='timed' />
                  <label htmlFor='timed'>Timed (60s)</label>
                </div>
              </li>
              <li className='p-2'>
                <div className='flex items-center gap-2 px-2'>
                  <input type='radio' name='mode' id='passage' />
                  <label htmlFor='passage'>Passage</label>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
