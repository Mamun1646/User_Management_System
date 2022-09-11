import React ,{useEffect, useState} from "react";


const URL='https://rest-api-without-db.herokuapp.com/users';

const App=()=>{
    const [users,setUsers]=useState([]);
    const getAllUsers=()=>{
        fetch(URL)
        .then((res) =>res.json())
        .then((data)=>setUsers(data.users))
        .catch((error)=>
            console.log(error))
        
        
    }

    useEffect(()=>{
        getAllUsers();

    },[])
    return (
        <div>
            <h1>Student Management System</h1>
           <section className="user">
            {users.map((user)=>{
                const {id,username,email} =user;
                return (
                  <article key={id} className="user" >
                   <h4>{username}</h4> 
                  <p> {email}</p> 
                    <button>Edit</button>
                   < button>Delete</button>
                  </article>
                )
            })}
           </section>

        </div>
    )
}
export default App;