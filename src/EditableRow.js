import React from "react";

export default class EditableRow extends React.Component {
  constructor(props) {
    super(props);
    this.deleteRow = this.deleteRow.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.stopEdit = this.stopEdit.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      editing: false
    };
  }

  onChange(e) {
    const obj = this.props.RowObj;
    obj[e.target.id] = e.target.value;
    this.props.changeRow(obj);
  }

  toggleEdit() {
    this.setState({ editing: true });
  }

  deleteRow() {
    if (!window.confirm("Are you sure you wish to delete this record?")) return;

    this.props.deleteRow(this.props.RowObj);
  }

  stopEdit() {
    this.setState({ editing: false });
  }

  render() {
    const obj = this.props.RowObj;

    return (
      <tr onClick={this.toggleEdit} onBlur={this.stopEdit}>
        <td title="Delete" onClick={this.deleteRow}>
          <i className="far fa-trash-alt" />
        </td>
        <td>
          <input
            id="name"
            type="text"
            value={obj.name}
            readOnly={this.state.editing ? false : true}
            onChange={this.onChange}
          />
        </td>
        <td>
          <input
            id="desc"
            type="text"
            value={obj.desc}
            readOnly={this.state.editing ? false : true}
            onChange={this.onChange}
          />
        </td>
      </tr>
    );
  }
}
