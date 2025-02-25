import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Base from "../components/Base";
import { Container, Row, Col } from "reactstrap";
import CategorySideMenu from "../components/CategorySideMenu";
import {
  loadPostCategoryWise,
  deletePostService,
} from "../services/post-service";
import { toast } from "react-toastify";
import Post from "../components/Post";
import InfiniteScroll from "react-infinite-scroll-component";

function Categories() {
  const [postContent, setPostContent] = useState({
    content: [],
    totalPages: "",
    totalElements: "",
    pageSize: "",
    lastPage: false,
    pageNumber: "",
  });

  const [currentPage, setCurrentPage] = useState(0);
  const { categoryId } = useParams();

  useEffect(() => {
    console.log("Category ID:", categoryId);
    changePage(currentPage);
  }, [categoryId, currentPage]);

  const changePage = (pageNumber = 0, pageSize = 5) => {
    if (pageNumber > postContent.pageNumber && postContent.lastPage) {
      return;
    }
    if (pageNumber < postContent.pageNumber && postContent.pageNumber === 0) {
      return;
    }
    loadPostCategoryWise(categoryId, pageNumber, pageSize)
      .then((data) => {
        console.log("Data received:", data);
        if (data && Array.isArray(data.content)) {
          setPostContent({
            content: [...postContent.content, ...data.content],
            totalPages: data.totalPages,
            totalElements: data.totalElements,
            pageSize: data.pageSize,
            lastPage: data.lastPage,
            pageNumber: data.pageNumber,
          });
          console.log("Post content updated:", {
            content: [...postContent.content, ...data.content],
            totalPages: data.totalPages,
            totalElements: data.totalElements,
            pageSize: data.pageSize,
            lastPage: data.lastPage,
            pageNumber: data.pageNumber,
          });
        } else {
          console.error("Data is not an array or is undefined:", data);
          toast.error("Error in loading posts: Data is not an array or is undefined");
        }
      })
      .catch((error) => {
        console.error("Error in loading posts:", error);
        toast.error("Error in loading posts");
      });
  };

  function deletePost(post) {
    console.log("Deleting post:", post);

    deletePostService(post.postId)
      .then((res) => {
        console.log(res);
        toast.success("Post is deleted.");
        let newPostContents = postContent.content.filter(
          (p) => p.postId !== post.postId
        );
        setPostContent({ ...postContent, content: newPostContents });
      })
      .catch((error) => {
        console.error("Error in deleting post:", error);
        toast.error("Error in deleting post");
      });
  }

  const changePageInfinite = () => {
    console.log("Page changed");
    setCurrentPage(currentPage + 1);
  };

  return (
    <Base>
      <Container className="mt-3">
        <Row>
          <Col md={2} className="pt-5">
            <CategorySideMenu />
          </Col>
          <Col md={10}>
            <h1>Blogs Count ( {postContent?.totalElements} )</h1>
            <InfiniteScroll
              dataLength={postContent.content.length}
              next={changePageInfinite}
              hasMore={!postContent.lastPage}
              loader={<h4>Loading...</h4>}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
              {postContent.content.map((post, index) => (
                <Post deletePost={deletePost} post={post} key={index} />
              ))}
            </InfiniteScroll>
            {postContent.content.length <= 0 && (
              <h1>No post in this category</h1>
            )}
          </Col>
        </Row>
      </Container>
    </Base>
  );
}

export default Categories;
