import React, { useState } from "react";
import {
  Form,
  Container,
  Col,
  Row,
  FormLabel,
  FormControl,
  Button,
} from "react-bootstrap";
import "./AddProduct.css";
import { Select, MenuItem } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Addproduct = () => {
  const [category, setCategory] = useState("");
  const [imgPreviewone, setImgPreviewOne] = useState(null);
  const [imgPreviewtwo, setImgPreviewTwo] = useState(null);
  const [imgPreviewthree, setImgPreviewThree] = useState(null);
  const [imgPreviewfour, setImgPreviewFour] = useState(null);

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  // image preview one //
  const handleImageChangeOne = (e) => {
    const selected = e.target.files[0];
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];

    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let readerOne = new FileReader();
      readerOne.onloadend = () => {
        setImgPreviewOne(readerOne.result);
      };

      readerOne.readAsDataURL(selected);
    } else {
      toast("file not supported", {
        hideProgressBar: true,
      });
    }
  };

  // image preview two //
  const handleImageChangeTwo = (e) => {
    const selected = e.target.files[0];
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];

    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let readerTwo = new FileReader();
      readerTwo.onloadend = () => {
        setImgPreviewTwo(readerTwo.result);
      };

      readerTwo.readAsDataURL(selected);
    } else {
      toast("file not supported", {
        hideProgressBar: true,
      });
    }
  };

  // image preview three //
  const handleImageChangeThree = (e) => {
    const selected = e.target.files[0];
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];

    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let readerThree = new FileReader();
      readerThree.onloadend = () => {
        setImgPreviewThree(readerThree.result);
      };

      readerThree.readAsDataURL(selected);
    } else {
      toast("file not supported", {
        hideProgressBar: true,
      });
    }
  };

  // image preview four //
  const handleImageChangeFour = (e) => {
    const selected = e.target.files[0];
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];

    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let readerFour = new FileReader();
      readerFour.onloadend = () => {
        setImgPreviewFour(readerFour.result);
      };

      readerFour.readAsDataURL(selected);
    } else {
      toast("file not supported", {
        hideProgressBar: true,
      });
    }
  };

  return (
    <>
      <Container className="product-main">
        <Form>
          <Row className="add_product_Section">
            <h3 className="text-center">Add Product</h3>

            <Col md={4}>
              <div className="product_left_container">
                <FormLabel>Product Name</FormLabel>
                <FormControl
                  type="text"
                  placeholder="Please enter Product Name"
                />

                <FormLabel>Product Title</FormLabel>
                <FormControl
                  type="text"
                  placeholder="Please enter Product Title"
                />

                <FormLabel>Product Description</FormLabel>
                <FormControl
                  as="textarea"
                  placeholder="Please enter Product Description"
                  style={{ height: "100px" }}
                />
              </div>
            </Col>
            <Col md={4}>
              <div className="product_right_container">
                {/* select */}
                <FormLabel>Select Product Category</FormLabel>

                <div className="select-product">
                  <Select
                    className="form-select-categories"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    label="category"
                    onChange={handleChange}
                  >
                    <MenuItem value={0}>LAPTOP</MenuItem>
                    <MenuItem value={1}>SSD</MenuItem>
                    <MenuItem value={2}>TV</MenuItem>
                    <MenuItem value={3}>LED</MenuItem>
                    <MenuItem value={4}>LCD</MenuItem>
                    <MenuItem value={5}>HDD</MenuItem>
                    <MenuItem value={6}>RAM</MenuItem>
                    <MenuItem value={7}>PSU</MenuItem>
                    <MenuItem value={8}>NETWORK</MenuItem>
                    <MenuItem value={9}>MONITOR</MenuItem>
                  </Select>
                  <span className="custom-arrow"></span>
                </div>
                {/* select */}

                <FormLabel>Product Price</FormLabel>
                <FormControl
                  type="number"
                  placeholder="Please enter Product Price"
                />

                {/* image input  start*/}

                <FormLabel>Upload Images</FormLabel>

                <Row className="align-items-center justify-content-center text-center">
                  <Col className="image-container align-items-center justify-content-center text-center">
                    <div
                      className="img-preview"
                      style={{
                        background: imgPreviewone
                          ? `url("${imgPreviewone}") no-repeat center/cover`
                          : "transparent",
                      }}
                    >
                      {imgPreviewone && (
                        <Button
                          className="product-remove-btn"
                          onClick={() => setImgPreviewOne(null)}
                        >
                          <i className="fa fa-times" aria-hidden="true"></i>
                        </Button>
                      )}

                      {!imgPreviewone && (
                        <>
                          <label
                            htmlFor="fileUploadOne"
                            className="custom-file-upload"
                          >
                            <i className="fa-solid fa-camera"></i>
                          </label>
                          <input
                            type="file"
                            id="fileUploadOne"
                            onChange={handleImageChangeOne}
                          />
                          <br /> <span>(jpg, jpeg or png)</span>
                        </>
                      )}
                    </div>
                  </Col>

                  <Col className="image-container align-items-center justify-content-center text-center">
                    <div
                      className="img-preview"
                      style={{
                        background: imgPreviewtwo
                          ? `url("${imgPreviewtwo}") no-repeat center/cover`
                          : "transparent",
                      }}
                    >
                      {imgPreviewtwo && (
                        <Button
                          className="product-remove-btn"
                          onClick={() => setImgPreviewTwo(null)}
                        >
                          <i className="fa fa-times" aria-hidden="true"></i>
                        </Button>
                      )}

                      {!imgPreviewtwo && (
                        <>
                          <label
                            htmlFor="fileUploadTwo"
                            className="custom-file-upload"
                          >
                            <i className="fa-solid fa-camera"></i>
                          </label>
                          <input
                            type="file"
                            id="fileUploadTwo"
                            onChange={handleImageChangeTwo}
                          />
                          <br /> <span>(jpg, jpeg or png)</span>
                        </>
                      )}
                    </div>
                  </Col>

                  <Col className="image-container align-items-center justify-content-center text-center">
                    <div
                      className="img-preview"
                      style={{
                        background: imgPreviewthree
                          ? `url("${imgPreviewthree}") no-repeat center/cover`
                          : "transparent",
                      }}
                    >
                      {imgPreviewthree && (
                        <Button
                          className="product-remove-btn"
                          onClick={() => setImgPreviewThree(null)}
                        >
                          <i className="fa fa-times" aria-hidden="true"></i>
                        </Button>
                      )}

                      {!imgPreviewthree && (
                        <>
                          <label
                            htmlFor="fileUploadThree"
                            className="custom-file-upload"
                          >
                            <i className="fa-solid fa-camera"></i>
                          </label>
                          <input
                            type="file"
                            id="fileUploadThree"
                            onChange={handleImageChangeThree}
                          />
                          <br />
                          <span>(jpg, jpeg or png)</span>
                        </>
                      )}
                    </div>
                  </Col>

                  <Col className="image-container align-items-center justify-content-center text-center">
                    <div
                      className="img-preview"
                      style={{
                        background: imgPreviewfour
                          ? `url("${imgPreviewfour}") no-repeat center/cover`
                          : "transparent",
                      }}
                    >
                      {imgPreviewfour && (
                        <Button
                          className="product-remove-btn"
                          onClick={() => setImgPreviewFour(null)}
                        >
                          <i className="fa fa-times" aria-hidden="true"></i>
                        </Button>
                      )}

                      {!imgPreviewfour && (
                        <>
                          <label
                            htmlFor="fileUploadFour"
                            className="custom-file-upload"
                          >
                            <i className="fa-solid fa-camera"></i>
                          </label>
                          <input
                            type="file"
                            id="fileUploadFour"
                            onChange={handleImageChangeFour}
                          />
                          <br />
                          <span>(jpg, jpeg or png)</span>
                        </>
                      )}
                    </div>
                  </Col>
                </Row>

                <br />
                <br />
                {/* image input closed */}

                <Button
                  className="add_product_button"
                  variant="primary"
                  size="lg"
                >
                  Add Product
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
        <ToastContainer position="top-center" />
      </Container>
    </>
  );
};

export default Addproduct;
