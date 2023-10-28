// const heading = React.createElement('h2', {id:'id1'}, 'Hello world from React')

const parent = React.createElement("div",{id: 'parent'},[
React.createElement('h1',{},'hello'),React.createElement('h2',{},'hello 3'),])
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent)