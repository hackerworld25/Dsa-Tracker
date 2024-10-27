import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function Questions({no,name,qlist,Checked,setChecked,qstate,setqstate,mode}) {

  useEffect(() => {

   let strs=localStorage.getItem('Checked'+`${no}`);
   if (strs==null) return;
   
    let item1=[],item2=[];

    
    for(let i=0;i<strs.length;i++)
    {
     

       if (strs[i]==='+') { item2.push((strs[i] + strs[i+1] + strs[i+2])); i+=3;}
      else if (strs[i]!=',' && strs[i]!='/' &&  strs[i]!='"' && strs[i]!='['&&strs[i]!=']' && (strs[i]<'a'||strs[i]>'z')&& strs[i]!="\\"&& strs[i]!='+' && strs[i]!='0' ) {item2.push(strs[i]);}
    }

    setChecked(item2);
    console.log(item2);
    localStorage.setItem('Checked'+`${no}`, JSON.stringify(item2));
   
  }, []);

    let qq = qlist;
    function refreshPage() {
      window.location.reload();
    }

const handlechange = (id) => {

     if (checkID(id)===true) 
     {
        const newList = Checked.filter((idt) => idt !== id);
        setChecked(newList);

   localStorage.setItem('Checked'+`${no}`, JSON.stringify(newList));
   localStorage.setItem('qstate', JSON.stringify(newList));
 
        

    }
     else {
        
        setChecked([...Checked,id]);
        localStorage.setItem('Checked'+`${no}`, JSON.stringify(Checked+id));
     }   
 
}

let checkID  = (ele) =>
 {
    if (Checked==null) return false;
   
    for(let i=0;i<Checked.length;i++)
       {
          if (ele==Checked[i]) return true;
       }
       return false;
}


const handleID = (str) => {
  
 let ans =  str.split('');
 ans.reverse();
  ans.pop(); 
  ans.reverse();
  ans.join('');
  
  return ans;
}


return (
   <div className = {"mb-20"}>
    
    
    <div className='flex justify-center mt-24 ' >
        <img className='w-10 h-10' src="Sparkle.png"></img>
      <h1 className='text-6xl mb-3 font-extrabold' >{name}  Problems</h1>
    </div>
    <div className='flex justify-center mt-4'>
    <Link className='pr-2 text-teal-600' to="/"> Topics </Link>
    <p>  /  { name}</p>
     </div>

<div  className='flex text-center justify-center '>
<table className='   w-screen mt-20 ml-56  mr-56'>
  <tr className='  text-amber-50 bg-gradient-to-r from-purple-500 via-indigo-400 to-blue-500  text-center'>
    <th className=' border-1 font-normal  text-center p-3 w-10'>ID</th>
    <th className=' border-1 font-normal text-center p-3 '>Question(s)</th>
    <th className='border-1 font-normal text-center p-3 w-36'>Status</th>
    <th className='border-1 font-normal text-center p-3 w-20'>Done</th>
  </tr>
{
 
   
    
qq.map((ele)=>{
        {
                return (          
    <tr className = { checkID(ele.ID)==true?"bg-green-400":ele.ID%2===0?"bg-cyan-100":"bg-gradient-to-r from-blue-200 via-slate-300 to-pink-100"  }>
                    <td  className=' text-md  text-sky-700 font-medium   border-2 p-3 w-10'>
                    
                      { ele.ID[0]=='+'? handleID(ele.ID) : ele.ID }
                    
                    </td>
                    <td  className='text-md text-left text-sky-700 font-medium   border-2 p-3'><Link target="_blank" to={ele.link}>{ele.Q}</Link></td>
                    <td  className='text-md  text-sky-700 font-medium text-center  border-2 w-36'>
                        {
        checkID(ele.ID)===false ? <img className='w-5 h-5 ml-14' src={`https://imgs.search.brave.com/EuXGvqCP2SqAF_0Ge3xNUOk3dkCLO0ilM6qQGB5Heeo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pY29u/LWxpYnJhcnkuY29t/L2ltYWdlcy9jcm9z/cy1wbmctaWNvbi9j/cm9zcy1wbmctaWNv/bi0yMC5qcGc`}></img> :
        <img className='w-5 h-5 ml-14' src={`https://imgs.search.brave.com/ZeeYeEk45aD2dSjhSRXMlvJuaGmYp0ujBiGuBnUoXfg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni81NjEwLzU2MTA5/NDQucG5nP3NlbXQ9/YWlzX2h5YnJpZA`}></img> 
                        }
                        </td>
                    <td  className='text-md  text-sky-700 font-medium   border-2 p-3 w-20'>
<input   type="checkbox"  onChange={()=>{handlechange(ele.ID)}} checked={checkID(ele.ID)}/>
                      </td>
                  </tr>
                )               
                }
}
)
}
</table>
</div>
    </div>
  )
}
