import type {Friend} from "../models/Friends";

export interface FriendsRepository {
    getFriends(): Promise<Friend[] | any>;
}
