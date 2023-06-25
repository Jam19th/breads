const React = require('react');
const Default = require('./layout/default.jsx');

function Index({ breads, title }) {
    return (
        <Default title={title}>
            <h2>Index Page</h2>
            <ul>
                {
                    breads.map((bread, index) => {
                        return (
                            <li key={index}>
                                <a href={`/breads/${index}`}>
                                    {bread.name}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            {/* <p>I have {breads[1].name} bread</p> */}
        </Default>
    )
}

module.exports = Index;