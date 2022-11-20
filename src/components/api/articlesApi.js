import axios from 'axios';

axios.defaults.baseURL =' https://pixabay.com/api/';
const API_KEY = '30170611-f5f506e58232a96150936505d';
export const parePage = 12;

export const fetchImages = async (query, page) => {
    const response = await axios.get(
        `?key=${API_KEY}&q=${query}&quimage_type=photo&orientation=horizontal&page=${page}&per_page=${parePage}`
    );
    return response.data;
    
}



