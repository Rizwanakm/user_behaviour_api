const API_URL = "http://localhost:5000/api"; // Backend URL

export const sendUserAction = async (userId: string, page: string, action: string) => {
  try {
    const res = await fetch(`${API_URL}/action`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, page, action }),
    });
    return await res.json();
  } catch (err) {
    console.error("Error sending action:", err);
  }
};

// ✅ Make sure this is exported!
export const getAllActions = async () => {
  try {
    const res = await fetch(`${API_URL}/actions`);
    return await res.json();
  } catch (err) {
    console.error("Error fetching actions:", err);
  }
};
