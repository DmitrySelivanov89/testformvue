import axios from "axios";

export const getAccessKey = () => axios.get("https://vue-study.skillbox.cc/api/users/accessKey").then((resp) => {
    this.accessKey = resp.data.accessKey
    console.log(this.accessKey);
});

export const postProducts = () => {
    const {phone} = this.form
    console.log({...this.form, phone: String(phone)})
    axios.post(`https://vue-study.skillbox.cc/api/orders?userAccessKey=${this.accessKey}`, {
        ...this.form,
        phone: String(phone)
    }).then((response) => {
        console.log(response.data)
    }).catch()
    console.log('Submitted')
}
