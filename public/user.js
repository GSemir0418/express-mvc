(() => {
  const oName = document.querySelector("#name");
  const oAge = document.querySelector("#age");
  const oGender = document.querySelector("#gender");
  const oWeight = document.querySelector("#weight");
  const oSubmitBtn = document.querySelector("#submit");
  // 删除事件不建议绑定在删除按钮上
  // 可以代理给外层的ul 根据id判断点击的是哪一个删除按钮
  // const oRemoveBtn = document.querySelector(".remove-btn");
  const oUserList = document.querySelector("#userList");
  function init() {
    bindEvent();
  }
  function bindEvent() {
    oUserList.addEventListener("click", handleRemoveBtnClick);
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
        // 刷新页面
        location.reload();
      }
    });
  }
  function handleRemoveBtnClick(e) {
    const tar = e.target;
    // 判断是否点击了remove btn
    if (tar.className === "remove-btn") {
      // 通过dataset拿到自定义属性
      const id = tar.dataset.id;
      axios.delete(`http://localhost:8080/list/${id}`).then((res) => {
        if (res.status === 200) {
          location.reload();
        }
      });
    }
  }
  init();
})();
