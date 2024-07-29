import React from 'react';
import useStore from "../Store";

const Header = () => {

    const toggleVisible = useStore((state:any) => state.toggleVisible)

    return (
        <header className={`rounded-[15px] flex select-none`}>
            <nav className={`flex rounded-l-[15px] bg-white`}>
                <ul className={`py-[15px] px-[30px] gap-[30px] font-semibold text-[24px] flex rounded-l-[15px]`}>
                    <li onClick={() => toggleVisible('about')}>О нас</li>
                    <li onClick={() => toggleVisible('guide')}>Руководство</li>
                    <li onClick={() => toggleVisible('api')}>api</li>
                </ul>
            </nav>
            <div className={`flex items-center justify-center px-[15px] bg-[#1B5C99] rounded-r-[15px]`}>
                <img src="/Без%20названия.png" alt="" onClick={() => toggleVisible('profile')} className={`w-[50px] h-[50px] rounded-[50%]`}/>
            </div>
        </header>
    );
};

export default Header;