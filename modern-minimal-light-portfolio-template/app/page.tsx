'use client';

import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';

export default function MinimalModernPortfolio() {
	return (
		<div className="min-h-screen bg-white text-black">
			<HeroSection />
			<ProjectsSection />
			<SkillsSection />
			<ContactSection />
		</div>
	);
}
