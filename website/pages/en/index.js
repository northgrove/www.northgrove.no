/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/N-logo-tr2.png`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
           {/* <Button href="#try">Try It Out</Button> */}
            <Button href={docUrl('Login-to-your-JavaScript-application-with-Azure-AD')}>Dokumenter</Button>
            <Button href="/blog">Blogg</Button>
            <Button href="#about">Om</Button>
            <Button href="#who">Hvem</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Feature Callout</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content: 'Talk about trying this out',
            image: `${baseUrl}img/docusaurus.svg`,
            imageAlign: 'left',
            title: 'Try it Out',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark" id="about">
        {[
          {
            content:
              'The Northgrove univers is an example setup as an company with full Modern Workplace functionality utilizing Azure AD, Office 365, Intune and more.',
            image: `${baseUrl}img/N-logo-tr2.png`, 
            imageAlign: 'left',
            title: 'About',
          },
        ]}
      </Block>
    );

    /*
                content: 
              'Solution Architect Modern Workplace',
            image: `${baseUrl}img/Kjetil_Nordlund.JPG`, 
            imageAlign: 'right', 
            title: 'Kjetil Nordlund',
    */
    const Who = () => (
     <Block background="light" id="who">

                  {[
          {

          },
        ]}
      </Block>


    );


    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content: 'Talk about learning how to use this',
            image: `${baseUrl}img/docusaurus.svg`,
            imageAlign: 'right',
            title: 'Learn How',
          },
        ]}
      </Block>
    );

    
    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'Idenity is the new control plane. Secure it. Make it easier.',
            image: `${baseUrl}img/aad.png`,
            imageAlign: 'top',
            title: 'Azure AD',
          },
          {
            content: 'How to give the employees the opurtunity to utilize all the modern technology, on a secure way',
            image: `${baseUrl}img/intune.png`,
            imageAlign: 'top',
            title: 'Modern Workplace',
          },
          {
            content: 'Securly publish applications to a modern workplace',
            image: `${baseUrl}img/zerotrust.png`,
            imageAlign: 'top',
            title: 'Zero trust networking',
          },
        ]}
      </Block>
    );

      
    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
         <Features />
         {/* <FeatureCallout />
          <LearnHow />
         <TryOut /> */}
          <Description />
          <center>
            <br />
            <div className="LI-profile-badge" data-version="v1" data-size="large" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="kjetilnordlund"><a className="LI-simple-link" href='https://no.linkedin.com/in/kjetilnordlund?trk=profile-badge'>Kjetil Nordlund</a></div>
</center>
          {/* <Hvem /> */}
         {/* <Showcase /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;
