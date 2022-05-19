import { useEffect, useState } from "react";

function Title() {
  const [sale, setSale] = useState();
  useEffect(() => {
    fetch("sale.json")
      .then((res) => res.json())
      .then((res) => setSale(res));
  }, []);

  return (
    <div className="container-sale hymdraltai my-3">
      {sale?.map((i, index) => {
        return (
          <div
            className="sales-title d-flex justify-content-between mx-5"
            key={index}
          >
            <div className="sales d-flex">
              <span></span>
              <h3>{i.title}</h3>
            </div>
            <div className="see-all">
              <div className="d-flex d-md-none"></div>
              <input
                type="button"
                value={i.seeAll}
                className="d-none d-md-flex"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Title;
