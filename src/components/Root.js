import { Component, xml, useState } from "@odoo/owl";

export class Root extends Component {
  static template = xml`
    <div t-on-click="update">
      Hello <t t-esc="state.text"/>
    </div>`;

  setup() {
    this.state = useState({ text: "Owl" });
  }

  update() {
    this.state.text = this.state.text === "Owl" ? "World" : "Owl";
  }
}