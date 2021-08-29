import React from "react";
import { Box, Container, Grid } from "@material-ui/core";
import "./header.css";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

function Header(props) {
  const { bg, handlemode } = props;
  return (
    <>
      <Box>
        <Container>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="head">
                <h2>User Book List</h2>
                <hr />
                <div className="darkmode">
                  {bg === "aliceblue" ? (
                    <Tooltip title="Light Mode">
                      <IconButton aria-label="delete">
                        <Brightness4Icon
                          onClick={handlemode}
                          style={{
                            cursor: "pointer",
                            boxShadow: "0px 0px 10px 5px white",

                            borderRadius: "50%",
                          }}
                        />
                      </IconButton>
                    </Tooltip>
                  ) : (
                    <Tooltip title="Dark Mode">
                      <IconButton aria-label="dark">
                        <Brightness7Icon
                          onClick={handlemode}
                          style={{
                            cursor: "pointer",
                            boxShadow: "0px 0px 10px 5px gray",
                            borderRadius: "50%",
                          }}
                        />
                      </IconButton>
                    </Tooltip>
                  )}
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Header;
