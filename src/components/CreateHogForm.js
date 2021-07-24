function CreateHogForm({newHog, handleNewHogInput, handleNewHogSubmit}) {
    return (
        <div>
            <h2>Add New Hog</h2>
            <form onSubmit={handleNewHogSubmit}>
                <label>
                    Name:
                    <input onChange={handleNewHogInput} type="text" name="name" value={newHog.name}/>
                </label>

                <label>
                    Specialty:
                    <input onChange={handleNewHogInput} type="text" name="specialty" value={newHog.specialty}/>
                </label>

                <label>
                    Weight:
                    <input onChange={handleNewHogInput} type="text" name="weight" value={newHog.weight}/>
                </label>

                <label>
                    Highest Medal:
                    <input onChange={handleNewHogInput} type="text" name="highest medal achieved" value={newHog["highest medal achieved"]}/>
                </label>

                <label>
                    Picture:
                    <input onChange={handleNewHogInput} type="text" name="image" value={newHog.image}/>
                </label>

                <select onChange={handleNewHogInput} name='greased' >
                    <option value='greased' > Greased </option>
                    <option value='notGreased' >Not Greased </option>
                </select>

                <button type="submit">Add Hog</button>



            </form>
        </div>




    )
}

export default CreateHogForm