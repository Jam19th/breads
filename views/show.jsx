const React = require('react');
const Default = require('./layout/default.jsx');

function Show({ bread }) {
    console.log(bread.name);
    return (
        <Default title={bread.name}>
            {/* add a delete button */}
            <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
                <input type='submit' value="DELETE" />
            </form>
            <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>
            <h3>Name: {bread.name}</h3>
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
            <p>{bread.getBakedBy()}</p>
            <li> <a href="/breads">Go Home</a> </li>
        </Default>
    )
}

module.exports = Show;