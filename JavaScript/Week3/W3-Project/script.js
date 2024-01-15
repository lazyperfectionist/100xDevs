async function getData(){
    const response = await fetch('https://fakerapi.it/api/v1/persons');
    // const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    console.log(data);
    console.log(data['data'][1]['firstname']);
    document.getElementById('data').innerHTML=JSON.stringify(data.data);
}