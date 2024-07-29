import React from 'react';
import useStore from "../Store";

const Api = () => {

    const toggleVisible = useStore((state:any) => state.toggleVisible);

    return (
        <div
            className={`info w-[750px] h-[750px] rounded-[75px] bg-white flex flex-col items-center justify-center gap-[35px] relative`}>
            <h2 className={`text-[48px] font-bold`}>Находиться в разработке</h2>
            <button className={`w-[50px] h-[50px] absolute top-[40px] right-[40px]`}
                    onClick={() => toggleVisible(`none`)}><img src="/cross.svg" alt=""/></button>
            <h3 className={`text-[14px] font-semibold`}>По всем вопросам можете написать нам в telegram, и мы дадим вам
                доступ к бета-версии</h3>
        </div>
    );
};

export default Api;