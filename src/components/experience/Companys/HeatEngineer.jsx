export const HeatEngineer = () => (
  <div>
    <div className="py-2 pb-0">
      <h4 className="text-xl font-bold underline text-primary">Heat Engineer</h4>
      <h5 className="text-lg ps-2 text-light">Software Engineer</h5>
    </div>
    <p className="p-2">
      A company in its growth phase tasked with designing and maintaining a web
      based application with a client built in Angular 17, with NGRX redux state
      management, an IOS client written in Objective-C and an android client
      written in Java and Kotlin interacting with AWS EC2 services built with
      Express, NestJS, Flask with Python, AWS client integration with S3 bucket
      providing the end user system of surveying building dimensions, materials
      and 3D dimensional scans configured with THREE.js wrapper with WebGL which
      provides a base for the automating of a Buildings Heat Loss Report.
    </p>
    <div className="p-2">
      A programmer is more than the technology they have used. In my time in the
      industry, I have implemented and solved universal software based problems.
    </div>
    <h6 className="text-lg font-bold underline pt-2 pb-0 text-primary">
      Modules of the codebase that I have implemented in my current position:
    </h6>
    <div className="p-2 pt-0">
      <ul className="list-disc list-inside text-light">
        <li>Users with roles and calculated permissions</li>
        <li>Authentication using JWT with a designed permission middleware.</li>
        <li>Payment with Stripe API.</li>
        <li>
          Scientific Based Business Logic which required the conversion of an
          Excel sheet into pure methods to be served to web clients.
        </li>
        <li>
          API design pattern for a frontend service layer with a redux based
          state management with a localStorage service, rest and WebSocket
          server architecture.
        </li>
        <li>
          Infrastructure deploying EC2 instance into AWS, configuring MongoDB
          Atlas clusters using terraform, writing yaml based CI/CD pipeline with
          GitHub Actions to automate the deployment of development, staging and
          production branches and automation of testing with code quality on
          Pull Requests plus merges to main.
        </li>
      </ul>
    </div>
    <h6 className="text-lg font-bold underline py-2 pb-0 text-primary">
      In my current role I have also gained experience in nontechnical skills.
    </h6>
    <ul className="list-disc list-inside p-2 pt-0 text-light">
      <li>
        Technical Interviews, I was tasked with creating a multi round
        interview. This required creating technical interview questions to
        evaluate a candidate's Javascript knowledge and the creation of a take
        home second round consisting of the creation of a rest server client
        architecture.
      </li>
      <li>
        Creation of Documentation consisting of Business Terminology in context
        with User defined roles and interaction with a service based
        architecture.
      </li>
      <li>Sprint Creation with defining and tracking task progress</li>
      <li>Paired Programming with senior and junior engineers.</li>
    </ul>
  </div>
);