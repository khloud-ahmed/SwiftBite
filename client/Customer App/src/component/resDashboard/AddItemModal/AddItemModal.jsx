import styles from "./AddItemModal.module.css";
import { useState } from "react";

function AddItemModal({
  show,
  handleClose,
  handleSave,
  editingItem,
}) {
  const [form, setForm] = useState(() => ({
    name: editingItem?.name || "",
    description: editingItem?.description || "",
    category: editingItem?.category || "Main Course",
    price: editingItem?.price || "",
    image: editingItem?.image || null,
    status: editingItem?.status || "Available",
  }));

  if (!show) return null;

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleSave(form);

    handleClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modalBox}>
        <h3>
          {editingItem ? "Edit Menu Item" : "Add New Menu Item"}
        </h3>

        <form onSubmit={handleSubmit}>
          {/* Product Name */}

          <div className="mb-3">
            <label className="form-label">
              Product Name
            </label>

            <input
              type="text"
              className="form-control"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Description */}

          <div className="mb-3">
            <label className="form-label">
              Description
            </label>

            <textarea
              rows="3"
              className="form-control"
              name="description"
              value={form.description}
              onChange={handleChange}
            />
          </div>

          {/* Category */}

          <div className="mb-3">
            <label className="form-label">
              Category
            </label>

            <select
              className="form-select"
              name="category"
              value={form.category}
              onChange={handleChange}
            >
              <option>Main Course</option>
              <option>Pizza</option>
              <option>Burger</option>
              <option>Dessert</option>
              <option>Drink</option>
            </select>
          </div>

          {/* Price */}

          <div className="mb-3">
            <label className="form-label">
              Price
            </label>

            <input
              type="number"
              className="form-control"
              name="price"
              value={form.price}
              onChange={handleChange}
            />
          </div>

          {/* Current Image */}

          {editingItem?.image &&
            typeof editingItem.image === "string" && (
              <div className="mb-3">
                <label className="form-label">
                  Current Image
                </label>

                <br />

                <img
                  src={editingItem.image}
                  alt="Preview"
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    border: "1px solid #ddd",
                  }}
                />
              </div>
            )}

          {/* Upload Image */}

          <div className="mb-3">
            <label className="form-label">
              Product Image
            </label>

            <input
              type="file"
              className="form-control"
              name="image"
              accept="image/*"
              onChange={handleChange}
            />
          </div>

          {/* Status */}

          <div className="mb-4">
            <label className="form-label">
              Status
            </label>

            <select
              className="form-select"
              name="status"
              value={form.status}
              onChange={handleChange}
            >
              <option>Available</option>
              <option>Unavailable</option>
            </select>
          </div>

          {/* Buttons */}

          <div className="d-flex justify-content-end gap-3">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="btn btn-warning"
            >
              {editingItem ? "Update Item" : "Save Item"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddItemModal;