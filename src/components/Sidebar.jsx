import { useState } from "react";
import { Nav } from "react-bootstrap";
import {
  FaTachometerAlt,
  FaBoxOpen,
  FaServicestack,
  FaPhone,
  FaInfoCircle,
  FaUsers,
  FaBars,
} from "react-icons/fa";
import "./Sidebar.css";

function Sidebar({ onSelect }) {
  const [active, setActive] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { name: "Dashboard", key: "dashboard", icon: <FaTachometerAlt /> },
    { name: "Productos", key: "productos", icon: <FaBoxOpen /> },
    { name: "Servicios", key: "servicios", icon: <FaServicestack /> },
    { name: "Contáctanos", key: "contacto", icon: <FaPhone /> },
    { name: "Conócenos", key: "conocenos", icon: <FaInfoCircle /> },
    { name: "Clientes", key: "clientes", icon: <FaUsers /> },
  ];

  const handleSelect = (key) => {
    setActive(key);
    onSelect(key);
  };

  return (
    <div
      className={`sidebar d-flex flex-column justify-content-between p-3 text-white ${
        collapsed ? "collapsed" : ""
      }`}
    >
      <div>
        <div className="d-flex justify-content-between align-items-center mb-4">
          {!collapsed && <h5 className="text-white">AdvanceTec</h5>}
          <FaBars
            className="toggle-btn"
            onClick={() => setCollapsed(!collapsed)}
          />
        </div>

        <Nav className="flex-column">
          {menuItems.map((item) => (
            <Nav.Link
              key={item.key}
              className={`nav-item px-3 py-2 rounded ${
                active === item.key ? "active" : ""
              }`}
              onClick={() => handleSelect(item.key)}
              title={collapsed ? item.name : ""}
            >
              <span className="me-2">{item.icon}</span>
              {!collapsed && item.name}
            </Nav.Link>
          ))}
        </Nav>
      </div>

      <div className="text-center">
        <button className="btn btn-outline-light btn-sm">
          {collapsed ? "🌙" : "Modo Oscuro"}
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
