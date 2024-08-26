import "./write.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Write = () => {
  return (
    <div className="write">
        <img className="writeimg" src="https://s1.1zoom.me/b5050/637/Scenery_Mountains_Winter_493358_3840x2400.jpg" alt="" />
      <form className="writeform">
        <div className="writeformgroup">
          <label htmlFor="fileinput">
            <FontAwesomeIcon  className="writeicon" icon={faPlus} />
          </label>
          <input type="file" id="fileinput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeinput"
            autoFocus={true}
          />
        </div>
        <div className="writeformgroup">
          <textarea
            placeholder="Tell your story....."
            type="text"
            className="writeinput writetext"
          ></textarea>
        </div>
        <button className="writesubmit">Publish</button>
      </form>
    </div>
  );
};

export default Write;
