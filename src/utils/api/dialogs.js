import { axios } from "core";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getAll: () => axios.get("/dialogs")
};