import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'python',
		color: 'blue',
		description: 'Python is a high-level, interpreted programming language known for its readability and versatility.',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'angular',
		color: 'red',
		description: 'Angular is a platform for building mobile and desktop web applications using TypeScript and HTML.',
		logo: Assets.Angular,
		name: 'Angular',
		category: 'framework'
	}),
	defineSkill({
		slug: 'laravel',
		color: 'red',
		description: 'Laravel is a PHP framework for web artisans, providing elegant syntax and powerful tools for building applications.',
		logo: Assets.Laravel,
		name: 'Laravel',
		category: 'framework'
	}),
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description: 'ReactJS is a JavaScript library for building user interfaces, particularly single-page applications.',
		logo: Assets.ReactJs,
		name: 'ReactJS',
		category: 'library'
	}),
	defineSkill({
		slug: 'springboot',
		color: 'green',
		description: 'Spring Boot makes it easy to create stand-alone, production-grade Spring-based applications.',
		logo: Assets.SpringBoot,
		name: 'Spring Boot',
		category: 'framework'
	}),
	defineSkill({
		slug: 'docker',
		color: 'blue',
		description: 'Docker is a platform that enables developers to build, deploy, and run applications in containers.',
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devops'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description: 'HTML is the standard markup language for creating web pages.',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description: 'CSS is a style sheet language used for describing the presentation of a document written in HTML or XML.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description: 'JavaScript is a programming language that allows you to implement complex features on web pages.',
		logo: Assets.JavaScript,
		name: 'JavaScript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'postgresql',
		color: 'blue',
		description: 'PostgreSQL is a powerful, open-source object-relational database system.',
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'java',
		color: 'blue',
		description: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'bootstrap',
		color: 'purple',
		description: 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.',
		logo: Assets.Bootstrap,
		name: 'Bootstrap',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'tailwind',
		color: 'cyan',
		description: 'Tailwind CSS is a utility-first CSS framework for creating custom designs without having to leave your HTML.',
		logo: Assets.Tailwind,
		name: 'Tailwind CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'numpy',
		color: 'blue',
		description: 'NumPy is a library for the Python programming language, adding support for large, multi-dimensional arrays and matrices.',
		logo: Assets.Numpy,
		name: 'NumPy',
		category: 'library'
	}),
	defineSkill({
		slug: 'pandas',
		color: 'blue',
		description: 'Pandas is a software library for the Python programming language that provides data structures and data analysis tools.',
		logo: Assets.Pandas,
		name: 'Pandas',
		category: 'library'
	}),
	defineSkill({
		slug: 'tensorflow',
		color: '#ff6f00',
		description: 'TensorFlow is an open-source machine learning framework used for training and deploying machine learning models, especially deep learning models.',
		logo: Assets.TensorFlow,
		name: 'TensorFlow',
		category: 'library'
	}),	
	defineSkill({
		slug: 'kubernetes',
		color: 'blue',
		description: 'Kubernetes is an open-source container orchestration system for automating application deployment, scaling, and management.',
		logo: Assets.Kubernetes,
		name: 'Kubernetes',
		category: 'devops'
	}),
	defineSkill({
		slug: 'aws',
		color: 'orange',
		description: 'Amazon Web Services (AWS) is a comprehensive cloud computing platform provided by Amazon.',
		logo: Assets.AWS,
		name: 'AWS',
		category: 'devops'
	}),
	defineSkill({
		slug: 'C',
		color: '#3c489e',
		description: 'C is a general-purpose, procedural programming language that is widely used for system programming and embedded programming.',
		logo: Assets.C, 
		name: 'C',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'cpp',
		color: '#37048c',
		description: 'C++ is a general-purpose, procedural programming language widely used for system programming, embedded programming, and competitive programming, thanks to its performance and flexibility.',
		logo: Assets.Cpp, 
		name: 'C++',
		category: 'pro-lang'
	}),	
	defineSkill({
		slug: 'azure',
		color: 'blue',
		description: 'Microsoft Azure is a cloud computing platform that provides a wide range of services including computing, analytics, storage, and networking.',
		logo: Assets.Azure,
		name: 'Azure Cloud',
		category: 'devops'
	}),
	defineSkill({
		slug: 'php',
		color: 'blue',
		description: 'PHP is a popular open-source server-side scripting language primarily used for web development. It allows developers to create dynamic web pages and applications by embedding code in HTML.',
		logo: Assets.PHP, 
		name: 'PHP',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'postman',
		color: 'orange',
		description: 'Postman is an API platform for building and using APIs, enabling users to design, test, and document APIs easily.',
		logo: Assets.Postman,
		name: 'Postman',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'github',
		color: 'black', 
		description: 'A platform for version control and collaboration, allowing developers to manage and share their code.',
		logo: Assets.GitHub,
		name: 'GitHub',
		category: 'devtools'
	}),	
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
