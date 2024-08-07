import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu.js";
import Layout from "../../components/Layout/Layout.js";

const Users = () => {
  return (
    <Layout title={"Dashboard- All Users"}>
      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1>Users</h1>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
