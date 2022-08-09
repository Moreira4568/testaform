import React from 'react';
import { Edit, DateInput, TextInput, SimpleForm, required } from 'react-admin';
import PostReferenceInput from './PostReferenceInput';

const CommentEdit = props => {
    return (
        <Edit {...props}>
            <SimpleForm>
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
        </Edit>
    );
};

export default CommentEdit;
