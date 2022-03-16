import IUserStat from "./userStat";

export default interface IUser {
    name: string,
    age: string,
    location: string,
    picture: string,
    stats: IUserStat[],
}