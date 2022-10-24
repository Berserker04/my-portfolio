import * as React from "react";
import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
// web.cjs is required for IE11 support
import { useSpring, animated } from "@react-spring/web";
import { Avatar, Stack } from "@mui/material";

import logo from "../../../assets/images/avatar.jpg";
import image from "../../../assets/images/defaultImage.png";

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

export const CertificateModal = ({ selected, setSelected }) => {
  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);

  //   if (selected) handleOpen();

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={selected ? true : false}
        onClose={() => setSelected(null)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={selected ? true : false}>
          <Box sx={style} width={{xs: "88%", md: "70%"}}>
            <Box
              component="img"
              sx={{
                width: "100%",
              }}
              alt="imagen de proyecto"
              src={image}
            />
            <Stack direction={{ xs: "row" }} marginTop={"0.5rem"} justifyContent="center" marginBottom={1}>
              <Avatar alt="Remy Sharp" src={logo} />
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
