import React from 'react';
import useStore from "../Store";

const About = () => {

    const toggleVisible = useStore((state:any) => state.toggleVisible);

    return (
        <div className={`info w-[750px] h-[750px] rounded-[75px] bg-white flex flex-col items-center gap-[20px] px-[50px] py-[25px] relative`}>
            <button className={`w-[50px] h-[50px] absolute top-[40px] right-[40px]`} onClick={() => toggleVisible(`none`)}><img src="/cross.svg" alt=""/></button>
            <h2 className={`text-[48px] font-bold`}>О нас</h2>
            <p className={`text-[20px]`}>Данный проект созданной группой из 6 человек в рамках проектный школы Россети на базе УГ МГУ в 2024 году за 10 дней. Мы создавали этот сервис для плавного распределенния мощностей среди зарядок, что положтельно сказалось как для пользователей електромобилей так и для поставщиков енергии, одним из которых является сеть компания Россети.</p>
            <p className={`text-[20px]`}>Мы надеемся что наш проект может послужить полезным референсом для создания подобной схемы глобально по Московской области, но для этого придется принять ряд законопроектов по реализации подобной связанной схемы, что очень даже реализуемо</p>
            <p className={`text-[24px] font-semibold`}>Над проектом работали:</p>
            <ul>
                <li>Шкаф - техлид</li>
                <li>Никита - лучший фронтендер московской области</li>
                <li>Леонид - наш спикер и продукт менеджер</li>
                <li>Иван - универсальчик</li>
                <li>Артем - пилил авторизацию 5 дней</li>
                <li>Дима - АРЧЧЧ</li>
            </ul>
        </div>
    );
};

export default About;