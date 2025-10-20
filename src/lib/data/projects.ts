import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'containersManager',
		color: '#69b1da',
		description:
			'Developed a Docker container management platform during my end-of-studies internship at InstaDeep. The platform provides a user-friendly interface to manage containers, images, networks, and volumes efficiently. Built with a .NET backend and a React/Next.js frontend, it allows developers to visualize, control, and monitor Docker resources without relying on CLI tools. Implemented Clean Architecture and SOLID principles for maintainability, and integrated DevOps practices for seamless deployment and scalability.',
		shortDescription:
			'Docker container management platform with .NET and Next.js, built at InstaDeep with focus on usability, scalability, and DevOps practices.',
		links: [],
		logo: Assets.InstaDeep,
		name: 'Containers Manager',
		period: {
			from: new Date(2025, 2),
			to: new Date(2025, 8)
		},
		skills: getSkills('dotnet', 'nextjs', 'react', 'docker', 'postgresql', 'postman', 'swagger', 'tailwind', 'github'),
		type: 'Web Application',
		screenshots: [
			{
				label: 'Dashboard Overview',
				src: '/screenshots/ContainersManager/system_dashboard.png'
			},
			{
				label: 'Container List View',
				src: '/screenshots/ContainersManager/container_list.png'
			},
			{
				label: 'Image List View',
				src: '/screenshots/ContainersManager/image_list.png'
			},
			{
				label: 'Registry List View',
				src: '/screenshots/ContainersManager/registry_list.png'
			},
			{
				label: 'Network List View',
				src: '/screenshots/ContainersManager/network_management.png'
			},
			{
				label: 'Volume List View',
				src: '/screenshots/ContainersManager/volume_management.png'
			},
			{
				label: 'Container Details',
				src: '/screenshots/ContainersManager/container_details.png'
			},
			{
				label: 'Container Logs',
				src: '/screenshots/ContainersManager/container_logs.png'
			},
			{
				label: 'Container Terminal',
				src: '/screenshots/ContainersManager/container_terminal.png'
			},
			{
				label: 'Container Stats',
				src: '/screenshots/ContainersManager/container_stats.png'
			},
			{
				label: 'Image Details',
				src: '/screenshots/ContainersManager/image_details.png'
			},
			{
				label: 'Image Documentation',
				src: '/screenshots/ContainersManager/image_documentation.png'
			},
			{
				label: 'Image Building',
				src: '/screenshots/ContainersManager/image_build.png'
			},
			{
				label: 'Network Details',
				src: '/screenshots/ContainersManager/network_details.png'
			},
			{
				label: 'Volume Details',
				src: '/screenshots/ContainersManager/volume_details.png'
			}
		]
	},
    {
        slug: 'loyaltyApp',
        color: 'gray', 
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
        skills: getSkills('angular', 'springboot', 'postgresql', 'docker', 'keycloak', 'js', 'ts', 'html', 'css', 'java', 'github', 'postman'),
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
		slug: "zeroWaste",
		color: "#91c534",
		description:
			"Designed and deployed a waste management system for the municipality of Takelsa to optimize waste collection routes. This system leverages GPS tracking to monitor waste collection trucks in real-time and provides a dashboard for efficient route mapping. Deployed on Microsoft Azure using Azure Container Instances to streamline scalability and maintain continuous operations.",
		shortDescription:
			"Waste management system with GPS tracking, real-time monitoring, and route optimization, deployed on Azure Container Instances.",
		links: [{ to: "https://www.zerowastetakelsa.tn", label: "0Waste" }],
		logo: Assets.ZeroWaste,
		name: "0Waste",
		period: {
			from: new Date(2024, 0),
            to: new Date(2024, 8)
		},
		skills: getSkills("php", "mysql", "js", "html", "css", "docker", "github", "azure"),
		type: "Web Application",
		screenshots: [
			{
				label: 'Resource Group',
				src: '/screenshots/0waste/ResourceGroup.png'
			},
			{
				label: 'Container Group in Azure Portal',
				src: '/screenshots/0waste/ContainerGroup.png'
			},
			{
				label: 'Container Group in Azure CLI',
				src: '/screenshots/0waste/ContainerGroupAzureCLI.png'
			},
			{
				label: 'Container Registry',
				src: '/screenshots/0waste/ContainerRegistry.png'
			},
			{
				label: 'Result',
				src: '/screenshots/0waste/Result.png'
			}
		]
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
	{
		slug: 'imageProcessingApp',
		color: '#4ecbfb',
		description:
			'Developed an image processing application that allows users to import images and perform various manipulations like contrast adjustment, luminance changes, grayscale conversion, filtering (mean, median, min, max), edge detection, and histogram display. Additional features include image saving and printing capabilities. Implemented using ReactJS for the front-end and Python for the back-end.',
		shortDescription:
			'Image processing application with manipulation features like filtering, grayscale conversion, and edge detection.',
		links: [{ to: 'https://github.com/AlaaBrahim/traitement-image', label: 'ImageProcessingApp' }],
		logo: Assets.ImageProcessingApp, 
		name: 'ImageProcessingApp',
		period: {
			from: new Date(2024, 3), 
			to: new Date(2024, 4)
		},
		skills: getSkills('reactjs', 'python', 'html', 'css', 'js', 'ts', 'github'),
		type: 'Web Application',
		screenshots: [
			{
				label: 'Home Screen',
				src: '/screenshots/ImageProcessingApp/HomeScreen.png'
			},
			{
				label: 'Filtered Image',
				src: '/screenshots/ImageProcessingApp/BasicAdjustments.png'
			},
			{
				label: 'Edge Detection Screen',
				src: '/screenshots/ImageProcessingApp/EdgeDetection.png'
			},
			{
				label: 'Image Histogram Screen',
				src: '/screenshots/ImageProcessingApp/ImageHistogram.png'
			},
			{
				label: 'Example Filter Screen',
				src: '/screenshots/ImageProcessingApp/MedianFilter.png'
			}
		]
	},
	{
		slug: 'pistachioAnomalyDetection',
		color: 'gray',
		description:
			'Developed an anomaly detection system for pistachio classification using autoencoders. The project involved creating a binary classification dataset from adulterated spinach and pure pistachio images. Implemented image preprocessing techniques, trained an autoencoder for anomaly detection, and evaluated performance using confusion matrices and error thresholds.',
		shortDescription:
			'Anomaly detection for pistachio classification using autoencoders and image preprocessing.',
		links: [{ to: 'https://github.com/FaderFtw/Food-Anomaly-Detection', label: 'PistachioAnomalyDetection' }],
		logo: Assets.Unknown,
		name: 'Pistachio Anomaly Detection',
		period: {
			from: new Date(2024, 3), 
			to: new Date(2024, 4)
		},
		skills: getSkills('tensorflow', 'python', 'numpy', 'pandas', 'github'),
		type: 'Deep Learning (CNN) Project',
		screenshots: [
			
		]
	},
	{
		slug: 'darknetTrafficClassification',
		color: 'black',
		description:
			'Developed a darknet traffic classification system using the CIC-Darknet2020 dataset. Implemented KNN, Random Forest, and MLP models, with Random Forest showing the best performance. Enhanced skills in machine learning, big data processing, and cybersecurity using pandas, scikit-learn, and TensorFlow.',
		shortDescription:
			'Darknet traffic classification using the CIC-Darknet2020 dataset with Random Forest, KNN, and MLP models.',
		links: [{ to: 'https://github.com/FaderFtw/CIC-Darknet2020-Classification', label: 'DarknetTrafficClassification' }],
		logo: Assets.Unknown,
		name: 'Darknet Traffic Classification',
		period: {
			from: new Date(2024, 2),
			to: new Date(2024, 3)
		},
		skills: getSkills('tensorflow', 'python', 'numpy', 'pandas', 'github'),
		type: 'Machine Learning Project',
		screenshots: []
	},
	{
		slug: 'myPortfolio',
		color: 'black',
		description:
			'Developed a personal portfolio website to showcase projects, skills, and experiences. Implemented a responsive design using Svelte, TypeScript, and Tailwind CSS. Enhanced SEO with metadata and accessibility features. Deployed the site using GitHub Actions CI/CD and GitHub Pages.',
		shortDescription:
			'Personal portfolio website showcasing projects, skills, and experiences, built with Svelte and Tailwind CSS. Deployed using GitHub Actions CI/CD and GitHub Pages.',
		links: [{ to: 'https://github.com/FaderFtw/faderftw.github.io', label: 'MyPortfolio' }],
		logo: Assets.Portfolio,
		name: 'MyPortfolio',
		period: {
			from: new Date(2024, 9),
			to: new Date(2024, 9)
		},
		skills: getSkills('svelte', 'js', 'ts', 'tailwindcss', 'html', 'css', 'github'),
		type: 'Web Application',
		screenshots: []
	},
	{
		slug: 'competitiveProgramming',
		color: 'black',
		description:
			'Competitive programming solutions for CodeForces, LeetCode, and CSES. Implemented solutions in C++, Python, and Java for various problems, including data structures, algorithms, and mathematical challenges. Enhanced problem-solving skills and algorithmic thinking.',
		shortDescription:
			'Competitive programming solutions for CodeForces, LeetCode, and CSES in C++, Python, and Java.',
		links: [{ to: 'https://github.com/FaderFtw/CP', label: 'CompetitiveProgramming' }],
		logo: Assets.Unknown,
		name: 'Competitive Programming Solutions',
		period: {
			from: new Date(2022, 0),
			to: new Date(2024, 7)
		},
		skills: getSkills('cpp', 'python'),
		type: 'Competitive Programming',
		screenshots: []
	},
	{
		slug: 'devopsProject',
		color: 'cyan',
		description:
        'Developed a robust DevOps pipeline for a simple Spring Boot application with a React frontend. This project integrates a comprehensive CI/CD process using Jenkins, including stages for building, testing, and deploying the application. Key features include Maven for dependency management, Docker for containerization, and Kubernetes for orchestration. The pipeline incorporates infrastructure as code using Terraform for provisioning AWS resources, performance testing with JMeter, and monitoring with Prometheus and Grafana, ensuring a reliable and scalable deployment. We used Git Flow for streamlined team collaboration, with automated email notifications for build statuses to enhance visibility and coordination.',
		shortDescription:
			'CI/CD pipeline for a Spring Boot and React application, utilizing Docker, Kubernetes, Terraform, JMeter, Prometheus, Grafana, and Git Flow for collaboration and monitoring.',
		links: [{ to: 'https://github.com/FaderFtw/IGL5-G1-ProjetFoyer', label: 'DevOps Project' }],
		logo: Assets.Unknown,
		name: 'Academic DevOps Project',
		period: {
			from: new Date(2024, 8), 
			to: new Date(2024, 10)  
		},
		skills: getSkills('jenkins', 'docker', 'kubernetes', 'jmeter', 'aws', 'terraform', 'github'),
		type: 'DevOps Project',
		screenshots: [
			{
				label: 'Jenkins Pipeline',
				src: '/screenshots/AcademicDevOpsProject/GreenPipeline.png'
			},
			{
				label: 'Terraform Stage',
				src: '/screenshots/AcademicDevOpsProject/IACTerraformStage.png'
			},
			{
				label: 'Kubernetes Deployment with AWS',
				src: '/screenshots/AcademicDevOpsProject/K8S.png'
			},
			{
				label: 'JMeter Testing',
				src: '/screenshots/AcademicDevOpsProject/JMeter.png'
			},
			{
				label: 'Grafana Dashboard',
				src: '/screenshots/AcademicDevOpsProject/MonitoringAppPodAfterJMeterPerformanceTest.png'
			},
			{
				label: 'Final Result',
				src: '/screenshots/AcademicDevOpsProject/FrontEnd.png'
			},
			{
				label: 'Containerization with Docker',
				src: '/screenshots/AcademicDevOpsProject/Docker.png'
			}
		]
	},
	{
		slug: 'awsCloudProject',
		color: 'lightblue',
		description:
			'Developed a cloud-based infrastructure on AWS to support a scalable and secure three tier web application. The architecture includes a Virtual Private Cloud (VPC) setup with public and private subnets across multiple Availability Zones to ensure high availability. Utilized NAT gateways for secure internet access in private subnets and an Application Load Balancer to distribute incoming traffic across EC2 instances for web and application servers. Integrated AWS Auto Scaling to dynamically adjust the number of EC2 instances based on traffic and load, optimizing cost and performance. Deployed Amazon RDS in a multi-AZ configuration for high availability and automated failover for the database layer. Additionally, implemented a static website hosted on Amazon S3 for serving frontend assets, achieving cost-efficient delivery and reliability.',
		shortDescription:
			'AWS-based scalable and secure infrastructure with multi-AZ support, load balancing, auto-scaling, and static website hosting on S3.',
		links: [],
		logo: Assets.Unknown,
		name: 'Academic AWS Cloud Project',
		period: {
			from: new Date(2024, 1),
			to: new Date(2023, 11)
		},
		skills: getSkills('aws'),
		type: 'Cloud Infrastructure Project',
		screenshots: [
			{
				label: 'Architecture Diagram',
				src: '/screenshots/AcademicCloudProject/Architecture.png'
			},
			{
				label: 'Virtual Private Cloud (VPC)',
				src: '/screenshots/AcademicCloudProject/VPC3.png'
			},
			{
				label: 'Internet Gateway',
				src: '/screenshots/AcademicCloudProject/igw.png'
			},
			{
				label: 'NAT Gateway',
				src: '/screenshots/AcademicCloudProject/NatGateway.png'
			},
			{
				label: 'Route Tables',
				src: '/screenshots/AcademicCloudProject/RouteTables.png'
			},
			{
				label: 'Security Groups',
				src: '/screenshots/AcademicCloudProject/SecurityGroups.png'
			},
			{
				label: 'Target Groups for Load Balancers and Auto Scaling',
				src: '/screenshots/AcademicCloudProject/LB.png'
			},
			{
				label: 'Database Configuration',
				src: '/screenshots/AcademicCloudProject/DBConfig.png'
			},
			{
				label: 'S3 Static Website',
				src: '/screenshots/AcademicCloudProject/S3.png'
			},
			{
				label: 'Final Result',
				src: '/screenshots/AcademicCloudProject/Result.png'
			}
		]
	},
	{
		slug: 'microservicesSpringCloud',
		color: 'green', 
		description:
			'Developed a microservices architecture to explore Spring Cloud components. Implemented a Config Server for centralized configuration management, Eureka Server for service discovery, and API Gateway for routing. Created User and Product microservices with MySQL integration for separate databases. The entire project is dockerized and run with Docker Compose. Integrated Postman for testing, with load balancing and dynamic routing through the API Gateway.',
		shortDescription:
			'Spring Cloud microservices architecture with centralized configuration, service discovery, API Gateway, MySQL integration, and Dockerized components.',
		links: [{ to: 'https://github.com/FaderFtw/Microservices-Product-Management', label: 'MicroservicesSpringCloud' }],
		logo: Assets.Unknown,
		name: 'Microservices Architecture with Spring Cloud',
		period: {
			from: new Date(2024, 10),
			to: new Date(2024, 10)
		},
		skills: getSkills(
			'springboot',
			'mysql',
			'postman',
			'java',
			'docker',
			'github'
		),
		type: 'Web Application',
		screenshots: [
			{
				label: 'Docker Containers',
				src: '/screenshots/ArchitectureMicroservices/DockerContainers.png'
			},
			{
				label: 'Eureka Server UI',
				src: '/screenshots/ArchitectureMicroservices/EurekaServerUI.png'
			},
			{
				label: 'Product Microservice',
				src: '/screenshots/ArchitectureMicroservices/ProductMicroservice.png'
			},
			{
				label: 'Product Microservice API Test',
				src: '/screenshots/ArchitectureMicroservices/ProductMicroServiceAPITest.png'
			},
			{
				label: 'Product Service Config File',
				src: '/screenshots/ArchitectureMicroservices/ProductServiceConfigFile.png'
			},
			{
				label: 'Project Structure',
				src: '/screenshots/ArchitectureMicroservices/ProjectStructure.png'
			},
			{
				label: 'User Microservice',
				src: '/screenshots/ArchitectureMicroservices/UserMicroservice.png'
			},
			{
				label: 'User Microservice API Test',
				src: '/screenshots/ArchitectureMicroservices/UserMicroServiceAPITest.png'
			},
			{
				label: 'User Service Config File',
				src: '/screenshots/ArchitectureMicroservices/UserServiceConfigFile.png'
			}
		]
	}
	
	
];

export const title = 'Projects';
