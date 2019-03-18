import React, { Component } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  @page {
      margin: 0;
      size: A4;
  }

  @font-face {
      font-family: 'DIN Regular';
      src: url('/assets/fonts/din-regular-webfont.woff');
  }

  @font-face {
      font-family: 'DIN Light';
      src: url('/assets/fonts/din-light-webfont.woff');
  }

  html {
      width: 100%;
  }

  html, body {
      padding: 0;
      margin: 0;
  }

  body {
      width: 210mm;
      margin-left: auto;
      margin-right: auto;
      font-family: 'DIN Light';
  }

`

const Page = styled.div`
  --margin-top-bottom: 15mm;
  --margin-left-right: 15mm;
  margin: 0;
  padding-top: var(--margin-top-bottom);
  padding-bottom: var(--margin-top-bottom);
  padding-left: var(--margin-left-right);
  padding-right: var(--margin-left-right);
  height: calc(297mm - (2 * var(--margin-top-bottom)));
  width: calc(210mm - (2 * var(--margin-left-right)));
  page-break-after: always;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2mm;
  border-bottom: 0.1mm solid #999;
`

const SubHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2mm;
  justify-content: space-between;
`

const Name = styled.div`
  font-size: 10mm;
  padding-bottom: 2mm;
  margin-left: -3px;
`

const Contact = styled.div`
  font-size: 4mm;
  text-align: right;
  line-height: 6mm;
`

const AtSymbol = styled.span`
  font-family: 'Sans Serif';
  font-size: 3.5mm;
  margin: 0 0.2mm;
  color: #555;
`

const Title = styled.div`
  display: block;
  font-size: 4mm;
  line-height: 6mm;
`

const Period = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5mm;
`

const Company = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 9mm;
`

const Logo = styled.svg`
  height: 9mm;
`

const Location = styled.div`
  height: 7mm;
  width: 100%;
  display: flex;
  align-items: center;
`

const LocationName = styled.span`
  font-size: 3.5mm;
`

const Role = styled.div`
  align-self: flex-start;
  margin: 1mm 0;
`

const DateRange = styled.span`
  margin-left: 2mm;
  font-size: 3.5mm;
  color: #444;
`

const Responsibilities = styled.ul`
  padding: 0 0 0 2mm;
  margin: 1mm 0 0 0;
  list-style: none;
`

const Responsibility = styled.li`
  margin: 1mm 0 1mm 2mm;
  font-size: 3.5mm;
  color: #333;
  &:last-child {
    margin-bottom: 3mm;
  }
  &:before {
    content: "·";
    font-size: 7mm;
    vertical-align: bottom;
    line-height: 4mm;
    margin-right: 5px;
  }
`

export default class Resume extends Component {

