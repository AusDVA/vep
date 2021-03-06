import React from "react";



export default class GeneralResourses extends React.Component {

    render() {
        return (
            <div>

                <h3>Australian Defence Force Separation Data</h3>
                <p><a href={process.env.PUBLIC_URL + '/doc/ADF Separations 2012 to 2016.xlsx'} title="ADF Separations 2012 to 2016.xlsx">ADF Separations 2012-2016 by State and Category (XLSX 808 KB)</a></p>

                <h3>Media Releases</h3>
                <ul className="list-unstyled">
                <li>18 December 2017 <a target="_blank" href="http://minister.dva.gov.au/media_releases/2017/dec/va166.htm">Last week to nominate for inaugural awards
                    <span className="sr-only">(this link will open in a new tab)</span> </a></li>
                <li>11 December 2017 <a target="_blank" href="http://minister.dva.gov.au/media_releases/2017/dec/va158.htm">Time running out to nominate for awards
                    <span className="sr-only">(this link will open in a new tab)</span> </a></li>
                <li>17 November 2017 <a target="_blank" href="http://minister.dva.gov.au/media_releases/2017/nov/va154.htm">Supporting veterans’ employment
                      <span className="sr-only">(this link will open in a new tab)</span> </a></li>
                <li> 6 September 2017 <a target="_blank" href="https://www.pm.gov.au/media/2017-09-06/government-launches-veterans-employment-awards">Government launches Veterans' Employment Awards
                    <span className="sr-only">(this link will open in a new tab)</span> </a></li>
                <li> 17 June 2017 <a target="_blank" href="http://minister.dva.gov.au/media_releases/2017/jun/va079.htm">More than 1,000 jobs for
                veterans flagged <span className="sr-only">(this link will open in a new tab)</span> </a></li>
                <li> 31 March 2017 <a target="_blank" href="http://minister.dva.gov.au/media_releases/2017/mar/va043.htm">First meeting
                    of Industry Advisory Committee on Veterans’ Employment <span className="sr-only">(this link will open in a new tab)</span> </a></li>
                <li> 30 March 2017 <a target="_blank" href="http://minister.dva.gov.au/media_releases/2017/mar/va038.htm">Enhanced
                    support for veterans’ employment <span className="sr-only">(this link will open in a new tab)</span> </a></li>
                <li> 11 March 2017 <a target="_blank" href="http://minister.dva.gov.au/media_releases/2017/mar/va023.htm">Veterans’
                    Employment Industry Advisory Committee <span className="sr-only">(this link will open in a new tab)</span> </a></li>
                <li> 9 January 2017 <a target="_blank" href="http://minister.dva.gov.au/media_releases/2017/jan/va001.htm">Business backs
                    Prime Minister’s Veterans’ Employment Program <span className="sr-only">(this link will open in a new tab)</span> </a></li>
                <li> 17 November 2016 <a target="_blank" href="http://minister.dva.gov.au/media_releases/2016/nov/va106.htm">Joint media
                    release - Supporting veteran employment opportunities <span className="sr-only">(this link will open in a new tab)</span> </a></li>
                <li> 17 November 2016 <a target="_blank"
                    href="https://www.pm.gov.au/media/remarks-launch-veterans%E2%80%99-employment-initiative">Remarks
                    at the launch of the Veterans’ Employment Initiative <span className="sr-only">(this link will open in a new tab)</span> </a></li>
                </ul>


            </div>
        );
    }
}
