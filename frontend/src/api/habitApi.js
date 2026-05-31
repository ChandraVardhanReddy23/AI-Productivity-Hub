const API_URL =
  "http://localhost:3000/habits";

export async function getHabits() {

  const token =
    localStorage.getItem("token");

  const response = await fetch(
    API_URL,
    {
      headers: {
        Authorization:
          `Bearer ${token}`
      }
    }
  );

  return response.json();

}

export async function createHabit(
  title,category
) {

  const token =
    localStorage.getItem("token");

  const response = await fetch(
    API_URL,
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",

        Authorization:
          `Bearer ${token}`
      },

      body: JSON.stringify({
        title,category
      })
    }
  );

  return response.json();

}

export async function deleteHabit(
  id
) {

  const token =
    localStorage.getItem("token");

  await fetch(
    `${API_URL}/${id}`,
    {
      method: "DELETE",

      headers: {
        Authorization:
          `Bearer ${token}`
      }
    }
  );

}
export async function toggleHabit(id){
  const token =
    localStorage.getItem(
      "token"
    );
  await fetch(
    `${API_URL}/${id}`,
    {
      method: "PUT",
      headers: {
        Authorization:
          `Bearer ${token}`
      }
    }
  );
}
export async function updateHabit(
  id,
  title
){

  const token =
    localStorage.getItem(
      "token"
    );

  await fetch(
    `${API_URL}/edit/${id}`,
    {

      method: "PUT",

      headers: {

        "Content-Type":
          "application/json",

        Authorization:
          `Bearer ${token}`

      },

      body: JSON.stringify({
        title
      })

    }
  );

}