import Header from '../Header'
import './index.css'

const Home = props => {
  const onFindJobs = () => {
    const {history} = props
    history.push('/jobs')
  }

  return (
    <div className="home_container">
      <Header />
      <div className="home_body_contianer">
        <div className="home_content">
          <h1>Find The Job That Fits Your Life</h1>
          <p>
            Millions of people are searching for jobs, salary information and
            company reviews. Find the job that fits your ability and potential.
          </p>
          <button
            type="button"
            className="find_jobs_button"
            onClick={onFindJobs}
          >
            Find Jobs
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
