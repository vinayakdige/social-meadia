import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { PostAddTwoTone } from "@mui/icons-material";
import Comments from "../comments/comments";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);

  const liked = true;
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post?.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post?.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreHorizOutlinedIcon />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? (
              <>
                <FavoriteOutlinedIcon /> Liked
              </>
            ) : (
              <>
                <FavoriteBorderOutlinedIcon /> Like
              </>
            )}
          </div>
          <div
            className="item"
            onClick={() => {
              setCommentOpen(!commentOpen);
            }}
          >
            <TextsmsOutlinedIcon />
            comments
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;
