import { useState } from 'react';
import api from './AxiosInstans';

const usePostItem = (endpoint) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const postData = async (payload) => {
        try {
            setIsLoading(true);
            const response = await api.post(endpoint, payload);
            setData(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error("Error posting data:", error);
            setIsError(true);
            setIsLoading(false);
        }
    };

    return { data, isLoading, isError, postData };
};

export default usePostItem;
