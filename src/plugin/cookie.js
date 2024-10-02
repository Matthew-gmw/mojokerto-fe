import Cookies from "js-cookie";

const setUserData = async (username, user_access, userid) => {
  try {
    Cookies.set("username", username, {
      expires: 1,
      secure: true,
      sameSite: "Lax",
    });
    Cookies.set("user_access", user_access, {
      expires: 1,
      secure: true,
      sameSite: "Lax",
    });
    Cookies.set("userid", userid, {
      expires: 1,
      secure: true,
      sameSite: "Lax",
    });
    // eslint-disable-next-line no-empty
  } catch (error) {}
};

const getUserid = async () => {
  try {
    const userData = Cookies.get("userid");
    return userData;
  } catch (error) {
    return null;
  }
};

export default {
  setUserData,
  getUserid,
};
