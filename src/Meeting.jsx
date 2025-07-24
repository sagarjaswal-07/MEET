import React from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

export default function Meeting() {
  const generateMeetingLink = async () => {
    const roomName = `real-estate-meeting-${uuidv4()}`;
    const meetingLink = `https://meet.jit.si/${roomName}`;

    try {
      toast.success("Meeting link generated!");
      window.open(meetingLink, "_blank");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (err) {
      console.error(err);
      toast.error("Error generating link");
    }
  };
  return (
    <div>
      <button
        className="btn btn-warning mx-2"
        onClick={() => generateMeetingLink()}
      >
        Generate Meeting
      </button>
    </div>
  );
}
