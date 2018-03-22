<template>
  <div class="sample">
    <div class="sample__resume">
      <section class="sample__resume--header">
        <div class="header__main">
          <h1 class="heading--primary">{{ resume.basics.name }}</h1>
          <h3 class="heading--secondary">{{ resume.basics.label }}</h3>
          <h3 class="heading--secondary">{{ resume.basics.location }}</h3>
        </div>
        <div class="header__sub">
          <h3 class="heading--contact">{{ resume.basics.phoneNumber }}</h3> 
          <h3 class="heading--contact">{{ resume.basics.email }}</h3> 
          <h3 class="heading--contact">{{ resume.basics.website }}</h3> 
        </div>
      </section>
      <section class="sample__resume--summary">
        <p class="main__summary">{{ resume.basics.summary }}</p>
      </section>
      <section class="sample__resume--body">
        <div class="body__left">
          <h1 class="heading--secondary">Experience</h1>
          <div class="work" v-for="work in resume.work">
            <h1 class="heading--main">
              {{ work.position }} 
              <span class="heading--sub">&ndash; {{ work.company }}</span>
            </h1>
            <h3 class="heading--sub">{{ work.location }}</h3>
            <h5 class="heading--tert">{{ work.startDate }} - {{ work.endDate }}</h5>
            <p class="body__summary">{{ work.summary }}</p>
          </div>
        </div> 
        <div class="body__right">
          <div class="education">
            <h1 class="heading--secondary">Education</h1>
            <div class="education__list" v-for="school in resume.education">
              <h1 class="heading--main">{{ school.institution }}</h1>
              <h3 class="heading--sub">{{ school.area }}</h3>
              <h3 class="heading--sub">{{ school.gpa }} &ndash; {{ school.studyType }}</h3>
              <h5 class="heading--tert">{{ school.startDate }} - {{ school.endDate }}</h5>
            </div>
          </div>
          <div class="skills">
            <h1 class="heading--secondary">Skills</h1>
            <div class="skills__list">
              <h5 class="heading--skills" v-for="skill in resume.skills">{{ skill }}</h5>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="sample__area">
      <p class="sample__summary">Change JSON values live:</p>
      <div class="sample__textarea">
        <textarea rows="25" cols="80" v-model="input"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sample',
  data() {
    return {
      owo: ['ow', 'wo'],
      input: `{
        "basics": {
          "name": "Justin Kan",
          "label": "Software Engineer",
          "email": "justin@kan.com",
          "phoneNumber": "(905)-121-1337",
          "website": "www.justin.tv",
          "summary": "Co-founder of Justin.tv and Twitch.tv. Currently working on Atrium, a legal service for startups.",
          "location": "San Francisco, California"
        },
        "work": [
          {
            "company": "Atrium",
            "position": "CEO",
            "location": "San Francisco Bay Area",
            "startDate": "Apr 2017",
            "endDate": "Present",
            "summary": "Reinventing legal."
          },
          {
            "company": "Whale",
            "position": "Co-Founder",
            "location": "San Francisco Bay Area",
            "startDate": "Oct 2016",
            "endDate": "Present",
            "summary": "Video Q&A to connect influencers and experts to their fans."
          },
          {
            "company": "Y Combinator",
            "position": "Partner",
            "location": "San Francisco Bay Area",
            "startDate": "Mar 2014",
            "endDate": "Mar 2017",
            "summary": "Invest in the best." },
          {
            "company": "Justin.tv / Twitch",
            "position": "Founder",
            "location": "San Francisco Bay Area",
            "startDate": "Oct 2006",
            "endDate": "Sep 2014",
            "summary": "WORLDWIDE PHENOMENON HYPE #WINNING"
          },
          {
            "company": "Exec",
            "position": "CEO and Founder",
            "location": "San Francisco, CA",
            "startDate": "Jan 2012",
            "endDate": "Jan 2014",
            "summary": "SOLD IT TO HANDY"
          }
        ],
        "skills": [
          "JavaScript",
          "HTML",
          "CSS",
          "Angular",
          "React",
          "Vue",
          "Node.js",
          "MongoDB",
          "MySQL"
        ],
        "education": [
          {
            "institution": "Harvard University",
            "area": "Computer Science",
            "studyType": "Doctor of Philosophy",
            "startDate": "2005",
            "endDate": "2009",
            "gpa": "4.0"
          },
          {
            "institution": "Yale University",
            "area": "Physics and Philosophy",
            "studyType": "Bachelor of Science",
            "startDate": "2001",
            "endDate": "2005",
            "gpa": "4.0"
          }
        ]
      }`,
    }
  },
  computed: {
    resume() {
      return JSON.parse(this.input)
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400');

* {
  color: rgb(var(--dark-grey));
}

p {
  font-weight: 300;
}

.heading--primary {
  font-size: 5rem;
  font-weight: 300;
}

.heading--secondary {
  font-size: 2rem;
  font-weight: 300;
}

h1.heading--secondary {
  font-size: 2rem;
  font-weight: 400;
  color: rgb(var(--blue));
}

.heading--contact {
  font-size: 1.8rem;
  font-weight: 200;
}

.heading--skills {
  font-weight: 200;
}

.heading--main {
  font-size: 2rem;
  font-weight: 300;
}

.heading--sub {
  font-size: 2rem;
  font-weight: 200;
}

h3.heading--sub {
  font-size: 1.6rem;
  font-weight: 300;
}

.heading--tert {
  font-style: italic;
  font-weight: 200;
  font-size: 1.5rem;
}

.sample {
  display: grid;
  padding: 4rem;
  justify-items: center;
  grid-auto-flow: column;
  font-family: 'Source Sans Pro';
}

.sample__textarea {
  display: block;
}

.sample__resume {
  background: white;
  display: block;
  width: 8.5in;
  height: 11in; 
  padding: 2rem 5rem;

  border: 1px solid rgb(var(--light-grey));
  border-radius: 3px;
  box-shadow: 0 2px 4px rgba(var(--dark-grey), .3);
}

.sample__resume--header {
  display: grid;
  text-align: center;
  justify-items: center;
}

.sample__resume--summary {
  padding: 3rem 0;
  text-align: center;
}

.main__summary {
  font-size: 2.2rem;
}

.sample__area {
  text-align: center;
}

.sample__summary {
  font-size: 4rem;
  font-family: 'Raleway';
  padding-bottom: 5rem;
}

.sample__resume--body {
  display: grid;
  grid-template-columns: 2fr 1fr;
}

.body__summary {
  padding-top: 1rem;
}

.body__right {
  display: flex;
  flex-direction: column;
}

.education__list {
  position: relative;
  padding: 2rem 0;
}

.education__list:not(:last-child):after {
  content: '';
  position: absolute;
  width: 40%;
  left: 1rem;
  bottom: 0;
  border-bottom: 1px solid rgb(var(--light-grey));
}

.skills__list {
  padding: 2rem 0;
}

.work {
  position: relative;
  padding: 2rem 0;
}

.work:not(:last-child):after {
  content: '';
  position: absolute;
  width: 50%;
  left: 1rem;
  bottom: 0;
  border-bottom: 1px solid rgb(var(--light-grey));
}

.header__sub {
  display: flex;
}

.header__sub > *:not(:last-child):after {
  content:'\2014';
  margin: 0 1rem;
  color: rgba(var(--grey), .6);
}

@media print {
  .sample__resume {
    margin: 0;
    box-shadow: 0;
    border: 0;
    border-radius: 0;
    box-shadow: none;
  }

  .sample__area {
    display: none;
  }
}
</style>
