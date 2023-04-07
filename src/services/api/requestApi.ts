import axios from 'axios';
export const createShortUrlApi = 'http://linkrplus.local/api/create';


export const getHeadersConfig = ()=>{
    let token= localStorage.getItem('token');
    let headersConfig;

    headersConfig = {
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    }

    return headersConfig;
}

export const getApi = async (url:string)=>{
    let data;
    try {
        const response = await axios.get(url, getHeadersConfig());
        data = response.data;
   
    } catch (err) {
        
        return false;
    }

    return data;
}
export const postApi = async (url:string, body:any)=>{
    let data;
    try {
        const response = await axios.post(url, body, getHeadersConfig());
        data = response.data;
   
    } catch (err) {
        if (axios.isAxiosError(err)) {
            return { 
                success: false,
                data: err.response
            };
        }    
    }

    // if(data.status === "422"){
    //     return { 
    //         success: false,
    //         data: data.response
    //     };
    // }

    return { 
        success: true,
        data: data
    };
}
export const putApi = async (url:string, body:any)=>{
    let data;
    try {
        const response = await axios.put(url, body, getHeadersConfig());
        data = response.data;
   
    } catch (err) {
        if (axios.isAxiosError(err)) {
            return { 
                success: false,
                data: err.response
            };
        }    
    }

    return { 
        success: true,
        data: data
    };
}
export const deleteApi = async (url:string)=>{
    let data;
    try {
        const response = await axios.delete(url, getHeadersConfig());
        data = response.data;
   
    } catch (err) {
        if (axios.isAxiosError(err)) {
            return { 
                success: false,
                data: err.response
            };
        }    
    }

    return { 
        success: true,
        data: data
    };
}