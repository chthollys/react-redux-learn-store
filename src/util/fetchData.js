const fetchData = async function fetchData(url, config = {}) {
  try {
    const response = await fetch(url, config);
    if (!response.ok) {
      throw new Error("Error occurred in fetching data.");
    }
    const data = await response.json();
    return { data, error: null };
  } catch (error) {
    console.error(error);
    return { data: null, error: error.message };
  }
};

export default fetchData;
