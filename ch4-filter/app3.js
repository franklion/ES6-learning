let post     = { id : 4, title : 'New Post' };
let comments = [
    { postId : 4, ontent : 'awesome post' },
    { postId : 3, content : 'it was ok' },
    { postId : 4, content : 'neat' }
];

function commentsForPost( post, comments ) {
    return comments.filter( ( comment ) => {
        return comment.postId === post.id;
    } );
}

let result = commentsForPost( post, comments );

console.log( result );