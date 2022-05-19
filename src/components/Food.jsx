import { useEffect, useState } from "react";

function Food() {
  const [data, setData] = useState();
useEffect(()=>{
    fetch("data.json")
    .then((res) => res.json())
    .then((res) => {
        // debugger
        // console.log(res);
        setData(res)})
},[])

 const container=  {
    maxWidth:"1440px",
    margin: "auto",
  }
  
  return (
    <div style={container}>
<div class="row row-cols-2 row-cols-lg-4 justify-content-sm-between sales">
{data?.map((i ,index) => {
        //   debugger
        return(
        <div className="col" key={index} >
          <div className="card">
            <img
              src={i.image}
              alt="Avatar"
            //   style="width: 100%"
              className="p-3"
            />
            <span className="salespan">{i.isdiscount}%</span>
            <div className="container">
              <h4>
                <b>{i.title}</b>
              </h4>
              <div className="price d-flex ms-1">
                <p id="sl-pr" className="">
                  {i.price}₮
                </p>
                <p className="main-pr ms-2">{i.price}₮</p>
              </div>
            </div>
            <div className="card-hover">
              <button
                type="button"
                className="btn"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
              >
                <img src="/pictures/pics/Frame 440.svg" alt="" className=" " />
              </button>
            </div>

            <div className="modal" id="myModal">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="btn-cl me-2 mt-2">
                    <button
                      type="button"
                      className="btn-close flex-end"
                      data-bs-dismiss="modal"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>)
      })}

      </div>

      
    </div>
  );
}

export default Food;
