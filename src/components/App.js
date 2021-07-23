import React from "react";
import Nav from "./Nav";
import HogTiles from "./HogTiles";
import hogs from "../porkers_data";
import FilterForm from "./FilterForm";


function App() {


	return (
		<div className="App">
			<Nav />
			<FilterForm />
			<br/>
			<hr/>
			<br/>
			<HogTiles 
				hogs={hogs}
			/>
			{
				//App
				  //Nav
				  //FilterForm
				  //CreateHogForm
				  //HogTiles //ui grid container
				    //HogTile - SemanticCards  //ui eight wide column
			}
		</div>
	);
}

export default App;
