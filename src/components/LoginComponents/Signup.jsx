import StyledSignUp from "./LoginStyles/styledSignup";

export default function SignUpForm(props) {
  return (
    <StyledSignUp>
      <div className="signin-container">
        <div className="title">Sign In</div>
        <form>
          <div className="input-container">
            <label htmlFor="username">
              <span>username</span>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="example@email.com"
                autoComplete="username"
              />
            </label>
          </div>
          <div className="input-container">
            <label htmlFor="password">
              <span>password</span>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
                autoComplete="password"
              />
            </label>
          </div>
          <button
            className="send-form"
            onClick={(e) => {
              e.preventDefault();
              // sign in code
            }}
          >
            Send
          </button>
        </form>
      </div>
    </StyledSignUp>
  );
}
