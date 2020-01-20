const search = async(type) => {
let response = await fetch(`http://localhost:3000/api/${type}`, {
    accept: 'application/json'
});
let result = await response.json();
return result; }

const create = async(type, data) => {
let response = await fetch(`http://localhost:3000/api/${type}`, {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify(data)
});
let result = await response.json();
return result;
}

const Client = {search, create};

export default Client;
