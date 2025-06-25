import React, { useState } from 'react';

export default function PriceListForm() {
    const [priceList, setPriceList] = useState([
        { productCode: '', product: '', endUserPrice: '', partnerPrice: '' },
    ]);

    const [getPriceData, setGetPriceData] = useState({
        productCode: '',
        product: '',
        price: '',
    });

    const handlePriceChange = (index, field, value) => {
        const updatedList = [...priceList];
        updatedList[index][field] = value;
        setPriceList(updatedList);
    };

    const addPriceRow = () => {
        setPriceList([
            ...priceList,
            { productCode: '', product: '', endUserPrice: '', partnerPrice: '' },
        ]);
    };

    const handleEdit = () => {
        alert('Edit mode activated!');
    };

    const handleGetPriceChange = (field, value) => {
        setGetPriceData({ ...getPriceData, [field]: value });
    };


    const handleSubmit = () => {

        const submissionData = {
            priceList: priceList,
            getPriceSection: getPriceData,
        };
        alert('Successfully submitted the data');
    };

    return (
        <div className="container mt-5 mb-5 p-4 bg-white border rounded shadow">
            <h2 className="text-center text-primary mb-4">Pricelist</h2>

            {/* Top Buttons */}
            <div className="mb-4 text-end">
                <button className="btn btn-secondary me-2" onClick={handleEdit}>
                    Edit
                </button>
                <button className="btn btn-primary" onClick={addPriceRow}>
                    Add Price
                </button>
            </div>

            {/* Price Table */}
            <div className="table-responsive mb-5">
                <table className="table table-bordered text-center align-middle">
                    <thead className="table-light">
                        <tr>
                            <th>Product Code</th>
                            <th>Product</th>
                            <th>Enduser Price</th>
                            <th>Partner Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {priceList.map((row, index) => (
                            <tr key={index}>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={row.productCode}
                                        onChange={(e) => handlePriceChange(index, 'productCode', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={row.product}
                                        onChange={(e) => handlePriceChange(index, 'product', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={row.endUserPrice}
                                        onChange={(e) => handlePriceChange(index, 'endUserPrice', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={row.partnerPrice}
                                        onChange={(e) => handlePriceChange(index, 'partnerPrice', e.target.value)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Submit Button */}
            <div className="text-center">
                <button className="btn btn-success btn-lg px-5" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
    );
}
