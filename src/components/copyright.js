import React from "react";
import CCImg from "../image/cc.png";

export default class Copyright extends React.Component {

  render() {
    return (
      <div>
        <section>
          <div id="content" className="body-content container no-border" tabIndex="-1" autoFocus>
            <div className="row">
              <div className="col-md-10" id="mainCol">
                <h1>Copyright</h1>
                <p>The Commonwealth of Australia owns the copyright of everything that has been created on this website. The material on this website is provided under a Creative Commons Attribution 4.0 International (CC BY 4.0) license, with the exception of:</p>                <ul>
                  <li>the Commonwealth Coat of Arms</li>
                  <li>the Prime Minister's Veterans' Employment Program logo</li>
                  <li>any third party material</li>
                  <li>any material protected by trademark</li>
                </ul>

                <p>The details of the license conditions are available on the Creative Commons website
                   at <a target="_blank" href="https://creativecommons.org/licenses/by/4.0/">https://creativecommons.org/licenses/by/4.0/</a>
                </p>
                <p>The full legal code for the CC BY 4.0 license is available
                  at <a target="_blank" href="https://creativecommons.org/licenses/by/4.0/legalcode">https://creativecommons.org/licenses/by/4.0/legalcode</a>
                </p>
                <p><img alt="Attribution Creative Commons license" src={CCImg}/></p>

                <p className="copyright">Attribution</p>
                <p><b>CC BY</b></p>

                <p>Use of all or part of any material on this website must include the following attribution:</p>
                <p>© Commonwealth of Australia 2017</p>
                <p>The terms under which the Commonwealth Coat of Arms can be used are set out on the Department of the Prime Minister and Cabinet’s
                   website at <a target="_blank" href="http://www.dpmc.gov.au/government/commonwealth-coat-arms">http://www.dpmc.gov.au/government/commonwealth-coat-arms</a>
                </p>
                <p>Wherever a third party holds copyright in material presented on this website, the copyright remains with that party. Their permission may be required to use the material. All reasonable efforts have been made to:</p>

                <ul>
                  <li>clearly label material where the copyright is owned by a third party</li>
                  <li>ensure that the copyright owner has consented to this material being presented on this website</li>
                </ul>

              </div>
            </div>
          </div>
        </section>

      </div>
    );
  }
}
