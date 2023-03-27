import React, { Children } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useContext, useState } from 'react';
import Config from './../../routes/Config';
import { NavLink, useLocation } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

function NavSection() {
  const { userData } = useContext(AuthContext);
  const [activeLink, setActiveLink] = useState(null); // Adiciona o state para armazenar o link ativo
  const location = useLocation(); // Importa useLocation do react-router-dom para obter a rota atual
  let cont = 1;
  return (
    <>
      {Config().map((item) =>
        item.rules.includes(userData.rule.description) ? (
          <li className="nav-item" key={`li-${cont++}`}>
            <a
              className="nav-link collapsed"
              style={{
                padding: 6,
              }}
              href="#"
              data-toggle={
                Array.isArray(item.children) && item.children.length >= 1
                  ? 'collapse'
                  : ''
              }
              data-target={`#collapse-${item.name}`}
              aria-expanded="true"
              aria-controls={`#collapse-${item.name}`}
            >
              {Array.isArray(item.children) && item.children.length >= 1 ? (
                <>
                  <i className={item.icon}></i>
                  <span>{item.title}</span>
                </>
              ) : (
                <>
                  <i className={item.icon}></i>
                  <span>
                    <NavLink
                      // className={`nav-item ${
                      //   location.pathname === item.path ? 'active' : ''
                      // }`}
                      // onClick={() => setActiveLink(item.path)} // Atualiza o link ativo quando o link é clicado
                      // activeClassName="active-link"
                      style={{
                        color: 'rgb(255 255 255 / 80%)',
                        textDecoration: 'none',
                      }}
                      to={item.path}
                    >
                      {item.title}
                    </NavLink>
                  </span>
                </>
              )}
            </a>
            {Array.isArray(item.children) && item.children.length >= 1 ? (
              <div
                id={`collapse-${item.name}`}
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  {/* <h6 className="collapse-header">Custom Utilities:</h6> */}
                  {item.children.map((children) => (
                    <NavLink
                      className="collapse-item"
                      to={children.path}
                      key={`link-${cont++}`}
                      // activeClassName="active-link"
                    >
                      {children.title}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : null}
          </li>
        ) : null,
      )}
    </>
  );
}

export default NavSection;
