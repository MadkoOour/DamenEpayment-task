import "./App.css";
import React from 'react';
import LandingPage from "./pages/landingPage/LandingPage";
import Home from "./pages/home/Home";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLandingPage: true
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ showLandingPage: false });
    }, 5000);
  }
  render() {
    const { showLandingPage } = this.state;
    return (
      <>
        {showLandingPage ? <LandingPage /> : <Home />}
      </>
    );
  }
}
export default App;
