import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Fadi';

export const lastName = 'Zaafrane';

export const email = 'fady.zaafrane@gmail.com';

export const links: Array<{ platform: Platform; link: string }> = [
	{ 
		platform: Platform.GitHub, 
		link: 'https://github.com/FaderFtw' 
	},
	{ 
		platform: Platform.LeetCode, 
		link: 'https://leetcode.com/TheFader/' 
	},
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/fadi-zaafrane/'
	},
	{
		platform: Platform.Email,
		link: 'fady.zaafrane@gmail.com'
	}
];

export const skills = getSkills('springboot', 'aws', 'docker', 'angular', 'reactjs', 'laravel', 'python', 'github');
