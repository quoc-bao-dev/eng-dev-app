import { createSlice } from "@reduxjs/toolkit";

interface ISidebarState {
    currentMenu: string;
    currentLink: string;
    isShowSidebar: boolean;
}

const initialState: ISidebarState = {
    currentMenu: "",
    currentLink: "",
    isShowSidebar: true,
};

export const counterSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        setCurMenu(state: ISidebarState, action) {
            state.currentMenu = action.payload;
        },
        setCurLink(state: ISidebarState, action) {
            state.currentLink = action.payload;
        },
        setIsShowSidebar(state: ISidebarState) {
            state.isShowSidebar = !state.isShowSidebar;
        },
    },
});

export const { setCurMenu, setCurLink, setIsShowSidebar } =
    counterSlice.actions;

export default counterSlice.reducer;
