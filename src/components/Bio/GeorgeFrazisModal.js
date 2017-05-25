import React from "react";
import ExampleImage from "../../image/ico-user.svg";
export default class ModalGF  extends React.Component {

  render() {
    return (
      <div>
        <div id="chairModal" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h2 className="modal-title">Biography</h2>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-xs-5 col-md-3 col-sm-3">
                    <div className="thumbnail">
                      <img src={ExampleImage} alt="Mr George Frazis"/>
                    </div>
                    </div>
                  <div className="col-md-6 col-xs-7">
                    <h4><strong>George Frazis</strong></h4>
                    <h4><strong>Chief Executive, Consumer Bank</strong></h4>
                    <h4><strong>Westpac Group</strong></h4>
                    <p><small>B.Eng. (Hons), MBA (AGSM/Wharton)</small></p>
                      </div>
                      </div>
                    <p>George was appointed Chief Executive, Consumer Bank for the Westpac Group
                       in June 2015, responsible for managing the end to end relationship with consumer customers.
                       This includes managing over 10,300 people and all consumer banking products and services under the
                       Westpac, St.George, BankSA, Bank of Melbourne and RAMS brands.  In his first 12 months in the role
                       George has achieved above market balance sheet growth while increasing cash earnings by 16%.</p>
                     <p>Prior to this appointment, he was the Chief Executive Officer, St.George Banking Group from April 2012.
                        A division of Westpac Banking Corporation, St.George Banking Group comprised 4,600 people working across
                        St.George Bank, Bank of Melbourne, BankSA and RAMS. St.George experienced tremendous momentum under George’s
                        leadership with six positives halves, and cash earnings (profit after tax) which increased by 14% in the
                        2014 financial year and 17% in the 2013 financial year.</p>
                     <p>George joined the Westpac Group in March 2009 as Chief Executive, Westpac New Zealand Limited where he
                        was instrumental in improving the performance of the New Zealand business by tripling cash earnings over
                        three years, growing home loans at twice the banking system average and achieving above average growth
                        in Business Banking and Deposits during a period when the New Zealand economy was in a recession.</p>
                      <p>Prior to his roles with the Westpac Group, George was Group Executive General Manager at National Australia
                         Bank where he was responsible for restoring NAB as the number 1 Business Bank.  A highly experienced
                         financial services executive, George has also spent time as a senior executive with Commonwealth Bank
                          of Australia as the Chief Financial Officer of the Institutional Banking Division.  George has also
                          been a partner with the Boston Consulting Group, both in Sydney and London. </p>
                        <p>George started his career as an Engineering Officer in the Royal Australian Air Force with 77 Squadron, responsible for the maintenance of F/A-18 Hornet Fighter Jets.</p>
                        <p>George is an Executive Member of the Business Advisory Council – UNSW Australian School of Business, a member of the 2020 Amnesty International Council and a Governor
                           of the St.George Foundation.</p>
              </div>
              <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
