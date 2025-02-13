export const getTodos = async () => {
  let url = "/";
  if (process.env.NODE_ENV === "development") {
    url = "http://localhost:6060/";
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
};

export const addTodo = async (title, order) => {
  const request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, order }),
  };
  return await fetch("http://localhost:6060/", request);
};

export const updateTodo = async () => {};
