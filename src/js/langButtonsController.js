//module pattern
const langButtonsModule = (function () {
  const langButtons = document.getElementsByClassName("lang_btn");

  function removeActiveClassName () {
    for (let i = 0; i < langButtons.length; i++) {
      langButtons[i].classList.remove("active")
    }
  }

  function toggleActiveClassName (e) {
    const currentTarget = e.currentTarget
    const isClassNameExist = Array.from(currentTarget.classList).includes("active")
    if (!isClassNameExist) {
      removeActiveClassName()
      currentTarget.classList.add("active")
    }
  }

  function handleChangeActiveClick () {
    for (let i = 0; i < langButtons.length; i++) {
      langButtons[i].addEventListener("click", toggleActiveClassName)
    }
  }

  function init () {
    handleChangeActiveClick()
  }

  return {
    init
  }
})()

export default langButtonsModule
