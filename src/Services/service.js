const userKey = process.env.REACT_APP_USER_KEY;

const zomatoBaseUrl = "https://developers.zomato.com/api/v2.1";


export function getNameFromZomato(query, latitude, longitude) {
  return fetch(
    `${zomatoBaseUrl}/search?q=${encodeURIComponent(
      query
    )}&lat=${latitude}&lon=${longitude}`,
    {
      headers: {
        accept: "application/json",
        "user-key": "1a1dad7881f0777b13d146104820a6fb",
      },
      method: "GET",
    }
  ).then((docs) => {
    if (docs.status === 200) {
      return docs.json();
    }
    throw new Error("Not Found");
  });
}

export function getHotelInfoFromId(id) {
  return fetch(`${zomatoBaseUrl}/restaurant?res_id=${id}`, {
    headers: {
      accept: "application/json",
      "user-key": "1a1dad7881f0777b13d146104820a6fb",
    },
    method: "GET",
  }).then((docs) => {
    if (docs.status === 200) {
      return docs.json();
    }
    throw new Error("Not found");
  });
}
