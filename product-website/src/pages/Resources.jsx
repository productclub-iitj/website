import React, { useState, useEffect } from 'react';
import '../styles/Resources.css';

const Resources = () => {
  const [activeTab, setActiveTab] = useState('fundamentals');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const tabContent = {
    fundamentals: {
      title: 'Fundamentals',
      icon: '',
      cards: [
        { id: 1, title: 'Figma Complete Playlist', description: 'Comprehensive Figma tutorials by Alien Cai', link: 'https://youtube.com/playlist?list=PLKId0A0XCIbUYx3c_NYn13W9Z_kkIiA2m&si=6mcqvbMAZD2gEetE', icon: '🎨' },
        { id: 2, title: 'Figma Overview', description: 'Quick overview of Figma basics and features', link: 'https://youtu.be/urVHC-ReSV0?si=GDjIciSh9iIygdUa', icon: '👁️' },
        { id: 3, title: 'Wireframes with Figma', description: 'Learn how to create wireframes using Figma', link: 'https://lnkd.in/dPMAUU63', icon: '📐' },
        { id: 4, title: 'Product Metrics Guide', description: 'Top 10 essential product management metrics', link: 'https://userpilot.com/blog/product-management-metrics/', icon: '📊' },
        { id: 5, title: 'Product Optimization', description: '10 keys to effective product optimization', link: 'https://www.linkedin.com/posts/pmschoolx_10-keys-to-product-optimisation-activity-7232733335226114048-2-wm', icon: '⚡' },
        { id: 6, title: 'Build Products Users Want', description: 'First Round article on user-centric product building', link: 'https://firstround.com/review/How-To-Build-The-Product-Your-Users-Actually-Want/', icon: '❤️' },
        { id: 7, title: 'PM Complete Course', description: 'Product Management from start to end by Shravan Tickoo', link: 'https://youtube.com/playlist?list=PLYS-T6kriqV5K_tYUuuaS71ba0TkhIyc8&si=CwvyC32aMoVfSvqn', icon: '🎓' },
        { id: 8, title: 'Notion for PMs', description: 'How to use Notion effectively as a Product Manager', link: 'https://moulshree.medium.com/how-i-use-notion-as-a-product-manager-cd4498ac1de2', icon: '📝' }
      ]
    },
    caseStudy: {
      title: 'Case Studies',
      icon: '',
      cards: [
        { id: 1, title: 'TPF Teardown Winner', description: 'Award-winning case study deck by Sugato Banerjee', link: 'https://www.theproductfolks.com/teardown-winners/sugato-banerjee', icon: '🏆' },
        { id: 2, title: 'PM School Challenge', description: 'Past challenge case study with detailed analysis', link: 'https://pmschool.io/ChallengeDetails?state=past&id=66766c78e556ac3d56e93a68', icon: '🎯' },
        { id: 3, title: 'TPF Case Study Deck', description: 'Professional case study presentation template', link: 'https://slides.com/the_product_folks/deck-03d918', icon: '📊' },
        { id: 4, title: 'Product Roadmap Styles', description: '3 example product roadmap styles and templates', link: 'https://www.productplan.com/learn/3-example-product-roadmap-styles/', icon: '🗺️' },
        { id: 5, title: 'Awesome PM Resources', description: 'Comprehensive collection of PM tools and resources', link: 'https://drive.google.com/drive/folders/1W0cqWCWl4SgkWnJOxDOReudkw7n6Kma9', icon: '💎' }
      ]
    },
    interviewPrep: {
      title: 'Interview Prep',
      icon: '',
      cards: [
        { id: 1, title: 'PM Interview Roadmap', description: 'Complete roadmap for Product Manager interview preparation', link: 'https://roadmap.sh/product-manager', icon: '🗺️' },
        { id: 2, title: 'Guesstimates Practice', description: 'Practice problems for estimation interviews', link: 'https://www.productmanagementexercises.com/interview-questions/estimation', icon: '🔢' },
        { id: 3, title: 'Guesstimate Data Guide', description: 'Essential data points to remember for guesstimates', link: 'https://www.mypminterview.com/p/guess-estimation-data-to-remember', icon: '📈' },
        { id: 4, title: 'Intro to RCA', description: 'Root Cause Analysis fundamentals for PMs', link: 'https://userpilot.com/blog/root-cause-analysis-product-management/', icon: '🔍' },
        { id: 5, title: 'Top 8 RCA Examples', description: 'Real RCA interview questions with solutions', link: 'https://shailesh-sharma.medium.com/top-8-pm-interview-questions-root-cause-analysis-3ad9a71ff683', icon: '💡' },
        { id: 6, title: 'Writing PRDs Guide', description: 'How to write effective Product Requirements Documents', link: 'https://lnkd.in/drrUXWw8', icon: '📋' },
        { id: 7, title: 'Product Portfolio Creation', description: 'Guide to creating an impressive product portfolio', link: 'https://lnkd.in/dAFxyeAU', icon: '🎨' },
        { id: 8, title: 'SQL for PMs', description: 'Essential SQL skills for Product Managers', link: 'https://lnkd.in/dbkUuY9B', icon: '🗄️' },
        { id: 9, title: 'APIs for PMs', description: 'Understanding APIs from a Product Manager perspective', link: 'https://lnkd.in/gknp6m5C', icon: '🔗' },
        { id: 10, title: 'System Design', description: 'System design fundamentals for Product Managers', link: 'https://youtube.com/playlist?list=PLCRMIe5FDPsd0gVs500xeOewfySTsmEjf&si=GeEXlcMMbvLdahG', icon: '🏗️' },
        { id: 11, title: 'QA to PM Transition', description: 'How to successfully transition from QA to PM role', link: 'https://lnkd.in/dQk2FyDx', icon: '🔄' }
      ]
    }
  };

  return (
    <div className="resource-container">
      <div className="background-elements">
        {/* <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div> */}
        <div className="grid-overlay"></div>
      </div>

      <div className="resource-content">
        <div className={`resource-header ${mounted ? 'animate-in' : ''}`}>
          <div className="title-section">
            <h1 className="resource-title">
              Explore<br />
              <span className="highlight">Product Management</span>
              <div className="title-underline"></div>
            </h1>
            {/* <div className="title-badge">
              <span>✨ Curated Excellence</span>
            </div> */}
          </div>
          <p className="resource-description">
            Explore handpicked content to kick-start and grow your PM journey. From fundamentals to real-world practice,
            everything here is curated by the Product Club to help you learn, apply, and thrive—all at your own pace, for free.
          </p>
        </div>

        <div className={`tab-navigation ${mounted ? 'animate-in' : ''}`}>
          {Object.entries(tabContent).map(([key, content]) => (
            <button 
              key={key} 
              className={`tab-btn ${activeTab === key ? 'active' : ''}`} 
              onClick={() => setActiveTab(key)}
            >
              <span className="tab-icon">{content.icon}</span>
              <span className="tab-text">{content.title}</span>
              <div className="tab-indicator"></div>
            </button>
          ))}
        </div>

        <div className="section-header">
          <h2 className="section-title">
            <span className="section-icon">{tabContent[activeTab].icon}</span>
            {tabContent[activeTab].title}
          </h2>
          <div className="section-count">
            {tabContent[activeTab].cards.length} Resources
          </div>
        </div>

        <div className="cards-grid">
          {tabContent[activeTab].cards.map((card, index) => (
            <div 
              key={card.id} 
              className={`resource-card ${activeTab} ${mounted ? 'animate-in' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-header">
                <div className="card-icon">{card.icon}</div>
                <div className="card-number">{String(index + 1).padStart(2, '0')}</div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
              </div>
              <div className="card-footer">
                <a href={card.link} className="card-link" target="_blank" rel="noopener noreferrer">
                  <span>Explore</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
              {/* <div className="card-glow"></div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;