import React from 'react'
import { TitleSecondary } from '../atoms/titles';
import { ButtonRedes } from '../atoms/buttoms';

const RightMenu = () => {
  return (
    <div className='flex flex-col items-center justify-start w-[95px] h-[1000px] bg-white pt-20'>
        <TitleSecondary title={'Links'} />
        <div className='flex flex-col gap-4 pt-10'>
        <ButtonRedes iconSrc={'/icons/instagram.png'}/>
        <ButtonRedes iconSrc={'/icons/facebook.png'}/>
        <ButtonRedes iconSrc={'/icons/twitter.png'}/>
        <ButtonRedes iconSrc={'/icons/linkedin.png'}/>
        </div>
    </div>
  );
}
export default RightMenu;