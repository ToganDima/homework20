import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Contact from "../contacts/Contact";
import "../contacts/ContactList.css";
import searchIcon from "../../images/Search.png";
import ContactsArray from "../contacts/InitialContactsArray";

function ContactList() {
  const [contacts, setContacts] = useState(ContactsArray);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState(["male", "female", "notSpecified"]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleFilterChange = (e) => {
    if (e.target.checked) {
      setFilters([...filters, e.target.value]);
    } else {
      setFilters(filters.filter((val) => val !== e.target.value));
    }
  };

  function getFilteredContacts() {
    return ContactsArray.filter((contactObj) => {
      let fullName = (
        contactObj.firstName +
        " " +
        contactObj.lastName
      ).toLowerCase();
      if (
        (search === "" ||
          fullName.includes(search) ||
          contactObj.phone.includes(search)) &&
        filters.includes(contactObj.gender)
      ) {
        return contactObj;
      }
    });
  }

  useEffect(() => {
    const filteredContacts = getFilteredContacts();
    setContacts(filteredContacts);
  }, [search, filters]);

  return (
    <div className="main">
      <div className="search-bar">
        <div className="gender-check">
          <label>
            <input
              type="checkbox"
              value="male"
              defaultChecked
              onChange={handleFilterChange}
            />
            <span>Male</span>
          </label>
          <label>
            <input
              type="checkbox"
              value="female"
              defaultChecked
              onChange={handleFilterChange}
            />
            <span>Female</span>
          </label>
          <label>
            <input
              type="checkbox"
              value="notSpecified"
              defaultChecked
              onChange={handleFilterChange}
            />
            <span>Not specified</span>
          </label>
        </div>
        <div className="search-input">
          <img src={searchIcon} alt="searh" />
          <input
            type="search"
            placeholder="Search..."
            onChange={handleSearchChange}
            value={search}
          />
        </div>
      </div>
      <div className="contact-list">
        {contacts.map((contactEl, index) => (
          <Link to={`/contacts/${contactEl.firstName + "_" + contactEl.lastName}`}>
            <Contact key={index.toString()} contactItem={contactEl} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ContactList;
