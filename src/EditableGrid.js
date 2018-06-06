import React from "react";
import EditableRow from "./EditableRow";

export default class EditableGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gridItems: [
        { rowId: 1, name: "bob", desc: "idiot" },
        { rowId: 2, name: "jane", desc: "noob" }
      ]
    };
    this.getItems = this.getItems.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
    this.changeRow = this.changeRow.bind(this);
    this.newEntry = this.newEntry.bind(this);
  }

  deleteRow(rowObj) {
    const gridItems = this.state.gridItems;
    const newGridItems = gridItems.filter(o => o !== rowObj);
    this.setState({ gridItems: newGridItems });
  }

  changeRow(rowObj) {
    const gridItems = this.state.gridItems;
    const newGridItems = gridItems.map(item => {
      return item === rowObj ? rowObj : item;
    });
    this.setState({ gridItems: newGridItems });
  }

  getItems() {
    return this.state.gridItems.map(obj => {
      return (
        <EditableRow
          key={obj.rowId}
          RowObj={obj}
          deleteRow={this.deleteRow}
          changeRow={this.changeRow}
        />
      );
    });
  }

  newEntry() {
    const gridItems = this.state.gridItems;
    gridItems.push({ rowId: Date.now(), name: "new", desc: "record" });
    this.setState({ gridItems: gridItems });
  }

  render() {
    return (
      <div>
        <button onClick={this.newEntry}>New Entry</button>
        <table>
          <tbody>
            <tr>
              <th />
              <th>Name</th>
              <th>Description</th>
            </tr>
            {this.getItems()}
          </tbody>
        </table>
      </div>
    );
  }
}
