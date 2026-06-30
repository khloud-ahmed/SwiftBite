import { useState } from "react";

import DashboardSidebar from "../../component/resDashboard/DashboardSidebar/DashboardSidebar";
import DashboardHeader from "../../component/resDashboard/DashboardHeader/DashboardHeader";
import CategoryTabs from "../../component/resDashboard/CategoryTabs/CategoryTabs";
import MenuTable from "../../component/resDashboard/MenuTable/MenuTable";
import DashboardAnalytics from "../../component/resDashboard/DashboardAnalytics/DashboardAnalytics";
import AddItemModal from "../../component/resDashboard/AddItemModal/AddItemModal";

import styles from "./RestaurantDashboard.module.css";

function RestaurantDashboard() {
  // Modal State
  const [showModal, setShowModal] = useState(false);

  // Edit Item
  const [editingItem, setEditingItem] = useState(null);

  // Save Item (Temporary)
  const handleSave = (item) => {
    if (editingItem) {
      console.log("Updated Item :", item);

      // هنا هيكون API Update
    } else {
      console.log("New Item :", item);

      // هنا هيكون API Create
    }

    setEditingItem(null);
  };

  // Edit Button
  const handleEdit = (item) => {
    setEditingItem(item);
    setShowModal(true);
  };

  return (
    <>
      <div className={`container-fluid ${styles.dashboard}`}>

        <div className="row">

          {/* Sidebar */}

          <div className="col-lg-2 p-0">

            <DashboardSidebar />

          </div>

          {/* Main Content */}

          <div className="col-lg-10">

            <div className={styles.content}>

              <DashboardHeader
                openModal={() => {
                  setEditingItem(null);
                  setShowModal(true);
                }}
              />

              <CategoryTabs />

              <div className="row">

                {/* Menu */}

                <div className="col-xl-9 col-lg-8 mb-4">

                  <MenuTable
                    onEdit={handleEdit}
                  />

                </div>

                {/* Analytics */}

                <div className="col-xl-3 col-lg-4">

                  <DashboardAnalytics />

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Modal */}

      <AddItemModal
        key={editingItem ? editingItem.id : "new"}
        show={showModal}
        editingItem={editingItem}
        handleSave={handleSave}
        handleClose={() => {
          setShowModal(false);
          setEditingItem(null);
        }}
      />
    </>
  );
}

export default RestaurantDashboard;