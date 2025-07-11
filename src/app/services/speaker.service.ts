import { Injectable, signal } from '@angular/core';
import { Speaker } from '../models/models';

@Injectable({ providedIn: 'root' })
export class SpeakerService {
  private readonly speakers = signal<Speaker[]>([
    {
      id: 'manfred-steyer',
      name: 'Manfred Steyer',
      title: 'Trainer and Consultant',
      company: 'Angular Architects',
      bio: "Trainer, consultant, and programming architect with a focus on Angular, Google Developer Expert (GDE) who writes for O'Reilly, the German Java Magazine, and windows.developer. Regularly speaks at conferences.",
      imageUrl: 'assets/images/speakers/manfred-steyer.jpg',
      githubHandle: 'manfredsteyer'
    },
    {
      id: 'rainer-hahnekamp',
      name: 'Rainer Hahnekamp',
      title: 'Trainer and Consultant',
      company: 'Angular Architects',
      bio: 'Rainer Hahnekamp is a Google Developer Expert, working as a trainer and consultant in the expert network of Angular Architects. In addition, he offers a weekly brief overview of relevant events in the Angular ecosystem on YouTube through ng-news.',
      imageUrl: 'assets/images/speakers/rainer-hahnekamp.png',
      githubHandle: 'rainerhahnekamp',
      ngrxTeam: true
    },
    {
      id: 'michael-egger-zikes',
      name: 'Michael Egger-Zikes',
      title: 'Trainer and Consultant',
      company: 'intauria GmbH',
      bio: 'Michael Egger-Zikes is a software architect, trainer, and consultant specializing in Angular for business applications.\n' +
          'He has overseen large Angular projects in both the public sector and private industry and uses Angular in product development.\n' +
          '\n' +
          'As a guest lecturer, he also teaches this subject at the part-time FH CAMPUS 02 University of Applied Sciences in Graz.\n' +
          'Michael holds a degree in Business Informatics and has many years of experience in software development and the automation of business processes.',
      imageUrl: 'assets/images/speakers/michael-egger-zikes.webp',
      githubHandle: 'mikezks'
    },
    {
      id: 'michael-hladky',
      name: 'Michael Hladky',
      title: 'Trainer and Consultant',
      company: 'Push-based.io',
      bio: 'Michael Hladky is a Google Developer Expert (GDE), Microsoft MVP, Nx champion, trainer, and consultant with a focus on Angular and RxJS. For years he has been helping companies and developers to set up scalable architectures and performant processes enabling teams to keep up with state-of-the-art development. A vibrant member of the tech community, he organizes multiple community events and workshops each year to give back.',
      imageUrl: 'assets/images/speakers/michael-hladky.jpg',
      githubHandle: 'BioPhoton'
    },
    {
      id: 'christian-liebel',
      name: 'Christian Liebel',
      title: 'Trainer and Consultant',
      company: 'Thinktecture',
      bio: 'Christian Liebel is a developer helping enterprises and ISVs develop modern cross-platform business applications based on Angular. As a Microsoft MVP, Google GDE, and W3C Web Applications working group participant, he speaks about modern web technologies at international user groups and conferences.',
      imageUrl: 'assets/images/speakers/christian-liebel.png',
      githubHandle: 'christianliebel'
    },
    {
      id: 'martina-kraus',
      name: 'Martina Kraus',
      title: 'Consultant and Security Engineer',
      company: 'Kraus IT Consulting',
      bio: 'Martina Kraus has been active in the world of web development since her early years and has gradually become an expert in web security. As an  Security Engineer, she focuses on integrating security best practices into all phases of software development. In her role as a Google Developer Expert (GDE) in Angular, she enjoys sharing her knowledge of Angular security at both national and international conferences. She also regularly organizes ngGirls events (free Angular workshops for women) and is currently writing a book in German about authentication and authorization in web applications.',
      imageUrl: 'assets/images/speakers/martina-kraus.png',
      githubHandle: 'martinakraus'
    },
    {
      id: 'maria-korneeva',
      name: 'Maria Korneeva',
      title: 'Frontend Technology Lead',
      company: 'Korneeva - IT Solutions',
      bio: 'Maria Korneeva is an experienced Angular developer and consultant specializing in building scalable web applications. She actively contributes to the Angular community through workshops, mentoring, and speaking at tech events.',
      imageUrl: 'assets/images/speakers/maria-korneeva.jpeg',
      githubHandle: 'mariakorneeva'
    },
    {
      id: 'robin-boehm',
      name: 'Robin Böhm',
      title: 'CEO and Trainer',
      company: 'Workshops.DE',
      bio: 'Robin is the founder of Workshops.DE and a passionate technology enthusiast. He has been navigating the world of software development for over a decade and has made it his mission to make complex technical concepts accessible.\n\nWith a special focus on AI technologies, modern developer workflows, and practical learning approaches, he brings together people who want to harness the full potential of current tech innovations. Robin believes in the "Divide & Conquer" approach to learning and always conveys knowledge hands-on rather than with dry theory.\n\nWhen he\'s not building communities or leading workshops, he experiments with the latest AI tools and agents or shares his knowledge in live streams and interactive formats. His casual, authentic style and ability to explain complex topics in an understandable way make him a valued mentor in the tech community.',
      imageUrl: 'assets/images/speakers/robin-boehm.jpg',
      githubHandle: 'robinboehm'
    },
    {
      id: 'gregor-woiwode',
      name: 'Gregor Woiwode',
      title: 'Angular Consultant & Trainer',
      company: 'Workshops.DE',
      bio: 'Gregor loves developing tools that allow programmers to be even more productive. As a speaker, trainer, and consultant, he teaches techniques to continuously improve the architecture of Angular applications. He enjoys running and tries his hand as an amateur chef from time to time.',
      imageUrl: 'assets/images/speakers/gregor-woiwode.jpg',
      githubHandle: 'GregOnNet'
    },
    {
      id: 'enea-jahollari',
      name: 'Enea Jahollari',
      title: 'Software Engineer & Google Developer Expert',
      company: 'Push-based.io',
      bio: 'Software Engineer focused on performance, scalability, and architecture of web applications. As a Google Developer Expert for Angular, Enea has given talks and workshops at ngIndia, AngularAustria, and NgPoland, as well as internal workshops at various companies. He is a maintainer of the RxAngular library, bringing performance utilities to developers, and a co-creator of the ngxtension library for Signal primitives in Angular. Enea regularly shares his expertise through blog posts about Angular performance, internals, Signals, and architecture, and keeps the community updated with the latest Angular news on X (formerly Twitter).',
      imageUrl: 'assets/images/speakers/enea-jahollari.jpeg',
      githubHandle: 'eneajaho'
    },
    {
      id: 'jens-kuehlers',
      name: 'Jens Kühlers',
      title: 'Angular Team',
      company: 'Google',
      bio: 'Jens is a Technical Program Manager with the Angular team at Google, where he focuses on managing the release schedule, prioritizing key features and making sure user needs are met. With 17 years of experience at Google, Jens has worked on a variety of things, from building technical solutions for Cloud Networking and running infrastructure projects in Sub-Saharan Africa to serving as a network engineer for Google\'s global network.',
      imageUrl: 'assets/images/speakers/jens-kuehlers.jpg',
      githubHandle: 'thesmiler',
      pronouns: 'he/him',
      angularTeam: true
    },
    {
      id: 'matthieu-riegler',
      name: 'Matthieu Riegler',
      title: 'Angular Team',
      company: 'Google',
      bio: 'tbd',
      imageUrl: 'assets/images/speakers/matthieu-riegler.jpg',
      githubHandle: 'JeanMeche',
      pronouns: 'he/him',
      angularTeam: true
    },
    {
      id: 'marko-stanimirovic',
      name: 'Marko Stanimirović',
      title: 'NgRx Team',
      company: 'NgRx',
      bio: 'Marko is a core member of the NgRx team, focusing on state management solutions for Angular applications. He is passionate about reactive programming and helping developers build scalable and maintainable applications using NgRx.',
      imageUrl: 'assets/images/speakers/marko-stanimirovic.jpg',
      githubHandle: 'markostanimirovic',
      ngrxTeam: true
    },
    {
      id: 'younes-jaaidi',
      name: 'Younes Jaaidi',
      title: 'Software Cook & Google Developer Expert',
      company: 'Marmicode',
      bio: 'Younes Jaaidi is a Software Cook who whips code until the tests pass. Raised in the kitchen of eXtreme Programming, he teaches and coaches teams — like yours — to cook better apps with ingredients such as Test-Driven Development and Collective Ownership. He\'s an Angular GDE, an NX Champion, and a mediocre sailor. His favorite spice: `sleep 300 && git reset --hard && git clean -df`',
      imageUrl: 'assets/images/speakers/younes-jaaidi.webp',
      githubHandle: 'yjaaidi'
    },
    {
      id: 'robin-goetz',
      name: 'Robin Götz',
      title: 'Full Stack Engineer',
      company: 'Goetz Software & IT Dienstleistungen',
      bio: 'I\'m a full stack engineer and the creator of spartan, an open-source Angular UI toolkit. I contribute to projects like AnalogJS, ng-signal-forms, and Letta (formerly MemGPT), and I\'m passionate about building accessible, customizable tools that help developers build a better web for all. I love all kinds of tech and am especially excited about AI, VR, and open source. When I\'m not coding, you\'ll probably find me hiking, biking, (trail) running, or just being out in nature.',
      imageUrl: 'assets/images/speakers/robin-goetz.jpg',
      githubHandle: 'goetzrobin'
    },
    {
      id: 'brygida-fiejdasz',
      name: 'Brygida Fiejdasz',
      title: 'Angular GDE & Lead Frontend Competence Center',
      company: 'Avenga',
      bio: 'I\'m an Angular GDE and Lead of the Frontend Competence Center at Avenga. Beyond that, I\'m an Angular enthusiast who loves to code and enjoys sharing knowledge – on stage, at meetups, and on my YouTube channel "Speed Date with Angular". In my free time, I\'m an explorer and a proud cat mom.',
      imageUrl: 'assets/images/speakers/brygida-fiejdasz.jpg',
      githubHandle: 'brygidafiejdasz'
    },
    {
      id: 'eliran-eliassy',
      name: 'Eliran Eliassy',
      title: 'Founder & Angular GDE',
      company: 'e-square.io',
      bio: 'Eliran Eliassy is a passionate web architect, consultant, and Angular Google Developer Expert (GDE) with over a decade of experience building large-scale applications. As the founder of e-square.io and a co-organizer of Angular-TLV and AngularConnect, he\'s deeply involved in growing the global Angular community. Eliran specializes in modern frontend architectures, reactive programming, and helping teams unlock the full potential of Angular. When he\'s not coding or mentoring, he\'s on stage sharing practical, real-world insights — always with a focus on live coding and deep technical dives.',
      imageUrl: 'assets/images/speakers/eliran-eliassy.jpg',
      githubHandle: 'eliraneliassy'
    },
    {
      id: 'kasia-biernat-kluba',
      name: 'Kasia Biernat-Kluba',
      title: 'Principal Frontend Developer',
      company: 'Hyland',
      bio: 'I\'m a developer with over a decade of experience in IT, currently working as a Principal Frontend Developer at Hyland. While Angular has been my main playground in recent years, I\'m always up for the challenge of dabbling in backend development when the need arises. Clean and efficient code, best practices, and modern solutions are my jam.',
      imageUrl: 'assets/images/speakers/kasia-biernat-kluba.jpg',
      githubHandle: 'kasiabiernat'
    },
    {
      id: 'nicolas-frizzarin',
      name: 'Nicolas Frizzarin',
      title: 'Google Developer Expert & MVP',
      company: 'SFEIR',
      bio: 'Google Developer Expert in Web Technologies and Angular, also a Microsoft Most Valuable Professional, Nicolas is a French Frontend specialist and User Interface Designer from Metz, France. He works as a Developer Advocate and Senior Staff Engineer at Sfeir Luxembourg. Besides that, Nicolas is a speaker, and likes to contribute to the community by giving talks, trainings, writing articles or participating in open source projects like Ng Zorro.',
      imageUrl: 'assets/images/speakers/nicolas-frizzarin.png',
      githubHandle: 'frizzarin'
    },
    {
      id: 'mark-thompson',
      name: 'Mark Thompson',
      title: 'Angular Team',
      company: 'Google',
      bio: 'Mark loves to teach and code. He is an award winning university instructor and engineer. He comes with a passion for creating meaningful learning experiences. With over a decade of developing solutions across the tech stack, speaking at conferences, and mentoring developers, he is excited to continue to make an impact in tech. Lately, Mark has been spending time as a developer relations engineer on the Angular Team.',
      imageUrl: 'assets/images/speakers/mark-thompson.webp',
      githubHandle: 'markthompson',
      pronouns: 'he/him',
      angularTeam: true
    }
  ]);

  /**
   * Returns the signal containing all speakers
   */
  getSpeakers() {
    return this.speakers;
  }

  /**
   * Returns a speaker by ID or undefined if not found
   */
  getSpeakerById(id: string): Speaker | undefined {
    return this.speakers().find(speaker => speaker.id === id);
  }
}
