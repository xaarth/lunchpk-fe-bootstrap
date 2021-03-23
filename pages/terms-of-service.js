import TosPoint from '../components/TosPoint';
import Link from 'next/link';
import HeadMeta from '../components/HeadMeta';
import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';

const TermsOfService = () => {
  const router = useRouter();

  return (
    <>
      <HeadMeta
        name='Privacy Policy'
        title='Terms of service - Lunch.pk'
        desc={`Terms of Use and Conditions This document sets out the Terms and Conditions (“Terms”) on which you (“you” or “User&#8221; &#8220;foodlancer&#8221; &#8220;Chef&#8221;) may use lunch.pk (“lunch”)  website, which permits you to cook, share, and sell Dishes (“Dishes”) through the lunch.pk’s Platform (“Platform”). Please read these Terms carefully before committing to use the Platform or services`}
        currentUrl={router.pathname}
      />
      <section style={{ padding: '5rem 0' }}>
        <Container>
          <div className='mb-5'>
            <h1 className='display-4 font-weight-bold mb-4'>
              Terms of service
            </h1>
          </div>

          <TosPoint title='Terms of Use and Conditions'>
            <p>
              This document sets out the Terms and Conditions (“Terms”) on which
              you (“you” or “User” “foodlancer” “Chef”) may use lunch.pk
              (“lunch”) website, which permits you to cook, share, and sell
              Dishes (“Dishes”) through the lunch.pk’s Platform (“Platform”).
            </p>
            <p>
              Please read these Terms carefully before committing to use the
              Platform or services offered on the lunch website.
            </p>
            <p>
              Please see our privacy policy{' '}
              <Link href='/privacy-policy'>
                <a>here</a>
              </Link>
              . By using the Platform, you agree to comply with and be legally
              bound by these Terms, whether or not you become a registered User
              of the services. These Terms govern your access to and use of the
              Platform and constitute a binding legal agreement between you and
              lunch.pk.
            </p>
            <p>
              You are advised to print and retain a copy of these Terms for your
              future reference.
            </p>
            <p>
              These Terms may be subject to change from time to time, and
              accordingly you are advised to refer back to these Terms before
              registering on the Platform.
            </p>
          </TosPoint>

          <TosPoint title='Part I: GENERAL PROVISIONS'>
            <h4 className='mb-3'>A. About lunch.pk and the Platform</h4>
            <p>
              The Platform is owned and managed, operated and maintained by
              lunch.pk (“lunch”), a company registered in Pakistan having its
              registered address 4th-B Rd, Marridian mall plaza, 3rd floor,
              Rehmanabad, Rawalpindi, Pakistan.
            </p>
            <p>
              1. The Platform is an online marketplace offering where food
              lovers (“Foodies”) who wish to find homemade Dishes can do so
              (“Orders”) from other Home cooks (“Foodlancers”) who wish to share
              their cooking skills and Dishes with Foodies. Foodies and Chefs
              can also create personal profiles (“Profiles”), communicate with
              other Chefs, rate their experiences and use such other Services
              available on the Platform from time to time. <br /> <br />
              2. lunch.pk is entitled at its own discretion to suspend the
              Platform for any reason whatsoever, including but not limited to
              repairs, planned maintenance or upgrades and shall not be liable
              to you for any losses, damages, costs or expenses arising from or
              in connection with any suspension or unavailability of the
              Platform, including but not limited to preventing you from using
              the Platform or using any of the Services available on the
              Platform. <br />
              <br />
              3. lunch.pk reserves the right to make any changes to the Platform
              including any functionalities and content therein or to
              discontinue any aspect of the same without notice to you. <br />
              <br />
              4. lunch.pk relies on third party providers (such as network
              providers, data centres, telecommunication providers, delivery
              companies, packaging company) to make the Platform, the content
              therein, and the Services available to you. Whilst lunch.pk takes
              all reasonable steps available to it to provide you with a good
              level of service, you acknowledge and agree that lunch.pk does not
              warrant that the Platform shall be uninterrupted or fault-free at
              all times. Therefore, lunch.pk shall not be liable in any way for
              any losses you may suffer as a result of delays or failures of the
              Services and Platform as a result of lunch.pk’s service providers.
              <br />
              <br />
              5. lunch.pk uses third party payment handlers to process your
              payment, as presented on the lunch.pk’s website. a. The Payment
              Handler provides services for the issuing, use, and management of
              e-money. These services are offered on the Platform as a means of
              payment for lunch.pk. By signing up to lunch.pk, you agree to be
              bound by the Terms and Conditions of the Payment Handler. b. The
              creation of a Chef’s account includes the creation of an “Account”
              as defined under the Terms and Conditions of Chefs. Acceptance of
              a lunch.pk order constitutes a “Transaction” as defined under the
              Terms and Conditions of Chefs. <br />
              <br />
              6. lunch.pk may be contacted by post at address 3rd floor,
              Marridian Mall, 4th B road, Rehmanabad, Rawalpindi, Pakistan. or
              by email at info@lunch.pk.
            </p>

            <h4 className='mt-5 mb-4'>B. Preliminary Information</h4>

            <p>
              1. By registering your details with lunch.pk as a User, you
              warrant that: <br /> <br />
              a. You are legally capable of entering into binding contracts;
              <br /> <br />
              b. You are at least 18 years old; and <br /> <br />
              c. You are not in any way prohibited by the applicable law in the
              jurisdiction, which you are currently located to enter into these
              Terms for the use of the Services and sale and/or purchase of
              Dishes.
            </p>

            <h4 className='mt-5 mb-4'>C. Registration</h4>

            <p>
              1. In order to use the Platform, you will need to complete the
              online registration form and set up an account (“Account”) as a
              Chef or foodlancer. <br />
              <br />
              2. You hereby warrant that the information you provide to lunch.pk
              is true, accurate and correct. You further warrant that you shall
              promptly notify lunch.pk in the event of any changes to such
              information. <br />
              <br />
              3. By registering your details and applying to set up an Account,
              you consent to lunch.pk’s conducting verification and security
              procedures in respect of the information provided by you online.
              lunch.pk reserves the right to examine your Account application,
              including your register details, profiles, and offered Dishes
              whenever it deems necessary, prior to, and after making a decision
              on your application. <br />
              <br />
              4. Upon the completion and submission of the online registration
              form on the Platform, you shall be sent a verification email
              (“Verification Email”) to the email address you provided on the
              registration form. This Verification Email will contain details of
              how to activate your Account. By signing up, you agree to the
              Terms of Use and Privacy Policy. <br />
              <br />
              5. You shall keep your registration details for the Platform
              (“Login Details”) confidential and secure. <br />
              <br />
              6. lunch.pk reserves the right to accept or reject your
              application to register for any reason. lunch.pk also reserves the
              right to promptly disable your Login Details and suspend or
              terminate your access to the Platform for any or no reason. If
              there is no reason for the suspension or termination, then
              lunch.pk will reimburse you for the unused portion of the payment
              you have paid to lunch.pk, if any.
            </p>

            <h4 className='mt-5 mb-4'>D. User Obligations</h4>

            <p>
              1. You agree that you are solely responsible and liable for all
              activities carried out by your use of the Platform. <br /> <br />{' '}
              2. You shall not submit to appear on the Platform through your use
              of the Services, any information, reviews, comments, images, third
              party URL links or other material whatsoever in any format (“User
              Submissions”), whether within your personal Profile, when rating
              or submitting a review in relation to another Foodie or Chef or
              elsewhere on the Platform that, in lunch.pk’s reasonable opinion,
              may be deemed to be offensive, illegal, inappropriate or that in
              any way: a. Promote racism, bigotry, hatred or physical harm of
              any kind against any group or individual; b. Harass or advocate
              harassment of another person; c. Display pornographic or sexually
              explicit material; d. Promote any conduct that is abusive,
              threatening, obscene, defamatory or libellous; e. Promote any
              illegal activities; f. Provide instructional information about
              illegal activities, including violating someone else’s privacy or
              providing or creating computer viruses; g. Promote or contain
              information that you know or believe to be inaccurate, false or
              misleading; h. Engage in or promote commercial activities and/or
              sales, including but not limited to contests, sweepstakes, barter,
              advertising and pyramid schemes, without the prior written consent
              of lunch.pk; or i. Infringe any rights of any third party. <br />{' '}
              <br /> 3. You acknowledge that making a User Submission does not
              guarantee that such User Submission, or any part thereof, shall
              appear on the Platform whether or not the submission of such User
              Submission is part of the Services. You agree that lunch.pk may,
              at its sole discretion, choose to display or to remove any User
              Submission or any part of the same that you make on the Platform,
              and you hereby grant to lunch.pk a non-exclusive, perpetual,
              irrevocable, worldwide license to do so. <br /> <br /> 4. You
              warrant and represent that you own or are licensed to use any and
              all patents, trademarks (whether registrable or non-registrable),
              designs, rights in database, rights in software (including without
              limitation the source and object code), copyright and all
              proprietary rights (“Intellectual Property Rights”) in all User
              Submissions that you make to the Platform as part of your use of
              the Services. <br />
              <br /> 5. You hereby grant to lunch.pk a non-exclusive,
              irrevocable license to make the User Submissions available to
              other Users of the Platform. <br /> <br />
              6. If you feel that any User Submission made by another User is
              objectionable, please contact lunch.pk using the contact details
              set out on the Platform. lunch.pk shall use its reasonable
              endeavours to review the relevant User Submission as soon as is
              practicable and shall take such action as it deems necessary, if
              any at all. <br />
              <br /> 7. You further agree that at all times, you shall: a. Not
              use your Login Details with the intent of impersonating another
              person; b. Not allow any other person to use your Login Details;
              c. Not use the information presented on the Platform or provided
              to you by lunch.pk for any commercial purposes; d. Not do anything
              likely to impair, interfere with or damage or cause harm or
              distress to any persons using the Platform or in respect of the
              network; e. Not infringe any rights of any third parties; f.
              Contact lunch.pk at info@lunch.pk immediately if you consider any
              User Submission posted by another User to breach any of the Terms
              herein; g. Comply with all instructions and policies from lunch.pk
              from time to time in respect of the use of the Platform, the
              Services and the Platform; h. Co-operate with any reasonable
              security or other checks or requests for information made by
              lunch.pk from time to time; and i. Use the information made
              available to you on the Platform and through the Services at your
              own risk. <br />
              <br /> 8. In the event that you have a dispute with any other User
              (Chef or Foodie or otherwise) of the Platform, you hereby release
              lunch.pk from any claims, demands and damages (whether actual or
              consequential) of any kind and nature, known and unknown, arising
              out of or in connection with such dispute.
            </p>

            <h4 className='mt-5 mb-4'>
              E. Exclusion of Warranties and lunch.pk’s Limitation of Liability
            </h4>

            <p>
              1. You acknowledge and agree that where the Platform includes
              views, opinions, advice or recommendations, such views, opinions,
              advice and recommendations are not endorsed by lunch.pk and to the
              maximum extent permitted by law, lunch.pk excludes all liability
              for the accuracy, defamatory nature, completeness, timeliness,
              suitability or otherwise of such views, opinions, advice or
              recommendations.
              <br />
              <br /> 2. lunch.pk uses reasonable effort to verify the contents
              of the lunch.pk website, with respect of any User Submission,
              Dishes, or other information made available through your use of
              the Platform and the Services. However, lunch.pk does not warrant
              or guarantee the accuracy, correctness, reliability, suitability
              or at all in respect of any User Submission or any other
              information made available to you through your use of the Dishes,
              the Services and/or the Platform. lunch.pk advises you not to rely
              on it to assist in making or refraining from making a decision, or
              to assist in deciding on a course or specific cause of action. If
              you so intend to use and/or rely upon any User Submission or any
              other information made available to you through your use of the
              Platform, the Services and/or the Platform, you do so at your own
              risk and liability.
              <br />
              <br />
              3. To the maximum extent permitted by law, lunch.pk shall not be
              liable for losses that result from its failure to comply with
              these Terms that fall into the following categories: a.
              Consequential, indirect or special losses; b. Loss of profits,
              income or revenue; c. Loss of savings or anticipated savings,
              interest or production; d. Loss of business or business benefits;
              e. Loss of contracts; f. Loss of opportunity or expectations; g.
              Loss of goodwill and/or reputation; h. Loss of marketing and/or
              public relations time and/or opportunities; i. Loss of data; j.
              Loss of management or office time; or k. Any other losses
              howsoever arising and whether caused by tort (including
              negligence), breach of contract or otherwise, even if foreseeable.
              <br />
              <br /> 4. Commentary and other materials posted on the Platform or
              provided by lunch.pk are not intended to amount to advice on which
              reliance should be placed. lunch.pk therefore disclaims all
              liability and responsibility arising from any reliance placed on
              such materials by any User of the Platform, or by anyone who may
              be informed of any of its contents. Further, responsibility for
              decisions taken on the basis of information, suggestions and
              advice given to you by lunch.pk shall remain solely with you.
              <br />
              <br /> 5. lunch.pk does not in any way participate nor shall it be
              liable in any way for whatever reason for any communication,
              transaction, meet-up, set-up or relationship between you and other
              Users outside. lunch.pk therefore recommends you to take all
              safety precautions when, contacting, socializing and engaging in
              social gatherings or meetings, including without limitation with
              regard to the delivery of Dishes, and with other Users, outside of
              the Platform.
            </p>

            <h4 className='mt-5 mb-4'>F. Intellectual Property Rights</h4>

            <p>
              1. lunch.pk and its licensors own all the intellectual property
              rights relating to the lunch.pk website, Services and Platform.
              <br />
              <br />
              2. You are expressly prohibited from: a. Reproducing, copying,
              editing, transmitting, uploading or incorporating into any other
              materials, any of the Platform; and b. Removing, modifying,
              altering or using any registered or unregistered
              marks/logos/designs owned by lunch.pk or its licensors, and doing
              anything which may be seen to take unfair advantage of the
              reputation and goodwill of lunch.pk or could be considered an
              infringement of any of the rights in the Intellectual Property
              Rights owned by and/or licensed to lunch.pk.
              <br />
              <br />
              3. Provided that lunch.pk is unaware of any infringement of any
              third party intellectual property rights at the time you submit
              any User Submissions, lunch.pk shall not be liable in any way to
              you or any third party for any breach of such rights subsequently
              notified to you or lunch.pk.
            </p>

            <h4 className='mt-5 mb-4'>G. Privacy and Data Protection</h4>

            <p>
              1. lunch.pk complies with the Government of Pakistan laws and
              regulations in the performance of its obligations under these
              Terms. Please click here to view lunch.pk’s Privacy Policy. The
              Terms of the Privacy Policy form part of these Terms and you agree
              to be bound by them.
            </p>

            <h4 className='mt-5 mb-4'>H. Force Majeure</h4>

            <p>
              1. lunch.pk shall not be liable or responsible for any failure to
              perform, or delay in performance of, any of its obligations under
              these Terms that is caused by events outside its reasonable
              control (“Force Majeure Event”).
              <br />
              <br /> 2. A Force Majeure Event includes any act, event,
              non-happening, omission or accident beyond lunch.pk’s reasonable
              control and includes in particular (without limitation) the
              following: a. Strikes, lock-outs or other industrial action; b.
              Civil commotion, riot, invasion, terrorist attack or threat of
              terrorist attack, war (whether declared or not) or threat or
              preparation for war; c. Fire, explosion, storm, flood, earthquake,
              subsidence, epidemic or other natural disaster; d. Impossibility
              of the use of railways, shipping, aircraft, motor transport or
              other means of public or private transport; e. Impossibility of
              the use of public or private telecommunications networks; and f.
              The acts, decrees, legislation, regulations or restrictions of any
              government.
              <br />
              <br />
              3. lunch.pk’s performance under these Terms is deemed to be
              suspended for the period that the Force Majeure Event continues,
              and lunch.pk shall have an extension of time for performance for
              the duration of that period. lunch.pk will use its reasonable
              endeavours to bring the Force Majeure Event to a close or to find
              a solution by which its obligations under these Terms may be
              performed despite the Force Majeure Event.
            </p>

            <h4 className='mt-5 mb-4'>I. Complaints and Termination</h4>

            <p>
              1. If you wish to lodge a complaint about another User for
              breaching any of these Terms, you may do so by sending lunch.pk
              details of your complaint by using the “Contact Us” form available
              on the Platform. lunch.pk will use its reasonable endeavours to
              respond to your complaints within a reasonable time and to take
              reasonable action, which it deems appropriate to resolve or
              rectify the subject matter of such complaints.
              <br />
              <br /> 2. lunch.pk may suspend or terminate your use of the
              Services and/or Platform if: a. Any of lunch.pk’s third party
              communication network providers cease to make their services
              available to lunch.pk for any reason; b. lunch.pk believes you or
              someone using your login details has failed to comply with one or
              more of these Terms; c. lunch.pk believes there has been
              fraudulent use, misuse or abuse of the Services; d. lunch.pk
              believes you have provided any false, inaccurate or misleading
              information.
              <br />
              <br /> 3. On termination, your access to the Platform shall cease
              and lunch.pk may delete your Profile.
            </p>

            <h4 className='mt-5 mb-4'>J. General</h4>

            <p>
              1. If lunch.pk fails at any time to insist upon strict performance
              of its obligations under these Terms, or if it fails to exercise
              any of the rights or remedies to which it is entitled under these
              Terms, this will not constitute a waiver of any such rights or
              remedies and shall not relieve you from compliance with such
              obligations.
              <br />
              <br /> 2. A waiver by lunch.pk of any default shall not constitute
              a waiver of any subsequent default.
              <br />
              <br /> 3. No waiver by lunch.pk of any of these Terms shall be
              effective unless it is expressly stated to be a waiver and is
              communicated to you in writing.
              <br />
              <br /> 4. For the avoidance of doubt, references to ‘writing’
              shall be deemed to include email.
              <br />
              <br />
              5. lunch.pk reserves the right to use third party suppliers or
              sub-contractors at any time and in any way in respect of the
              performance of its obligations under these Terms.
              <br />
              <br /> 6. If any of these Terms is determined by any competent
              authority to be invalid, unlawful or unenforceable to any extent,
              such term, condition or provision will to that extent be severed
              from the remaining Terms, conditions and provisions which shall
              continue to be valid to the fullest extent permitted by law.
              <br />
              <br /> 7. These Terms and any document expressly referred to in
              them represent the entire agreement between you and lunch.pk in
              respect of your use of the Platform and your purchase and use of
              the Platform and the Services, and shall supersede any prior
              agreement, understanding or arrangement between you and lunch.pk,
              whether oral or in writing.
              <br />
              <br /> 8. You acknowledge that in entering into these Terms, you
              have not relied on any representation, undertaking or promise
              given by or implied from anything said or written whether on the
              Platform, the internet or in negotiation between you and lunch.pk
              except as expressly set out in these Terms.
              <br />
              <br /> 9. lunch.pk may alter or amend our Terms by giving you
              reasonable notice. By continuing to use the Platform after expiry
              of the notice period, or accepting the amended Terms (as we may
              decide at our sole discretion), you will be deemed to have
              accepted any amendment to these Terms. If, on receipt of such
              notice, you wish to terminate your access to the Platform, you may
              do so by giving us not less than 7 (seven) day’s written notice,
              (which may be by e-mail), such termination to take effect on the
              date upon which the amended Terms would otherwise have come into
              effect.
              <br />
              <br /> 10. These Terms are governed by and construed in accordance
              with Pakistani law. The Courts of Pakistan shall have exclusive
              jurisdiction over any disputes arising out of these Terms.
            </p>

            {/* <h4 className='mt-5 mb-4'>H. Force Majeure</h4> */}
          </TosPoint>

          <TosPoint title='Part II: CHEFS – FOODLANCERS TERMS AND CONDITIONS'>
            <p>
              1. If you are a Chef and wish to use the Chef Services, you may do
              so in accordance with the Terms of this Part II.
              <br />
              <br />
              A. Introduction
              <br />
              <br />
              1. Upon registration as a Chef and in consideration of your
              compliance with these Terms, lunch.pk will provide you with the
              Chef Services as described on the Platform and in this Part II
              below.
              <br />
              <br />
              B. Registration
              <br />
              <br />
              1. In addition to the registration requirements in Part I, you
              acknowledge and agree that registration as a Chef may include
              additional verification requirements.
              <br />
              <br />
              C. Exclusivity
              <br />
              <br />
              1. By registering with the lunch.pk website and using the
              Platform, you agree to a binding Agreement that lunch.pk shall
              EXCLUSIVELY represent you in the business of online food sales and
              food preparation, use your image, any other photos you provide to
              lunch.pk, or lunch.pk otherwise requires for Public Relations and
              Advertising, for eighteen (18) months from the date of your
              registration. The Agreement includes allowing lunch.pk to take
              pictures of you, your food, and your kitchen to be published on
              the lunch.pk website. 2. At the end of the eighteen (18) months,
              the contract revolves for another exact period as stipulated at
              C.1. unless a thirty (30) days’ notice is given.
              <br />
              <br />
              D. Chef Services
              <br />
              <br />
              1. lunch.pk’s services include taking orders from Foodies (buyers
              of the Dishes), holding payments, arranging delivery of your
              Dishes to the Foodies and providing you with payment. 2. Subject
              to Part I, section A, paragraph 4 above, the Chef Services will
              comprise the following: a. The facility to create a Profile page
              (including a photo), which can be accessed by the Foodies; b. The
              facility to customize your Profile by adding information about
              your experiences, preferences; c. The ability to advertise Dishes
              available for Order (including information relating to any
              specialty bespoke Dishes available); d. The ability to set a
              purchase price (“Sale Price”) payable by the Foodie in respect of
              any Dishes; e. Subject to fulfilling certain criteria, as
              indicated on the Platform from time to time, to attain the level
              of Expert Chefs; f. Any other features and functionalities of the
              Chef Services provided by lunch.pk to you from time to time.
              <br />
              <br />
              E. Chef Profiles
              <br />
              <br />
              1. You warrant that you are the provider of the Dishes you have
              posted on your Profile. 2. You must ensure that your Profile
              contains the minimum information set out below: a. Information as
              to your identity; b. A description of the Dishes available,
              including the ingredients, allergens, other similar components
              used and the extent of any delivery services available; c. The
              Sale Price of the Meal. d. The high quality images of the Dishes.
              <br />
              <br />
              F. Delivery
              <br />
              <br />
              1. lunch.pk takes Orders from Foodies for delivery which must be
              paid for by the Foodies in advance. The schedules for making
              Orders, packing, delivery and pick-up of Dishes, and interval
              times in between are specified in the lunch.pk website. You
              acknowledge and agree to comply with the schedules to ensure that
              all Dishes are delivered to and received by the Foodies as
              scheduled. 2. lunch.pk then notifies you (the Chef) with a binding
              message that you have to fulfill the order. Otherwise, the Chef(s)
              will pay for the service charge (17% of the Sale Price of the
              Dish). 3. lunch.pk uses third parties for the delivery of the
              Dishes. 4. Once lunch.pk receives confirmation that the Foodie has
              received the Dish(es), only then will the payment be released to
              the Chef(s).
              <br />
              <br />
              G. Additional Obligations as a Chef
              <br />
              <br />
              1. By choosing to be a Chef and to advertise and deliver your
              Dishes to Foodies through the Platform, further to the general
              obligations on you as a User under Part I of these Terms, you
              agree that all information submitted by you in a Chef Profile,
              preparation and supply and/or delivery of the Dishes, and any
              other information provided (including the recipes and ingredients
              relating to the Dishes) or comments made to Foodies or other Chefs
              through the Platform, must: a. Be accurate, correct and
              up-to-date; b. Be provided with all reasonable care and skill in a
              manner consistent with generally accepted standards in the
              industry in which you operate; c. Comply with all national and
              local requirements for opening a food business, such as
              registering your premises with your local authority at least 28
              days before opening. d. Operate from the registered premises. e.
              Not breach any applicable statutory or regulatory requirement,
              including following good hygiene practice in the preparation of
              any Dishes and, where applicable, food safety management
              procedures based on the standards set by your local authority &
              the government Food Standards authority from time to time; f. Not
              be misleading, deceptive or in any way contravene any and all
              applicable consumer, health and safety and e-commerce laws and
              regulations; and g. Not be obscene, defamatory or be in the
              reasonable view of lunch.pk deemed to be offensive and/or
              inappropriate.
              <br />
              <br /> 2. In using the Chef Services, you must: a. At all times
              keep all information including without limitation, communication
              and correspondences between you and the Foodies, and all
              information relating to the Order process secure and confidential;
              b. Whenever required by lunch.pk and whenever applicable, use the
              sticker with the lunch.pk trademark, which will be provided by
              lunch.pk to you, in packing and delivering the Dishes. c. Ensure
              your use of the Chef Services is personal to you; d. Immediately
              notify lunch.pk in the event you have any reason to believe or
              suspect that a Chef or Foodie has breached any of its Terms.
              <br />
              <br /> 3. You further acknowledge that you are solely responsible
              for providing accurate photos, packaging, sealing, and attaching
              the ingredient list, allergens, instruction leaflet, expiration
              date, and other relevant information to the Dishes before hand off
              for delivery.
              <br />
              <br /> 4. In case you fail to comply or fall short of performing
              these obligations, you acknowledge and agree to hold lunch.pk free
              from any liability whatsoever for any untoward incident that may
              arise or injure User(s) or Foodie(s) because of such failure. You
              further acknowledge and agree to indemnify lunch.pk for all
              losses, damage, besmirched reputation, and any injury whatsoever
              that it will suffer because of such failure.
              <br />
              <br /> 5. Upon giving the Dishes to the delivery person, the
              responsibility of exercising due care for the delivery of the
              Dishes is transferred to the third party delivery company.
              <br />
              <br /> 6. You further acknowledge and agree that lunch.pk may, at
              its sole discretion, immediately remove your Profile from the
              Platform where it reasonably considers that such Profile, any
              information you have uploaded or Dishes provided, no longer meets
              the standards that lunch.pk requires of its Chefs on the Platform,
              at its absolute discretion and upon written notice to you.
              <br />
              <br /> 7. lunch.pk reserves the right, if lunch.pk suspects that
              you are in violation of any national or local food or health law,
              to file a complaint with local authorities and government food
              regulation authorities. This may result in an inspection in
              accordance with the local authority food law enforcement standards
              you adhered to when registering the premises. The inspectors may
              come without notice and will examine your premises, the kinds of
              food you make or prepare how you work, and your food safety
              management system.
              <br />
              <br /> 8. During the term of this Agreement and for 12 months
              after termination of this Agreement, you will not, without the
              prior written consent of lunch.pk, either directly or indirectly,
              on your own behalf or in the service or on behalf of others,
              bypass lunch.pk and its Platform to solicit or attempt to solicit,
              divert or hire away: a. Any employee or consultant of lunch.pk to
              terminate their relationship with lunch.pk; b. Any Foodie, person
              or entity whose Account is serviced by lunch.pk; c. Any Foodie,
              person or entity lunch.pk has targeted and contacted prior to the
              termination of your contract with lunch.pk for the purpose of
              establishing a customer relationship.
              <br />
              <br /> 9. You agree and acknowledge that the non-solicitation
              obligation described in the previous paragraph is essential to the
              protection of lunch.pk’s business. If and when you breach this
              obligation, you agree to indemnify lunch.pk for the amount of
              losses it will suffer because of such bypass and solicitation.
              <br />
              <br />
              H. Charges and Payments Refund policy
              <br />
              <br />
              1. The lunch.pk payment system retains the entire payment for the
              Dishes. When lunch.pk receives confirmation that the Foodie has
              received the Dish(es), only then will the payment be released to
              the Chef(s).
              <br />
              <br /> 2. All payments from Foodies made through the Platform
              shall be made via the Payment Handler to lunch.pk, who will remit
              to you: a. The money received from the Foodies in respect of the
              Order (“Sale Price”); b. Less any fees charged by the Payment
              Handler; and c. Less our commission (10-20% of total Sale Price of
              the Dishes) at the rate notified to you during the registration
              process (“Commission”), d. Less the amount of the delivery
              charges, e. Within thirty (30) days of receipt of the applicable
              payment by lunch.pk from the Payment Handler.
              <br />
              <br /> 3. You shall also pay all other fees and charges notified
              to you during the Chef registration process (“Fees”). The Fees
              shall be due and payable in accordance with the payment Terms
              notified to you during registration. The Fees are exclusive of
              tax, which shall, where applicable, be paid in addition.
              <br />
              <br /> 4. lunch.pk is also responsible for ensuring that a secure
              payment system is in place, but the Payment Handler is responsible
              for the security and management of the transaction as stated in
              its own Terms and Conditions.
              <br />
              <br /> 5. No refunds. Dishes are to be paid for upon placement of
              the order by the foodie. No cancellations and refund are possible
              once the order has been placed.
              <br />
              <br /> 6. We may change the Commission and/or Fees at any time on
              the provision of notice to you in writing, by email or through
              your use of the Platform. Your continued use of the Platform
              following notice of such change shall be deemed to be your
              acceptance of the new Commission and/or Fees. If you do not agree
              with the changes to the Commission and/or Fees, you may terminate
              your agreement with us by notice in writing or by email.
              <br />
              <br />
              7. There is no refund on direct payment to chef, cash payments and
              in person payment.
              <br />
              <br />
              I. Additional Exclusion of Warranties
              <br />
              <br />
              1. You acknowledge and agree that lunch.pk only provides you with
              the facility to post and supply Dishes to Foodies by providing you
              with the Chef Services. lunch.pk does not warrant, represent or
              guarantee that you will find any Foodies to deliver Dishes to or
              achieve any specific results whatsoever.
              <br />
              <br /> 2. You acknowledge and agree that using the Platform may
              require your registration as a business and a food production
              facility, requiring hygiene and safety standards in accordance
              with local laws. lunch.pk may offer to provide related information
              and assistance. However, you acknowledge that this is intended as
              information only and does not constitute advice of any nature.
              Therefore, it must not be relied on to assist in making or
              refraining from making a decision or to assist in deciding on a
              course of action. Your use and reliance on any information on the
              Platform shall be at your own risk and we shall not be liable
              whatsoever for any damages and loss, which you may incur as a
              result of or in connection with your use and reliance of such
              information. You undertake to conduct your own research and ensure
              that you comply with the requirements applicable to you. lunch.pk
              shall not be liable to you for any failure by you to comply with
              any relevant laws and regulations that may apply to you in the use
              of the Platform through the Platform.
              <br />
              <br /> 3. You further agree that lunch.pk does not vet or verify
              the identity of the Foodies posted on the Platform. Consequently,
              lunch.pk does not warrant or guarantee: a. The currentness,
              completeness, correctness and accuracy of any Foodies’ Profile; b.
              That any Orders made by Foodies are genuine; c. The identity of
              the Foodies using the Platform.
              <br />
              <br /> 4. You further acknowledge that lunch.pk has no control of
              and therefore has no liability whatsoever in respect of the
              behavior, response and quality of the Foodies on the Platform.
              <br />
              <br /> 5. You further acknowledge that lunch.pk is NOT responsible
              for the accuracy and timeliness of the representation of your
              Dishes, including their reviews, ingredients, allergens as
              received from you and as shown in the lunch.pk website.
              <br />
              <br /> 6. lunch.pk provides the Chef Services solely to connect
              you, the Chefs, with Foodies who may be seeking to Order Dishes
              from you. You acknowledge and agree that you are solely
              responsible for all communication with, and any subsequent
              dealings with, Foodies (including but not limited to the Terms
              upon which you create and deliver Dishes to Foodies). You, the
              Chefs, hereby indemnify lunch.pk in full and on demand against all
              losses, damages, costs, claims and expenses that lunch.pk incurs
              (including but not limited to such losses and damages incurred by
              lunch.pk in respect of sickness, disease or death of any Foodie
              arising out of or in connection with your acts or omissions in the
              use of the Platform) arising out of or in connection with any of
              your dealings with, or Dishes provided to, Foodies.
            </p>
          </TosPoint>
        </Container>
      </section>
    </>
  );
};

export default TermsOfService;
