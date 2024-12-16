console.log("nacho");

let a=10;
console.log(a);

const object={
    name:"yash",
    age:20,
    city:"surat",
    hobbies: ["cricket","football","reading"],
    address:{
        street:"gandhinagar",
        city:"surat",
        }
}

console.log(object);


let playerName = "Virat Kohli"; 


let scores = [34, 75, 102, 48, 87]; 


let doubleScores = scores.map(score => score * 2);
console.log("Double Scores:", doubleScores); 


let highScores = scores.filter(score => score >= 50);
console.log("High Scores:", highScores); 



console.log("Player Name:", playerName); 

console.log("Original Scores:", scores); 


let arry=[10,4,,6,1];

arry.map((val)=>{
    console.log(val);
})
