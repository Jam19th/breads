const React = require('react');
const Default = require('./layout/default.jsx');

function error404() {
    return (
        <Default>
            <h2>404 Page not found</h2>
            <div className="backButton" >
                <a href="/breads"><button>Go back to the index</button></a>
            </div>
        </Default>
    )
}

module.exports = error404;