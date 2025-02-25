import { privateAxios } from "./helper";
import { myAxios } from "./helper";
//create post function
export const createPost = (postData) => {
  //   console.log(postData);
  return privateAxios
    .post(
      `/user/${postData.userId}/category/${postData.categoryId}/posts`,
      postData
    )
    .then((response) => response.data);
};

//get all posts

export const loadAllPosts = async (pageNumber = 0, pageSize = 5) => {
  try {
    const response = await myAxios.get(
      `/posts?page=${pageNumber}&size=${pageSize}`
    );
    console.log("Posts loaded:", response.data); // Add logging
    return response.data;
  } catch (error) {
    console.error("Error loading posts:", error); // Add logging
    throw error;
  }
};

//load single post of given id
export const loadPost = (postId) => {
  return myAxios.get("/posts/" + postId).then((reponse) => reponse.data);
};

export const createComment = (comment, postId) => {
  return privateAxios.post(`/post/${postId}/comments`, comment);
};

//upload post banner image

export const uploadPostImage = (image, postId) => {
  let formData = new FormData();
  formData.append("image", image);
  return privateAxios
    .post(`/post/image/upload/${postId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => response.data);
};

//get category wise posts
export function loadPostCategoryWise(categoryId, pageNumber = 0, pageSize = 5) {
  return privateAxios
    .get(`/category/${categoryId}/posts?page=${pageNumber}&size=${pageSize}`)
    .then((res) => {
      console.log("API response for category posts:", res.data);
      return res.data;
    })
    .catch((error) => {
      console.error("Error loading category posts:", error);
      throw error;
    });
}

export const loadPostUserWise = async (userId) => {
  try {
    const response = await privateAxios.get(`/users/${userId}/posts`);
    console.log("User posts loaded:", response.data); // Add logging
    return response.data;
  } catch (error) {
    console.error("Error loading user posts:", error); // Add logging
    throw error;
  }
};

//delete post
export function deletePostService(postId) {
  return privateAxios.delete(`/posts/${postId}`).then((res) => res.data);
}

//update post
export function updatePost(post, postId) {
  console.log(post);
  return privateAxios.put(`/posts/${postId}`, post).then((resp) => resp.data);
}
