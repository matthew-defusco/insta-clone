import { Form } from "react-router-dom";

const AddPost = () => {
  return (
    <div>
      Add Post Here
      <Form method="POST" encType="multipart/form-data">
        <label htmlFor="image">Add Image</label>
        <input accept="image/*" type="file" name="image" id="image" />
        <label htmlFor="caption">Add Caption</label>
        <input type="text" name="caption" id="caption" />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

export default AddPost;
