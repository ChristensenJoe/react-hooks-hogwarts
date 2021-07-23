import React from "react"


function FilterForm({handleFilterInput, filterObj}) {
    return (
        <div>
            <h2>Filter Hogs</h2>
            <form>
                <label>
                    Search:
                    <input 
                        type='text' 
                        name='search' 
                        onChange={handleFilterInput}
                        value={filterObj.search}
                    />
                </label>
                <select name='greased' onChange={handleFilterInput} >
                    <option value={false} > All </option>
                    <option value={true} >Greased </option>
                </select>
            </form>
        </div>
    );


}


export default FilterForm