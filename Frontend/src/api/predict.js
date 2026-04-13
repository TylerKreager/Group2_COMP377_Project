import axios from 'axios';

export const sendImage = (formData) => {
    return axios.post('http://localhost:5000/classify', formData)
}
