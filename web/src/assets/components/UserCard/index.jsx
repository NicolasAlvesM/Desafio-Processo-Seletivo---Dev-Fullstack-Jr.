import './styles.css'

export default function UserCard({user}){
  return(
    <div className="content">
      <div className="card">
        <div className="profile">
          <img src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
          <div className="profileinfo">
            <h1>{user.name}</h1>
            <p className="username"> @{user.username} </p>
            <p className="id">id: {user.id} </p>
            <a href={`mailto:${user.email}`}>{user.email} </a>
          </div>
        </div>
      </div>
  </div>    
  );
};