const submitForm = async (formData) => {
  try {
    const res = await fetch("http://localhost:3000/submit_form.php", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      throw new Error("Failed to send message");
    }

    return await res.json();
  } catch (error) {
    throw new Error("An error occurred while sending the message");
  }
};