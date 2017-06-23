import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import BioColbert from "../image/bios/Colbert_280x350.jpg";
import BioFrazis from "../image/bios/Frazis_280x350.jpg";
import BioBlake from "../image/bios/Blake_280x350.jpg";
import BioGalgsdies from "../image/bios/Galgsdies_280x350.jpg";
import BioJansen from "../image/bios/Jansen_280x350.jpg";
import BioLambert from "../image/bios/Lambert_280x350.jpg";
import BioLefever from "../image/bios/Lefever_280x350.jpg";
import BioMcdowell from "../image/bios/McDowell_280x350.jpg";
import BioPalmerlee from "../image/bios/PalmerLee_280x350.jpg";
import BioParker from "../image/bios/Parker_280x350.jpg";
import BioPlaskett from "../image/bios/Plaskett_280x350.jpg";
import BioRobertsSmith from "../image/bios/Roberts-Smith_280x350.jpg";
import BioRosenfield from "../image/bios/Rosenfield_280x350.jpg";
import BioWard from "../image/bios/Ward_280x350.jpg";
export default class Bio extends React.Component {

  render(){
    return (
      <div className="body-content container no-float-print">
        <ol className="breadcrumb hidden-print">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/industry-advisory-committee">Industry Advisory Committee</Link></li>
          <li className="active">Member Biographies</li>
        </ol>
          <h1 className="hidden-print">Member Biographies</h1>
          <h2 className="print-only" aria-hidden="true">Industry Advisory Committee on Veterans' Employment Member biographies</h2>

        <section id="BioFrazis">
          <div className="row">
           <div className="col-xs-6 col-md-3 col-sm-3">

                  <div className="thumbnail">
                    <img src={BioFrazis} alt="Mr George Frazis"/>
                  </div>
              </div>

           <div className="col-md-8">
                  <p className="bio-description">George Frazis</p>
                  <p className="bio-description">Chief Executive, Consumer Bank</p>
                  <p className="bio-description">Westpac Group</p>
                  <p className="bio-education">B.Eng. (Hons), MBA (AGSM/Wharton) <span className="sr-only">Bachelor of Engineering (Honours), MBA (AGSM/Wharton)</span></p>


                  <p className="break"> George was appointed Chief Executive, Consumer Bank for the Westpac Group in June 2015, responsible for managing the end to end relationship with consumer customers.
                    This includes managing over 10,300 people and all consumer banking products and services under the Westpac, St.George, BankSA, Bank of Melbourne and RAMS brands.
                    In his first 12 months in the role George has achieved above market balance sheet growth while increasing cash earnings by 16%.
                  </p>

                  <p>Prior to this appointment, he was the Chief Executive Officer, St.George Banking Group from April 2012.
                    A division of Westpac Banking Corporation, St.George Banking Group comprised 4,600 people working across St.George Bank, Bank of Melbourne, BankSA and RAMS. St.George
                    experienced tremendous momentum under George’s leadership with six positives halves, and cash earnings (profit after tax) which increased by 14% in the 2014
                    financial year and 17% in the 2013 financial year.
                  </p>

                  <p>George joined the Westpac Group in March 2009 as Chief Executive, Westpac New Zealand Limited where he was instrumental in improving the performance
                     of the New Zealand business by tripling cash earnings over three years, growing home loans at twice the banking system average and achieving
                     above average growth in Business Banking and Deposits during a period when the New Zealand economy was in a recession.
                  </p>

                  <p>Prior to his roles with the Westpac Group, George was Group Executive General Manager at National Australia Bank where he was responsible for restoring
                     NAB as the number 1 Business Bank.  A highly experienced financial services executive, George has also spent time as a senior executive with
                     Commonwealth Bank of Australia as the Chief Financial Officer of the Institutional Banking Division.  George has also been a partner with
                     the Boston Consulting Group, both in Sydney and London.
                  </p>

                  <p>George started his career as an Engineering Officer in the Royal Australian Air Force with 77 Squadron, responsible for the maintenance of F/A-18 Hornet Fighter Jets.</p>

                  <p>George is an Executive Member of the Business Advisory Council – UNSW Australian School of Business, a member of the 2020 Amnesty International Council
                     and a Governor of the St.George Foundation.</p>
               </div>
             </div>
             <p className="hidden-print">
               <span className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
               <Link to="/industry-advisory-committee#Membership"> Back to Industry Advisory Committee
               </Link>
             </p>
        </section>

        <section className="bio-section" id="BioRobertsSmith">
          <div className="row">
             <div className="col-xs-6 col-md-3 col-sm-3">
                 <div className="thumbnail">
                   <img src={BioRobertsSmith} alt="Ben Roberts-Smith "/>
                 </div>
             </div>

             <div className="col-md-8">
                 <p className="bio-description">Ben Roberts-Smith VC, MG</p>
                 <p className="bio-description">General Manager</p>
                 <p className="bio-description">Seven Network, Queensland</p>

                 <p className="break"> Ben Roberts-Smith served with distinction in the Australian Army and Special Air Service Regiment.
                    His service spans over 19 years and included operational deployments to East Timor, Fiji, Iraq, Afghanistan, and the Middle East.
                    Ben is a recipient of the Victoria Cross for Australia, the Medal for Gallantry and Commendation for Distinguished Service.
                 </p>

                 <p>In 2013, Ben launched his own consultancy, RS Group Australia, and advised numerous national clients across a variety of sectors
                    in relation to corporate culture, strategic restructuring and change management. He focused extensively on assisting companies to
                    achieve the benefits of a high performance workplace culture. Ben completed a Master of Business Administration at the University of
                    Queensland and is a graduate of the Australian Institute of Company Directors.
                 </p>

                 <p>In 2015 Ben was appointed Deputy General Manager of the Seven Network for Regional Queensland and in June that year was promoted to General Manager.
                    2016 saw a restructure of operations within Seven West Media and at that time Ben’s responsibilities expanded to include the Brisbane market
                    as well as regional Queensland. Ben is now General Manager of the Seven Network in Queensland.
                 </p>

                 <p>Ben’s contribution to Australia extends past his military service. He is also Chairman of the National Australia Day Council,
                    Deputy Chairman of the Prime Minister’s Advisory Council for Veterans’ Mental Health, Member of the Queensland Veterans’ Advisory Council,
                    Patron of the SAS Association’s Wandering Warriors and a National Ambassador for Legacy.
                 </p>
              </div>
            </div>
            <p className="hidden-print">
              <span className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
              <Link to="/industry-advisory-committee#Membership"> Back to Industry Advisory Committee
              </Link>
            </p>
        </section>

        <section className="bio-section" id="BioColbert">
          <div className="row">
            <div className="col-xs-6 col-md-3 col-sm-3">
                <div className="thumbnail">
                  <img src={BioColbert} alt="Natalie Colbert"/>
                </div>
            </div>

            <div className="col-md-8">
                <p className="bio-description">Natalie Colbert</p>
                <p className="bio-description">Chief Executive Officer</p>
                <p className="bio-description">CanPLAY Pty Ltd</p>
                <p className="break">Natalie has eight years of corporate experience as the founder and sole director/Chief Executive Officer
                     of CanPLAY Pty Ltd, a company managing three separate early childhood business in Canberra and offering
                      consulting services to other early childhood education providers.</p>
                  <p>Natalie is a veteran of the Royal Australian Air Force after serving twenty-two years’ as a Logistics Officer
                     including a deployment to East Timor.  During her career, Natalie was exposed to the many unique aspects of the
                     Defence industry, mainly within the logistics/engineering and financial environments.  She has gained substantial
                     experience in tactical, operational and strategic logistics management, the development of Defence capability requirements,
                     and the Defence acquisition process.</p>
                  <p>Natalie is a graduate of the Australian Defence Force Academy and the University of New South Wales.  She holds separate
                     degrees in Arts, Business and Technology, and Project Management.  Natalie is a graduate of the Australian Institute of Company Directors. </p>

             </div>
           </div>
           <p className="hidden-print">
             <span className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
             <Link to="/industry-advisory-committee#Membership"> Back to Industry Advisory Committee
             </Link>
           </p>
        </section>

      <section className="bio-section" id="BioBlake">
          <div className="row">
              <div className="col-xs-6 col-md-3 col-sm-3">
                  <div className="thumbnail">
                    <img src={BioBlake} alt="Chris Blake"/>
                  </div>
              </div>

              <div className="col-md-8">
                  <p className="bio-description">Chris Blake</p>
                  <p className="bio-description">Executive General Manager, Group Services</p>
                  <p className="bio-description">Australia Post</p>

                  <p className="break"> Chris Blake joined Australia Post in July 2010 and is the Executive General Manager Group Services.
                      He is responsible for leading strategy, cultural change, innovation, internal and external communications, Human Resources,
                      Government and Regulatory Affairs and stakeholder management.
                  </p>

                  <p>Prior to joining Australia Post, Chris worked in senior executive roles at the National Australia Bank (NAB) including the Executive General Manager
                     People and Organisational Development and the Executive General Manager, Business Strategy & People for NAB’s Global Wholesale Banking Division,
                     where he led the development of a new global business strategy for the wholesale bank following the Global Financial Crisis.
                  </p>

                  <p>Chris has a wealth of experience in overseeing complex organisation-wide change following his work in senior roles in banking and with PricewaterhouseCoopers,
                     where he was partner for 10 years.
                  </p>

                  <p>Chris also served as a Member of the Prime Minister’s Advisory Group on the Reform of Australian Government Administration, is a past Chairman of the
                     Brain Research Institute, a Director of the Australian American Leadership Dialogue and a member of the advisory boards of the High Resolves Institute,
                     the 100% Project and the APS Strategic Centre for Leadership, Learning and Development.
                  </p>
               </div>
             </div>
             <p className="hidden-print">
               <span className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
               <Link to="/industry-advisory-committee#Membership"> Back to Industry Advisory Committee
               </Link>
             </p>
        </section>

        <section className="bio-section" id="BioGalgsdies">
          <div className="row">
           <div className="col-xs-6 col-md-3 col-sm-3">
               <div className="thumbnail">
                 <img src={BioGalgsdies} alt="Mark Galgsdies"/>
               </div>
           </div>

           <div className="col-md-8">
               <p className="bio-description">Mark Galgsdies, JP</p>
               <p className="bio-description">National Training Manager – Defence</p>
               <p className="bio-description">Serco Asia Pacific</p>

               <p className="break">Mark joined Serco Asia Pacific as its National Training Manager - Defence in March 2016.
                  After spending 8 years as an Education Officer in the Royal Australian Air Force, Mark pursued a career focussed on staff training and development.
                  Over the past 20 years, Mark has worked in both public and private sector organisations across many different industries ranging from banking to
                  construction, in Australia, Papua New Guinea, New Zealand, USA and Singapore.
               </p>

               <p>Mark is a strong advocate for Australia’s apprenticeship and traineeship system. He is keen to foster collaborative and innovative partnerships
                  between Registered Training Organisations and Group Training providers in the Vocational Education and Training sector and with industry and the
                  Australian Defence Force to widen and deepen the opportunities for skills recognition and meaningful job and career prospects for ADF veterans and their families.
               </p>

               <p>In 2013 Mark was the training and development subject matter expert for the Australian Constructors Association (ACA) Working Party on national Workforce Development
                  issues and nationwide critical skills shortages in the construction industry.
               </p>

               <p>Mark completed a Masters Degree in Education at the University of Sydney and has graduate and post-graduate qualifications in Mathematics, Science and Education
                 from the University of Tasmania. He also holds Diplomas in Management, and Training and Assessment.
               </p>

               <p>Mark is also a registered high school maths and science teacher in NSW. He is an Associate Fellow of the Australian Institute of Management and is a Certified Professional
                  with the Australian Human Resources Institute.</p>
            </div>
          </div>
          <p className="hidden-print">
            <span className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
            <Link to="/industry-advisory-committee#Membership"> Back to Industry Advisory Committee
            </Link>
          </p>
        </section>

        <section className="bio-section" id="BioJansen">
          <div className="row">

            <div className="col-xs-6 col-md-3 col-sm-3">
                <div className="thumbnail">
                  <img src={BioJansen} alt="Mark Jansen"/>
                </div>
            </div>

            <div className="col-md-8">
                <p className="bio-description">Mark Jansen</p>
                <p className="bio-description">Director</p>
                <p className="bio-description">PwC</p>

                    <p className="bio-education">Bachelor of Science – University of New South Wales</p>
                    <p className="bio-education">Graduate Diploma of Technology Management – Deakin University</p>
                    <p className="bio-education">Master of Defence Studies – Canberra University</p>

                <p className="break">Mark Jansen is a Partner in PwC and leads elements of the Defence and National Security Businesses. He supports clients in Strategy, Aerospace, Command, Control,
                   Intelligence and Information Technology.  Mark has over 15 years of consulting experience and was a Partner in Booz & Company before the company was acquired by PwC in 2015.
                </p>

                <p>Prior to working as a consultant, Mark was in the Air Force for 15 years, serving primarily as an Intelligence Officer.
                   Mark gained operational experience in East Timor.  He was awarded the Chief of Air Force Prize for professional excellence on
                   No 53 Command and Staff Course and was the academic dux of No 25 Fighter Combat Instructor/Fighter Intelligence Instructor course.
                </p>
             </div>
           </div>
           <p className="hidden-print">
             <span className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
             <Link to="/industry-advisory-committee#Membership"> Back to Industry Advisory Committee
             </Link>
           </p>
        </section>

        <section className="bio-section" id="BioLambert">
          <div className="row">
               <div className="col-xs-6 col-md-3 col-sm-3">
                   <div className="thumbnail">
                     <img src={BioLambert} alt="Jenny Lambert"/>
                   </div>
               </div>

               <div className="col-md-8">
                   <p className="bio-description">Jenny Lambert</p>
                   <p className="bio-description">Director Employment, Education and Training</p>
                   <p className="bio-description">Australian Chamber of Commerce and Industry</p>
                     <p className="break">Jenny has been serving the business community for 32 years as a senior manager within industry associations,
                        including 16 years as a CEO of associations largely in the services sector.</p>
                     <p>Commencing with the Australian Hotels Association as their Industrial & Research Officer in 1984, Jenny then served
                        as Project Manager at Tourism’s Industry Training Advisory Board in the early 1990s, working on projects relating
                        to workplace reform, workplace assessment, competency standards, training accreditation and quality assurance. </p>
                     <p>Jenny took on her first CEO role as head of Restaurant & Catering NSW, and then jointly held the national CEO role until 1999.  Then
                        followed six years as CEO of Meetings & Events Australia, overseeing amongst other activities, a structured professional
                        development and accreditation system.  In 2005, she became CEO of Nursery & Garden Industry Australia and in 2007, CEO of the National
                        Tourism Alliance, which is the peak body for tourism associations nationally.  She commenced with the Australian Chamber in May 2011
                        and is responsible for policy development and advocacy in vocational training, higher education, schools, employment and migration. </p>
                </div>
              </div>
              <p className="hidden-print">
                <span className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
                <Link to="/industry-advisory-committee#Membership"> Back to Industry Advisory Committee
                </Link>
              </p>
        </section>

        <section className="bio-section" id="BioLefever">
          <div className="row">
           <div className="col-xs-6 col-md-3 col-sm-3">
               <div className="thumbnail">
                 <img src={BioLefever} alt="Jim Lefever"/>
               </div>
           </div>

           <div className="col-md-8">
               <p className="bio-description">Jim Lefever</p>
               <p className="bio-description">Human Resources</p>
               <p className="bio-description">DXC Technology Australia Pty Limited</p>
               <p className="break"> Jim Lefever leads CSC’s human resources department. </p>
               <p>He is an experienced business transformation leader, human resources director, change manager and consultant.
                  Jim has designed and managed the implementation of innovative and successful transformations across the world.
                  Jim previously held senior HR and transformation roles at Salmat, Hewlett Packard/EDS Group, Equant/Global One,
                  as well as running his own transformation consulting business, creating value and realising EBITA benefit at global,
                  Asia-Pacific, Australian and  New Zealand levels.
               </p>
               <p>Prior to his civilian career, Jim spent 10 years as an Officer in the Royal Marines Commandos working in a variety of roles and a variety of locations worldwide.  </p>
               <p>He is passionate about building better relationships between employers and employees by creating solutions that transform the status quo within organisations.</p>
            </div>
          </div>
          <p className="hidden-print">
            <span className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
            <Link to="/industry-advisory-committee#Membership"> Back to Industry Advisory Committee
            </Link>
          </p>
        </section>

        <section className="bio-section" id="BioMcdowell">
          <div className="row">

              <div className="col-xs-6 col-md-3 col-sm-3">
                  <div className="thumbnail">
                    <img src={BioMcdowell} alt="Colin McDowell"/>
                  </div>
              </div>

              <div className="col-md-8">
                  <p className="bio-description">Colin McDowell</p>
                  <p className="bio-description">Chief Executive Officer</p>
                  <p className="bio-description">Allied Express Transport</p>
                <p className="break">Colin McDowell is the Chief Executive Officer of Allied Express Transport.</p>
                <p>Allied Express Transport are Australia’s largest privately owned express transport company,
                   responsible for the distribution of product from many industry leading brands such as Holden
                   (Allied Express builds the Holden motor car!), Schneider Electric, Repco, AutoNexus, De’Longhi Group, LG and Foxtel.
                    Colin founded Allied Express 38 years ago and it currently turns over $120 Million per annum.</p>
                <p>Colin has also been highly active in the Harness Racing industry, as both a participant (Driver, Trainer, Owner and Breeder)
                   and as a sponsor.  He has acted in both an advisory capacity and officially on various committees.</p>
                <p>Colin is also Major Sponsor of the  West Tigers Rugby League Club, an association that goes back some 25 years.  Allied Express
                   also sponsors and supports the North Melbourne Football Club, and a number of other sporting and charitable associations.</p>
               </div>
             </div>
             <p className="hidden-print">
               <span className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
               <Link to="/industry-advisory-committee#Membership"> Back to Industry Advisory Committee
               </Link>
             </p>
        </section>

        <section className="bio-section" id="BioPalmerlee">
          <div className="row">
             <div className="col-xs-6 col-md-3 col-sm-3">
                 <div className="thumbnail">
                   <img src={BioPalmerlee} alt="Mr Luke Palmerlee"/>
                 </div>
             </div>

             <div className="col-md-8">
                 <p className="bio-description">Mr Luke Palmerlee</p>
                 <p className="bio-description">Executive Director</p>
                 <p className="bio-description">J.P. Morgan Chase Bank, NA (Sydney Branch)</p>
                 <p className="break">Luke Palmerlee is an Executive Director in the investment banking division of J.P. Morgan Australia
                    and heads the bank’s government business, reporting directly to the bank’s Australian CEO, Robert Priestley.
                    He has been with the bank nearly 15 years, working throughout Asia and for the last 12 years in Australia.
                    Luke has covered clients across a range of sectors including
                    real estate, infrastructure, energy/oil & gas and diversified industrial companies. </p>
                 <p>Prior to working for J.P. Morgan, Luke worked for global real estate services firm Cushman & Wakefield
                    in New York and Hong Kong.  Luke began his professional career working as a legislative staffer in the United States
                    House of Representatives and Senate for members from his home state of Wyoming (Senators Alan Simpson and Malcolm Wallop
                    and Representative Craig Thomas). He focused on trade agreements, particularly passage of the North American Free Trade Agreement. </p>
                  <p>Luke earned a Bachelor of Arts (History) from Yale University and an MBA from Columbia University’s School of Business. </p>
              </div>
            </div>
            <p className="hidden-print">
              <span className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
              <Link to="/industry-advisory-committee#Membership"> Back to Industry Advisory Committee
              </Link>
            </p>
        </section>

        <section className="bio-section" id="BioParker">
          <div className="row">
              <div className="col-xs-6 col-md-3 col-sm-3">
                  <div className="thumbnail">
                    <img src={BioParker} alt="Christine Parker"/>
                  </div>
              </div>

              <div className="col-md-8">
                  <p className="bio-description">Christine Parker</p>
                  <p className="bio-description">Group Executive, Human Resources, Corporate Affairs and Sustainability</p>
                  <p className="bio-description">Westpac Group</p>

                  <p className="break"> Christine Parker is Group Executive, Human Resources and Corporate Affairs for the Westpac Group. </p>

                  <p>In this role, Christine is a member of Westpac Group’s Executive Team and holds leadership responsibility for the
                     Human Resources and Corporate Affairs and Sustainability functions across the Westpac Group.
                  </p>

                  <p>Her portfolio includes responsibility for the Westpac Group's human resources strategy and management, including reward and recognition,
                     safety, learning and development, careers and talent, employee relations and employment policy.  She is also responsible for Corporate Affairs and Sustainability.
                  </p>
                  <p>Before her move to the Group role in Australia, Christine was General Manager HR for Westpac New Zealand.
                     Christine was one of New Zealand’s leading HR practitioners, and has held senior appointments in across a number of high profile organisations and a
                     range of industries including manufacturing, retail and services.
                  </p>
                  <p>Prior to joining Westpac, Christine was Group HR Director for Carter Holt Harvey where she was responsible for the development and delivery of all facets of their
                     global human resource strategies.  From 1999 to 2004 Christine was Director of HR with Restaurant Brands NZ, the franchisor for high profile fast food brands
                     that included KFC, Pizza Hut and Starbucks.
                  </p>
                  <p>Christine trained as an Accountant and continued her professional development with a range of post graduate qualifications in HR Management,
                     Leadership and Quality Management.  Christine is a Governor of the St. George Foundation, a not for profit organisation that helps disadvantaged children and a
                     Director of Women’s Community Shelters, that provide emergency shelter and support for homeless women.
                  </p>
               </div>
              </div>
              <p className="hidden-print">
                <span className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
                <Link to="/industry-advisory-committee#Membership"> Back to Industry Advisory Committee
                </Link>
              </p>
        </section>

        <section className="bio-section" id="BioPlaskett">
          <div className="row">

              <div className="col-xs-6 col-md-3 col-sm-3">
                  <div className="thumbnail">
                    <img src={BioPlaskett} alt="Andrew Plaskett"/>
                  </div>
              </div>

              <div className="col-md-8">
                  <p className="bio-description">Andrew Plaskett</p>
                  <p className="bio-description">Director, Clients and Markets & People and Development</p>
                  <p className="bio-description">Clayton Utz</p>

                  <p className="break">Andrew Plaskett joined Clayton Utz in April 2007 and is currently the Director of Clients and Markets/People and Development.</p>
                  <p>Prior to this appointment, he was the National Manager, Client Strategy at Freehills.</p>
                  <p>Andrew also worked as a Management Consultant for CCA which included a focus on supporting Government agencies
                     across Federal and State and Local Government in the design and implementation of enterprise development initiatives.</p>
                  <p>He holds a Bachelor of Business (International Management) from Monash University.</p>
               </div>
             </div>
             <p className="hidden-print">
               <span className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
               <Link to="/industry-advisory-committee#Membership"> Back to Industry Advisory Committee
               </Link>
             </p>
        </section>

        <section className="bio-section" id="BioRosenfield">
          <div className="row">
              <div className="col-xs-6 col-md-3 col-sm-3">
                  <div className="thumbnail">
                    <img src={BioRosenfield} alt="Dean Rosenfield"/>
                  </div>
              </div>

              <div className="col-md-8">
                  <p className="bio-description">Dean Rosenfield</p>
                  <p className="bio-description">Managing Director</p>
                  <p className="bio-description">Saab Australia Pty Ltd</p>

                  <p className="break">Dean Rosenfield was appointed as the Managing Director of Saab Australia Pty Ltd in 2013 and is the senior representative
                     for the SaclassName="break"ab defence and security corporation in Australia and New Zealand. </p>
                  <p>Dean is a graduate of the Royal Military College, Duntroon and served 15 years in the Australian Army
                     before moving to industry in 1999 as a management consultant.</p>
                  <p>He has been with Saab since 2001 and has held senior roles in engineering, project management and business development
                     on the defence side of the business.  In 2007, Dean established Saab’s Civil Security business which now specialises
                     in security, air traffic management and communications. </p>
                  <p>He holds a Master of Management (Project Management) from the University of NSW and is a Member of the Australian
                     Institute of Company Directors.</p>
               </div>
             </div>
             <p className="hidden-print">
               <span className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
               <Link to="/industry-advisory-committee#Membership"> Back to Industry Advisory Committee
               </Link>
             </p>
        </section>

        <section className="bio-section" id="BioWard">
          <div className="row">
             <div className="col-xs-6 col-md-3 col-sm-3">
                 <div className="thumbnail">
                   <img src={BioWard} alt="Michael Ward"/>
                 </div>
             </div>

             <div className="col-md-8">
                 <p className="bio-description">Michael Ward</p>
                 <p className="bio-description">Managing Director</p>
                 <p className="bio-description">Raytheon Australia</p>

                 <p className="break">Michael Ward is Managing Director of Raytheon Australia responsible for the executive management
                    of Raytheon operations in Australia and New Zealand.</p>
                 <p>As a leading provider of Defence and training capability, Raytheon Australia is trusted to deliver; always.  The company
                    provides integrated mission solutions, weapon systems and mission support services for the Australian Defence Force across
                    a broad range of key naval, land and aerospace capabilities and training solutions to both Defence and civil customers.</p>
                 <p>Raytheon Company (NYSE: RTN), with 2014 sales of $23 billion and 61,000 employees worldwide, is a technology and innovation
                    leader specialising in defence, security and civil markets throughout the world. Raytheon is headquartered in Waltham, Mass.</p>
                 <p>Prior to assuming his current position, Michael served as Raytheon Australia’s General Manager, Strategy and Business Development,
                    where he was responsible for business growth and operational efficiency.  He has also previously served as the Company’s Chief Operating
                    Officer and General Manager, Support Services. </p>
                 <p>Before joining Raytheon, Michael was employed as a Defence Adviser to the Parliament of Australia. Michael’s service in the Parliament
                    of Australia came at the end of a 20-year career with the Australian Military.</p>
                 <p>A native of Australia, Michael is a graduate of the University of New South Wales and a Fellow of the Australian Institute of Management.
                    He studied for a bachelor’s degree in information technology before completing a master’s degree in business administration.
                    Michael has also undertaken graduate training in aeronautical engineering, defence studies and training.</p>
              </div>
            </div>
            <p className="hidden-print">
              <span className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
              <Link to="/industry-advisory-committee#Membership"> Back to Industry Advisory Committee
              </Link>
            </p>
        </section>
      </div>

    );
  }
}
