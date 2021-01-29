import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "salary",'salaryField' ]
  static values  = { month: Number }

  connect() {
    console.log("hello")
  }

  change() {
    console.log(this.salaryTarget.value)
    this.salaryFieldTarget.value = this.salaryTarget.value
  }

  monthPicked() {
    console.log('click')
    console.log(parseInt(event.target.dataset.month,10))
    event.target.classList.remove('bg-blue-500','text-white')

  }
}
