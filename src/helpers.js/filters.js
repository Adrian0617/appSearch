import axios from "axios";

export async function fetchingData2(type, filter) {
    try {
      const response = await axios.get(`https://y76g48mgpg.execute-api.us-west-2.amazonaws.com/Prod/api/transactions?${type}=${filter}`, {
        headers: {
          'Authorization': "GvXcYnWD!&TuP0&8wtC6TXWG4JmonqAf3Xaj5@TTANm5aqW*FQSjMa$n6S^ksDxWQampAhceFTd3&dil3DF^5glHwb9E%p#Mfyb"
        }
      });
  
      return response.data; 
    } catch (error) {
      console.error('Error en fetchingData:', error);
      throw error; 
    }
  }