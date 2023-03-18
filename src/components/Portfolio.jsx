import project_one from '../assets/project_1.png'
import project_two from '../assets/project_2.png'
import project_three from '../assets/project_3.png'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h3>Some of my Projects</h3>
      <div className="projects grid">
        <a href="#">
          <img src={project_one} alt="space race image" />
          <h4>Space Race Game</h4>
        </a>
        <a href="#">
          <img src={project_two} alt="planet boy image" />
          <h4>Planet Boy API</h4>
        </a>
        <a href="#">
          <img src={project_three} alt="captain cosmo image" />
          <h4>Captain Cosmo Blog</h4>
        </a>
      </div>
    </section>
  )
}
export default Portfolio
