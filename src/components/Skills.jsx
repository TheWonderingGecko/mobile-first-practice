import comet_one from '../assets/comet_1.svg'
import comet_two from '../assets/comet_2.svg'
import comet_three from '../assets/comet_3.svg'
import comet_four from '../assets/comet_4.svg'

const Skills = () => {
  return (
    <section id="skills">
      <h3>Things I Can Do</h3>
      <ul className="grid">
        <li>
          <img src={comet_one} alt="comet" />
          <h4>JavaScript</h4>
        </li>
        <li>
          <img src={comet_two} alt="comet" />
          <h4>React</h4>
        </li>
        <li>
          <img src={comet_three} alt="comet" />
          <h4>MongoDB</h4>
        </li>
        <li>
          <img src={comet_four} alt="comet/" />
          <h4>NodeJS</h4>
        </li>
      </ul>
      <p className="leading">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla
        lacus diam. Mauris fringilla consectetur nibh, sit amet tempus augue.
      </p>
    </section>
  )
}
export default Skills
