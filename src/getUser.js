import React, { useState, useEffect } from "react";


const url = "https://rest-api-without-db.herokuapp.com/users";

const App = () => {
  const [users, setUsers] = useState([]);
  const getAllUsers = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data.users))
      .catch((error) => console.log(error));
  };

  const userDelete=(id)=>{
    fetch(url + `/${id}`,{
        
    method : "Delete"
    })
    .then(()=>getAllUsers())
    .catch((error)=> console.log(error))
    

}

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <div>
      <h1>Users Managemenet System</h1>
      <section className="users">
        {users.map((user) => {
          const { id, username, email } = user;
          return (
            <article key={id} className="user">
              <h4>{username}</h4>
              <p>{email}</p>
              <button>Edit</button>
              <button onClick={()=>userDelete(id)}>Delete</button>
            </article>
          );
        })}
      </section>
    </div>
  );
};
export default App;
