import React from 'react';
import Select from "../Select/Select";
import useStore from "../Store";
/*const Coordinates = useStore((state:any) => state.Coordinates)
{Coordinates !== null && (<Placemark defaultGeometry={[Coordinates[0], Coordinates[1]]}/>)}*/

const Menu = () => {

    const toggleCoordinates = useStore((state:any) => state.toggleCoordinates)

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition)
        } else  {
            alert("Геолокация не поддерживается, напишите адрес вручную")
        }
    }

    const showPosition = (position:any) => {
        toggleCoordinates([position.coords.latitude, position.coords.longitude])
        alert([position.coords.latitude, position.coords.longitude])
    }

    return (
        <aside
            className={`rounded-[10px] py-[20px] px-[25px] bg-white flex gap-[15px] flex-col items-center`}>
            <img src="/Clip%20path%20group.svg" alt="" width={`230`} height={`40`}/>

            <button
                className={`w-[350px] h-[50px] rounded-[10px] drop-shadow-md shadow-black bg-[#1b5c99] flex items-center pl-[15px] gap-[10px] text-white`}
                onClick={() => getLocation()}>
                <img src="/navigation-pointer-01.svg" alt=""/>
                <p className={`font-normal text-[14px]`}>Мое местоположение</p>
            </button>
            <div className={`w-[350px] h-[3px] bg-[#1b5c99]`}></div>


            <div className="radio-input">
                <label>
                    <input value="value-1" name="value-radio" id="value-1" type="radio" checked/>
                    <span>Медленная</span>
                </label>
                <label>
                    <input value="value-2" name="value-radio" id="value-2" type="radio"/>
                    <span>Быстрая</span>
                </label>
                <span className="selection"></span>
            </div>

            <Select/>

            <div className={`w-[350px] h-[3px] bg-[#1b5c99]`}></div>
            <h3 className={`font-semibold`}>Удобные зарядные станции:</h3>
            <ul className={`flex flex-col gap-[15px]`}>
                <li className={`w-[350px] h-[50px] flex items-center justify-between px-[15px] drop-shadow-md shadow-black bg-[#1b5c99] text-white rounded-[10px]`}>
                    <p>Зарядная станция 0</p>
                    <div>
                        <img src="/zap-fast.svg" alt=""/>
                    </div>
                </li>
                <li className={`w-[350px] h-[50px] flex items-center justify-between px-[15px] drop-shadow-md shadow-black bg-[#1b5c99] text-white rounded-[10px]`}>
                    <p>Зарядная станция 0</p>
                    <div>
                        <img src="/zap-fast.svg" alt=""/>
                    </div>
                </li>
                <li className={`w-[350px] h-[50px] flex items-center justify-between px-[15px] drop-shadow-md shadow-black bg-[#1b5c99] text-white rounded-[10px]`}>
                    <p>Зарядная станция 0</p>
                    <div>
                        <img src="/zap-fast.svg" alt=""/>
                    </div>
                </li>
                <li className={`w-[350px] h-[50px] flex items-center justify-between px-[15px] drop-shadow-md shadow-black bg-[#1b5c99] text-white rounded-[10px]`}>
                    <p>Зарядная станция 0</p>
                    <div>
                        <img src="/zap-fast.svg" alt=""/>
                    </div>
                </li>
                <li className={`w-[350px] h-[50px] flex items-center justify-between px-[15px] drop-shadow-md shadow-black bg-[#1b5c99] text-white rounded-[10px]`}>
                    <p>Зарядная станция 0</p>
                    <div>
                        <img src="/zap-fast.svg" alt=""/>
                    </div>
                </li>
            </ul>
        </aside>
    );
};

export default Menu;