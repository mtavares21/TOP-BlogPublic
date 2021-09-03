import { useReducer } from "react";

// Login to Blog-API and get user details
async function logIn(user) {
  try {
    const data = await fetch("http://localhost:5000/v1/users/login", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user), // body data type must match "Content-Type" header
    });
    const parsedData = await data.json();
    return parsedData;
  } catch (err) {
    return err;
  }
}

// Create User (sign-up)
// User = { username:, password:}
async function createUser(userInfo) {
  const response = await fetch(`http://localhost:5000/v1/users/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  });
  const user = await response.json();

  return user;
}

// GET posts
async function getPosts(adminInfo) {
  const userInfo = await adminInfo;
  const response = await fetch("http://localhost:5000/v1/posts/?published", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + userInfo.token,
    },
  });
  const posts = await response.json();

  return posts;
}

// GET comments
async function getComments(user, postId) {
  // prettier-ignore
  const response = await fetch(
    `http://localhost:5000/v1/comments/?postid=${encodeURIComponent(postId)}&username=${encodeURIComponent(user.username)}&password=${encodeURIComponent(user.password)}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "x-www-form-urlencoded",
        "Accept": "*/*",
      }
    }
  );
  const comments = await response.json();
  return comments;
}

// POST comments
async function saveComment(postid, user, text) {
  // prettier-ignore
  const response = await fetch(
    `http://localhost:5000/v1/comments/?postid=${postid}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "*/*",
      },
      body: JSON.stringify({
        "username": user.username,
        "password": user.password,
        "text": text,
      }),
    }
  ).catch( err => console.log(err));
  const message = await response.json().catch((err) => console.log(err));

  return message;
}

// PUT comments
async function updateComment(id, user, text) {
  // prettier-ignore
  const response = await fetch(
    `http://localhost:5000/v1/comments/${id}/?username=${encodeURIComponent(user.username)}&password=${encodeURIComponent(user.password)}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Accept": "*/*",
      },
      body: JSON.stringify({
        "text": text,
        "author": user.user_id
      }),
    }
  ).catch( err => console.log(err));
  const message = await response.json().catch((err) => console.log(err));

  return message;
}

// DELETE comments
async function deleteComment(user, id) {
  // prettier-ignore
  const response = await fetch(
    `http://localhost:5000/v1/comments/${encodeURIComponent(id)}/?username=${encodeURIComponent(user.username)}&password=${encodeURIComponent(user.password)}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "x-www-form-urlencoded",
        "Accept": "*/*",
      }
    }
  );
  const comments = await response.json();
  return comments;
}

export {
  getPosts,
  getComments,
  logIn,
  createUser,
  saveComment,
  updateComment,
  deleteComment,
};
