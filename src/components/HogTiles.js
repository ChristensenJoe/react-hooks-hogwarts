import HogTile from "./HogTile";

function HogTiles({hogs, filterObj, sort, handleHideHogClick, isHogHidden}) {


    const filteredHogs = 
    hogs.filter((hog) => {
        if(filterObj.greased === "false") {
            return true;
        }
        else{
            if(hog.greased) return true;
            return false;
        }
    }).filter((hog) => {
        if(filterObj.search === "") {
            return true;
        }
        else {
            if(hog.name.toLowerCase().includes(filterObj.search.toLowerCase())) return true;
            return false;
        }
    }).filter((hog) => {
        if(isHogHidden[hog.name]) {
            return false;
        }
        return true;
    });

    (sort==="name") ? 
    filteredHogs.sort((a,b) => (a.name > b.name) ? 1 : -1) : filteredHogs.sort((a,b) => (a.weight > b.weight) ? 1 : -1)

    return (
        <div className="ui grid container">
            {
                filteredHogs.map((hog) => {
                    return (
                        <HogTile 
                            name={hog.name}
                            specialty={hog.specialty}
                            greased={hog.greased}
                            weight={hog.weight}
                            highestMedal={hog["highest medal achieved"]}
                            image={hog.image}
                            key={hog.name}
                            handleHideHogClick={handleHideHogClick}
                        />
                    );
                })
            }
        </div>
    );
}
export default HogTiles;