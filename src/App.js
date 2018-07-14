import React, { Component } from 'react';
  import 'antd/dist/antd.js';
  import 'antd/dist/antd.css';
  import { Layout } from 'antd';
import './style.css';

const { Header, Footer, Content } = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
      <div>
        <Header>
          <h1>Welcome to React</h1>
        </Header>
        <Content>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.    
        </p>
        </Content>
      </div>
      <Footer>
        </Footer>
      </Layout>
    );
  }
}

export default App;
