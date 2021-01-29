import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "salary",'salaryField' ]
  connect() {
    console.log("hello")
  }

  change() {
    console.log(this.salaryTarget.value)
    this.salaryFieldTarget.value = this.salaryTarget.value
  }
}
