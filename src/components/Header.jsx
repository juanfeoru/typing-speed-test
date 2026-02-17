import logoSmall from '../assets/icons/logo-small.svg';
import logoLarge from '../assets/icons/logo-large.svg';
import personalBestIcon from '../assets/icons/icon-personal-best.svg';

export default function Header({ personalBest = 92 }) {
  return (
    <header className='flex justify-between items-center lg:justify-around lg:mt-8'>
      <picture>
        <source media='(min-width: 1024px)' srcSet={logoLarge} />
        <img src={logoSmall} alt='logo' />
      </picture>

      <div className='flex gap-2'>
        <img src={personalBestIcon} alt='personal best' />
        <span className='text-neutral-400 lg:hidden'>Best:</span>
        <span className='hidden text-neutral-400 lg:block'>Personal Best:</span>
        <span className='text-white'>{`${personalBest} WPM`}</span>
      </div>
    </header>
  );
}
