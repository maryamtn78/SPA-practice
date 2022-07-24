import React, { Component } from 'react';
import { Route , Switch , Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Blogs from './components/Blogs';
import Products from './components/Products';
import Product from './components/Product';
import NotFound from './components/NotFound';
import WelcomPage from './components/WelcomPage';



class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div>
          <Switch>
          <Route path="/products/:id" component={Product}/>
          <Route path="/products"   render={(props)=> <Products name="shoes" {...props} />} />
          <Route path="/blogs/:author?" component={Blogs} />
          <Redirect from='/articles' to="/blogs" />
          <Route path="/aboutUs" component={AboutUs} />
          <Route path="/notFound" component={NotFound} />
          <Route path="/welcomePage" component={WelcomPage}/>
          <Route exact path="/" component={Home} />
          <Redirect to="/notFound" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;