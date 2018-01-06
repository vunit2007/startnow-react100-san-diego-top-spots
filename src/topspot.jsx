import React from 'react';

export default props => (
    <div>
    <h4>{props.name}</h4>
    <div className="description"><p>{props.description}</p></div><br />
    <a href={`https://maps.google.com/?q=${props.location[0]},${props.location[1]}`}><button>See Location</button></a><br /><br /><br />
</div>
);
