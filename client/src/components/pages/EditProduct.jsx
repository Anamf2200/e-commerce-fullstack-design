import React, { useState, useEffect } from "react";
import { useUpdateProductMutation, useGetProductByIdQuery } from "../../productRedux/productApi";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
    const API_URL = "https://server-cool-snowflake-7302.fly.dev";

  const { id } = useParams();
  const navigate = useNavigate();
  const { data: product, isFetching } = useGetProductByIdQuery(id);
  const [updateProduct, { isLoading: updating }] = useUpdateProductMutation();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    description: "",
    imageFile: null,       // New file
    currentImage: "",      // Existing image
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        category: product.category,
        price: product.price,
        stock: product.stock,
        description: product.description,
        imageFile: null,
        currentImage: product.image,
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, imageFile: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("category", formData.category);
    data.append("description", formData.description);
    data.append("price", formData.price);
    data.append("stock", formData.stock);

    if (formData.imageFile) {
      data.append("image", formData.imageFile);
    }

    try {
      await updateProduct({ id, updatedProduct: data }).unwrap();
      navigate("/adminPanel"); // Back to admin panel
    } catch (err) {
      console.error(err);
      alert("Update failed");
    }
  };

  if (isFetching) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6 flex justify-center items-start">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">Edit Product</h2>
        <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500" required />
          <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500" required />
          <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500" required />
          <input type="number" name="stock" placeholder="Stock" value={formData.stock} onChange={handleChange} className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500" required />

          {/* File input */}
          <input type="file" name="image" onChange={handleChange} accept="image/*" className="border border-gray-300 rounded px-3 py-2 md:col-span-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500" />

          {/* Image previews */}
          {formData.currentImage && !formData.imageFile && (
            <img src={`${API_URL}/uploads/${formData.currentImage}`} alt="Current" className="h-24 w-24 object-cover rounded md:col-span-2" />
          )}
          {formData.imageFile && (
            <img src={URL.createObjectURL(formData.imageFile)} alt="Preview" className="h-24 w-24 object-cover rounded md:col-span-2" />
          )}

          <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="border border-gray-300 rounded px-3 py-2 md:col-span-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500" required />

          <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition md:col-span-2">
            {updating ? "Updating..." : "Update Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
