import { ColorSwatch, makeStyles } from "@fluentui/react-components";

export const useStyles = makeStyles({
  card: {
    width: "300px",
    height: "360px",
    listStyleType: "none",
    listStyle: "none",
    ":hover": {
      transform: "scale(1.02)",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    }
  },

  text: {
    color: "black",
    textDecoration: "none",
    margin: "none",
    ":hover": {
      color: "#90296A"
    }
  },

  flex: {
    gap: "20px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start",
    maxWidth: "90%",
    margin: "auto",
    justifyContent: "left",
    listStyleType: "none",
  },

  footer: {
    position: "absolute",
    bottom: "4px",
    left: "4px",
  },

  goTopHidden: {
    display: "none"
  },

  goTop: {
    display: "block",
    position: "fixed",
    background: "#90296A",
    width: "40px",
    height: "40px",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    borderRadius: "35px",
    border: "none",
    bottom: "5%",
    left: "90%",
    cursor: "pointer",
    textAlign: "center",
    color: "white",
    lineHeight: "30px",
    ":hover": {
      transform: "scale(1.12)",
      background: "#D72483"
    },
  },
});
