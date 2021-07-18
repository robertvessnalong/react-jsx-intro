const Tweet = ({ username, name, date, msg }) => {
  return (
    <div>
      <h2>Username: {username}</h2>
      <h3>{name}</h3>
      <span>
        <small>{date}</small>
      </span>
      <p>{msg}</p>
    </div>
  );
};
