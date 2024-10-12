import axios from "axios";

export const create = async (data) => {
    await axios.post('http://localhost:5000/api/travel', data);
};
