import React, { useState } from "react";

const dummyClients = [
    { name: "Tata Steel", contacts: ["Ravi", "Sneha"] },
    { name: "TechCorp", contacts: ["Arjun", "Meera"] },
    { name: "Tesla Motors", contacts: ["Elon", "John"] },
];

export default function DealPipelineForm() {
    const [deals, setDeals] = useState([
        {
            refNo: "",
            client: "",
            contactPerson: "",
            project: "",
            salesPerson: "",
            status: "",
            dealAmount: "",
            contactOptions: [],
        },
    ]);

    const [product, setProduct] = useState({
        productCode: "",
        brandName: "",
        product: "",
        description: "",
    });

    const [errors, setErrors] = useState([]);

    const handleInputChange = (index, field, value) => {
        const updatedDeals = [...deals];

        if (field === "client") {
            updatedDeals[index][field] = value;
            const matchedClient = dummyClients.find((c) =>
                c.name.toLowerCase().startsWith(value.toLowerCase())
            );
            updatedDeals[index].contactOptions = matchedClient
                ? matchedClient.contacts
                : [];
            updatedDeals[index].contactPerson = "";
        } else {
            updatedDeals[index][field] = value;
        }

        setDeals(updatedDeals);
    };

    const handleProductChange = (field, value) => {
        setProduct({ ...product, [field]: value });
    };

    const handleNewDealClick = () => {
        setDeals([
            ...deals,
            {
                refNo: "",
                client: "",
                contactPerson: "",
                project: "",
                salesPerson: "",
                status: "",
                dealAmount: "",
                contactOptions: [],
            },
        ]);
    };

    const totalDealValue = deals.reduce((sum, deal) => {
        const amount = parseFloat(deal.dealAmount);
        return sum + (isNaN(amount) ? 0 : amount);
    }, 0);

    const handleSubmit = () => {
        const newErrors = [];

        deals.forEach((deal, index) => {
            if (
                !deal.refNo ||
                !deal.client ||
                !deal.contactPerson ||
                !deal.project ||
                !deal.salesPerson ||
                !deal.status ||
                !deal.dealAmount
            ) {
                newErrors.push(`Deal ${index + 1} is incomplete.`);
            } else if (isNaN(parseFloat(deal.dealAmount))) {
                newErrors.push(`Deal ${index + 1} has invalid amount.`);
            }
        });

        if (
            !product.productCode ||
            !product.brandName ||
            !product.product ||
            !product.description
        ) {
            newErrors.push("Product section is incomplete.");
        }

        setErrors(newErrors);

        if (newErrors.length === 0) {
            alert("Form submitted successfully.");
        }
    };

    return (
        <div className="container mt-5 p-4 bg-white border rounded shadow">
            <h1 className="text-center mb-4 text-primary">Pipe Line</h1>

            <div className="mb-4 text-end">
                <button className="btn btn-info px-4" onClick={handleNewDealClick}>
                    + New Deal
                </button>
            </div>

            {errors.length > 0 && (
                <div className="alert alert-danger">
                    <ul className="mb-0">
                        {errors.map((err, i) => (
                            <li key={i}>{err}</li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="table-responsive mb-4">
                <table className="table table-bordered">
                    <thead className="table-light">
                        <tr>
                            <th>Ref.No</th>
                            <th>Client</th>
                            <th>Contact Person</th>
                            <th>Project</th>
                            <th>Sales Person</th>
                            <th>Status</th>
                            <th>Deal Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deals.map((deal, index) => (
                            <tr key={index}>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={deal.refNo}
                                        onChange={(e) =>
                                            handleInputChange(index, "refNo", e.target.value)
                                        }
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        list={`clientList-${index}`}
                                        value={deal.client}
                                        onChange={(e) =>
                                            handleInputChange(index, "client", e.target.value)
                                        }
                                        placeholder="Type client name"
                                    />
                                    <datalist id={`clientList-${index}`}>
                                        {dummyClients.map((client) => (
                                            <option key={client.name} value={client.name} />
                                        ))}
                                    </datalist>
                                </td>
                                <td>
                                    <select
                                        className="form-select"
                                        value={deal.contactPerson}
                                        onChange={(e) =>
                                            handleInputChange(index, "contactPerson", e.target.value)
                                        }
                                    >
                                        <option value="">Select</option>
                                        {deal.contactOptions.map((contact, i) => (
                                            <option key={i} value={contact}>
                                                {contact}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={deal.project}
                                        onChange={(e) =>
                                            handleInputChange(index, "project", e.target.value)
                                        }
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={deal.salesPerson}
                                        onChange={(e) =>
                                            handleInputChange(index, "salesPerson", e.target.value)
                                        }
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={deal.status}
                                        onChange={(e) =>
                                            handleInputChange(index, "status", e.target.value)
                                        }
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={deal.dealAmount}
                                        onChange={(e) =>
                                            handleInputChange(index, "dealAmount", e.target.value)
                                        }
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mb-4 text-end">
                <label className="form-label fw-semibold">Total Deal Value:</label>
                <input
                    type="text"
                    className="form-control w-25 d-inline-block ms-2"
                    value={totalDealValue}
                    readOnly
                />
            </div>

            <h1 className="text-center mb-4 text-primary">Product</h1>

            <div className="d-flex justify-content-center">
                <div
                    className="p-4 border bg-light rounded mb-4"
                    style={{ maxWidth: "700px", width: "100%" }}
                >
                    <div className="row g-3">
                        <div className="col-12">
                            <label className="form-label">Product Code</label>
                            <input
                                type="text"
                                className="form-control"
                                value={product.productCode}
                                onChange={(e) => handleProductChange("productCode", e.target.value)}
                            />
                        </div>
                        <div className="col-12">
                            <label className="form-label">Brand Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={product.brandName}
                                onChange={(e) => handleProductChange("brandName", e.target.value)}
                            />
                        </div>
                        <div className="col-12">
                            <label className="form-label">Product</label>
                            <input
                                type="text"
                                className="form-control"
                                value={product.product}
                                onChange={(e) => handleProductChange("product", e.target.value)}
                            />
                        </div>
                        <div className="col-12">
                            <label className="form-label">Product Description</label>
                            <textarea
                                className="form-control"
                                rows="4"
                                value={product.description}
                                onChange={(e) => handleProductChange("description", e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <button className="btn btn-success px-5" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
    );
}
