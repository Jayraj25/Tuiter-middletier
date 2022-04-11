/**
 * @file Controller Interface of RESTful Web service API for poll resource
 */
import { Request, Response } from "express";


export default interface PollControllerI {
    createPoll(req: Request, res: Response): void;
}