import React from "react";
import "./sass/Mail.css";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import PrintIcon from "@material-ui/icons/Print";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import ErrorIcon from "@material-ui/icons/Error";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import IconButton from "@material-ui/core/IconButton";
import { useHistory } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";

const Mail = () => {
  const history = useHistory();
  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton onClick={() => history.push("/")}>
            <ArrowBackIcon />
          </IconButton>

          <IconButton>
            <MoveToInboxIcon />
          </IconButton>

          <IconButton>
            <ErrorIcon />
          </IconButton>

          <IconButton>
            <DeleteIcon />
          </IconButton>

          <IconButton>
            <EmailIcon />
          </IconButton>

          <IconButton>
            <WatchLaterIcon />
          </IconButton>

          <IconButton>
            <CheckCircleIcon />
          </IconButton>

          <IconButton>
            <LabelImportantIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="mail__toolsRight">
          <Tooltip title={<h2>Scroll</h2>}>
            <IconButton>
              <UnfoldMoreIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title={<h2>Print</h2>}>
            <IconButton>
              <PrintIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title={<h2>In new window</h2>}>
            <IconButton>
              <ExitToAppIcon />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <div className="mail__body">
        <div className="mail__bodyHeader">
          <div className="email__headings">
            <h2>Subject</h2>
            <LabelImportantIcon className="email__important" />
            <p>title</p>
          </div>

          <div className="email__pTags">
            <p>10 PM</p>
          </div>
        </div>
        <div className="mail__message">
          <p>This is a message</p>
        </div>
      </div>
    </div>
  );
};

export default Mail;
