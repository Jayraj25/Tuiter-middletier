/**
 * @file Declares DAO interface managing Data Storage Access for tuits.
 */
import Tuit from "../models/Tuit";

export default interface TuitDaoI {
   findAllTuits(): Promise<Tuit[]>;
   findTuitsByUser(uid: string): Promise<Tuit[]>;
   findTuitById(tid: string): Promise<Tuit>;
   createTuit(uid: string, tuit: Tuit): Promise<Tuit>;
   updateTuit(tid: string, tuit: Tuit): Promise<any>;
   deleteTuit(tid: string): Promise<any>;
   deleteTuitByContent(content: string): Promise<any>;
}
