// function addTodo1(){
//     // Method 1
//     const title = document.getElementById('title').value;
//     const desc = document.getElementById('desc').value;
//     document.getElementById('container').innerHTML += `
//         <div>title ${title}</div>
//         <div>description ${desc}</div>
//         <button>Mark as Done</button>
//     `
// }   

// function addTodo2(){
//     // Method 2
//     const title = document.getElementById('title').value;
//     const desc = document.getElementById('desc').value;
//     const outerDiv = document.createElement('div');
//     outerDiv.innerHTML = title   
//     document.getElementById('container').appendChild(outerDiv)
// }


// function addTodo(){
//     // Method 3
//     const title = document.getElementById('title').value;
//     const desc = document.getElementById('desc').value;
    
//     const outerDiv = document.createElement('div');

//     const titleDiv = document.createElement('div');
//     titleDiv.innerHTML = title;

//     const descDiv = document.createElement('div');
//     descDiv.innerHTML = desc;

//     const btn = document.createElement('button');
//     btn.innerHTML = 'Mark as Done';

//     outerDiv.appendChild(titleDiv);
//     outerDiv.appendChild(descDiv);
//     outerDiv.appendChild(btn);

//     document.getElementById('container').appendChild(outerDiv);

// }   


// Create child div :: 
function createChild(title,desc){
    const child = document.createElement('div');

    const child1 = document.createElement('div');
    child1.innerHTML = title;

    const child2 = document.createElement('div');
    child2.innerHTML = desc;

    const child3 = document.createElement('button');
    child3.innerHTML = 'Mark as Done!!! ';

    child.appendChild(child1);
    child.appendChild(child2);
    child.appendChild(child3);

    console.log(child);
    return child;
}

let state = [
    {
        title:"Title 1",
        desc : "Description 1"
    },
    {
        title:"Title 2",
        desc : "Description 2"
    },
    {
        title:"Title 3",
        desc : "Description 3"
    },
    {
        title:"Title 4",
        desc : "Description 4"
    },    {
        title:"Title 5",
        desc : "Description 1"
    },
    {
        title:"Title 6",
        desc : "Description 2"
    },
    {
        title:"Title 7",
        desc : "Description 3"
    },
    {
        title:"Title 8",
        desc : "Description 4"
    }
]

function updateDomAccToState(){
    const parent = document.getElementById('container');
    parent.innerHTML ="";
    for(let i=0;i<state.length;i++){
        const child = createChild(state[i].title,state[i].desc);
        console.log(child);
        parent.appendChild(child);
    }
}

   
updateDomAccToState();

