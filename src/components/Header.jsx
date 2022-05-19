function Header() {
  const style = {
    search: {
      boxSizing: "border-box",
      position: "relative",
      borderRadius: "10px",
      height: "32px",
      border: "1px solid #f17228",
      backgroundImage: `url("/pictures/logos/search.svg")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center 10px",
      alignItems: "center",
    },
    food: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "18px",
      lineHeight: "27px",
      color: "#f17228",
    },
    btn1: {
      backgroundColor: "transparent",
      border: "none",
      backgroundRepeat: "no-repeat",
    },
  };

  return (
    <div id="navbar">
      <div
        className="container d-flex justify-content-between col-12 px-md-5"
        id="header"
      >
        <nav className="navbar navbar-expand-md col-8">
          <div className="container d-flex justify-content-around">
            <button
              className="ms-3 border-0 d-md-none bg-white"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="d-md-none">
                <img
                  src="/pictures/logos/dropIcon.svg"
                  className="d-md-none"
                  alt=""
                />
              </span>
            </button>
            <div
              className="food d-flex justify-content-start"
              style={style.food}
            >
              <img src="/pictures/logos/logo.image.svg" alt="" className="" />
              <p className="m-2">Food delivery</p>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link active text-dark"
                    aria-current="page"
                    href="/pages/index.html"
                  >
                    Нүүр
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="/pages/menu.html">
                    Хоолны цэс
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="/">
                    Хүргэлтын бүс
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="logos col-4 m-3">
          <span className="d-flex">
            <input
              type="search"
              id={style.search}
              name="search"
              placeholder="Хайх"
              className="d-none d-lg-flex me-2 ps-1"
            />
            <img
              src="/pictures/logos/search icon.svg"
              alt=""
              className="px-2 d-lg-none"
            />
            <div className="d-flex">
              <img
                src="/pictures/logos/busket icon.svg"
                alt=""
                className="d-none d-md-flex"
              />
              <div className="d-none d-lg-flex ps-2">Сагс</div>
            </div>
            <a href="/pages/login.html" className="d-flex py-2">
              <img
                src="/pictures/logos/user icon.svg"
                alt=""
                className="ps-md-3 ps-3"
              />
              <div className="d-none d-lg-flex ps-1">Нэвтрэх</div>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
