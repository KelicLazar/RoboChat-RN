export const sendRequest = async (chat) => {
  const backend = "your-backend";
  console.log(backend);
  try {
    const response = await fetch(backend, {
      method: "POST",
      body: JSON.stringify({ chat: chat }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(backend);
    const { message } = await response.json();
    return message;
  } catch (error) {
    console.log(error);
    console.log("backend end", backend);
    return {
      role: "error",
      content:
        "Oops! Something went wrong. We're currently unable to process your request. Please try again later or contact our support team for assistance.",
    };
  }
};
