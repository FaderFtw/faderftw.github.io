import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'summer-internship-satoripop',
		company: 'Satoripop',
		description: 'As a Full Stack Developer at Satoripop, I played a pivotal role in developing a loyalty application aimed at enhancing customer engagement in retail. My responsibilities included managing loyalty points, designing user-friendly client and admin interfaces, and ensuring seamless integration between the front-end and back-end services. I utilized Angular for the front end and Spring Boot for the back end, while Docker was employed to streamline the development process and facilitate deployment. This project not only improved my technical skills but also provided valuable insights into user experience design and agile methodologies.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Sousse, Tunisia',
		period: { from: new Date(2024, 6, 1), to: new Date(2024, 8, 1) },
		skills: getSkills('angular', 'spring-boot', 'docker', 'javascript', 'html', 'css', 'github'),
		name: 'Full Stack Developer',
		color: 'yellow',
		links: [],
		logo: Assets.Satoripop, 
		shortDescription: 'Developed a loyalty application for retail.'
	},
	{
		slug: 'summer-internship-anypli',
		company: 'Anypli',
		description: 'During my internship at Anypli, I took on the role of a Full Stack Developer, where I managed the administration of advanced sports leagues. This involved overseeing teams, matches, scores, and player profiles, with a particular focus on football. I developed and maintained features that enabled real-time updates and data integrity, ensuring an engaging experience for users. My work with Laravel and PHP for back-end development, along with my skills in PostgreSQL for database management, helped streamline league operations. This experience deepened my understanding of web application architecture and the importance of robust backend systems.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Monastir, Tunisia',
		period: { from: new Date(2023, 6, 1), to: new Date(2023, 7, 1) },
		skills: getSkills('laravel', 'postgresql', 'js', 'html', 'css', 'github'),
		name: 'Full Stack Developer',
		color: 'red',
		links: [],
		logo: Assets.Anypli, 
		shortDescription: 'Managed advanced sports leagues.'
	},
	{
		slug: 'freelance-web-developer',
		company: 'Freelance',
		description: 'As a Freelance Web Developer, I designed and developed a system to enhance community awareness and engagement. I conducted research to understand user needs and created a dynamic web application using PHP and PostgreSQL, providing relevant information and resources. This experience improved my technical skills and highlighted the importance of user-centered design.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Tunisia',
		period: { from: new Date(2024, 0, 1), to: new Date(2024, 8, 1) },
		skills: getSkills('php', 'postgresql', 'js', 'html', 'css', 'azure', 'docker', 'github'),
		name: 'Full Stack Developer',
		color: 'gray',
		links: [],
		logo: Assets.Unknown, 
		shortDescription: 'Created a system for waste collection awareness.'
	}
];

export const title = 'Experience';
