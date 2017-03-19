var React = require('react')
var Synthesizer = require('./Synth')
var makeSound = require('./MakeSound')

React.render(<Synthesizer makeSound={makeSound} />, document.getElementById('app'))