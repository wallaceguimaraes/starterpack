import React, { Children } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
import Config from './../../routes/Config';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

function NavSection() {
  const { userData } = useContext(AuthContext);
  let cont = 1;
  return (
    <>
      {Config().map((item) =>
        item.rules.includes(userData.rule.description) ? (
          <li className="nav-item" key={cont++}>
            <a
              className="nav-link collapsed"
              style={{
                color: 'white',
                fontSize: 14,
                textDecoration: 'none',
                padding: 6,
              }}
              href="#"
              data-toggle={
                Array.isArray(item.children) && item.children.length >= 1
                  ? 'collapse'
                  : ''
              }
              data-target={`#collapse${item.name}`}
              aria-expanded="true"
              aria-controls={`#collapse${item.name}`}
            >
              {Array.isArray(item.children) && item.children.length >= 1 ? (
                <>
                  <i className={item.icon}></i>
                  <span>{item.title}</span>
                </>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <i className={item.icon}></i>
                  <Link
                    activeClassName="active-link"
                    style={{
                      color: 'white',
                      fontSize: 14,
                      textDecoration: 'none',
                    }}
                    className=""
                    to={item.path}
                  >
                    {item.title}
                  </Link>
                </div>
              )}
            </a>
            {Array.isArray(item.children) && item.children.length >= 1 ? (
              <div
                id={`collapse${item.name}`}
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">Custom Utilities:</h6>
                  {item.children.map((children) => (
                    <Link
                      exact
                      className="collapse-item"
                      to={children.path}
                      key={`chil${cont++}`}
                      activeClassName="active-link"
                    >
                      {children.title}
                    </Link>
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
