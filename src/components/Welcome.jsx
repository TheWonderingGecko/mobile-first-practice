import banner from '../assets/banner_image.png'

const Welcome = () => {
  return (
    <section id="welcome" className="grid">
      <div className="welcome-text">
        <h2>
          Future Astronaut
          <br />& React Developer
        </h2>
        <p className="leading">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo
          consequat.
        </p>
        <a href="#portfolio" className="button">
          View my work
        </a>
      </div>
      <div className="welcome-img">
        <img src={banner} alt="pic of planet" />
      </div>
    </section>
  )
}
export default Welcome
