import type {FriendsRepository} from "domain/repositories/FriendsRepository";

type HttpClient = {
    request: (config: any) => Promise<any>;
};


export class FriendsRepositoryImpl implements FriendsRepository {
    constructor(private httpClient: HttpClient) {
    }

    async getFriends(): Promise<any> {
        // const res = await this.httpClient.request({
        //     url: "/friends",
        //     method: "GET",
        // });
        // return res?.data ?? res;
        return [
            {id: 0, name: 'Forest'},
            {id: 1, name: 'LamNguyen'}
        ];
    }
}
