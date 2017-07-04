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
                <p>The Commonwealth of Australia owns the copyright of everything included on this website. All material on this website is provided under a Creative Commons Attribution 3.0 Australia (CC BY 3.0 AU) license, with the exception of:</p>
                <ul>
                  <li>The Commonwealth Coat of Arms;</li>
                  <li>This Department’s logo;</li>
                  <li>Any third party material; and</li>
                  <li>Any material protected by trademark.</li>
                </ul>

                <p>You are free to download, display, print and reproduce text content, provided that you attribute the Commonwealth.</p>
                <p>The details of the licence conditions are available on the Creative Commons website
                   at <a target="_blank" href="https://creativecommons.org/licenses/by/3.0/au/">https://creativecommons.org/licenses/by/3.0/au/</a>
                </p>
                <p>The full legal code for the CC BY 3.0 AU license is available
                  at <a target="_blank" href="https://creativecommons.org/licenses/by/3.0/au/legalcode">https://creativecommons.org/licenses/by/3.0/au/legalcode</a>
                </p>
                <p><img alt="Attribution Creative Commons" src={CCImg}/></p>
                
                <p className="copyright">Attribution</p>
                <p><b>CC BY</b></p>
               
                <p>Use of all or part of any material on this website must include the following attribution:</p>
                <p>© Commonwealth of Australia 2017</p>
                <p>The terms under which the Commonwealth Coat of Arms can be used are set out on the Department of the Prime Minister and Cabinet’s
                   website <a target="_blank" href="http://www.dpmc.gov.au/government/commonwealth-coat-arms">http://www.dpmc.gov.au/government/commonwealth-coat-arms</a>
                </p>
                <p>Wherever a third party holds copyright in material presented on this website, the copyright remains with that party. Their permission may be required to use the material. The Department has made all reasonable efforts to:</p>

                <ul>
                  <li>Clearly label material where the copyright is owned by a third party; and</li>
                  <li>Ensure that the copyright owner has consented to this material being presented on this website.</li>
                </ul>

              </div>
            </div>
          </div>
        </section>

      </div>
    );
  }
}
