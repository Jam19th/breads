const React = require('react');
const Default = require('./layout/default.jsx');

function Index({breads}) {
    return (
        <Default>
            <h2>Index Page</h2>
            <ul>
                {
                    breads.map(bread => {
                        return (
                            <li key = {index}>
                            <a href={`/breads/${index}`}></a>
                                {bread.name}
                            </li>
                        )
                    })
                }
            </ul>
            <p>I have {breads[1].name} bread</p>
        </Default>
    )
}

module.exports = Index;