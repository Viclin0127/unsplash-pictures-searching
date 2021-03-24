import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID EpizyQVdRnRQ3ulewT9BPE2AjTortobk4MANYYgO0vU"
    }
});