import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Engineering Degree',
		description: 'Software Engineering',
		location: 'Tunisia',
		logo: Assets.FST, 
		name: 'Faculty of Sciences Tunis',
		organization: 'Faculty of Sciences Tunis',
		period: { from: new Date(2022, 0, 1), to: new Date(2024, 5, 1) }, // Adjust year as per your graduation date
		shortDescription: '',
		slug: 'engineering-degree',
		subjects: ['Software Development', 'Agile Methods', 'Artificial Intelligence', 'Machine Learning', 'DevOps', 'Computer Science', 'Cloud Foundations']
	},
	{
		degree: 'Integrated Preparatory Cycle',
		description: 'Mathematics, Physics, Computer Science',
		location: 'Tunisia',
		logo: Assets.FST, 
		name: 'Faculty of Sciences Tunis',
		organization: 'Faculty of Sciences Tunis',
		period: { from: new Date(2020, 9, 1), to: new Date(2022, 9, 1) },
		shortDescription: '',
		slug: 'preparatory-cycle',
		subjects: ['Mathematics', 'Physics', 'Computer Science']
	},
	{
		degree: 'High School Diploma',
		description: 'Mathematics',
		location: 'Tunisia',
		logo: Assets.Unknown,
		name: 'Lycée Lamta',
		organization: 'Lycée Lamta',
		period: { from: new Date(2016, 9, 1), to: new Date(2020, 8, 30) },
		shortDescription: '',
		slug: 'high-school-diploma-mathematics',
		subjects: ['Mathematics', 'Physics', 'Computer Science']
	}
];

export const title = 'Education';
