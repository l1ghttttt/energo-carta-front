import React from 'react';
import useStore from "../Store";

const Guide = () => {

    const toggleVisible = useStore((state:any) => state.toggleVisible);

    return (
        <div
            className={`info w-[750px] h-[750px] rounded-[75px] bg-white flex flex-col items-center gap-[20px] px-[50px] py-[25px] relative`}>
            <h2 className={`text-[48px] font-bold`}>Руководство</h2>
            <button className={`w-[50px] h-[50px] absolute top-[40px] right-[40px]`}
                    onClick={() => toggleVisible(`none`)}><img src="/cross.svg" alt=""/></button>
            <p className={`text-[20px]`}>Ниже представлена информация, которая поможет вам освоить использование нашего
                сервиса-навигатора, надеемся вся иформация будет для вас ясна и понятна</p>
            <p className={`text-[20px]`}>Основаной функционал сервиса - отслеживание свободных зарядок и их
                бронирование</p>
            <p className={`text-[24px] font-semibold`}>Пошагавая инструкция</p>
            <ol className={`flex flex-col gap-[20px]`}>
                <li>1.На левой панели-меню выберите нужный разъем, а также желаемую скорость</li>
                <li>2.Нажмите на "Мое местоположение" и дайте разрешение на доступ к геопозиции или просто укажие свой
                    адрес в строке выше
                </li>
                <li>3.Мы отобразим 5 оптимальных заярдок, выделив их на карте и добавив в панель-меню</li>
                <li>4.Выберите удобную для вас зарядку</li>
                <li>5.Перед вами должно открыться мини-меню бронирования, в нем выберите удобное для себя время и
                    заплатите залог
                </li>
                <li className={`font-semibold`}>Все готово! Вам осталось лишь приехать и поставить свой автомобиль на
                    зарядку
                </li>
            </ol>
        </div>
    );
};

export default Guide;