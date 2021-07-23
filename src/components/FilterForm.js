
function FilterForm (){
    return (
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

    );


}


export default FilterForm