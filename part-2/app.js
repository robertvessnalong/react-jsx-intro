const App = () => {
  return (
    <div>
      <Tweet username='Batman' name='Bruce' date='Today' msg='I am Batman' />
      <Tweet
        username='Spiderman'
        name='Peter'
        date='Today'
        msg='Web Slinging'
      />
      <Tweet
        username='Flash'
        name='Barry'
        date='Today'
        msg='Fastest Man Alive'
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
