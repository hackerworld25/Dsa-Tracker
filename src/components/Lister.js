import React from "react";
import Card from "./Card.js";
import Questions from "./Questions.js";
import { Link } from "react-router-dom";
import TopLoader from "react-top-loader";
import { useEffect } from "react";
import styles from "./Lister.css"

export default function Lister({
  Checked1,
  Checked2,
  Checked3,
  Checked4,
  Checked5,
  Checked6,
  Checked7,
  Checked8,
  Checked9,
  Checked10,
  Checked11,
  Checked12,
  Checked13,
  count,
  setcount,

  
}) {

 

 
let counter=0;
for(let no=0;no<=12;no++)
{
let  op = JSON.parse(localStorage.getItem('Checked'+`${no}`));
//  let ans=0;
if (op!=null)
  {
    op  = [...new Set(op)];
    
    for(let i=0;i<op.length;i++)
    {
      
 if ((op[i]!=',' && op[i]!='/' &&  op[i]!='"' && op[i]!='['&& op[i]!=']' && (op[i]<'a'|| op[i]>'z')&& op[i]!="\\"&& op[i]!='+') || op.length==3 ) {counter++;}
    }

  }
}
setcount(counter);
 

  const containerStyles = {
    height: 20,
    backgroundColor: "#e0e0de",
    borderRadius: 10,
    marginTop:50,
    marginBottom:50,
 
}

  const fillerStyles = {
    height: '100%',
    width: `${Math.round((count*100)/100)}%`,
    backgroundColor: "#ff9933",
    borderRadius: 'inherit',
    textAlign: 'right',
  
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }
  return (
    <div >
      <h1 className="text-5xl text-center font-extrabold bg-gradient-to-br from-red-500 to-purple-600 text-transparent bg-clip-text mt-24  flex justify-center sm:text-6xl">100 DSA Questions</h1>
      <h3 className="text-3xl sm:text-4xl mt-3 text-purple-800 align-items-center text-center  flex justify-center">
        Crack Product based companies today
      </h3>


<div className={"lg:ml-52 lg:mr-52 md:ml-52 md:mr-52 ml-24 mr-24 "} style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${count }% `}</span> 
        
 </div>
</div>

      <div className="flex flex-wrap lg:p-16 md:p-16  lg:m-12 md:m-12 sm:m-4 sm:max-w-sm- mt-12  mb-12 justify-center  ">
        <Card qno={23} no={"12"} ans={Checked12} Checked={Checked12} name="Array and String" />
        <Card qno={5} no={"1"} ans={Checked1}  Checked={Checked1} name="Greedy" />
        <Card qno={13} no={"2"} ans={Checked2} Checked={Checked2} name="Dp" />
        <Card qno={7} no={"3"} ans={Checked3}  Checked={Checked3} name="Binary search" />
        <Card qno={5} no={"4"} ans={Checked12} Checked={Checked4} name="Heaps" />
        <Card qno={6} no={"5"} ans={Checked12} Checked={Checked5} name="Recursion" />
        <Card qno={8} no={"6"} ans={Checked12} Checked={Checked6} name="Linked List" />
        <Card qno={8} no={"7"} ans={Checked12} Checked={Checked7} name="Binary Tree" />
        <Card qno={6} no={"8"} ans={Checked12} Checked={Checked8} name="Binary Search Tree" />
        <Card qno={7} no={"9"}  ans={Checked12} Checked={Checked9} name="Stack and Queue" />
        <Card qno={6} no={"10"} ans={Checked12}  Checked={Checked10} name="Backtracking" />
        <Card qno={6} no={"11"} ans={Checked12}  Checked={Checked11} name="Graphs" />
        
      </div>
      <div className="mb-10">
        <div className="flex justify-around align-middle gap-8">
         
          <Link
            target="_blank"
            className=" text-blue-500 font-nunito "
            to="https://www.linkedin.com/in/piyushshuklak"
          >
             <p className="text-white font-nunito inline"> Linkedin :</p>
            {" "}
            Piyush Kumar Shukla 
          </Link>
          <Link
            target="_blank"
            className="text-white"
            to="https://github.com/hackerworld25"
          >
            Github: <span className="text-sky-600">Github/hacker26{" "}</span>
          </Link>
          
        </div>
        <div className="flex justify-center align-middle text-center m-2 text-2xl">
          {" "}
          Made with Love <span className="text-red-500 mx-2 text-5xl relative bottom-2">♥</span>
        </div>
      </div>
    </div>
  );
}
