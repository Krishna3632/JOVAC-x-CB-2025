// console.log("CLASS Started");

// const pro=new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         console.log("Work done");
//         resolve("I am Krishna Sharma")
//     },5000);
// })

// console.log("Lunch");

// async function projecteval() {
//     console.log("ATTEND");
//     const profile=await pro;
//     console.log("Data",pro);
//     console.log("File Check");
// }

// projecteval();


console.log("Class Start");

const prokectSubmission=new Promise((resolve, reject) => {
    setTimeout(() =>{
        console.log("I have cpmpleted");
        resolve("Done by Krishna Sharma");
        
    },5000);
})

async function checkingEval() {
    const file=await prokectSubmission;
    console.log("File Checked",file);
    // console.log("Data",file);
    console.log("END!");
    
}
checkingEval()

console.log("I am outside the async function,whick wikk not affected b yany async function!");

