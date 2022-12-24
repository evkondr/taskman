import { AnyAction } from "@reduxjs/toolkit"
import {ITodo} from "./interfaces"
import axios from "axios";
import { start } from "repl";

export const isError = (action:AnyAction) => {
    return action.type.endsWith("rejected");
}

export const pagination = (data: ITodo[], items:number) => {
    const itemsPerPage:number = items;
    const pages = Math.ceil(data.length / itemsPerPage);
    return Array.from({length: pages}, (_, index) => {
        const start = index * itemsPerPage;
        return data.slice(start, start + itemsPerPage);
    })
}