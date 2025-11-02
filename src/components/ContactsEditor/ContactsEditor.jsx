import { Component } from "react";
export class ContactsEditor extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            required
          />
        </label>
        <br />
        <label>
          Number:
          <input
            type="text"
            name="number"
            value={number}
            onChange={this.handleChange}
            required
          />
        </label>{" "}
        <br />
        <button type="submit" className="button-add">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactsEditor;
