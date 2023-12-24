let ans = ['imthala','msdhoni','klrahul','studyme','who I m','rohitman','cricket','version','captain','language','2023','7','2005','january','2014']
let rand = Math.floor(Math.random() * ans.length)
let inp = document.getElementById('inp')
inp.placeholder = `try ${ans[rand]}`

function reason(){
    let res = document.getElementById('reason')
    if(isNaN(inp.value)){
        if(inp.value.length==7){
    
    res.innerHTML = `<h1>Thala for a reason</h1><iframe src="https://www.youtube.com/embed/AO4EZq6AUpc?autoplay=1" title="Bole jo koyal baago me Dhoni Dancing video meme" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><h1>Message is clear😌</h1>`}
        else{
        
        res.innerHTML = `<h1>Undefined Reason</h1><iframe src="https://www.youtube.com/embed/SQ3nzh0bezo?autoplay=1" title="rajnikant oh Shit meme template" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><h1>Message is not clear😔</h1>`
    }}
    else{
        let result = inp.value.split('')
        let c = 0
        for (i of result){
            b = parseInt(i)
            console.log(i)
            c+=b
        }
        if(c===7){
            res.innerHTML = `<h1>Thala for a reason</h1><iframe src="https://www.youtube.com/embed/AO4EZq6AUpc?autoplay=1" title="Bole jo koyal baago me Dhoni Dancing video meme" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><h1>Message is clear😌</h1>`
        }
        else{
            res.innerHTML = `<h1>Undefined Reason</h1><iframe  src="https://www.youtube.com/embed/SQ3nzh0bezo?autoplay=1" title="rajnikant oh Shit meme template" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><h1>Message is not clear😔</h1>`
        }
    }
}
