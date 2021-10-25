import axios from "axios";

export const getProducts = axios.get("https://vue-study.skillbox.cc/api/products", {
    params: {
        categoryId: 3,
    },
})
    .then((response) => {
        console.log(response);
    });

