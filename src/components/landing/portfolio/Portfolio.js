import React from 'react';
import Project from './Project';
import './Portfolio.scss';
import OnVisible, { setDefaultProps } from 'react-on-visible';

setDefaultProps({
  bounce: false,
  visibleClassName: 'visible',
  percent: 10
});

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.categories = ['HTML+CSS', 'React', 'JavaScript', 'Python', 'CMS'];
    this.projects = [
      {
        name: 'TechJobMe',
        url: 'https://damp-thicket-76216.herokuapp.com/',
        summary: 'A job application tracking tool built with the MERN stack.',
        category: 'JavaScript',
        class: 'tech-job-me'
      },
      {
        name: 'DareToProgram',
        url: 'https://www.daretoprogram.ca/',
        summary:
          'My personal blog built with Django. Test it out yourself by signing up and interacting with the posts!',
        category: 'Python',
        class: 'daretoprogram'
      },
      {
        name: 'Saerch Algorithm Visualizer',
        url: 'https://justdare.github.io/Search-Algorithm-Visualizer/',
        summary:
          'A visualization tool for common search algorithms bulit in ReactJS.',
        category: 'React',
        class: 'search-algo-visualizer'
      },
      {
        name: 'Animikii Social Impact Report',
        url: 'http://2018.animikii.com/',
        summary:
          'The 2018 Animikii impact report, built with JS, SCSS, and Yarn.',
        category: 'JavaScript / SCSS',
        class: 'impact'
      },
      {
        name: 'Gathering Our Voices',
        url: 'https://gatheringourvoices.ca/',
        summary:
          'This site was built on WordPress at request of the customer. GOV is currently being maintained by UrsaSol. ',
        category: 'CMS',
        class: 'gov'
      }
    ];
  }

  addKeyframe = () => {
    this.state.visible
      ? this.setState({ visible: false })
      : this.setState({ visible: true });
  };

  getLists() {
    const renderedList = this.projects.map((project, index) => {
      return <Project key={index} project={project} />;
    });

    return renderedList;
  }

  render() {
    let rev;
    if (this.state.visible) rev = 'rev-block';

    return (
      <OnVisible id="portfolio" onChange={this.addKeyframe}>
        <div className="content">
          <h1 className={rev}>
            <span>Portfolio</span>
          </h1>
          <h1 className={'rev-second ' + rev}>
            <span>- Recent Works -</span>
          </h1>
          <div className="portfolioContainer row container mx-auto">
            {this.getLists()}
          </div>
        </div>
      </OnVisible>
    );
  }
}

export default Portfolio;
