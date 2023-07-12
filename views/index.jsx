const React = require('react');
const Default = require('./layout/default.jsx');

function Index({ breads, title }) {
    return (
        <Default title={title}>
            <h2>Index Page</h2>
            <div className="newButton" >
                <a href="/breads/new"><button>Add a new bread</button></a>
            </div>
            <ul>
                {
                    breads.map((bread, index) => {
                        const breadId = bread.id;

                        return (
                            <li key={index}>
                                <a href={`/breads/${breadId}`}>
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