import { IStories } from "./components/stories.type";

export interface IUser {
  private_account?: boolean;
  public_account?: boolean;
  followers?: number;
  following?: number;
  fullName?: string;
  bio?: string;
  stories?: IStories[];
  username: string;
  id?: number;
  profilePic: string;
}