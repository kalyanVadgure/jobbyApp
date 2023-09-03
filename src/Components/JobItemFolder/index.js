import {Component} from 'react'
import {MdLocationOn} from 'react-icons/md'
import {RiShoppingBag3Fill} from 'react-icons/ri'
import {AiFillStar} from 'react-icons/ai'

import Header from '../Header'
import './index.css'

class JobItemFolder extends Component {
  jobInfo = {
    companyLogoUrl:
      'https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png',
    companyWebsiteUrl: 'https://about.netflix.com/en',
    employmentType: 'Internship',
    id: 'bb95e51b-b1b2-4d97-bee4-1d5ec2b96751',
    jobDescription:
      'We are looking for a DevOps Engineer with a minimum of 5 years of industry experience, preferably working in the financial IT community. The position in the team is focused on delivering exceptional services to both BU and Dev',
    location: 'Delhi',
    packagePerAnnum: '10 LPA',
    rating: 4,
    title: 'Devops Engineer',
    lifeAtCompany: {
      descriptions:
        'Our core philosophy is people over process. Our culture has been instrumental to our success. It has helped us attract and retain stunning colleagues, making work here more satisfying. Entertainment, like friendship, is a fundamental human need, and it changes how we feel and gives us common ground. We want to entertain the world.',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/jobby-app/life-netflix-img.png',
    },
    skills: [
      {
        imageUrl:
          'https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png',
        name: 'Docker',
      },
      {
        imageUrl:
          'https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png',
        name: 'Docker',
      },
      {
        imageUrl:
          'https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png',
        name: 'Docker',
      },
      {
        imageUrl:
          'https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png',
        name: 'Docker',
      },
      {
        imageUrl:
          'https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png',
        name: 'Docker',
      },
      {
        imageUrl:
          'https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png',
        name: 'Docker',
      },
    ],
    similarJobs: [
      {
        companyLogoUrl:
          'https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png',
        employmentType: 'Freelance',
        id: '2b40029d-e5a5-48cc-84a6-b6e12d25625d',
        jobDescription:
          'The Experimentation Platform team builds internal tools with a big impact across the company. We are looking to add a UI engineer to our team to continue to improve our experiment analysis workflow and tools. Ideal candidates will be excited by direct contact with our users, fast feedback, and quick iteration.',
        location: 'Delhi',
        rating: 4,
        title: 'Frontend Engineer',
      },
      {
        companyLogoUrl:
          'https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png',
        employmentType: 'Freelance',
        id: '2b40029d-e5a5-48cc-84a6-b6e12d25625d',
        jobDescription:
          'The Experimentation Platform team builds internal tools with a big impact across the company. We are looking to add a UI engineer to our team to continue to improve our experiment analysis workflow and tools. Ideal candidates will be excited by direct contact with our users, fast feedback, and quick iteration.',
        location: 'Delhi',
        rating: 4,
        title: 'Frontend Engineer',
      },
      {
        companyLogoUrl:
          'https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png',
        employmentType: 'Freelance',
        id: '2b40029d-e5a5-48cc-84a6-b6e12d25625d',
        jobDescription:
          'The Experimentation Platform team builds internal tools with a big impact across the company. We are looking to add a UI engineer to our team to continue to improve our experiment analysis workflow and tools. Ideal candidates will be excited by direct contact with our users, fast feedback, and quick iteration.',
        location: 'Delhi',
        rating: 4,
        title: 'Frontend Engineer',
      },
    ],
  }

  renderSkillsItem = skill => {
    const {imageUrl, name} = skill
    return (
      <li className="skill_item">
        <img src={imageUrl} alt={name} />
        <p className="skill_name">{name}</p>
      </li>
    )
  }

  renderSimilarJobs = similarJob => {
    const {
      companyLogoUrl,
      employmentType,
      jobDescription,
      location,
      rating,
      title,
    } = similarJob

    return (
      <li className="similar_job_card_container">
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
        <p className="description_heading">Description</p>
        <p>{jobDescription}</p>
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
        </div>
      </li>
    )
  }

  render() {
    const {
      companyLogoUrl,
      companyWebsiteUrl,
      employmentType,
      jobDescription,
      location,
      packagePerAnnum,
      rating,
      lifeAtCompany,
      skills,
      title,
      similarJobs,
    } = this.jobInfo

    return (
      <div className="job_details_container">
        <Header />
        <div className="job_details_body_container">
          <div className="job_details_card_container">
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
                  <p className="text_location_employmentType">
                    {employmentType}
                  </p>
                </div>
              </div>
              <p className="text_location_employmentType">{packagePerAnnum}</p>
            </div>

            <hr className="seperation_line" />

            <div className="description_website_url_contianer">
              <p className="description_heading">Description</p>
              <a href={companyWebsiteUrl}>Visit</a>
            </div>

            <p>{jobDescription}</p>
            <p className="description_heading">Skills</p>
            <ul className="skills_container">
              {skills.map(eachSkill => this.renderSkillsItem(eachSkill))}
            </ul>
            <p className="description_heading">Life at Company</p>
            <div className="life_at_company_container">
              <p>{lifeAtCompany.descriptions}</p>
              <img src={lifeAtCompany.imageUrl} alt="life at company" />
            </div>
          </div>

          <div className="similar_jobs_container">
            <p className="similar_heading">Similar Jobs</p>
            <ul className="similar_jobs_list_container">
              {similarJobs.map(eachJob => this.renderSimilarJobs(eachJob))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default JobItemFolder
