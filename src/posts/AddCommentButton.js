import React from 'react';
import { Link } from 'react-router-dom';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { withStyles } from '@material-ui/core/styles';
import { Button } from 'react-admin';

const styles = {
  button: {
    marginTop: '1em'
  }
};

const AddCommentButton = ({ classes, record }) => (
  <Button
    className={classes.button}
    variant="raised"
    component={Link}
    to={`/comments/create?post_id=${record.id}`}
    label="Add a comment"
    title="Add a comment"
  >
    <ChatBubbleIcon />
  </Button>
);

export default withStyles(styles)(AddCommentButton);
