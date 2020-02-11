var React = require('react');

// var Examples = React.createClass({
//   render: function () {
//     return (
//       <h3>Examples Component</h3>
//     )
//   }
// }); ////////

var Examples=(props)=>{
  return (
    <div>
      <h3>Examples Component</h3>
      <h3>Inside Example Component</h3>
    </div>

  );
};

module.exports = Examples;
