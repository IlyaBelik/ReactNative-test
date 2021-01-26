import axios from "axios";

export default axios.create({
    baseURL: 'https://developers.zomato.com/api/v2.1',
    headers: {
        'user-key': '9390bd56dbcd94b6348f5fe557c2482a'
    }
})