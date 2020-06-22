
import React from 'react';
import './App.css';

class TextFileReader extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			text: ""
		};
	}

	componentDidMount() {
		this.readTextFile(this.props.txt);
	}

	readTextFile = file => {
		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", file, false);
		rawFile.onreadystatechange = () => {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status == 0) {
					var allText = rawFile.responseText;
					this.setState({
						text: allText
					});
				}
			}
		};
		rawFile.send(null);
	};

	render() {
		return (
			<div>
				{this.state.text.split("\n").map((item, key) => {
					return <span key={key}>{item}<br /></span>;
				})}
			</div>
		);
	}
}

var myTxt = require("./Text.txt");

function Storys() {
    return (
      <div className="App">
         <body>
         <div class="parallax3">
        <div className="Story"> 
        <TextFileReader
		txt={myTxt}
	/>
          <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
            >
          Learn React
        </a>
        </div>   
        </div> 
        <div class="parallax">
        <div className="Story"> 
               <p>
           Edit <code>src/Home.js</code> and save to reload.
           </p>
          <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
            >
          Learn React
        </a>
        </div>   
        </div>
         </body>
      </div>
    );
  }
  
  export default Storys;
