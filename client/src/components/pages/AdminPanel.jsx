import React, { useState } from "react";
import { logOut } from '../../slices/auth-slice';
import { useAddProductMutation, useGetProductQuery, useDeletedProductMutation } from "../../productRedux/productApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // for navigation

const AdminPanel = () => {
  const API_URL = "https://server-cool-snowflake-7302.fly.dev";

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: products = [], isFetching, refetch } = useGetProductQuery();
  const [addProduct, { isLoading: adding }] = useAddProductMutation();
  const [deleteProduct] = useDeletedProductMutation();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    description: "",
    imageFile: null,
  });

  const [formKey, setFormKey] = useState(0);

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
      await addProduct(data).unwrap();

      // Reset form
      setFormData({
        name: "",
        category: "",
        price: "",
        stock: "",
        description: "",
        imageFile: null,
      });

      refetch(); // Refresh product list
      setFormKey(prev => prev + 1);
    } catch (err) {
      console.error(err);
      alert("Failed to add product");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteProduct(id).unwrap();
        refetch();
      } catch (err) {
        console.error(err);
        alert("Failed to delete product");
      }
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin/edit-product/${id}`);
  };

  const handleLogout = () => {
    dispatch(logOut());
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">Admin Panel</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      {/* Add Product Form */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-6 md:mb-8 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
        <form className="grid gap-4 md:grid-cols-2" key={formKey} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
            required
          />
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={formData.stock}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
            required
          />
          <input
            type="file"
            name="image"
            onChange={handleChange}
            accept="image/*"
            className="border border-gray-300 rounded px-3 py-2 md:col-span-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {formData.imageFile && (
            <img
              src={URL.createObjectURL(formData.imageFile)}
              alt="Preview"
              className="h-24 w-24 object-cover rounded md:col-span-2"
            />
          )}
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 md:col-span-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition md:col-span-2"
          >
            {adding ? "Adding..." : "Add Product"}
          </button>
        </form>
      </div>

      {/* Products Table */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md max-w-full mx-auto overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-4">Products</h2>
        {isFetching ? (
          <p>Loading...</p>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Name</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Category</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Price</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Stock</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Images</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {products.map((p) => (
                <tr key={p._id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 whitespace-nowrap">{p.name}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{p.category}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{p.price}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{p.stock}</td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <img
                      src={`${API_URL}/uploads/${p.image}`}
                      alt={p.name}
                      className="h-16 w-16 object-cover rounded"
                    />
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap space-x-2 flex flex-wrap gap-2">
                    <button
                      onClick={() => handleEdit(p._id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(p._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
