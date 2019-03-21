import React from 'react';
import './form.scss';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.className]: e.target.value });
  }

  handleSubmit = () => {
    const { name, message } = this.state;
    fetch('/api/guestbook', {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, message }),
    }).then((res) => {
      console.log(res);
    });
  };

  render() {
    const { name, message } = this.state;
    return (
      <div className="formholder">
        <div className="nameHolder">
          <label htmlFor="name">
            <textarea value={name} className="name" onChange={this.handleChange} />
            Name
          </label>
        </div>
        <div className="messageHolder">
          <label htmlFor="message">
            <textarea value={message} className="message" onChange={this.handleChange} />
             Message
          </label>
        </div>
        <button type="submit" onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }

}

export default Form;
