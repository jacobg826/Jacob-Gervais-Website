import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Home from './Components/home'
import About from './Components/About'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Contact from './Components/Contact'

import './Components/images.css'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

const theme = createMuiTheme({
    palette: {
        primary: {
            main:"#636341",
        },
        secondary: {
            main:"#84B57E",
        },
        blue1: {
          main:"#C0D1BC"
        },
        blue2: {
          main:"#DCE4D4"
        },
        brown: {
          main:"CF8C60"
        },
    },
    typography: {
      fontFamily: [
        'Roboto'
      ],
      h4: {
        fontWeight: 600,
        fontSize: 28,
        lineHeight: '2rem',
      },
      h5: {
        fontWeight: 100,
        lineHeight: '2rem',
      },
    },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <NavBar/>
            <div>
              <Switch>
                <Route exact path ="/">
                  <Home/>
                </Route>
                <Route path = "/about">
                  <About/>
                </Route>
                <Route path = "/projects">
                  <Projects/>
                </Route>
                <Route path = "/skills">
                  <Skills/>
                </Route>
                <Route path = "/contact">
                  <Contact/>
                </Route>
              </Switch>
            </div>
          <Footer/>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
