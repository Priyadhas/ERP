import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";

const ClientForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Client Details</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <label>Client Name</label>
        <Input {...register("clientName")} placeholder="Client Name" required />

        <label>Contact Person</label>
        <Input {...register("contactPerson")} placeholder="Contact Person" required />

        <label>Designation</label>
        <Input {...register("designation")} placeholder="Designation" required />

        <label>Contact Number</label>
        <Input {...register("contactNumber")} placeholder="Contact Number" type="tel" required />

        <label>Email ID</label>
        <Input {...register("emailId")} placeholder="Email ID" type="email" required />

        <label>Sales Person</label>
        <Input {...register("salesPerson")} placeholder="Sales Person" required />

        <label>UAE/Export</label>
        <Select {...register("uaeExport")}>
          <option value="UAE">UAE</option>
          <option value="Export">Export</option>
        </Select>

        <label>Type</label>
        <Input {...register("type")} placeholder="Type" required />

        <label>Status</label>
        <Select {...register("status")}>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </Select>

        <label>Website</label>
        <Input {...register("website")} placeholder="Website" type="url" />

        <label>About</label>
        <Textarea {...register("about")} placeholder="About" />

        <label>Last Ping Date</label>
        <Input {...register("lastPingDate")} type="date" required />

        <label>Ping Comment</label>
        <Textarea {...register("pingComment")} placeholder="Ping Comment" />

        <div className="flex gap-4">
          <Button type="submit">Submit</Button>
          <Button type="button" onClick={() => reset()}>Reset</Button>
        </div>
      </form>
    </div>
  );
};

export default ClientForm;
