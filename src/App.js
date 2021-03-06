import React, { Component, Fragment } from 'react';
import { Transition } from 'react-spring';
import logo from './logo.svg';
import './App.css';
import { Toggle } from 'Utilities/Index.js';
import { Modal, Card } from 'Elements/Index.js';
import User from './User';
import UserProvider from './UserProvider';

class App extends Component {
  render() {
    return (
        // We're wrapping everything inside the <UserProvider> so that this way the props we're trying to pass can be used throughout all of our application.
        <UserProvider>
            <div className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
                </header>
                <User />

                <section>
                    <Toggle>
                        {({ on, toggle }) => (
                            <Fragment>
                                <button onClick={toggle}>Show / Hide</button>
                                <Transition 
                                    from={{ 
                                       opacity: 0, 
                                       bg: '#82d8d8', 
                                       height: '0px' }} 
                                    enter={{  
                                       opacity: 1, 
                                       bg: '#524763', 
                                       height: '200px' }} 
                                    leave={{ 
                                       opacity: 0, 
                                       bg: '#82d8d8', 
                                       height: '0px' }}
                                >
                                    {on && Header}
                                </Transition>
                            </Fragment>
                        )}
                    </Toggle>
                </section>
                
                <section>
                    <Toggle>
                    {({ on, toggle }) => (
                        <Fragment>
                            <button onClick={toggle}>Login</button>
                            <Modal on={on} toggle={toggle}>
                                <h1>Still in modal</h1>
                            </Modal>
                        </Fragment>
                    )}
                    </Toggle>
                </section>

            </div>
        </UserProvider>
    );
  }
}

// a state-less functional component
const Header = styles => (
    <Card 
        style={{ 
            opacity: styles.opacity,
            background: styles.bg,
            overflow: 'hidden',
            height: styles.height
      }}
   >
        <h1>Show me</h1>
        <h3>{styles.bg}</h3>
    </Card>
);


export default App;
