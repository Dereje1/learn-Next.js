import React from 'react';
import './form.scss';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: '',
      submitStatus: null,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.className]: e.target.value });
  }

  handleSubmit = async () => {
    const { name, message } = this.state;
    try {
      const submitted = await fetch('/api/guestbook', {
        method: 'post',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name.trim(), message: message.trim(), date: Date.now() }),
      });
      const submitResult = await submitted.json();
      /* status property of object returned  from
      server will either have success / error
      set status state briefly. If error, keep
      contents of form */
      this.setState({ submitStatus: submitResult.status });
      setTimeout(() => {
        this.setState({
          name: submitResult.status === 'success' ? '' : name,
          message: submitResult.status === 'success' ? '' : message,
          submitStatus: null,
        });
      }, 1500);
    } catch (error) {
      /* on a network/ bad connection error force error message and do
      not reset form */
      this.setState({ submitStatus: 'error' });
      setTimeout(() => {
        this.setState({
          submitStatus: null,
        });
      }, 1500);
    }
  };

  render() {
    const { name, message, submitStatus } = this.state;
    if (submitStatus) return <div className={`status ${submitStatus}`}>{submitStatus}</div>;
    return (
      <div className="formholder">
        <label htmlFor="name" className="nameHolder">
          <span className="namelabel">Name</span>
          <textarea value={name} className="name" onChange={this.handleChange} />
        </label>
        <label htmlFor="message" className="messageHolder">
          <span className="messagelabel">Message</span>
          <textarea value={message} className="message" onChange={this.handleChange} />
        </label>
        <button className="enter" type="submit" onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }

}

export default Form;
