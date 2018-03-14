import React from 'react';
import Profile from './Profile'

var obj = {
  "users": [
    {
      user_name: 'Chris Olszewski',
      user_bio: 'Computer Science & Mathematics',
      img_src: 'Chris',
      profile_link: 'Chris',
      fb: 'https://www.facebook.com/chris.olszewski.39',
    },
    {
      user_name: 'Ben Hansen',
      user_bio: 'Computer Science & Mathematics & Communication Arts',
      img_src: 'Ben',
      profile_link: 'Ben',
      fb: 'https://www.facebook.com/ben.hansen.5059',
      linkedIn: 'https://www.linkedin.com/in/benjamin-hansen-501b97107/',
    },
    {
      user_name: 'Nicholas Mandal',
      user_bio: 'Computer Science & Statistics',
      img_src: 'Nick',
      profile_link: 'http://nickmandal.com/',
      fb: 'https://www.facebook.com/nick.mandal',
      linkedIn: 'https://www.linkedin.com/in/nicholasmandal/',
      twitter: 'https://twitter.com/nicholasmandal',
    },
    {
      user_name: 'Griffin Kelley',
      user_bio: 'Computer Science',
      img_src: 'Griffin',
      profile_link: 'http://www.GriffinKelley.com',
      linkedIn: 'https://www.linkedin.com/in/griffin-kelley-a9ab0792/',
    },
    {
      user_name: 'Rodrigo Smith',
      user_bio: 'Mathematics',
      img_src: 'Rodrigo',
      profile_link: 'Rodrigo',
    },
    {
      user_name: 'Lexi Kenwood',
      user_bio: 'Computer Science',
      img_src: 'Lexi',
      profile_link: 'Lexi',
    },
    {
      user_name: 'Sean Rice',
      user_bio: 'Computer Science',
      img_src: 'Sean',
      profile_link: 'Sean',
    },
    {
      user_name: 'Monica Ceisel',
      user_bio: 'Computer Science',
      img_src: 'Monica',
      profile_link: 'https://github.com/ceiselm',
      linkedIn: 'https://www.linkedin.com/in/monicaceisel/',
      twitter: 'https://twitter.com/Momonimations',
    },
    {
      user_name: 'Spencer Fricke',
      user_bio: 'Computer Science',
      img_src: 'Spencer',
      profile_link: 'Spencer',
    },
    {
      user_name: 'Peter Jochem',
      user_bio: 'Computer Science',
      img_src: 'Peter',
      profile_link: 'Peter',
    },
    {
      user_name: 'Manuel Gomez',
      user_bio: 'Computer Science',
      img_src: 'Manuel',
      profile_link: 'Manuel',
    },
    {
      user_name: 'Claire Jolly',
      user_bio: 'Computer Science',
      img_src: 'Claire',
      profile_link: 'Claire',
    },
    {
      user_name: 'David Chen',
      user_bio: 'Computer Science',
      img_src: 'David',
      profile_link: 'David',
    },    
    {
      user_name: 'Jordan Nunez',
      user_bio: 'Computer Engineering',
      img_src: 'Jordan',
      profile_link: 'Jordan',
    },

  ]
}

  function createProfile(data) {
    return <Profile 
              key={data.user_name} 
              user_name={data.user_name} 
              user_bio={data.user_bio} 
              img_src={data.img_src} 
              profile_link={data.profile_link}
              twitter={data.twitter}
              fb={data.fb}
              linkedIn={data.linkedIn}
            />;
  }

  function createProfiles(data) {
    return data.map(createProfile);
  }

export default function Members(props) {
  return (
    <section className="bg-white" id="members">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Our Amazing Members</h2>
            <h3 className="section-subheading text-muted">Executive Team</h3>
          </div>
        </div>
        <div className="row">
          {createProfiles(obj.users)}
        </div>
      </div>
    </section>
  );
}
