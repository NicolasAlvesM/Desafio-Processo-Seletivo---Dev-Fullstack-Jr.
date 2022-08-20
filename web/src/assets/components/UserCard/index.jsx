import './styles.css'

export default function UserCard({user}){
  return(
    <div class="content">
      <div class="card">
        <div class="profile">
          <img src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
          <div class="profileinfo">
            <h1>{user.name}</h1>
            <p class="username"> @{user.username} </p>
            <p class="id">id: {user.id} </p>
            <a href={`mailto:${user.email}`}>{user.email} </a>
          </div>
        </div>
      </div>
  </div>    
  );
};