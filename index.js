let task = [
    {
        no:1,
        name:'belajar js',
        status:true

    },
    {
        no:2,
        name:'belajar express',
        status:false
    },
    {
        no:3,
        name:'belajar react',
        status:false
    }
]

let btn_todo = document.getElementById('btn_click') 

// btn_todo.addEventListener('click', () =>{
//     alert ('hello world!')
// })

function btn_click() {
    let input_task = document.getElementById('input_task').value;
    // mengambil index terakhir
    if (input_task !== '') {
        let no = task[task.length - 1].no + 1;

        let tempObj = {
            no,
            name : input_task,
            status : false
        }
    
        task.push(tempObj)
        getTask();
        document.getElementById('input_task').value = ''
    } else {
        alert ('input kosong')
    }
    
    

}

btn_todo.addEventListener('click', btn_click);

function getTask(){
        let tBody = document.getElementById('tBody');
        tBody.innerHTML= '';
        task.forEach(task => {
            tBody.innerHTML += `<tr>
            <td>${task.no}</td>
            <td>${task.name}</td>
            <td>${task.status}</td>
            </tr>`
        })
}       

