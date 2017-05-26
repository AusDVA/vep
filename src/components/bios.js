import React from "react";
import FranzisImg from '../image/Frazis.jpg';
import MarkGImg from '../image/MarkG.jpg';
import RobertsSImg from '../image/RobertsS.jpg';
import BlakeCImg from '../image/BlakeC.jpg';

export default class BIOS extends React.Component {

  render() {
    return (
      //placeholder for eso page.
      <div>
        <section>
          <div className="body-content container">
            <div className="row">
              <div className="col-md-8">
                <h1> Member Biographies </h1>
              </div>
            </div>

              <div className="row">

                    <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                      <a href="/bioFrazis" className="thumbnail">
                        <img src={FranzisImg} alt="Groge Frazis" ></img>
                        <p className="thumnail-text"><strong>Groge Frazis</strong> | Chair</p>
                      </a>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                      <a href="/bioRobertsS" className="thumbnail">
                        <img src={RobertsSImg} alt=""></img>
                        <p className="thumnail-text"><strong>Ben Roberts-Smith </strong> | Deputy Chair</p>
                      </a>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                      <a href="#" className="thumbnail">
                        <img src={BlakeCImg} alt=""></img>
                        <p className="thumnail-text"><strong>Chris Blake</strong> | Australia Post</p>
                      </a>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                      <a href="#" className="thumbnail">
                        <img src={MarkGImg} alt=""></img>
                        <p className="thumnail-text"><strong>Mark Galgsdies</strong> | Serco </p>
                      </a>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                      <a href="#" className="thumbnail">
                        <img src={FranzisImg} alt=""></img>
                        <p className="thumnail-text"><strong>Groge Frazis</strong> | Chair </p>
                      </a>
                    </div>

              </div>

          </div>
        </section>
      </div>
    );
  }
}
