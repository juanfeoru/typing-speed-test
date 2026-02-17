import { useState } from 'react';

export default function ControlsDesktop() {
  const [difficulty, setDifficulty] = useState('medium');
  const [mode, setMode] = useState('timed');

  const difficulties = ['Easy', 'Medium', 'Hard'];
  const modes = [
    { label: 'Timed (60s)', value: 'timed' },
    { label: 'Passage', value: 'passage' },
  ];

  return (
    <div className='hidden lg:flex lg:items-center'>
      <div className='flex items-center gap-2 mr-6'>
        <span className='text-neutral-400 font-medium'>Difficulty:</span>
        <div className='flex gap-1'>
          {difficulties.map((level) => (
            <button
              key={level}
              onClick={() => setDifficulty(level.toLowerCase())}
              className={`px-3 py-1 text-sm rounded-lg transition-colors border cursor-pointer ${
                difficulty === level.toLowerCase()
                  ? 'bg-transparent text-blue-400 border-blue-400'
                  : 'bg-transparent text-neutral-400 border-neutral-700 hover:text-white hover:border-neutral-500'
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      <div className='w-px h-6 bg-neutral-700 mx-2'></div>

      <div className='flex items-center gap-2 ml-6'>
        <span className='text-neutral-400 font-medium'>Mode:</span>
        <div className='flex gap-1'>
          {modes.map((m) => (
            <button
              key={m.value}
              onClick={() => setMode(m.value)}
              className={`px-3 py-1 text-sm rounded-lg transition-colors border cursor-pointer ${
                mode === m.value
                  ? 'bg-transparent text-blue-400 border-blue-400'
                  : 'bg-transparent text-neutral-400 border-neutral-700 hover:text-white hover:border-neutral-500'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
