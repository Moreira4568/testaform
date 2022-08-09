import React from 'react';
import {
    Create,
    DateInput,
    TextInput,
    SimpleForm,
    required
} from 'react-admin';
import { useLocation } from 'react-router';
import PostReferenceInput from './PostReferenceInput';

const today = new Date();

const CommentCreate = props => {
    // Read the post_id from the location
    const location = useLocation();
    const post_id =
        location.state && location.state.record
            ? location.state.record.post_id
            : undefined;
    const redirect = post_id ? `/posts/${post_id}/show/comments` : false;

    return (
        <Create {...props}>
            <SimpleForm
                defaultValue={{ created_at: today, post_id }}
                redirect={redirect}
            >
                <PostReferenceInput
                    source="post_id"
                    reference="posts"
                    allowEmpty
                    validate={required()}
                    perPage={10000}
                />
                <DateInput source="created_at" />
                <TextInput source="body" />
            </SimpleForm>
        </Create>
    );
};

export default CommentCreate;
