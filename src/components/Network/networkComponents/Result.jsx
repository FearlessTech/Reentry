const Results = ({ users }) => {
  return (
    <div className="results">
      {users ? (
        users.map((user) => {
          return (
            <div className="single-user" key={crypto.randomUUID()}>
              <div className="pictute-wrapper">
                <picture>
                  <source srcSet={user.photoURL && user.photoURL} />
                  <source srcSet="./images/user.svg" />
                  <img
                    src={user.photoURL && user.photoURL}
                    alt="user profile picture"
                  />
                </picture>
              </div>

              <div className="text-content">
                <div className="name-wrapper">
                  <span className="name">{user.name}</span>
                </div>
                <div className="bio-wrapper">
                  <span className="bio">
                    {user.bio ? user.bio : "Hi There!"}
                  </span>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export const Header = ({ flag, results, search }) => {
  const uuid = crypto.randomUUID();
  const message = flag
    ? `${results.length} results for ${search.current?.value}`
    : `People you may know`;
  return <h1 key={uuid}>{message}</h1>;
};

export default Results;
