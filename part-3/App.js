const App = () => {
  return (
    <div className='Persons'>
      <Person
        name='Robert'
        age={18}
        hobbies={['Coding', 'Eating', 'Traveling']}
      />
      <Person
        name='Constantine'
        age={17}
        hobbies={['Sleeping', 'Eating', 'Fishing']}
      />
      <Person
        name='Jacqueline'
        age={18}
        hobbies={['Producing', 'Content Creation', 'Filming']}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
