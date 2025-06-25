import React, { useState } from 'react';

export default function RenewalsForm() {
    const [rows, setRows] = useState([
        { year: '', enduser: '', invoice: '', refNo: '', product: '', qty: '', comment: '' },
    ]);

    const handleInputChange = (index, field, value) => {
        const updatedRows = [...rows];
        updatedRows[index][field] = value;
        setRows(updatedRows);
    };

    const addRenewalRow = () => {
        setRows([
            ...rows,
            { year: '', enduser: '', invoice: '', refNo: '', product: '', qty: '', comment: '' },
        ]);
    };

    const handleSubmit = () => {
        alert("Renewals submitted successfully!");
    };

    return (
        <div className="container mt-5 mb-5 p-4 bg-white border rounded shadow">
            <h2 className="text-center text-primary mb-4">Renewals</h2>

            {/* Top Controls */}
            <div className="d-flex justify-content-end align-items-center mb-4">
                <button className="btn btn-primary btn-sm" onClick={addRenewalRow}>
                    Add Renewal
                </button>
            </div>

            {/* Renewals Table */}
            <div className="table-responsive mb-4">
                <table className="table table-bordered text-center align-middle">
                    <thead className="table-light">
                        <tr>
                            <th>Year</th>
                            <th>Enduser</th>
                            <th>Invoice/Estimate</th>
                            <th>Ref.No</th>
                            <th>Product</th>
                            <th>Qty</th>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, index) => (
                            <tr key={index}>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control form-control-sm"
                                        value={row.year}
                                        onChange={(e) => handleInputChange(index, 'year', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control form-control-sm"
                                        value={row.enduser}
                                        onChange={(e) => handleInputChange(index, 'enduser', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control form-control-sm"
                                        value={row.invoice}
                                        onChange={(e) => handleInputChange(index, 'invoice', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        className="form-control form-control-sm"
                                        value={row.refNo}
                                        onChange={(e) => handleInputChange(index, 'refNo', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control form-control-sm"
                                        value={row.product}
                                        onChange={(e) => handleInputChange(index, 'product', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        className="form-control form-control-sm"
                                        value={row.qty}
                                        onChange={(e) => handleInputChange(index, 'qty', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <textarea
                                        className="form-control form-control-sm"
                                        rows="1"
                                        value={row.comment}
                                        onChange={(e) => handleInputChange(index, 'comment', e.target.value)}
                                    ></textarea>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Submit Button */}
            <div className="text-center mt-4">
                <button className="btn btn-success btn-lg px-5" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
    );
}
