function Feature() {
    return ( <>
    <div id="cont">
      <div className="container">
        <div className="container-feature">
          <div
            className="sub-container d-md-flex flex-nowrap justify-content-md-around"
          >
            <div className="feature-1 d-flex my-2 flex-nowrap">
              <div className="img-feature">
                <img src="/pictures/logos/time.svg" alt="a" />
              </div>
              <div className="flex-nowrap">
                <h3>Шуурхай хүргэлт</h3>
                <p>30 минутанд таны гарт.</p>
              </div>
            </div>
            <div className="feature-2 d-flex my-2">
              <div className="img-feature-1">
                <img src="pictures/logos/grocery.svg" alt="" />
              </div>
              <div>
                <h3>Эрүүл, баталгаат орц</h3>
                <p>Хамгийн чанартайг танд.</p>
              </div>
            </div>
            <div className="feature-3 d-flex my-2">
              <div className="img-feature-2">
                <img src="/pictures/logos/book.svg" alt="" />
              </div>
              <div>
                <h3>Өргөн сонголт</h3>
                <p>Хамгийн онцгойг танд.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></> );
}

export default Feature;