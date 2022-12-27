const styleSwitcherToogle =  document.querySelectorAll(".style-switcher-toogler")
styleSwitcherToogle.addEventListener('click', () => {
    document.querySelector(".style-switcher").classList.toogle("open")
});
