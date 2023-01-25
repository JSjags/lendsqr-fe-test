import moment from "moment";
import { AccountStatus, userMenuObject } from "../global";

const handleStatusStyles: Function = (status: string): AccountStatus => {
  let result: AccountStatus;

  if (status.toLocaleLowerCase() === "inactive") {
    result = {
      backgroundColor: "rgba(84,95,125, 0.1)",
      color: "#545F7D",
    };
  }
  if (status.toLocaleLowerCase() === "active") {
    result = {
      backgroundColor: "rgba(57,205,98, 0.06)",
      color: "#39CD62",
    };
  }
  if (status.toLocaleLowerCase() === "pending") {
    result = {
      backgroundColor: "rgba(233,178,0, 0.1)",
      color: "#E9B200",
    };
  }
  if (status.toLocaleLowerCase() === "blacklisted") {
    result = {
      backgroundColor: "rgba(228,3,59, 0.1)",
      color: "#E4033B",
    };
  }

  return result!;
};

const formatDate: Function = (date: object): string => {
  const formattedDate = moment(date).format("MMM DD, YYYY hh:mm A");
  return formattedDate;
};

const calculatePages: Function = (
  resultsPerPage: number,
  numOfResults: number
): number => {
  return Math.ceil(numOfResults / resultsPerPage);
};

const handleUserMenu: Function = (
  id: number,
  currentOpenMenu: userMenuObject
): object => {
  const { menuId, menuIsOpen } = currentOpenMenu;

  let menuObject: object = { menuId: id, menuIsOpen };

  if (menuIsOpen && id === menuId) {
    menuObject = {
      menuIsOpen: false,
      menuId: null,
    };
  }
  if (menuIsOpen && id !== menuId) {
    menuObject = {
      menuIsOpen: false,
      menuId: "43",
    };
  }
  if ((menuIsOpen && id !== menuId) || (!menuIsOpen && menuId == null)) {
    menuObject = {
      menuIsOpen: true,
      menuId: id,
    };
  }

  return menuObject;
};

export { handleStatusStyles, formatDate, calculatePages, handleUserMenu };
