import {Component} from 'react'
import './index.css'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

class FilterGroup extends Component {
  state = {employmentType: '', salaryRange: ''}

  renderEmploymentTypeList = employmentType => {
    const {label, employmentTypeId} = employmentType

    return (
      <li key={employmentTypeId}>
        <input
          type="checkbox"
          id={employmentTypeId}
          onChange={this.onChangeEmploymentType}
        />
        <label htmlFor={employmentTypeId}>{label}</label>
      </li>
    )
  }

  renderSalaryRangeList = salaryRange => {
    const {label, salaryRangeId} = salaryRange

    return (
      <li key={salaryRangeId}>
        <input
          type="radio"
          id={salaryRangeId}
          onChange={this.onChangeSalaryRange}
        />
        <label htmlFor={salaryRangeId}>{label}</label>
      </li>
    )
  }

  render() {
    return (
      <>
        <p className="filters_heading">Type Of Employment</p>
        <ul className="employment_type_container">
          {employmentTypesList.map(eachType =>
            this.renderEmploymentTypeList(eachType),
          )}
        </ul>
        <hr />
        <p className="filters_heading">Salary Range</p>
        <ul className="salary_range_container">
          {salaryRangesList.map(eachRange =>
            this.renderSalaryRangeList(eachRange),
          )}
        </ul>
      </>
    )
  }
}

export default FilterGroup
