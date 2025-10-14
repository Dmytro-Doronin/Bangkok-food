import {Request, Response} from "express";

export type ResponseWithData<D> = Response<D>
export type RequestWithQuery<Q> = Request<{}, {}, {}, Q>