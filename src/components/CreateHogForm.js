function CreateHogForm() {
    return (
        <div>
            <h2>Add New Hog</h2>
        <form>
            <label>
                Name: 
                <input type="text" name="name"/>
            </label>

            <label>
                Specialty: 
                <input type="text" name="specialty"/>
            </label>

            <label>
                Weight: 
                <input type="text" name="weight"/>
            </label>

            <label>
                Highest Medal: 
                <input type="text" name="highest medal achieved"/>
            </label>

            <label>
                Picture: 
                <input type="text" name="image"/>
            </label>

            <select name='greased' >
                <option value = 'greased' > Greased </option>
                <option value = 'notGreased' >Not Greased </option>

            </select>



        </form>
        </div>




    )
}

export default CreateHogForm