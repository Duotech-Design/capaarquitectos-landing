export const submitForm = async (data: Record<string, string>) => {
  try {
    const response = await fetch("https://form-sender.duotechdesign.com/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": "11e68ba6-3ca0-45a9-9575-b06228f17245",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return response.json();
    }
  } catch {
    throw new Error("Failed to submit form");
  }
};
