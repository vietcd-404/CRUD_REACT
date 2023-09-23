import React from "react";

import { Link } from "react-router-dom";
import { Menu } from "primereact/menu";

const Sidebar = () => {
  // const { signout, user } = useAuth();

  // const userMenus = [
  //     {
  //         label: "Dashboard",
  //         icon: "pi pi-th-large",
  //         template: (item, options) => {
  //             return (
  //                 <Link to="/dashboard" className={options.className}>
  //                     <span className={options.iconClassName}></span>
  //                     <span className={options.labelClassName}>{item.label}</span>
  //                 </Link>
  //             )
  //         }
  //     },
  //     {
  //         label: "Sign Out",
  //         icon: "pi pi-sign-out",
  //         command: () => signout()
  //     }
  // ]

  const Menus = [
    {
      label: "Dashboard",
      icon: "pi pi-th-large",
      template: (item, options) => {
        return (
          <Link to="/admin/dashboard" className={options.className}>
            <span className={options.iconClassName}></span>
            <span className={options.labelClassName}>{item.label}</span>
          </Link>
        );
      },
    },
    {
      label: "User",
      icon: "pi pi-shopping-cart",
      template: (item, options) => {
        return (
          <Link to="/admin/pesanan" className={options.className}>
            <span className={options.iconClassName}></span>
            <span className={options.labelClassName}>{item.label}</span>
          </Link>
        );
      },
    },
    {
      label: "Categories",
      icon: "pi pi-tags",
      template: (item, options) => {
        return (
          <Link to="/admin/kategori" className={options.className}>
            <span className={options.iconClassName}></span>
            <span className={options.labelClassName}>{item.label}</span>
          </Link>
        );
      },
    },
    {
      label: "Product",
      icon: "pi pi-box",
      template: (item, options) => {
        return (
          <Link to="/admin/product" className={options.className}>
            <span className={options.iconClassName}></span>
            <span className={options.labelClassName}>{item.label}</span>
          </Link>
        );
      },
    },
    {
      label: "Hóa Đon",
      icon: "pi pi-users",
      template: (item, options) => {
        return (
          <Link to="/admin/pengguna" className={options.className}>
            <span className={options.iconClassName}></span>
            <span className={options.labelClassName}>{item.label}</span>
          </Link>
        );
      },
    },
    {
      label: "Sign Out",
      icon: "pi pi-sign-out",
      //   command: () => signout(),
    },
  ];

  return (
    <div className="sidebar">
      <h3>Sidebar</h3>
      {/* <Menu model={user.role === "admin" ? adminMenus : userMenus} /> */}
      <Menu model={Menus} />
    </div>
  );
};

export default Sidebar;
