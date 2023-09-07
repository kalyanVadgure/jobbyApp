import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {BsSearch} from 'react-icons/bs'

import Header from '../Header'
import JobCard from '../JobCard'
import FilterGroup from '../FilterGroup'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

const apiStatusConst = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Jobs extends Component {
  state = {
    jobsList: [],
    profileDetails: {},
    profileApiStatus: apiStatusConst.success,
    searchInput: '',
  }

  componentDidMount() {
    this.getjobsList()
    this.getProfileDetails()
  }

  getjobsList = async () => {
    const jwtToken = Cookies.get('jwt_token')
    console.log(jwtToken)
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const apiUrl = 'https://apis.ccbp.in/jobs'
    const response = await fetch(apiUrl, options)

    // In console response status is showing 401. Here data is failed fetch
    // How can i solve this error ?
    // Start the app and check this error in console

    console.log(`jobs api response error 401`)
    console.log(response)

    if (response.ok === true) {
      const fetchData = await response.json()
      const {jobs} = fetchData

      const updatedData = jobs.map(eachData => ({
        companyLogoUrl: eachData.company_logo_url,
        employmentType: eachData.employment_type,
        id: eachData.id,
        jobDescription: eachData.job_description,
        location: eachData.location,
        packagePerAnnum: eachData.package_per_annum,
        rating: eachData.rating,
        title: eachData.title,
      }))

      console.log(updatedData)
      this.setState({jobsList: updatedData})
    }
  }

  getProfileDetails = async () => {
    const profileUrl = 'https://apis.ccbp.in/profile'
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const profileResponse = await fetch(profileUrl, options)

    // In console profileResponse status is showing 401. Here data is failed fetch
    // How can i solve this error
    // Start the app and check this error in console

    // I used the dummy data provided in description to design layout of the website. Not used data the fetched from api's

    console.log(`profile api response error 401`)
    console.log(profileResponse)

    if (profileResponse.ok === true) {
      const data = await profileResponse.json()
      const updatedData = {
        profileDetails: {
          name: data.profile_details.name,
          profileImageUrl: data.profile_details.profile_image_url,
          shortBio: data.profile_details.short_bio,
        },
      }

      console.log(updatedData)
      this.setState({profileDetaills: updatedData})
    }
  }

  onSuccessProfileView = () => {
    const {profileDetaills} = this.state

    return (
      <div className="profile_container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/male-avatar-img.png"
          alt="profile"
        />
        <h1>Rahul Attuluri</h1>
        <p>Lead Software Developer and AI-ML expert</p>
      </div>
    )
  }

  onFailProfileView = () => {
    const a = 0

    return (
      <div className="profile_failure_container">
        <button type="button" className="retry_button">
          Retry
        </button>
      </div>
    )
  }

  onProfileLoaderView = () => (
    <div>
      <Loader type="ThreeDots" color="blue" height={50} width={50} />
    </div>
  )

  renderProfileDetails = () => {
    const {profileApiStatus} = this.state

    switch (profileApiStatus) {
      case apiStatusConst.success:
        return this.onSuccessProfileView()
      case apiStatusConst.failure:
        return this.onFailProfileView()
      case apiStatusConst.inProgress:
        return this.onProfileLoaderView()
      default:
        return null
    }
  }

  render() {
    const {searchInput} = this.state

    return (
      <div className="jobs_main_container">
        <Header />
        <div className="jobs_body_container">
          <div className="filters_and_profile_container">
            <div className="mobile_search_input_container">
              <input
                type="search"
                placeholder="search"
                className="search_box"
                value={searchInput}
              />
              <button type="button" className="search_button">
                <BsSearch color="white" size={20} />
              </button>
            </div>
            {this.renderProfileDetails()}
            <hr />
            <FilterGroup />
          </div>
          <div className="jobs_display_container">
            <div className="search_input_container desktop_search_input_container">
              <input
                type="search"
                placeholder="search"
                className="search_box"
                value={searchInput}
              />
              <button type="button" className="search_button">
                <BsSearch color="white" size={20} />
              </button>
            </div>
            <ul>
              <JobCard />
              <JobCard />
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Jobs
