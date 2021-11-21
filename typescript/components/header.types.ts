import { IUser } from "../type";

export interface IHeaderProps {
  user?: { name?: string; email?: string; image?: string; }; expires?: string;
}