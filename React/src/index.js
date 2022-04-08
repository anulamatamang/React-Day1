import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './components/App';
// import Button from './components/Button';

// class HelloMessage extends React.Component {
//   render() {
//     return;
//     <>
//       <div>Hello {this.props.name}</div>;
//       <Button />
//     </>;
//   }
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
// ReactDOM.render(
//   <HelloMessage name='Anu' />,
//   document.getElementById('hello-example')
// );
// root.render(<HelloMessage name='Anu' />);
