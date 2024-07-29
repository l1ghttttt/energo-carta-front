import {create} from "zustand";

const useStore = create((set) => ({
    Visible: `none`,
    toggleVisible: (target:string) => set({ Visible: target }),
    Coordinates: null,
    toggleCoordinates: (target:number[]) => set({ Coordinates: target }),
}))

export default useStore;