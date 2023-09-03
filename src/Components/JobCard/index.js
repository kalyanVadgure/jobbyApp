import {MdLocationOn} from 'react-icons/md'
import {RiShoppingBag3Fill} from 'react-icons/ri'
import {AiFillStar} from 'react-icons/ai'
import './index.css'

const JobCard = () => {
  const jobDetails = {
    companyLogoUrl:
      'https://assets.ccbp.in/frontend/react-js/jobby-app/facebook-img.png',
    employmentType: 'Full Time',
    id: 'd6019453-f864-4a2f-8230-6a9642a59466',
    jobDescription:
      'We’re in search of a Back-End Software Engineer that specializes in server-side components. In this role, you’ll primarily work in NodeJs, SQL Lite, Python, AWS and GO and will bring a depth of knowledge on basic algorithms and data structures. As a Back-End Engineer, you might be architecting new features for our customers.',
    location: 'Bangalore',
    packagePerAnnum: '21 LPA',
    rating: 4,
    title: 'Backend Engineer',
  }

  const {
    companyLogoUrl,
    employmentType,
    id,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = jobDetails

  return (
    <li className="job_card_container">
      <div className="logo_job_type_container">
        <img src={companyLogoUrl} alt="" className="company_logo" />
        <div className="job_type_rating_container">
          <p className="title_heading">{title}</p>
          <div className="rating_container">
            <AiFillStar size={25} color="yellow" />
            <p className="rating_text">{rating}</p>
          </div>
        </div>
      </div>

      <div className="location_employment_type_package_container">
        <div className="location_employment_type_container">
          <div className="location_container">
            <MdLocationOn size={25} />
            <p className="text_location_employmentType">{location}</p>
          </div>
          <div className="location_container">
            <RiShoppingBag3Fill size={25} />
            <p className="text_location_employmentType">{employmentType}</p>
          </div>
        </div>
        <p className="text_location_employmentType">{packagePerAnnum}</p>
      </div>

      <hr className="seperation_line" />
      <p className="description_heading">Description</p>
      <p>{jobDescription}</p>
    </li>
  )
}

export default JobCard
