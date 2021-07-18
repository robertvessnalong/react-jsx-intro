const Person = ({ name, age, hobbies }) => {
  let vote;
  if (age < 18) {
    vote = 'You Must Be 18!';
  } else if (age >= 18) {
    vote = 'Please Go Vote!';
  }
  return (
    <div className='person'>
      <p>Learn some information about this person</p>
      <h2>{[...name].length > 8 ? [...name].slice(0, 6).join('') : name}</h2>
      <h3>{vote}</h3>
      <h3>Hobbies</h3>
      <ul>
        {hobbies.map((hobby) => (
          <li>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};
