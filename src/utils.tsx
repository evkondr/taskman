import { AnyAction } from "@reduxjs/toolkit"
import axios from "axios";

export const isError = (action:AnyAction) => {
    return action.type.endsWith("rejected");
}