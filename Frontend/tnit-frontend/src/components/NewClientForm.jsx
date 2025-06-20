import React, { useState } from 'react';

const NewClientForm = () => {
  const [clientDetails, setClientDetails] = useState({
    name: '',
    owner: '',
    importExport: '',
    type: '',
    status: '',
    website: '',
  });

  const [contacts, setContacts] = useState([
    { name: '', designation: '', phone: '', email: '', lastPingDate: '', comment: '' },
  ]);

  const handleClientChange = (e) => {
    const { name, value } = e.target;
    setClientDetails({ ...clientDetails, [name]: value });
  };

  const handleContactChange = (index, e) => {
    const { name, value } = e.target;
    const newContacts = [...contacts];
    newContacts[index][name] = value;
    setContacts(newContacts);
  };

  const addContactRow = () => {
    setContacts([
      ...contacts,
      { name: '', designation: '', phone: '', email: '', lastPingDate: '', comment: '' },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Client Details:', clientDetails);
    console.log('Contacts:', contacts);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 bg-white rounded shadow space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">New Client</h2>
        <span className="text-sm text-gray-500">Date: ____/____/______</span>
      </div>

      {/* Client Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Client Name</label>
          <input
            name="name"
            value={clientDetails.name}
            onChange={handleClientChange}
            className="mt-1 block w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Client Owner</label>
          <select
            name="owner"
            value={clientDetails.owner}
            onChange={handleClientChange}
            className="mt-1 block w-full border rounded p-2"
          >
            <option value="">Select</option>
            <option value="Owner A">Owner A</option>
            <option value="Owner B">Owner B</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Import/Export</label>
          <select
            name="importExport"
            value={clientDetails.importExport}
            onChange={handleClientChange}
            className="mt-1 block w-full border rounded p-2"
          >
            <option value="">Select</option>
            <option value="Import">Import</option>
            <option value="Export">Export</option>
            <option value="Both">Both</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Type</label>
          <select
            name="type"
            value={clientDetails.type}
            onChange={handleClientChange}
            className="mt-1 block w-full border rounded p-2"
          >
            <option value="">Select</option>
            <option value="Retail">Retail</option>
            <option value="Wholesale">Wholesale</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            name="status"
            value={clientDetails.status}
            onChange={handleClientChange}
            className="mt-1 block w-full border rounded p-2"
          >
            <option value="">Select</option>
            <option value="Active">Active</option>
            <option value="Prospect">Prospect</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Website</label>
          <input
            name="website"
            value={clientDetails.website}
            onChange={handleClientChange}
            className="mt-1 block w-full border rounded p-2"
          />
        </div>
      </div>

      {/* Contact Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Contacts</h3>
        {contacts.map((contact, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-4">
            <input
              name="name"
              placeholder="Name"
              value={contact.name}
              onChange={(e) => handleContactChange(index, e)}
              className="border rounded p-2"
            />
            <input
              name="designation"
              placeholder="Designation"
              value={contact.designation}
              onChange={(e) => handleContactChange(index, e)}
              className="border rounded p-2"
            />
            <input
              name="phone"
              placeholder="Phone"
              value={contact.phone}
              onChange={(e) => handleContactChange(index, e)}
              className="border rounded p-2"
            />
            <input
              name="email"
              placeholder="Email"
              value={contact.email}
              onChange={(e) => handleContactChange(index, e)}
              className="border rounded p-2"
            />
            <input
              type="date"
              name="lastPingDate"
              value={contact.lastPingDate}
              onChange={(e) => handleContactChange(index, e)}
              className="border rounded p-2"
            />
            <input
              name="comment"
              placeholder="Comment"
              value={contact.comment}
              onChange={(e) => handleContactChange(index, e)}
              className="border rounded p-2"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addContactRow}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Contact
        </button>
      </div>

      {/* Submit */}
      <div className="pt-6">
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default NewClientForm;