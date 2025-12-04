import React, { useEffect, useState } from "react";
import { sendUserAction, getAllActions } from "../api";

interface Action {
  _id: string;
  userId: string;
  page: string;
  action: string;
  timestamp: string;
}

const ActionLogger: React.FC = () => {
  const [actions, setActions] = useState<Action[]>([]);
  const userId = "user123"; // Example user ID, can be dynamic

  // Fetch all actions from backend
  const fetchActions = async () => {
    const data = await getAllActions();
    setActions(data || []);
  };

  // Track page visit automatically
  useEffect(() => {
    sendUserAction(userId, window.location.pathname, "page_visit");
    fetchActions();
  }, []);

  // Track button clicks dynamically
  const handleClick = async (actionName: string) => {
    await sendUserAction(userId, window.location.pathname, actionName);
    fetchActions();
  };

  // Track clicks anywhere on page
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "BUTTON") return; // Already tracked via buttons
      sendUserAction(userId, window.location.pathname, "page_click");
      fetchActions();
    };

    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => handleClick("click_button")} style={{ margin: "5px" }}>
          Click Me
        </button>
        <button onClick={() => handleClick("scroll_page")} style={{ margin: "5px" }}>
          Scroll Page
        </button>
        <button onClick={() => handleClick("form_submit")} style={{ margin: "5px" }}>
          Submit Form
        </button>
      </div>

      <h2>Logged Actions:</h2>
      <ul>
        {actions.map((act) => (
          <li key={act._id}>
            {new Date(act.timestamp).toLocaleTimeString()} - {act.userId} - {act.page} - {act.action}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActionLogger;
