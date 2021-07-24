import React, {useState} from "react";
import Nav from "./Nav";
import HogTiles from "./HogTiles";
import hogs from "../porkers_data";
import FilterForm from "./FilterForm";
import CreateHogForm from "./CreateHogForm";
import SortButtons from "./SortButtons";


function App() {
	const [filterObj, setFilterObj] = useState({
		search: "",
		greased: "false"
	});
	const [sort, setSort] = useState("name");
	const [newHog, setNewHog] = useState({
		name: "",
    	specialty: "",
    	greased: true,
    	weight: "",
    	"highest medal achieved": "",
    	image: ""
	});
	const [allHogs, setAllHogs] = useState(hogs);
	
	const [isHogHidden, setIsHogHidden] = useState({});

    function handleHideHogClick(name) {
        setIsHogHidden((isHogHidden) => {
            return {
                ...isHogHidden,
                [name] : true
            }
        })
    }

	function onShowPigs() {
		setIsHogHidden([]);
	}

	function handleNewHogInput(event) {
		setNewHog((newHog) => {
			return {
				...newHog,
				[event.target.name]: ((event.target.name==="greased") ? 
				(event.target.value==="greased") ? true : false
				: event.target.value)
			}
		})
	}

	function handleNewHogSubmit(event) {
		event.preventDefault();
		setAllHogs((allHogs) => [...allHogs, newHog]);
		setNewHog({
			name: "",
			specialty: "",
			greased: true,
			weight: "",
			"highest medal achieved": "",
			image: ""
		});
	}

	function handleFilterInput(event) {
        setFilterObj((filterObj) => {
            return {
                ...filterObj,
                [event.target.name]: event.target.value
            }
        })
    } 

	function handleSort(event) {
		setSort(event.target.name)
	}

	return (
		<div className="App">
			<Nav />
			<FilterForm 
				handleFilterInput={handleFilterInput}
				filterObj={filterObj}
			/>
			<br/>
			<CreateHogForm
				newHog={newHog}
				handleNewHogInput={handleNewHogInput}
				handleNewHogSubmit={handleNewHogSubmit}
			/>
			<br/>
			<hr/>
			<br/>
			<SortButtons 
				onSortClick={handleSort}
				onShowPigs={onShowPigs}
			/>
			<br/>
			<HogTiles 
				hogs={allHogs}
				filterObj={filterObj}
				sort={sort}
				isHogHidden={isHogHidden}
				handleHideHogClick={handleHideHogClick}
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
