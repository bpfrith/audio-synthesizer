var React = require('react');
var WAVEFORMS = require('./Waveforms');

class Synth extends React.component{
  getInitialState : function() {
    return {
      waveform : WAVEFORMS.SINE.id,
      frequency : 250,
      duration : 500
    }
  },
  setWaveform : function(event) {
    this.setState({waveform: event.target.value});
  },
  setFrequency : function(event) {
    this.setState({frequency : event.target.value});
  },
  setDuration : function(event {
    this.setState({duration : event.target.value});
  },
  playSound : function() {
    this.props.makeSound(this.state.waveform, this.state.frequency, this.state.duration);
  },
  render : function() {
    return (
      <div>
          <h1>A simple web audio synthesizer</h1>
          <p>Play with the dropdowns and hit 'play' to create a tone</p>

          <div className="control">
            <label htmlFor="waveform">Waveform</label>
            <select id="waveform" value={this.state.waveform} onChange={this.setWaveform}>
              <option value={WAVEFORMS.SINE.id}>{WAVEFORMS.SINE.userTerm}</option>
              <option value={WAVEFORMS.SAWTOOTH.id}>{WAVEFORMS.SAWTOOTH.userTerm}</option>
              <option value={WAVEFORMS.TRIANGLE.id}>{WAVEFORMS.TRIANGLE.userTerm}</option>
              <option value={WAVEFORMS.SQUARE.id}>{WAVEFORMS.SQUARE.userTerm}</option>
            </select>
          </div>

          <div className="control">
            <label htmlFor="frequency">Frequency</label>
            <input id="frequency" type="text" value={this.state.frequency} onChange={this.setFrequency}></input>
          </div>

          <div className="control">
            <label htmlFor="duration">Duration (milliseconds)</label>
            <input id="duration" type="text" value={this.state.duration} onChange={this.setDuration}></input>
          </div>

          <button onClick={this.playSound}>Play!</button>
      </div>
    )
  }
})

export default Synth