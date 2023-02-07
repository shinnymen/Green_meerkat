import { useState } from "react";
import { useSelector } from "react-redux";

import WithSearchForUsers from "../../hocs/WithSearchForUsers";

const PlayerInputComponent = ({ playerLabel, onChange, searchForUsers }) => {
  const [shouldDisplay, setShouldDisplay] = useState(false);
  let inputRef;
  const focusOnInput = () => {
    setShouldDisplay(true);
  };

  const blurOnInput = () => {
    setShouldDisplay(false);
  };

  const onSelect = (user) => {
    onChange(user._id);
    inputRef.value = user.pseudo;
  };

  const users = useSelector((state) => state.usersReducer) || [];

  return (
    <>
      <div style={{ position: "relative" }}>
        <label htmlFor="pseudo">{playerLabel}</label>
        <br />
        <input
          ref={(ref) => (inputRef = ref)}
          type="search"
          id={playerLabel}
          autocomplete="off"
          onFocus={focusOnInput}
          onBlur={blurOnInput}
          onKeyUp={searchForUsers}
        />
        {shouldDisplay && (
          <ul
            className="users-list"
            style={{
              zIndex: "999",
              top: "62px",
              left: "50%",
              transform: "translate(-50%, 0px)",
              position: "absolute",
              backgroundColor: "white",
              padding: "5px",
            }}
          >
            {users.map((u) => (
              <li
                style={{
                  cursor: "pointer",
                  padding: "10px",
                  borderBottom: "1px solid black",
                }}
                onMouseDown={() => onSelect(u)}
              >
                {u.pseudo}
              </li>
            ))}
          </ul>
        )}
        <br />
        <div className="error"></div>
      </div>
    </>
  );
};

export default WithSearchForUsers(PlayerInputComponent);
