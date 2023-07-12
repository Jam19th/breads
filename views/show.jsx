const React = require('react');
const Default = require('./layout/default.jsx');

function Show({ bread, index }) {
    console.log(bread.name);
    //confirm we are getting our bread data in the terminal
    // const  ingredients = bread.ingredients.split(',');
    // console.log(ingredients);
    return (
        <Default title={bread.name}>
            {/* add a delete button */}
            <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
                <input type='submit' value="DELETE" />
            </form>
            <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>
            <h3>{bread.name}</h3>
            {/* <h3>Ingredients</h3> */}
            {/* <ul>{ingredients.map(ingredient =>(
                <li>{ingredient}</li>
            ))}</ul> */}
            <p>
                and it
                {
                    bread.hasGluten
                        ? <span> does </span>
                        : <span> does NOT </span>
                }
                have gluten.
            </p>
            <img src={bread.image} alt={bread.name} />
            <br />
            <p>Baked by {bread.baker}</p>
            <li> <a href="/breads">Go Home</a> </li>
        </Default>
    )
}

module.exports = Show;