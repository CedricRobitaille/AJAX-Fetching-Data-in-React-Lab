let page = 1;
let pageSize = 20;
let title = null;
let status = null

const get = async (params) => {
  if ("pageCount" in params) {
    page = params.pageCount;
  }
  const paramList = `?page=${page}`
  try {
    const response = await fetch(`https://api.fbi.gov/wanted/v1/list/${paramList}`);

    // Check for errors
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    // All's good, let's parse the data
    const data = await response.json();
    console.log("Got data: ", data);
    return data.items;

  } catch (error) {
    // Log Error
    console.error("Error getting data:", error);

    // Since we still need data, let's toss in some dummy data
    const dummyResponse = await fetch("/dummy-data.json");
    const dummyData = await dummyResponse.json()
    return dummyData.items
  }
}

const show = async (params) => {
  const title = params.title;
  try {
    const response = fetch(`https://api.fbi.gov/wanted/v1/list/?title=${title}`);
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