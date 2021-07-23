import HogTile from "./HogTile";

function HogTiles({hogs}) {
    return (
        <div class="ui grid container">
            {
                hogs.map((hog) => {
                    return (
                        <HogTile 
                            name={hog.name}
                            specialty={hog.specialty}
                            greased={hog.greased}
                            weight={hog.weight}
                            highestMedal={hog["highest medal achieved"]}
                            image={hog.image}
                        />
                    );
                })
            }
        </div>
    );
}

export default HogTiles;