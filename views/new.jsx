const React = require('react');
const Default = require('./layout/default.jsx');

function New() {
    return (
        <Default>
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
                <label htmlFor="ingredients">Ingredients</label>
                <input
                    type="text"
                    name="ingredients"
                    id="ingredients"
                    placeholder="Ingredients"
                    required
                />
                <br />
                <input type="submit" />
            </form>
        </Default>
    )
}

module.exports = New;