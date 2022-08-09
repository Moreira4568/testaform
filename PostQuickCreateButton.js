import React, { useState } from 'react';
import { useForm } from 'react-final-form';
import {
    required,
    Button,
    SaveButton,
    SimpleForm,
    TextInput,
    useCreate,
    useNotify,
    useRefresh,
    useTranslate,
    Toolbar
} from 'react-admin';
import IconContentAdd from '@material-ui/icons/Add';
import IconCancel from '@material-ui/icons/Cancel';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

function PostQuickCreateButton() {
    const [showDialog, setShowDialog] = useState(false);
    const [create, { loading }] = useCreate('posts');
    const notify = useNotify();
    const refresh = useRefresh();
    const form = useForm();

    const handleClick = () => {
        setShowDialog(true);
    };

    const handleCloseClick = () => {
        setShowDialog(false);
    };

    const handleSubmit = async values => {
            create(
                { payload: { data: values }},
                {
                    onSuccess: ({ data }) => {
                        setShowDialog(false);
                        // Update the comment form to target the newly created post
                        // Updating the ReferenceInput value will force it to reload the available posts
                        form.change('post_id', data.id);
                    },
                    onFailure: ({ error }) => {
                        notify(error.message, 'error');
                    }
                }
            );
    };

    return (
        <>
            <Button onClick={handleClick} label="ra.action.create">
                <IconContentAdd />
            </Button>
            <Dialog
                fullWidth
                open={showDialog}
                onClose={handleCloseClick}
                aria-label="Create post"
            >
                <DialogTitle>Create post</DialogTitle>
                <DialogContent>
                    <SimpleForm
                        resource="posts"
                        // We override the redux-form onSubmit prop to handle the submission ourselves
                        save={handleSubmit}
                        // We want no toolbar at all as we have our modal actions
                        toolbar={<PostQuickCreateButtonToolbar onCancel={handleCloseClick} />}
                    >
                        <TextInput source="title" validate={required()} />
                        <TextInput source="teaser" validate={required()} />
                    </SimpleForm>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default PostQuickCreateButton;

function PostQuickCreateButtonToolbar({ onCancel, ...props }) {
    return (
        <Toolbar {...props}>
            <SaveButton submitOnEnter={true} />
            <CancelButton onClick={onCancel} />
        </Toolbar>
    );
}

function CancelButton(props) {
    const translate = useTranslate();
    return (
        <Button label={translate('ra.action.cancel')} {...props}>
            <IconCancel />
        </Button>
    );
}
