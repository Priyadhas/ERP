import React, { useState } from 'react';

const GetPriceComponent = () => {
  const [getPriceData, setGetPriceData] = useState({
    productCode: '',
    product: '',
    price: '',
  });

  const handleGetPriceChange = (field, value) => {
    setGetPriceData({ ...getPriceData, [field]: value });
  };

  const handleGetPrice = () => {
    alert(`Getting price for ${getPriceData.productCode}`);
  };

  return (
    <div className="container mt-5 mb-5 p-4 bg-white border rounded shadow">
      <h2 className="text-center text-primary mb-4">Get Price</h2>

      <div className="border p-4 bg-light rounded mx-auto" style={{ maxWidth: '500px' }}>
        <div className="mb-3">
          <label className="form-label">Product Code</label>
          <input
            type="text"
            className="form-control"
            value={getPriceData.productCode}
            onChange={(e) => handleGetPriceChange('productCode', e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Product</label>
          <input
            type="text"
            className="form-control"
            value={getPriceData.product}
            onChange={(e) => handleGetPriceChange('product', e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="text"
            className="form-control"
            value={getPriceData.price}
            onChange={(e) => handleGetPriceChange('price', e.target.value)}
          />
        </div>
        <div className="text-end">
          <button className="btn btn-success" onClick={handleGetPrice}>
            Get Price
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetPriceComponent;
