
function SortButtons({onSortClick, onShowPigs}) {
    return (
        <div>
            <button 
            onClick={onSortClick}
            name="name"
            >Name
            </button>
            <button 
            onClick={onSortClick}
            name="weight"
            >Weight
            </button>
            <button
            onClick={onShowPigs}
            >Show All Pigs
            </button>
        </div>
    );
}

export default SortButtons;