  render () {
    return (
      <div>
        <Page>

          <Header>
              <Name>Rui Pinge</Name>
          </Header>
          <SubHeader>
            <Title>Software Engineer</Title>
            <Contact>+351 969 260 952<br/>rui<AtSymbol>@</AtSymbol>pinge.org</Contact>
          </SubHeader>

          <Period>
            <Company>
              <Logo style={ { width: '24mm' } }><use xlinkHref="/assets/svg/elgin.svg#elgin"></use></Logo>
              <Location>
                <svg style={ { height: '6mm', width: '6mm' } }>
                  <use xlinkHref="/assets/svg/location.svg#location"></use>
                </svg>
                <LocationName>London/Lisbon</LocationName>
              </Location>
            </Company>
            <Role>Software engineer<DateRange>| &nbsp;Mar '14 - present</DateRange></Role>
            <Responsibilities>
              <Responsibility>Responsible for the company's GIS web-based products including the public accessible hub <a href="https://roadworks.org">roadworks.org</a></Responsibility>
              <Responsibility>Full-stack architecture and implementation of live, planned, and historic road and traffic information systems</Responsibility>
              <Responsibility>Enforcer of software development best practices, making good use of Scrum methodology</Responsibility>
              <Responsibility>Mentoring of interns and junior developers</Responsibility>
              <Responsibility>tech stack: JavaScript, Google Maps API, Java, Spring, Dropwizard, PostGIS, Chef, AWS</Responsibility>
            </Responsibilities>
          </Period>

          <Period>
            <Company>
              <Logo style={ { width: '24mm' } }><use xlinkHref="/assets/svg/dripcil.svg#dripcil"></use></Logo>
              <Location>
                <svg style={ { height: '6mm', width: '6mm' } }>
                  <use xlinkHref="/assets/svg/location.svg#location"></use>
                </svg>
                <LocationName>Lisbon</LocationName>
              </Location>
            </Company>
            <Role>Co-Founder and Chief Executive Officer<DateRange>| &nbsp;Aug '11 - present</DateRange></Role>
            <Responsibilities>
              <Responsibility>Creation of DamnSimplePOS, a SaaS invoicing and point of sale software certified by the Portuguese Tax Authority</Responsibility>
              <Responsibility>tech stack: App Engine, DataStore, Python, Django, JavaScript</Responsibility>
            </Responsibilities>
          </Period>

          <Period>
            <Company>
              <Logo style={ { width: '24mm' } }><use xlinkHref="/assets/svg/cgd.svg#cgd"></use></Logo>
              <Location>
                <svg style={ { height: '6mm', width: '6mm' } }>
                  <use xlinkHref="/assets/svg/location.svg#location"></use>
                </svg>
                <LocationName>Lisbon</LocationName>
              </Location>
            </Company>
            <Role>Software Engineer, EAI Analyst<DateRange>| &nbsp;Mar '04 - Feb '14</DateRange></Role>
            <Responsibilities>
              <Responsibility>Custom EAI application development and administration over IBM WebSphere Application Server (Java, JEE)</Responsibility>
              <Responsibility>Focus on scalability, high-availability, transactionality, security, and EAI standards</Responsibility>
              <Responsibility>tech stack: Java, JEE, web services, JMS, WebSphere, IBM mainframe (CICS/CTG)</Responsibility>
            </Responsibilities>
          </Period>

          <Period>
            <Company>
              <Logo style={ { width: '38mm' } }><use xlinkHref="/assets/svg/freelancer.svg#freelancer"></use></Logo>
              <Location>
                <svg style={ { height: '6mm', width: '6mm' } }>
                  <use xlinkHref="/assets/svg/location.svg#location"></use>
                </svg>
                <LocationName>Lisbon</LocationName>
              </Location>
            </Company>
            <Role>Web development, systems administrator<DateRange>| &nbsp;Jan '02 - Jul '11</DateRange></Role>
            <Responsibilities>
              <Responsibility>Design, implementation, and maintenance of custom web applications, from e-commerce to intranets</Responsibility>
              <Responsibility>tech stack: JavaScript, ActionScript, PHP, Java, Apache, Tomcat, MySQL</Responsibility>
            </Responsibilities>
          </Period>

          <Period>
            <Company>
              <Logo style={ { width: '25mm' } }><use xlinkHref="/assets/svg/tecnico.svg#tecnico"></use></Logo>
              <Location>
                <svg style={ { height: '6mm', width: '6mm' } }>
                  <use xlinkHref="/assets/svg/location.svg#location"></use>
                </svg>
                <LocationName>Lisbon</LocationName>
              </Location>
            </Company>
            <Role>BSc Computer and Software Engineering<DateRange>| &nbsp;Sep '07 - Jul '03</DateRange></Role>
          </Period>

          <br />

          Fluent in English, Portuguese, and Spanish.

          <br />
          <br />
          <br />

          <div style={ { 'alignSelf': 'flex-end' } }>
            The source code for this resume is available at <a href="https://github.com/ruipinge/resume">github.com/ruipinge/resume</a>
          </div>

        </Page>

        <GlobalStyle />
      </div>
    )
  }

}
