import React, { useState } from 'react';

export default function TicketEntryForm() {
    const columns = [
        "Comment", "Support Date", "Support Day", "Starting Time",
        "Ending Time", "Task % Completed", "Project Completed", "Status", "Verified By",
        "Pending Points", "Firmware Version", "Additional", "Coordinates", "Username", "Password"
    ];

    const [rows, setRows] = useState([
        Object.fromEntries(columns.map(col => [col, ""]))
    ]);

    const handleInputChange = (rowIndex, field, value) => {
        const updated = [...rows];
        updated[rowIndex][field] = value;
        setRows(updated);
    };

    const addComponentRow = () => {
        setRows([
            ...rows,
            Object.fromEntries(columns.map(col => [col, ""]))
        ]);
    };

    const handleSubmit = () => {
        alert("Ticket entry submitted successfully!");
    };

    return (
        <div
            className="container mt-5 mb-5 p-4 bg-white border rounded shadow"
            style={{ maxWidth: "75vw", overflowX: "hidden" }}
        >
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="text-primary">Ticket Entry</h2>
            </div>

            {/* Ticket Info Fields */}
            <div className="row g-3 mb-4">
                {[
                    "Ticket Reference", "Client Type", "Date", "Day",
                    "Requested Time", "Client Name", "Requester", "Task",
                    "Remote/ On site", "AMC / Covered"
                ].map((label, index) => (
                    <div className="col-md-6" key={index}>
                        <label className="form-label">{label}</label>
                        <input type="text" className="form-control" />
                    </div>
                ))}
            </div>

            {/* Add Component Table */}
            <div className="mb-5">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="text-secondary">Add Component</h5>
                    <button className="btn btn-primary btn-sm" onClick={addComponentRow}>
                        + Add Component
                    </button>
                </div>

                <div className="table-responsive" style={{ maxHeight: '300px' }}>
                    <table className="table table-bordered text-center align-middle">
                        <thead className="table-light">
                            <tr>
                                {columns.map((head, idx) => (
                                    <th key={idx} style={{ minWidth: '120px', whiteSpace: 'nowrap' }}>{head}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {columns.map((field, colIndex) => (
                                        <td key={colIndex}>
                                            <input
                                                type="text"
                                                className="form-control form-control-sm"
                                                style={{ minWidth: '120px' }}
                                                value={row[field]}
                                                onChange={(e) =>
                                                    handleInputChange(rowIndex, field, e.target.value)
                                                }
                                            />
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
                <button className="btn btn-success px-5 py-2" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
    );
}
