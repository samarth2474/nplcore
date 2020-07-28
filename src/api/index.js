// API calls

const url ='http://localhost:3000/timeseries'


export const keys = async() => {
    
    let response= await fetch(`${url}/keys`)
    let data = response.json
    return data
    
       

};



export const values = async() => {
    
    await fetch(`${url}/values`)
    .then((response) => response.json())
    .then((data) => {
       console.log(data)
       return data
    })
        

};

