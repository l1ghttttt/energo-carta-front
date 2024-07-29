import React from 'react';
import useStore from "../Store";

const Profile = () => {

    const toggleVisible = useStore((state:any) => state.toggleVisible);

    return (
        <div
            className={`info w-[750px] h-[750px] rounded-[75px] bg-white flex flex-col items-center gap-[20px] px-[50px] py-[25px] relative`}>
            <button className={`w-[50px] h-[50px] absolute top-[40px] right-[40px]`}
                    onClick={() => toggleVisible(`none`)}><img src="/cross.svg" alt=""/></button>
            <h2 className={`text-[48px] font-bold`}>Ваш профиль</h2>
        </div>
    );
};

export default Profile;