const contacts = [
  { id: "1", name: "Ayesha", gmail: "ayesha254@gmail.com" },
  { id: "2", name: "Noor", gmail: "Noor34@gmail.com" },
  { id: "3", name: "Abbas", gmail: "abbas56@gmail.com" },
  { id: "4", name: "Rimsha", gmail: "irmsha@gmail.com" },
  { id: "5", name: "Adil", gmail: "adi93@gmail.com" },
  { id: "6", name: "Laiba", gmail: "laiba32qw@gmail.com" },
];

document.addEventListener("DOMContentLoaded", () => {
  const contactList = document.getElementById("contactList");

  function displayContacts(contacts) {
    contactList.innerHTML = ""; 
    for (const c of contacts) {
      const contactDiv = document.createElement("div");
      contactDiv.className = "contact";
      contactDiv.innerHTML = `
                <b>${c.name}</b>
                <p>${c.gmail}</p>
            `;
      contactList.appendChild(contactDiv);
    }
  }

  function addContact() {
    const nameInput = document.querySelector('input[name="name"]').value;
    const gmailInput = document.querySelector('input[name="gmail"]').value;

    if (nameInput && gmailInput) {
      const newContact = {
        id: String(contacts.length + 1), 
        name: nameInput,
        gmail: gmailInput,
      };

      contacts.push(newContact);
      displayContacts(contacts); 
    } else {
      alert("Please fill out both name and Gmail fields");
    }

    document.querySelector('input[name="name"]').value = "";
    document.querySelector('input[name="gmail"]').value = "";
  }

  function filterContacts() {
    const filterInput = document
      .querySelector('input[name="id"]')
      .value.toLowerCase();
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterInput)
    );
    displayContacts(filteredContacts);
  }

  displayContacts(contacts);

  document
    .getElementById("filter-button")
    .addEventListener("click", filterContacts);
  document.getElementById("add-button").addEventListener("click", addContact);
});
