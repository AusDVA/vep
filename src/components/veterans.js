import React from "react";
import GeneralResourses from "./partials/generalResources";
import { HashLink as Link } from "react-router-hash-link";

export default class Veterans extends React.Component {

    render() {
        return (
            <div>
                <section>
                    <div className="body-content container no-border" id="content" tabIndex="-1" autoFocus>
                        <div className="row">
                            <div className="col-md-10" id="mainCol">
                                <h1>Veterans</h1>
                                <div className="list-contents-wrapper">
                                 <h2 className="list-contents-header">Contents</h2>
                                <ul className="list-contents" id="sidebar">
                                    <li><Link to="#jobactive">jobactive</Link></li>
                                    <li><Link to="#Industry-Advisory-Committee">Industry Advisory Committee on Veterans’ Employment</Link></li>
                                    <li><Link to="#Other-initiatives">Other initiatives</Link></li>
                                    <li><Link to="#support">State and territory government initiatives to increase veterans’ employment</Link></li>
                                    <li><Link to="#Resources">Resources for veterans</Link></li>
                                </ul>
                                </div>

                                <p>Veterans have a lot to offer an employer after they separate from the Australian
                                    Defence Force (ADF).</p>
                                <p>The ADF invests heavily in developing the skills and capabilities of their servicemen
                                    and women,
                                    providing them with extensive training and unique work experience. As a result, they
                                    possess a range
                                    of skills, abilities and attributes that make them valuable employees in the
                                    civilian workforce. They
                                    are strong leaders, resilient and highly motivated, and work well in team and
                                    high-pressure environments.
                                </p>
                                <p>The Australian Government is committed to ensuring that veterans are provided with a
                                    range of employment
                                    options when they separate, to support their smooth transition into civilian
                                    life.</p>

                                <h2 id="jobactive">jobactive</h2>
                                <p>jobactive is the Australian Government’s way to get more Australians into work,
                                    by connecting job seekers with employers. Under the Program, jobactive has been
                                    enhanced.</p>
                                <p>The <a target="_blank" href="http://www.jobactive.gov.au/">
                                jobactive website<span className="sr-only">(this link will open in a new tab)</span></a> now enables
                                    employers
                                    to select an optional ‘defence force experience desirable’ flag, and veterans
                                    can search for jobs that employers have flagged.</p>
                                <p>The jobactive website also provides <a target="_blank"
                                    href="https://jobsearch.gov.au/jobseeker-info/employment-assistance-for-veterans">
                                    information tailored for veteran jobseekers. <span className="sr-only">(this link will open in a new tab)</span> </a>
                                </p>

                                <h2 id="Industry-Advisory-Committee">Industry Advisory Committee on Veterans’
                                    Employment</h2>
                                <p>One of the primary aims of the Program is to improve employment opportunities for
                                    veterans,
                                    by working with Australian businesses to demonstrate the value that veterans can
                                    bring to their organisations.
                                </p>
                                <p>
                                    An <Link to="/industry-advisory-committee">Industry Advisory Committee on Veterans’ Employment
                                    <span className="sr-only">Industry Advisory Committee page inside this website</span></Link>, made up of
                                    industry representatives,
                                    has been established to develop
                                    and provide advice on practical measures to embed veterans’ employment strategies
                                    into the
                                    recruitment practices of Australian businesses.</p>

                                <h2 id="Other-initiatives">Other initiatives</h2>
                                <p>The Departments of Veterans’ Affairs (DVA) and Defence (Defence) continue to improve
                                    their
                                    transition and rehabilitation processes to ensure that former ADF members can
                                    transition
                                    seamlessly into civilian jobs.</p>
                                    <ul className="list-unstyled">

                                <li>
                                    <a target="_blank" href="https://www.dva.gov.au/health-and-wellbeing/rehabilitation">DVA
                                        Rehabilitation <span className="sr-only">(this link will open in a new tab)</span> </a>
                                </li>
                                <li>
                                    <a target="_blank" href="http://www.defence.gov.au/Health/DRC/ADFRehabilitationProgram.asp">ADF
                                        Rehabilitation Program <span className="sr-only">(this link will open in a new tab)</span> </a>
                                </li>
                                <li>
                                    <a target="_blank" href="http://www.defence.gov.au/dco/">Defence Community Organisation <span className="sr-only">(this link will open in a new tab)</span> </a>
                                </li>
                                </ul>
                                <p>To assist former ADF members who are looking to transition to the Commonwealth public
                                    sector, the Australian Public Service Commission is developing a toolkit and an application
                                    to align ADF ranks with Australian Public Service classifications. The Commission’s revamped <a target="_blank" href="https://www.apsjobs.gov.au/">
                                    APSjobs website<span className="sr-only">(this link will open in a new tab)</span></a>, to be launched later in 2017, will also include specific
                                    information for veterans on what to expect from employment in the APS.</p>

                                <h2 id="support">State and territory government initiatives to increase veterans’ employment</h2>
                                <h3>NSW Government</h3>
                                <p>The <a target="_blank"
                                    href="http://www.vep.veterans.nsw.gov.au">NSW
                                    Veterans Employment Program<span className="sr-only">(this link will open in a new tab)</span></a>, launched
                                    on <span className="no-wrap">5 May 2016</span>, will assist an additional
                                    200 veterans to find suitable, sustainable and meaningful employment within the NSW
                                    Government
                                    Sector by 2019. The NSW Government offers a variety of careers allowing veterans to draw upon
                                    their unique military experience and skills. <a target="_blank"
                                        href="http://www.vep.veterans.nsw.gov.au/job-search/job-search/">An ADF Rank –
                                        NSW Government Grade Match Tool<span className="sr-only">(this link will open in a new tab)</span></a> has
                                    been developed to guide veterans to their equivalent NSW public sector grades. </p>
                                <h3>Government of Victoria</h3>
                                <p>In November 2016, the Premier announced that he would establish a <a target="_blank"
                                        href="http://www.dpc.vic.gov.au/index.php/veterans/public-sector-veterans-employment-strategy">Veterans
                                        Public Sector Employment initiative.<span className="sr-only">(this link will open in a new tab)</span></a> The
                                    initiative will assist up to 250 veterans find jobs in the Victorian
                                    public sector. </p>
                                <p>The Government of Victoria is also working with the RSL Victorian Branch to establish
                                    a network
                                    of ESO providers and employers to further veterans’ employment in Victoria. </p>
                                <h3>Government of Western Australia</h3>
                                <p>The Government of Western Australia established
                                    the
                                        Western
                                        Australian Veterans Advisory Council in 2014.</p>
                                <p><a target="_blank" href="https://publicsector.wa.gov.au/veterans-employment-transition-support-vets">The
                                    Veterans’ Employment Transition Support<span className="sr-only">(this link will open in a new tab)</span></a> has
                                    been implemented to encourage current and former
                                    ADF members to consider employment in the WA public sector. </p>

                                <h2 id="Resources">Resources for veterans</h2>
                                <h3>jobactive</h3>
                                <p>jobactive is the Australian Government’s way to get more Australians into work, by connecting
                                   job seekers with employers.  Under the Program, jobactive has been enhanced. The <a target="_blank" href="http://www.jobactive.gov.au/">jobactive website<span className="sr-only">(this link will open in a new tab)</span></a> now enables employers to select an optional ‘defence force experience desirable’ flag,
                                   and veterans can <a target="_blank" href="https://jobsearch.gov.au/job/search/ex-adf">search for jobs<span className="sr-only">(this link will open in a new tab)</span></a> that employers have flagged.
                                </p>
                                <p>The jobactive website also provides <a target="_blank" href="https://jobsearch.gov.au/jobseeker-info/employment-assistance-for-veterans">
                                information tailored for veteran jobseekers<span className="sr-only">(this link will open in a new tab)</span></a>.</p>

                                <h3>APSjobs</h3>
                                <p>The Australian Public Service (APS) provides a wide range of roles, generous support and remuneration for
                                   APS employees in locations across Australia.
                                </p>
                                <p>APSjobs will help jobseekers to discover the many career paths the APS has to offer by linking them to
                                    vacancies available in the APS, the Parliamentary Service and many other Australian Government agencies.
                                </p>
                                <p>The <a target="_blank" href="https://www.apsjobs.gov.au/">APSjobs website<span className="sr-only">(this link will open in a new tab)</span></a> provides a gateway to a challenging and rewarding career in the APS. </p>

                                <h3>Defence Community Organisation</h3>
                                <p><a target="_blank" href="http://www.defence.gov.au/DCO/Transitions/">Defence Community Organisation<span className="sr-only">(this link will open in a new tab)</span></a> assists veterans to obtain practical guidance and
                                    information to help them to transition into civilian life.</p>

                                <h3>ADF Transition Handbook</h3>
                                <p>The <a target="_blank" href="http://www.defence.gov.au/DCO/_Master/documents/Transition/ADF-Transition-Handbook.pdf">ADF Transition Handbook (PDF 3.3 MB)<span className="sr-only">Opens a pdf file in a new tab</span></a> is a guide to help
                                   ADF members and their families prepare for separation from the military.</p>

                                <h3>Career Transition Assistance Scheme</h3>
                                <p>The <a target="_blank" href="http://www.defence.gov.au/payandconditions/adf/Chapter-2/Part-2/">Career Transition Assistance Scheme<span className="sr-only">(this link will open in a new tab)</span></a> assists ADF
                                    personnel with career transition when they separate from the ADF.</p>

                                <h3>Australian Defence Force Superannuation</h3>
                                <p><a target="_blank" href="https://adfsuper.gov.au/">Australian Defence Force Superannuation<span className="sr-only">(this link will open in a new tab)</span></a> (ADF Super) is the current superannuation
                                    scheme for members of the Australian Defence Force. </p>

                                <h3>Military Superannuation & Benefits Scheme</h3>
                                <p>The <a target="_blank" href="https://militarysuper.gov.au/">Military Superannuation & Benefits Scheme<span className="sr-only">(this link will open in a new tab)</span></a> (MilitarySuper) is the previous
                                   superannuation scheme for member of the Australian Defence Force.  </p>

                                <h3>Defence Force Retirement & Death Benefits Scheme</h3>
                                <p>The <a target="_blank" href="https://dfrdb.gov.au/">Defence Force Retirement & Death Benefits Scheme<span className="sr-only">(this link will open in a new tab)</span></a> (DFRDB) was the superannuation
                                   scheme for ADF members between 1973 - 1991.  </p>


                                <GeneralResourses/>

                                <p className="hidden-print">
                                    <Link to="#top">Back to top
                                        <span className="glyphicon glyphicon-arrow-up" aria-hidden="true"></span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
