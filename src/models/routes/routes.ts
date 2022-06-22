import { FC } from "react";

export interface IRoute {
    path: string,
    component: any,
    layout?: FC
}