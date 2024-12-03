// alert("Hello");
// console.log("Hello");

// int num = 10;
// let a = 10 , b= "Hello", c = false;
// const d =10;
// console.log(a,b,c); 
// a= 20;
// console.log(a,b,c); 


// let a =5,b=20;

// let total = a+b;
// console.log("The sum of "+a+" and " +b +" is " +total);
// console.log(`The sum of ${a} and  ${b}  is  ${total}`);

//const hello = document.querySelector('.hello');
//hello.style.color = "yellow";
//let a=10, b=20;
//let total = a+b;
//console.log(`The sum of ${a} and ${b} is $(total}`);
//for (i=0;i<10;i++){//(i++=i+1)
//console.log(i)
//}
//const days= ["sun","mon","tues","wed","thurs","fri","sat"]
//console.log(days.length)

//let i=0;
//while(i<days.length)
//{

// console.log(days[i])
// i++;//we must not forget to put increament in while loop
//}
//console.log(days.length)

//let i=0;
//while(i<days.length)
//{
// i++;
//}
//days.forEach(e=>{
//console.log(e,"Arrow function");
//})
//days.forEach(function(e){
// console.log(e,"fn");
//})


//let i=0,j=0;
//do{
//i++
//console.log('hello')        
//}
//while(i<10);

//next while
//while (j<10) {
// j++;
//console.log('hello')

//}
//let ages = [32, 33, 16, 40];

//const newAges =ages.filter(function(e){
//return e >= 18;//this is the main condition likewise loop

//})

const days = ["sun", "mon", "tues", "wed", "thurs", "fri", "sat"]//array is define inside [""]

const hello = document.querySelector('.hello');
const submitBtn = document.querySelector('.submit')
// days.map(day => {                                                   //new function
//     hello.innerHTML +=`${day}<br>`;                                   //+ is like increament i++
// })


submitBtn.addEventListener('click', e => {
    // hello.style.color = "red";
    // hello.classList.toggle('clicked')
    console.log("clicked")
    fetch("https://www.boredapi.com/api/activity").then(res => res.json()).then(data => {
        hello.innerHTML = `Activity:${data.activity}<br>
        Type:${data.type}`;
    })
});

//  {
//  "activity": "Fill out a basketball bracket", 
// "type": "recreational", 
// "participants": 1, 
// "price": 0, 
// "link": "", 
// "key": "7806284", 
// "accessibility": 0.1
//  }

// accessibility: 0.05
// activity: "Try a food you don't like"
// key: "6693574"
// link: ""
// participants: 1
// price: 0.1
// type: "recreational"