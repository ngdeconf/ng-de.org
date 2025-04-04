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
      githubHandle: 'manfredsteye'
    },
    {
      id: 'rainer-hahnekamp',
      name: 'Rainer Hahnekamp',
      title: 'Trainer and Consultant',
      company: 'Angular Architects',
      bio: 'Rainer Hahnekamp is a Google Developer Expert, working as a trainer and consultant in the expert network of Angular Architects. In addition, he offers a weekly brief overview of relevant events in the Angular ecosystem on YouTube through ng-news.',
      imageUrl: 'assets/images/speakers/rainer-hahnekamp.png',
      githubHandle: 'rainerhahnekamp'
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
      title: 'Angular Consultant & Trainer',
      company: 'Independent',
      bio: 'Martina Kraus has been active in the world of web development since her early years and has gradually become an expert in web security. As an  Security Engineer, she focuses on integrating security best practices into all phases of software development. In her role as a Google Developer Expert (GDE) in Angular, she enjoys sharing her knowledge of Angular security at both national and international conferences. She also regularly organizes ngGirls events (free Angular workshops for women) and is currently writing a book in German about authentication and authorization in web applications.',
      imageUrl: 'assets/images/speakers/martina-kraus.png',
      githubHandle: 'martinakraus'
    },
    {
      id: 'maria-korneeva',
      name: 'Maria Korneeva',
      title: 'Angular Consultant & Developer',
      company: 'Independent',
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
