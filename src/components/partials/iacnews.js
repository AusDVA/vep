import React from "react";
import IAC_Img from "../../image/iac.png";

export default class IACNews extends React.Component {

  render() {
    return (
        <div id="News">
  <h2>Latest News</h2>
        <img alt="Group photo of Industry Advisory Committee members." src={IAC_Img}/>

                  <h4 className="news-headline">Industry Advisory Committee's inaugural meeting</h4>
                  <p>The Industry Advisory Committee on Veterans' Employment held its inaugural meeting in Sydney on <span className="no-wrap">31 March 2017.</span></p>

                  <p>At the meeting, the Committee focused on establishing a number of priority areas of focus. These areas include the availability of data on the employment profile of veterans, improving the transition process from the ADF, translating skills and raising awareness of the value that former members of the ADF offer to Australian businesses.</p>

                  <p>The Committee will form Working Groups to progress its work, and will look to involve other businesses that have expressed interest in the Program.</p>

                  <p>The next meeting of the Committee will be held in mid-June.</p>

        </div>
    );
  }
}
