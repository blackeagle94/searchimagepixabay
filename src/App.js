import { MuiThemeProvider } from 'material-ui/styles';
import React from 'react';
import './App.css';
import NavBar from './components/Navbar/NavBar';

class App extends React.Component {
	render() {
		return (
			<MuiThemeProvider>
				<div>
					<NavBar />
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
