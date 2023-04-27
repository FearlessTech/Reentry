import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import db from "../../services/firebase/firebase";
import { Search, SearchIcon } from "../Navbar/stylesNavbar";

export const SearchResults = () => {
  const initialSearchState = {
    users: [],
    resources: [],
    posts: [],
  };

  let [searchResults, setsearchResults] = useState(initialSearchState);

  const [searchQuery, setsearchQuery] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const handleSearch = async (e) => {
    const userSearchQuery = e.target.value;
    if (
      (e.keyCode >= 48 && e.keyCode <= 57) ||
      (e.keyCode >= 65 && e.keyCode <= 91)
    ) {
      const query = db
        .collection("articles")
        .where("description", "==", userSearchQuery);

      try {
        setisLoading(true);
        const response = await query.get();
        const postResults = [];
        response.forEach((doc) => {
          const data = doc.data();

          let tempObj = {
            detail: data.description,
            author: data.actor.title,
          };
          postResults.push(tempObj);
        });
        setsearchResults({ ...searchResults, posts: postResults });
        setisLoading(false);
      } catch (error) {
        setisLoading(false);
        console.log("Error getting documents", error);
      }
    }
  };

  return (
    <Search className="resource-search">
      <div className="search-bar">
        <div className="input-container">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            id="search-input"
            onChange={(e) => setsearchQuery(e.target.value)}
            onKeyUp={(e) => handleSearch(e, false)}
            onBlur={() => {
              setsearchQuery("");
              setsearchResults(initialSearchState);
            }}
          />
        </div>
        <SearchIcon className="icon-wrapper">
          <IoMdSearch />
        </SearchIcon>
      </div>
      {searchQuery.length > 0 && (
        <div className="search-results">
          <h4>Search Results</h4>
          <br />
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              {searchResults.posts.length +
                searchResults.resources.length +
                searchResults.users.length ===
              0 ? (
                <p>No results</p>
              ) : (
                <div className="result-list">
                  {searchResults.users.length > 0 && (
                    <>
                      <p>
                        <strong>{`Users [${searchResults.users.length}]`}</strong>
                      </p>
                      {searchResults.users.map((user, index) => (
                        <p key={user.name + index}>{user.name}</p>
                      ))}
                      <hr />
                    </>
                  )}

                  {searchResults.resources.length > 0 && (
                    <>
                      <p>
                        <strong>{`Resources [${searchResults.resources.length}]`}</strong>
                      </p>
                      {searchResults.resources.map((resource, index) => (
                        <p key={resource.name + index}>{resource.name}</p>
                      ))}
                      <hr />
                    </>
                  )}
                  {searchResults.posts.length > 0 && (
                    <>
                      <p>
                        <strong>{`Posts [${searchResults.posts.length}]`}</strong>
                      </p>
                      {searchResults.posts.map((post, index) => (
                        <React.Fragment key={post.detail + index}>
                          <Link to="">{post.detail}</Link>
                          <br />
                          <br />
                        </React.Fragment>
                      ))}
                    </>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      )}
    </Search>
  );
};
