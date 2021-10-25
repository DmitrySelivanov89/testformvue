import axios from "axios";

const instance = axios.create({
    baseURL: 'https://vue-study.skillbox.cc/',
    timeout: 1000,
    headers: {'Header': 'foobar'}
});

export const getAccessKey = () => axios.get(`${instance}/api/users/accessKey`,{
    params:{}
}).then().catch()

export const getProducts = () => axios.get(`${instance}/api/products/{id}`, {
    params: {
        categoryId: 3,
    },
}).then((response) => {
    console.log(response.data);
})

export const postProducts = () => axios.post(`${instance}/api/orders`, {
    data: {

    }
}).then().catch()

