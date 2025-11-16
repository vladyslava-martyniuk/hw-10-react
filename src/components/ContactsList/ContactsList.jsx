// додай зберігання контактів телефонної книги в localStorage. Використовуй методи життєвого циклу.

// Під час додавання та видалення контакту контакти зберігаються у локальне сховище.
// Під час завантаження застосунку контакти, якщо такі є, зчитуються з локального сховища і записуються у стан.

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
