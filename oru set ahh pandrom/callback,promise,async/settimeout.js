let stock ={
    fruits : ["banana","strawberry","apple"],
    vegetable : ["onion","brinjal"],
    oil : ["groundnut","palm"]
};


let order = (fruitname,call_boy)=>{
    console.log("order started")
    setTimeout(()=>{
    console.log(`${stock.fruits[fruitname]} was selected`)
    },2000)
    setTimeout(()=>{call_boy()},5000)
}

let production = () =>{
    console.log("production Started")
}

order(Math.floor((Math.random()*100)%3),production)
