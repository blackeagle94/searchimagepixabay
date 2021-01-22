import { MuiThemeProvider } from 'material-ui/styles';
import React from 'react';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import Search from './components/search/Search';

class App extends React.Component {
	render() {
		return (
			<MuiThemeProvider>
				<div>
					<NavBar />
          <Search />
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
