import axios from 'axios';
const API_PREFIX = process.env.NEXT_PUBLIC_API_PREFIX;


// with pagination
export async function fetchAllTrainingData(requestType) {
    try {
        // Create a JSON object with the specified format
        const requestBody =
        {
            "requestType": requestType, 
            
        }


        const response = await axios.post(`${API_PREFIX}/trainingrequests/?page=1&limit=5`, requestBody, {
            headers: {
                'Content-Type': 'application/json',
                'loggerMail': 'admin3@vodafone.com',
            },
        });
        return response.data
    } catch (error) {
        throw error
    }
};
export async function fetchTrainingDataByStatus(requestType,status) {
    try {
        // Create a JSON object with the specified format
        const requestBody =
        {
            "requestType": requestType,
            "status": status ,

        }


        const response = await axios.post(`${API_PREFIX}/trainingrequests/?page=1&limit=5`, requestBody, {
            headers: {
                'Content-Type': 'application/json',
                'loggerMail': 'admin3@vodafone.com',
            },
        });
        return response.data
    } catch (error) {
        throw error
    }
};


export async function UpdateTrainingStatus(UpdatedStatus, TRequestID) {
    try {
        // Create a JSON object with the specified format
        const requestBody =
        {
            "requestIds": [TRequestID],
            "newStatus": UpdatedStatus
        }

        const response = await axios.post(`${API_PREFIX}/trainingrequests/updatestatus`, requestBody, {
            headers: {
                'Content-Type': 'application/json',
                'loggerMail': 'admin3@vodafone.com',
            },
        });
        return response.data
        console.log(response.data)
    } catch (error) {
        throw error
        console.log(error)
    }
};
export async function UpdateBulkTrainingStatus(UpdatedStatus, TRequestIDs) {
    try {
        // Create a JSON object with the specified format
        const requestBody =
        {
            "requestIds": TRequestIDs,
            "newStatus": UpdatedStatus
        }

        const response = await axios.post(`${API_PREFIX}/trainingrequests/updatestatus`, requestBody, {
            headers: {
                'Content-Type': 'application/json',
                'loggerMail': 'admin3@vodafone.com',
            },
        });
        return response.data
        console.log(response.data)
    } catch (error) {
        throw error
        console.log(error)
    }
};
