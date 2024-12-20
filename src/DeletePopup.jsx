import Popup from "reactjs-popup";
import {
  Button,
  Popover,
  PopoverSurface,
  PopoverTrigger,
} from "@fluentui/react-components";
import DeleteComment from "./DeleteComment";
import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function DeletePopup({ comment }) {
  const user = useContext(UserContext);

  if (user === comment.author) {
    return (
      <Popover positioning="after" withArrow>
        <PopoverTrigger disableButtonEnhancement>
          <Button appearance="small">
            Click to delete
          </Button>
        </PopoverTrigger>

        <PopoverSurface>
          <p>no backsies...</p>
          <DeleteComment comment={comment} />
        </PopoverSurface>
      </Popover>
    );
  }
}

// contentStyle={{
//     width: "120px",
//     padding: "10px",
//     backgroundColor: "white",
//     fontSize: "13px",
//     textAlign: "center",
//     borderRadius: "5px",
//     boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
//   }}
