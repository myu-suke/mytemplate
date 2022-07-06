import { atom } from "recoil";
import { User } from "~/types/user";

export const userListState = atom<User[]>({
  key: "userListState", // unique ID (with respect to other atoms/selectors)
  default: [] // default value (aka initial value)
});
