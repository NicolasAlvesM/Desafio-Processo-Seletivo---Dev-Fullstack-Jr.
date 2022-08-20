import { useEffect, useState } from "react";
import UserCard from "../../assets/components/UserCard";
import { userService } from "../../services/users";
import './styles.css';

export default function Users(){
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    userService.getUsers(5).then(({data})=>{
      setUsers(data);
    });
  },[]);

  return (
    <main>
      <h1 className="section-title">Usuários</h1>
      <section>
            <div className="users-container">
              {users.map((user)=>(<UserCard key={user.id} user={user} />))}
            </div>
      </section>
    </main>
  );
};