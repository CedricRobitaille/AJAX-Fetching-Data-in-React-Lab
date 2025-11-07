const get = async () => {
  try {
    console.log("hello")
    const response = await fetch("https://api.fbi.gov/wanted/v1/list/");

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    const data = await response.json();
    console.log("Got data: ", data);
    return data;
  } catch (error) {
    console.error("Error getting data:", error);
  }
}

const show = async (param) => {
  try {
    const response = await fetch(`/${param}`);
    if (!response.ok) {
      throw new Error(error);
    }
    const data = await response.json();
    console.log("Got data: ", data);
    return data;
  } catch (error) {
    console.error("Error getting data:", error)
  }
}


export { get, show }