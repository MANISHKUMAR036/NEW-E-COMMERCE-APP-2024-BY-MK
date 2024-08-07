import React from "react";
import Layout from "../../components/Layout/Layout.js";
import AdminMenu from "../../components/Layout/AdminMenu.js";
import { useAuth } from "../../context/auth.js";
const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">content</div>
          <div className="card w-75 p-3">
            <h3>{auth?.user?.name}</h3>
            <h3>{auth?.user?.email}</h3>
            <h3>{auth?.user?.phone}</h3>
            <h3>{auth?.user?.address}</h3>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
