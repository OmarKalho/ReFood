import * as React from "react";
import Head from "next/head";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import AddGivaway from "../components/addGivawayComp/checkout";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import GiveAwayTable from "../components/giveAwayComp/giveAwayTableMui";
import image1 from "../public/images/image457.png";

const GiverPage = () => {
  const [open, setOpen] = React.useState(false);
  const [tableRows,setTableRows]=React.useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const StyledFab = styled(Fab)({
    position: "fixed",
    zIndex: 1,
    bottom: "3vh",
  });

  React.useEffect(() => {
    fetch(" http://localhost:3004/GiveAway?user_id=1",{method:'GET'})
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
        setTableRows(data)
      });
  }, []);

  return (
    <>
      <Head>
        <title>Food Management System</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <AddGivaway />
      </Modal>
      <Grid container>
        <Grid item md={9} xs={12}>
          <Box
            boxShadow={0}
            sx={{
              height: { xs: "83vh", md: "74vh" },
              overflow: "auto",
              margin: "auto",
              mt: "13vh",
              ml: "1vw",
            }}
          >
            {tableRows&&<GiveAwayTable rows ={tableRows} />}
            
          </Box>
        </Grid>
        <Grid item md={3}>
          {" "}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              mt: "11vh",
              alignContent: "center",
              height: "87vh",
            }}
          >
            <img
              style={{
                marginTop: "30%",
                marginLeft: "23%",
                width: "65%",
                height: "50%",
              }}
              src={image1.src}
            />
          </Box>
        </Grid>
      </Grid>

      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: "primary",
          height: "4vh",
          top: "auto",
          bottom: 0,
        }}
      >
        <Toolbar>
          <StyledFab
            sx={{ right: { xs: "40vw", sm: "45vw", md: "8vw" } }}
            onClick={handleOpen}
            color="primary"
            aria-label="add"
          >
            <AddIcon />
          </StyledFab>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default GiverPage;