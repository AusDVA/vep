import React from 'react';
export default class Awards extends React.Component {

  render(){
    return (
      <div>
        <header className="page-header" id="top">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">

              </div>
            </div>
          </div>
        </header>
        <section>
          <div className="body-content container">
            <div className="row">
              <div className="col-md-7" id="mainCol">
                <h1> Awards </h1>
                <p>The Prime Minister’s Veterans’ Employment Annual Awards will recognise the achievements
                  of companies in creating employment opportunities for veterans.  The criteria for the awards
                  will be developed in consultation with the Industry Advisory Committee on Veterans’ Employment. </p>
                <p>The inaugural awards are expected to be presented in late 2017.</p>
                <p>Further details regarding the criteria and how to submit nominations for an Award will be
                  made available when finalised.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
