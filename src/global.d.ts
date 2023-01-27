import { ReactNode } from "react";

export type Renderable =
  | string
  | number
  | ReactNode
  | ReactElement
  | Renderable[];

export type ChildrenProps = {
  children: Renderable;
  navState: boolean;
  handleMenuBtn: Function;
};

export type userObject = {
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
};

export type AccountStatus = {
  backgroundColor: string;
  color: string;
};
export type userMenuObject = {
  menuIsOpen: boolean;
  menuId: number | null;
};

export type pageNumberState = [pageNumber: number, setPageNumber: Function];
export type userMenuState = [
  userMenu: {
    menuIsOpen: boolean;
    menuId: number | null;
  },
  setUserMenu: Function
];
export type usersState = [users: object[] | null, setUsers: Function];
export type userDetailsState = [users: object | null, setUsers: Function];
export interface filterProps {
  left: number;
  children?: ReactNode;
}
