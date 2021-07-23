import React, {useState} from "react";
import Nav from "./Nav";
import HogTiles from "./HogTiles";
import hogs from "../porkers_data";
import FilterForm from "./FilterForm";
import CreateHogForm from "./CreateHogForm";


function App() {
	const [filterObj, setFilterObj] = useState({
		search: "",
		greased: "false"
	});

	function handleFilterInput(event) {
        setFilterObj((filterObj) => {
            return {
                ...filterObj,
                [event.target.name]: event.target.value
            }
        })
    } 

	function handleFilterHogs(filterObj) {

	}

	return (
		<div className="App">
			<Nav />
			<FilterForm 
				handleFilterInput={handleFilterInput}
				filterObj={filterObj}
			/>
			<br/>
			<CreateHogForm/>
			<br/>
			<hr/>
			<br/>
			<HogTiles 
				hogs={hogs}
				filterObj={filterObj}
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
