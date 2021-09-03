import React from "react";
import "./App.css";
import Post from "./Post";
import User from "./User";
import Login from "./Login";
import { getPosts, logIn } from "./sandbox";
import { useEffect, useState } from "react";

const adminUser = logIn({
  username: "migtavares6@gmail.com",
  password: process.env.REACT_APP_API_ADMIN_PASS,
});

const UserContext = React.createContext(null);

function App() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [adminInfo, setAdminInfo] = useState(adminUser);
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(null);
  const [checked, setChecked] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    getPosts(adminInfo)
      .then((response) => {
        setPosts((prev) => response);
      })
      .catch((err) => {
        setError((prev) => err);
      })
      .finally(() => {
        setLoading((prev) => false);
      });
  }, [adminInfo]);

  const renderPosts = () => {
    if (loading) return <div className="loader"></div>;
    else if (error) {
      return <p>"Failed to load posts."</p>;
    } else {
      return posts.map((post) => {
        const date = new Date(post.updatedAt);
        return (
          <div key={post._id} className="flex flex-wrap w-4/5 justify-center">
            <Post
              postId={post._id}
              adminInfo={adminInfo}
              title={post.title}
              text={post.text}
              date={date.toDateString()}
            />
          </div>
        );
      });
    }
  };
  return (
    <UserContext.Provider value={user}>
      <div
        className={`${
          checked ? "dark" : null
        } w-screen h-screen  flex flex-wrap justify-center justify-items-center`}
      >
        <header className="flex pl-5 items-center justify-between font-sans text-2xl font-bold text-red-400 bg-gray-800 h-24 w-full">
          I'm a Blogger now
          <User setShow={setShow} />
        </header>
        <Login show={show} setUser={setUser} />
        <div className="dark:bg-gray-700 self-center w-full flex flex-wrap justify-center font-sans">
          <div className="w-full mt-5 mx-10 mb-0 flex justify-end">
            <label className="switch">
              <input
                onClick={() => setChecked((prev) => !prev)}
                type="checkbox"
                checked={checked}
              />
              <span className="slider round"></span>
            </label>
          </div>
          {renderPosts()}
        </div>
      </div>
    </UserContext.Provider>
  );
}

export { App, UserContext };