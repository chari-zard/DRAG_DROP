const rightbox  = document.getElementById("right")
const leftbox = document.getElementById("left")
let lists = document.getElementsByClassName("list")

let selected = null;

let list;
for(list of lists){
    list.addEventListener('dragstart',function(e){
        selected = e.target;

        rightbox.addEventListener('dragover',function(e){
            e.preventDefault();
        })

        rightbox.addEventListener('drop',function(e){
            rightbox.appendChild(selected)
            selected=null;
        })
        leftbox.addEventListener('dragover',function(e){
            e.preventDefault();
        })

        leftbox.addEventListener('drop',function(e){
            leftbox.appendChild(selected)
            selected=null;
        })
    })
}
