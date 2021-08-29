import { Box, Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./userlist.css";
import ReactPaginate from "react-paginate";

function Userlist({ color, bg }) {
  const [list, setList] = useState([]);
  const getList = async () => {
    await fetch("https://reqres.in/api/users?page=2")
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (userdata) {
        console.log(userdata);
        return setList(userdata.data);
      });
  };

  useEffect(() => {
    getList();
  }, []);

  const nextData = async (currentpage) => {
    await fetch(`https://reqres.in/api/users?page=${currentpage}`)
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (userdata) {
        return setList(userdata.data);
      });
  };
  console.log(list);

  const handlePageClick = (data) => {
    console.log(data);
    let currentpage = data.selected + 1;
    const nextPage = nextData(currentpage);

    setList(nextPage);
  };
  return (
    <>
      <Box>
        <Container>
          <Grid container>
            {list?.length ? (
              list.map((user) => (
                <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
                  <div
                    className="user"
                    key={user.id}
                    style={{ color: color, backgroundColor: bg }}
                  >
                    <img src={user.avatar} alt="" srcset="" />
                    <div className="name">
                      <h2>
                        {user.first_name} {user.last_name}
                      </h2>
                    </div>
                    <hr />
                    <h4>{user.email}</h4>
                  </div>
                </Grid>
              ))
            ) : (
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <div
                  className="error"
                  style={{
                    textAlign: "center",
                  }}
                >
                  <img
                    src="https://blog.thomasnet.com/hs-fs/hubfs/shutterstock_774749455.jpg?width=600&name=shutterstock_774749455.jpg"
                    alt=""
                    style={{
                      margin: "10px auto",
                      borderRadius: "50%",
                    }}
                  />
                </div>
              </Grid>
            )}
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={"..."}
                pageCount={"10"}
                marginPagesDisplayed={2}
                pageRangeDisplay={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                activeClassName={"active"}
              />{" "}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Userlist;
