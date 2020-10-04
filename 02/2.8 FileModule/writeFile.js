const fs = require('fs');

const testObj = {
    name: "Ariful Islam",
    email: "ariful4082@gmail.com",
    address:{
        city:'Munshigonj', 
        country: 'Bangladesh'
    }
};

const data = JSON.stringify(testObj);

fs.writeFile('test.json', data, (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('File Write Successful')
    }
});