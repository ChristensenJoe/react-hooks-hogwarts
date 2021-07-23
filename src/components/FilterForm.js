
function FilterForm (){
    return (
        <div>
            <h2>Filter Hogs</h2>
        <form>
            <label>
                Search:
                <input type='text' name='search'/>


            </label>
            <select name='greased' >
                <option value = 'greased' > Greased </option>
                <option value = 'notGreased' >Not Greased </option>

            </select>

        </form>
        </div>

    );


}


export default FilterForm