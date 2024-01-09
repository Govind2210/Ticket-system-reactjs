"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = () => {

   const router = useRouter()

  const startingTicketData = {
    title: "",
    description: "",
    category: "",
    priority: "",
    progress: "",
    status: "not started",
    active: "Hardware Problem"
  };

  const [formData, setFormData] = useState(startingTicketData);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    console.log("submit");
    e.preventDefault();
    try {
      const res = await fetch("api/Tickets", {
        method: "POST",
        body: JSON.stringify({ formData }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!res.ok) {
        throw new Error("Failed to Create Ticket.");
      }
  
      router.refresh();
      router.push('/');
    } catch (error) {
      console.error('Error creating new ticket:', error);
    }
  };
  

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <div>
          <h3>Create Your Ticket</h3>
          <label>Title</label>
          <div>
            <input
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              required={true}
            />
          </div>
          <label>Description</label>
          <div>
            <textarea
              id="description"
              name="description"
              type="text"
              value={formData.description}
              onChange={handleChange}
              required={true}
              rows="5"
            />
            <div>
              <label>Category</label>
            </div>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="Hardware Problem">Hardware Problem</option>
              <option value="Software Problem">Software Problem</option>
              <option value="Project">Project</option>
            </select>
            <div>
              <label>Priority</label>
            </div>
            <div>
              <input
                id="priority-1"
                name="priority"
                type="radio"
                value={1}
                onChange={handleChange}
                checked={formData.priority == 1}
              />
              <label>1</label>
              <input
                id="priority-2"
                name="priority"
                type="radio"
                value={2}
                onChange={handleChange}
                checked={formData.priority == 2}
              />
              <label>2</label>
              <input
                id="priority-3"
                name="priority"
                type="radio"
                value={3}
                onChange={handleChange}
                checked={formData.priority == 3}
              />
              <label>3</label>
            </div>
            <div>
              <label>Progress</label>
            </div>
            <input
              id="progress"
              name="progress"
              type="range"
              min={0}
              max={100}
              value={formData.progress}
              onChange={handleChange}
            />
            <div>
              <label>Status</label>
            </div>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Not started">Not started</option>
              <option value="Started">Started</option>
              <option value="Done">Done</option>
            </select>
            <input type="submit" className="btn bg-white text-bold" value="Created Ticket" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default TicketForm;
