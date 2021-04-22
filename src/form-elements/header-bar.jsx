/**
 * <HeaderBar />
 */

import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Grip from "../multi-column/grip";

export default class HeaderBar extends React.Component {
  render() {
    return (
      <div className="toolbar-header">
        <span className="badge badge-secondary">{this.props.data.text}</span>
        <div className="toolbar-header-buttons">
          {this.props.data.element !== "LineBreak" && (
            <div
              className="btn is-isolated"
              onClick={this.props.editModeOn.bind(
                this.props.parent,
                this.props.data
              )}
            >
              <FaEdit className="is-isolated" />
            </div>
          )}
          <div
            className="btn is-isolated"
            onClick={this.props.onDestroy.bind(this, this.props.data)}
          >
            <FaTrash className="is-isolated" />
          </div>
          {!this.props.data.isContainer && (
            <Grip
              data={this.props.data}
              index={this.props.index}
              onDestroy={this.props.onDestroy}
              setAsChild={this.props.setAsChild}
            />
          )}
        </div>
      </div>
    );
  }
}
