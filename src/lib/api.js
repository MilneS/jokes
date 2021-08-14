const FIREBASE_DOMAIN = "https://jokes-dfdf6-default-rtdb.firebaseio.com/";

export async function getAllJokes() {
  const response = await fetch(`${FIREBASE_DOMAIN}/jokes.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch jokes.");
  }

  const transformedJokes = [];

  for (const key in data) {
    const jokeObj = {
      id: key,
      ...data[key],
    };

    transformedJokes.push(jokeObj);
  }

  return transformedJokes;
}

export async function getSingleJoke(jokeId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/jokes/${jokeId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch joke.");
  }

  const loadedJoke = {
    id: jokeId,
    ...data,
  };

  return loadedJoke;
}

export async function addJoke(JokeData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/jokes.json`, {
    method: "POST",
    body: JSON.stringify(JokeData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create joke.");
  }

  return null;
}

export async function addComment(requestData) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/comments/${requestData.jokeId}.json`,
    {
      method: "POST",
      body: JSON.stringify(requestData.commentData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not add comment.");
  }

  return { commentId: data.name };
}

export async function getAllComments(jokeId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${jokeId}.json`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not get comments.");
  }

  const transformedComments = [];

  for (const key in data) {
    const commentObj = {
      id: key,
      ...data[key],
    };

    transformedComments.push(commentObj);
  }

  return transformedComments;
}
