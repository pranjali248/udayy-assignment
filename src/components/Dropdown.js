import React from 'react';
import { MenuItems } from './MenuItems';
import { NavDropdown } from 'react-bootstrap'

function Dropdown() {
  return (
    <>
      <NavDropdown title="Countries" id="collasible-nav-dropdown">
      {MenuItems.map((item, index) => {
          return (
              <NavDropdown.Item href={`/country/${item.path}`}>{item.title}</NavDropdown.Item>
          );
        })}
        </NavDropdown>
    </>
  );
}

export default Dropdown;
