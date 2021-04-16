const getOptions = {
  method: "GET",
  credentials: "include",
};

const checkResponse = (response) => {
  if (!response.ok) {
    throw new Error("Fetch request failed");
  }
};

export const fetcher = async ({ queryKey }) => {
  const response = await fetch(queryKey, getOptions);
  checkResponse(response);

  return response.json();
};
