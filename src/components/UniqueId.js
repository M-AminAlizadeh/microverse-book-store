import React from "react";
import axios from "axios";

const UniqueId = () => {
  let AppID = "";
  if (!localStorage.getItem("AppID")) {
    // axios
    axios
      .post(
        "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/"
      )
      .then((response) => {
        AppID = response.data;
        // set to localstoreage for next times
        localStorage.setItem("AppID", JSON.stringify(AppID));
      });
  } else {
    AppID = localStorage.getItem("AppID");
  }
  return AppID;
};

export default UniqueId;
