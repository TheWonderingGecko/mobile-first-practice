import facebook from '../assets/icon_fb.svg'
import twitter from '../assets/icon_tw.svg'

const Footer = () => {
  return (
    <footer>
      <div className="grid">
        <p className="copyright">Copyright 2020 Cosmo Junkie</p>
        <ul className="social">
          <li>
            <a href="#">
              <img src={facebook} alt="facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={twitter} alt="twitter" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
export default Footer
