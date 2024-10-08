import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
    {
        slug: 'loyaltyApp',
        color: 'black', // Bootstrap blue
        description:
            'Developed a loyalty application optimizing customer engagement for retail. Implemented a points-based system with secure interfaces, user-friendly admin controls, and integrated authentication using Keycloak. Managed deployment with Docker.',
        shortDescription:
            'Loyalty application optimizing customer engagement for retail with Keycloak authentication and Docker deployment.',
        links: [{ to: 'https://github.com/FaderFtw/LoyaltyApp', label: 'LoyaltyApp' }],
        logo: Assets.LoyaltyApp,
        name: 'LoyaltyApp',
        period: {
            from: new Date(2024, 6),
            to: new Date(2024, 8)
        },
        skills: getSkills('angular', 'springboot', 'postgresql', 'docker', 'keycloak', 'js', 'html', 'css', 'github'),
        type: 'Web Application',
		screenshots: [
			{
				label: 'User Home',
				src: '/screenshots/LoyaltyApp/userHome.png'
			},
			{
				label: 'Offers Page',
				src: '/screenshots/LoyaltyApp/offers_page.png'
			},
			{
				label: 'Rewards Page',
				src: '/screenshots/LoyaltyApp/rewards_page.png'
			},
			{
				label: 'History Page',
				src: '/screenshots/LoyaltyApp/history_page.png'
			},
			{
				label: 'Purchases Page',
				src: '/screenshots/LoyaltyApp/purchases_page.png'
			},
			{
				label: 'Admin Dashboard',
				src: '/screenshots/LoyaltyApp/dashboard.png'
			},
			{
				label: 'User Management',
				src: '/screenshots/LoyaltyApp/user_management.png'
			},
		]
    },
    {
        slug: 'zeroWaste',
        color: '#91c534', // Yellow for environmental
        description:
            'Designed a system to track and optimize waste collection for the municipality of Takelsa using GPS tracking. Developed a dashboard for real-time tracking of trucks and mapped collection points to improve efficiency.',
        shortDescription:
            'Waste management system using GPS tracking and real-time monitoring to optimize waste collection routes.',
        links: [{ to: 'https://www.zerowastetakelsa.tn', label: '0Waste' }],
        logo: Assets.ZeroWaste,
        name: '0Waste',
        period: {
            from: new Date(2024, 0),
            to: new Date(2024, 8)
        },
        skills: getSkills('php', 'mysql', 'js', 'html', 'css', 'docker', 'github'),
        type: 'Web Application'
    },
	{
        slug: 'footure',
        color: 'blue', 
        description:
            'Managed sports league operations, including teams, matches, and players. Planned competitions with score and performance tracking. Optimized the management process for football leagues using a Laravel-based backend.',
        shortDescription:
            'Sports league management platform with score tracking and player management, built with Laravel.',
        links: [{ to: 'https://github.com/FaderFtw/Footure', label: 'Footure' }],
        logo: Assets.Footure,
        name: 'Footure',
        period: {
            from: new Date(2023, 6),
            to: new Date(2023, 7)
        },
        skills: getSkills('laravel', 'php', 'mysql', 'js', 'html', 'css', 'docker', 'github'),
        type: 'Web Application',
		screenshots: [
			{
				label: 'User Home',
				src: '/screenshots/Footure/UserHomeScreen.png'
			},
			{
				label: 'Teams Page',
				src: '/screenshots/Footure/TeamsView.png'
			},
			{
				label: 'Leagues Page',
				src: '/screenshots/Footure/LeaguesView.png'
			},
			{
				label: 'Matches Page',
				src: '/screenshots/Footure/MatchesView.png'
			},
			{
				label: 'Teams Management',
				src: '/screenshots/Footure/TeamManagement.png'
			}
		]
    },
];

export const title = 'Projects';
