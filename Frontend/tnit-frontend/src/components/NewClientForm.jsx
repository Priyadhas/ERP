
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleClientChange = (e) => {
    const { name, value } = e.target;
    setClientDetails({ ...clientDetails, [name]: value });
  };

  const handleContactChange = (index, e) => {
    const { name, value } = e.target;
    const updatedContacts = [...contacts];
    updatedContacts[index][name] = value;
    setContacts(updatedContacts);
  };

  const addContactRow = () => {
    setContacts([
      ...contacts,
      { name: '', designation: '', phone: '', email: '', lastPingDate: '', comment: '' },
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowSuccess(false);

    await new Promise((res) => setTimeout(res, 1500));

    console.log('Client Details:', clientDetails);
    console.log('Contacts:', contacts);

    setIsSubmitting(false);
    setShowSuccess(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container mt-5 mb-5 p-4 bg-light border rounded shadow"
    >
      <h2 className="text-center text-primary mb-4">New Client</h2>

      {showSuccess && (
        <div className="alert alert-success text-center" role="alert">
          Form submitted successfully!
        </div>
      )}

      {/* Client Details Section */}

      <div className="row g-3">
        {[
          { label: 'Client Name', name: 'name', type: 'text' },
          { label: 'Website', name: 'website', type: 'url' },
        ].map((field) => (
          <div className="col-md-6" key={field.name}>
            <label className="form-label">{field.label}</label>
            <input
              name={field.name}
              type={field.type}
              value={clientDetails[field.name]}
              onChange={handleClientChange}
              maxLength="100"
              className="form-control"
              required
              pattern={field.name === 'website' ? 'https?://.+' : undefined}
              title={
                field.name === 'website'
                  ? 'Enter a valid URL starting with http:// or https://'
                  : ''
              }
            />
          </div>
        ))}

        {[
          { label: 'Client Owner', name: 'owner', options: ['Owner A', 'Owner B'] },
          { label: 'Import/Export', name: 'importExport', options: ['Import', 'Export', 'Both'] },
          { label: 'Type', name: 'type', options: ['Retail', 'Wholesale'] },
          { label: 'Status', name: 'status', options: ['Active', 'Prospect', 'Inactive'] },
        ].map(({ label, name, options }) => (
          <div className="col-md-6" key={name}>
            <label className="form-label">{label}</label>
            <select
              name={name}
              value={clientDetails[name]}
              onChange={handleClientChange}
              className="form-select"
              required
            >
              <option value="">Select</option>
              {options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* Contacts Section */}
      <div className="mt-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="text-secondary mb-0">Contacts</h4>
          <button type="button" onClick={addContactRow} className="btn btn-outline-primary">
            + Add Contact
          </button>
        </div>
        {contacts.map((contact, index) => (
          <div className="row g-3 mb-3" key={index}>
            {['name', 'designation', 'phone', 'email', 'comment'].map((field) => (
              <div className="col-md-2" key={field}>
                <input
                  name={field}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={contact[field]}
                  onChange={(e) => handleContactChange(index, e)}
                  maxLength="50"
                  className="form-control"
                  required={field !== 'comment'}
                  type={
                    field === 'email'
                      ? 'email'
                      : field === 'phone'
                        ? 'tel'
                        : 'text'
                  }
                  pattern={field === 'phone' ? '\\d{7,15}' : undefined}
                  title={
                    field === 'email'
                      ? 'Please enter a valid email address'
                      : field === 'phone'
                        ? 'Phone must contain 7 to 15 digits'
                        : ''
                  }
                />
              </div>
            ))}
            <div className="col-md-2">
              <input
                type="date"
                name="lastPingDate"
                value={contact.lastPingDate}
                onChange={(e) => handleContactChange(index, e)}
                className="form-control"
                required
              />
            </div>
          </div>
        ))}
      </div>

      <div className="text-center pt-4">
        <button
          type="submit"
          className="btn btn-success btn-lg px-5"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
};

export default NewClientForm;
