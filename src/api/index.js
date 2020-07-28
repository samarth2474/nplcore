const url ='http://localhost:3000/timeseries'


export const keys = () => {
    
   fetch(`${url}/keys`)
    .then((response) => response.json())
    .then((data) => {
        // console.log(data)
        return data
    })
    
       

};



export const values = () => {
    
    fetch(`${url}/values`)
    .then((response) => response.json())
    .then((data) => {
       console.log(data)
       return data
    })
        

};

