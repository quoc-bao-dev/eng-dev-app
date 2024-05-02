export interface IMenuItem {
    id: string;
    key: string;
    title: string;
    path: string | null;
    icon: unknown | null;
    isShow: boolean;
    order: number;
    submenu?: ISubmenuItem[];
}

export interface ISubmenuItem extends Omit<IMenuItem, "submenu"> {}

export interface IGroupMenu {
    id: string;
    key: string;
    title: string;
    isShow: boolean;
    order: number;
    menu: IMenuItem[];
}

export interface ISidebarData {
    groupMenus: IGroupMenu[];
}
