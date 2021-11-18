import { IUser } from "../type";

export interface IPost extends IUser {
  image: string;
  caption: string
}