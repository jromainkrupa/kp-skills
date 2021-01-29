import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "salary",'salaryField', "price", "nbmonth" ]

  connect() {
    console.log("hello")
  }

  change() {
    if (event.target.dataset.month == undefined) {
      const numberOfMonth = 12
      let salary = 45000
      salary = parseInt(this.salaryTarget.value,10)
      this.salaryFieldTarget.value = salary
      this.nbmonthTarget.innerText = numberOfMonth
      this.priceTarget.innerText = Math.round((salary * 0.16)/ numberOfMonth)
    } else {
      const numberOfMonth = event.target.dataset.month
      let salary = 45000
      salary = parseInt(this.salaryTarget.value,10)
      this.salaryFieldTarget.value = salary
      this.nbmonthTarget.innerText = numberOfMonth
      this.priceTarget.innerText = Math.round((salary * 0.16)/ numberOfMonth)
    }
  }

  choice() {
    let month = event.target.dataset.month
    change(month)
  }
}
