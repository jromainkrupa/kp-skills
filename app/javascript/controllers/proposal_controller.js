import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "salary",'salaryField', "price", "nbmonth" ]


  change() {
    if (event.target.dataset.month == undefined) {
      const numberOfMonth = 12
      let salary = 45000
      salary = parseInt(this.salaryTarget.value,10)
      this.salaryFieldTarget.value = salary
      this.nbmonthTarget.innerText = numberOfMonth
      this.priceTarget.innerText = Math.round((salary * rateCalculator(salary))/ numberOfMonth)
    } else {
      const numberOfMonth = event.target.dataset.month
      let salary = 45000
      salary = parseInt(this.salaryTarget.value,10)
      this.salaryFieldTarget.value = salary
      this.nbmonthTarget.innerText = numberOfMonth
      this.priceTarget.innerText = Math.round((salary * rateCalculator(salary))/ numberOfMonth)
    }
  }

}

  const rateCalculator = (salary) => {
    if (salary <= 30000) {
      return 0.14
    } else if (salary > 30000 && salary <= 60000) {
      return 0.16
    } else if (salary > 60000 && salary <= 90000) {
      return 0.19
    } else if (salary > 90000) {
      return 0.2
    }
  }
