import React from "react";
import { useForm } from "react-hook-form";

const ClientForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="container mt-5">
      <div className="card p-4">
        <h2 className="h4 mb-4">Client Details</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="needs-validation">
          <div className="mb-3">
            <label className="form-label">Client Name</label>
            <input
              {...register("clientName")}
              type="text"
              className="form-control"
              placeholder="Client Name"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Contact Person</label>
            <input
              {...register("contactPerson")}
              type="text"
              className="form-control"
              placeholder="Contact Person"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Designation</label>
            <input
              {...register("designation")}
              type="text"
              className="form-control"
              placeholder="Designation"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Contact Number</label>
            <input
              {...register("contactNumber")}
              type="tel"
              className="form-control"
              placeholder="Contact Number"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email ID</label>
            <input
              {...register("emailId")}
              type="email"
              className="form-control"
              placeholder="Email ID"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Sales Person</label>
            <input
              {...register("salesPerson")}
              type="text"
              className="form-control"
              placeholder="Sales Person"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">UAE/Export</label>
            <select {...register("uaeExport")} className="form-select">
              <option value="UAE">UAE</option>
              <option value="Export">Export</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Type</label>
            <input
              {...register("type")}
              type="text"
              className="form-control"
              placeholder="Type"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Status</label>
            <select {...register("status")} className="form-select">
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Website</label>
            <input
              {...register("website")}
              type="url"
              className="form-control"
              placeholder="Website"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">About</label>
            <textarea
              {...register("about")}
              className="form-control"
              placeholder="About"
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Last Ping Date</label>
            <input
              {...register("lastPingDate")}
              type="date"
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Ping Comment</label>
            <textarea
              {...register("pingComment")}
              className="form-control"
              placeholder="Ping Comment"
            ></textarea>
          </div>

          <div className="d-flex gap-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button
              type="button"
              onClick={() => reset()}
              className="btn btn-secondary"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClientForm;
