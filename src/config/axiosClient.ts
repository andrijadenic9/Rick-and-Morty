import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://rickandmortyapi.com/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosClient;
