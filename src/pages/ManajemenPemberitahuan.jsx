import React from 'react'
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import AddAttachment from "../assets/AddAttachment.png";

function ManajemenPemberitahuan() {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");


  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Modal</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Post Annoucement</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            {/* label 1 */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="subject" value="Subject" />
              </div>
              <TextInput
                id="subject"
                placeholder="Give some brief of title for the announcement"
                required
              />
            </div>
            {/* label 2 */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="category" value="Category" />
              </div>
              <TextInput id="category" placeholder="Optional" required />
            </div>
            {/* label */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="content" value="Content" />
              </div>
              <TextInput
                id="content"
                placeholder="What do you want to announce"
                required
              />
            </div>

            {/* upload Attachment */}
            <div className="flex items-center">
              <input type="file" id="addAttachment" className="hidden" />
              <label
                htmlFor="addAttachment"
                className="flex items-center justify-center bg-blue-500 text-white font-semibold py-2 px-4 rounded-md cursor-pointer hover:bg-blue-600 transition duration-300"
              >
                <img src={AddAttachment} alt="AddAttachment" className="mr-2" />
                Add Attachment
              </label>
            </div>

            {/* send email */}
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="Send email notification" />
                <Label htmlFor="Send email notification">
                  Send email notification
                </Label>
              </div>
              {/* dua button cancel dan post */}
              <div className="flex gap-2">
                <Button color="gray" onClick={() => setOpenModal(false)}>
                  Cancel
                </Button>
                <Button color="blue" onClick={() => setOpenModal(false)}>
                  Post
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ManajemenPemberitahuan
