import { Component } from "react";

export class ContactsList extends Component {
  render() {
    const { contacts, onDelete } = this.props;
    return (
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
            <button onClick={() => onDelete(id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactsList;
