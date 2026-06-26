import { useState } from "react";
import styles from "./AddProduct.module.css";

function AddProduct() {
  const [offerEnabled, setOfferEnabled] = useState(false);

  return (
    <div className={`container-fluid ${styles.page}`}>
      <div className={styles.header}>
        <h2>Add New Product</h2>
      </div>

      <div className={styles.formCard}>
        <form>
          <div className="row g-4">

            {/* Product Name */}
            <div className="col-md-6">
              <label className="form-label">Product Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g., Spicy Zinger Burger"
              />
            </div>

            {/* Category */}
            <div className="col-md-6">
              <label className="form-label">Category</label>
              <select className="form-select">
                <option>Select Category</option>
                <option>Burger</option>
                <option>Pizza</option>
                <option>Drink</option>
                <option>Dessert</option>
              </select>
            </div>

            {/* Base Price */}
            <div className="col-md-6">
              <label className="form-label">Base Price ($)</label>
              <input
                type="number"
                className="form-control"
                placeholder="0.00"
              />
            </div>

            {/* Offer */}
            <div className="col-md-6">
              <label className="form-label">Discount / Offers</label>

              <div className="d-flex align-items-center gap-4">

                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={offerEnabled}
                    onChange={() =>
                      setOfferEnabled(!offerEnabled)
                    }
                  />
                  <label className="form-check-label">
                    Active Offer
                  </label>
                </div>

                <input
                  type="number"
                  className="form-control w-50"
                  placeholder="Offer Price ($)"
                  disabled={!offerEnabled}
                />
              </div>
            </div>

            {/* Description */}
            <div className="col-12">
              <label className="form-label">Description</label>

              <textarea
                rows="4"
                className="form-control"
                placeholder="Write a short appetizing description..."
              ></textarea>
            </div>

            {/* Upload */}
            <div className="col-12">
              <label className="form-label">
                Product Image
              </label>

              <label className={styles.uploadBox}>
                <input
                  type="file"
                  hidden
                  accept="image/*"
                />

                <div className={styles.uploadContent}>
                  <i className="bi bi-cloud-arrow-up-fill"></i>

                  <h5>
                    Click to upload product photo
                  </h5>

                  <p>
                    Supports PNG, JPG (Max 2MB)
                  </p>
                </div>
              </label>
            </div>

          </div>

          {/* Buttons */}
          <div className="d-flex justify-content-end gap-3 mt-4">
            <button
              type="button"
              className="btn btn-light px-4"
            >
              Cancel
            </button>

            <button
              type="submit"
              className={styles.saveBtn}
            >
              Save Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;