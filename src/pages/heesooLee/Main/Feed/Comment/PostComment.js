import './PostComment.scss';

function PostComment() {
  return (
    <div className="post-comments">
      <input
        className="input-comment"
        type="text"
        placeholder="Add a comment..."
      />
      <button className="post-button">Post</button>
    </div>
  );
}

export default PostComment;
