const App = () => {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name='Robert' />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
