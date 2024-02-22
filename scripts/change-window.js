document.addEventListener("visibilitychange", (event) => {
    if (document.visibilityState == "visible") {
      console.log("tab is active")
    }
  });