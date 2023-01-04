;(() => {
  const oName = document.querySelector("#name");
  const oAge = document.querySelector("#age");
  const oGender = document.querySelector("#gender");
  const oWeight = document.querySelector("#weight");
  const oSubmitBtn = document.querySelector("#submit");
  function init() {
    bindEvent();
  }
  function bindEvent() {
    oSubmitBtn.addEventListener("click", handleFormSubmit);
  }
  function handleFormSubmit() {
    const newUser = {
      name: oName.value,
      age: oAge.value,
      gender: oGender.value,
      weight: oWeight.value,
    };
    axios.post("http://localhost:8080/list/user", newUser).then((res) => {
      if (res.status === 200) {
        location.reload();
      }
    });
  }
  init();
})();
