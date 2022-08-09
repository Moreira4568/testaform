import React, { useState, useCallback } from 'react';
import { useFormState } from 'react-final-form';
import { ReferenceInput, SelectInput } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

import PostQuickCreateButton from './PostQuickCreateButton';
import PostQuickPreviewButton from './PostQuickPreviewButton';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center'
    }
});

const spySubscription = { values: true };

const PostReferenceInput = props => {
    const classes = useStyles();
    const [version, setVersion] = useState(0);
    const { values } = useFormState({ subscription: spySubscription });
    const handleChange = useCallback(() => setVersion(version + 1), [version]);

    return (
        <div className={classes.root}>
            <ReferenceInput key={version} {...props}>
                <SelectInput optionText="title" />
            </ReferenceInput>

            <PostQuickCreateButton onChange={handleChange} />
            {!!values.post_id && <PostQuickPreviewButton id={values.post_id} />}
        </div>
    );
};

export default PostReferenceInput;
