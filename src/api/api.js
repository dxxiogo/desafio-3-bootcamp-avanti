import axios from "axios";

export async function createRequest(data, path) {
    try {
      const response = await axios({
        url: `http://localhost:3333/${path}`,
        method:'POST',
        data: data
      });
      return response.data;
    } catch (err) {
      console.log(err)
    }
  }

export async function deleteRequest(path) {
    try {
      const response = await axios.delete(`http://localhost:3333/${path}`);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }
  


export async function fetchRequest (path) {
    const response = await axios.get(`http://localhost:3333/${path}`);
    return response.data;
}