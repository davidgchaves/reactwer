export default class Main extends React.Component {
  render () {
    return (<h1>Inside a React Component</h1>);
  }
}

$(() => { React.render(<Main />, document.getElementById('app')); });
