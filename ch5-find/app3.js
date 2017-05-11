let posts = [
    { id : 1, title : 'New Post' },
    { id : 2, title : 'Old Post' }
];

let comment = { postId : 1, content : 'Great Post' };

function postForComment( posts, comment ) {
    return posts.find( ( post ) => {
        return post.id === comment.postId;
    } )
}

console.log( postForComment( posts, comment ) );

