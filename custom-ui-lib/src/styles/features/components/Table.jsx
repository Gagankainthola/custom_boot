import React from "react";

const Table = () => {
  return (
    <section className="container py-4 mg-top-5 text-center">
      <h2 className="txt-3xl fw-semibold txt-primary">UI Components Table</h2>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Component</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="component-name">Header</td>
              <td className="component-description">
                Displays a page title and description.
              </td>
            </tr>
            <tr>
              <td className="component-name">Button</td>
              <td className="component-description">
                A clickable element to trigger actions.
              </td>
            </tr>
            <tr>
              <td className="component-name">Card</td>
              <td className="component-description">
                A container for displaying content.
              </td>
            </tr>
            <tr>
              <td className="component-name">Modal</td>
              <td className="component-description">
                A dialog box for displaying content on top of a page.
              </td>
            </tr>
            <tr>
              <td className="component-name">Dropdown</td>
              <td className="component-description">
                A menu that allows the user to select one option from a list.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table;
