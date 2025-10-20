import {Request, Response} from "express";

export type ResponseWithData<D> = Response<D>
export type RequestWithParams<P> = Request<P, {}, {}, {}>
export type RequestWithQuery<Q> = Request<{}, {}, {}, Q>