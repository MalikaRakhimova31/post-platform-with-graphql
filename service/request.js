const url = 'http://localhost:3001?'


export const request = async (query, operationName, variable) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query, operationName: operationName, variable})
    })
    return response.json()
  
}