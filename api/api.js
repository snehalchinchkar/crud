import axios from "axios"


   const url=`http://localhost:3003/Employee`;

   export const getData =async () => {
    return await axios.get(`${url}`)
        }

export const postData =async (info) => {
    return await axios.post(`${url}`,info)
        }

export const editData =async (id,info) => {
    return await axios.put(`${url}/${id}`,info)
                }
    export const getupdateData =async (id) => {
        return await axios.get(`${url}/${id}`)
                        } 
                        export const deleteData =async (id) => {
                            return await axios.delete(`${url}/${id}`)
                                            }                                   