const React = require('react');
const Default = require('./layout/default.jsx');

function New({ bakers }) {
    console.log({ bakers });
    return (
        <Default title='Add a new bread'>
            <h2>Add a new bread</h2>
            <div className="backButton" >
                <a href="/breads"><button>Go back to the index</button></a>
            </div>
            <form action="/breads" method="POST">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    required
                />
                <label htmlFor="image">Image</label>
                <input
                    type="text"
                    name="image"
                    id="image"
                    pattern="^(https?:\/\/)?[^\s/$.?#].[^\s]*\.(jpg|jpeg|gif|png|bmp)$"
                    placeholder="Valid image link"
                />
                <label htmlFor="hasGluten">Has Gluten?</label>
                <input
                    type="checkbox"
                    name="hasGluten"
                    id="hasGluten"
                    defaultChecked
                />
                {/* <label htmlFor="ingredients">Ingredients</label>
                <input
                    type="text"
                    name="ingredients"
                    id="ingredients"
                    placeholder="Ingredients"
                    required
                /> */}
                <label htmlFor="baker">Baker</label>
                <select name="baker" id="baker">
                    {bakers.map((baker) => {
                        return (
                            <option value={baker._id} key={baker._id}>
                                {baker.name}
                            </option>
                        )
                    })}
                </select>

                {/* <select name="baker" id="baker">
                    <option value="Rachel">Rachel</option>
                    <option value="Monica">Monica</option>
                    <option value="Joey">Joey</option>
                    <option value="Chandler">Chandler</option>
                    <option value="Ross">Ross</option>
                    <option value="Phoebe">Phoebe</option>
                </select> */}
                <br />
                {/* <div style={{ color: 'red' }}>{error ? (<div>{error.errors.baker.message}</div>) : null}</div> */}
                <input type="submit" />
            </form>
        </Default>
    )
}

module.exports = New;
