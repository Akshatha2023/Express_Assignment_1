const express= require("express")
const app= express();
app.use(express.json());

let studentData=[];

app.get("/alldata",(req,res)=>{
  
    res.send(studentData);
})

//Using Find method

app.post("/alldata",(req,res)=>{

    const { rollNO, name, age} = req.body;

    const temp=studentData.find(ele=>ele.rollNO==rollNO);
    if(temp){
        return res.send("Invalid")
    }
     const newStudent={rollNO, name, age};
    console.log(studentData);
    studentData.push(newStudent);
   return  res.send(newStudent);
});
app.listen(4006, () => {
    console.log("hello iam listening frm a server");
});

//Using Filter method
// app.get("/alldata",(req,res)=>{
  
//     res.send(studentData);
// })

// app.post("/alldata",(req,res)=>{

//     const { rollNO, name, age} = req.body;

//     const temp=studentData.filter(ele=>ele.rollNO==rollNO);
//     if((temp.length&&rollNO.length) > 0)
//     {
//         return res.send("Invalid")
//     }
//      const newStudent={rollNO, name, age};
//     console.log(studentData);
//     studentData.push(newStudent);
//    return  res.send(newStudent);
// });
// app.listen(4006, () => {
//     console.log("hello iam listening frm a server");
// });
