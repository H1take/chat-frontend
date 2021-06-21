import { axios } from "core";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getAllByDialogId: id => axios.get("/messages?dialog=" + id)
};