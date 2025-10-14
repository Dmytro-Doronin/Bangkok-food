import "reflect-metadata"
import { Container } from "inversify";
import {ProductQuery} from "./repositories/queryProduct";
import {ProductController} from "./controllers/productController";


export let container = new Container()

container.bind(ProductQuery).toSelf()
container.bind(ProductController).toSelf()