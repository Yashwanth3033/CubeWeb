import React, { useState } from 'react';

const ToolsSection = () => {
    const [isYearly, setIsYearly] = useState(true);

    const plans = {
        individual: { 
            monthly: 29, 
            yearly: 23, 
            name: 'Individual'
        },
        agency: { 
            monthly: 49, 
            yearly: 39, 
            name: 'Agency'
        },
        team: { 
            monthly: 79, 
            yearly: 63, 
            name: 'Team'
        },
    };

    const features = [
        {
            name: 'Admins & Members',
            individual: '4',
            agency: '12',
            team: 'Unlimited'
        },
        {
            name: 'File Storage',
            individual: '10GB',
            agency: '50GB',
            team: 'Unlimited'
        },
        {
            name: 'Active Users',
            individual: '500',
            agency: '1500',
            team: 'Unlimited'
        },
        {
            name: 'Unlimited Activities',
            individual: true,
            agency: true,
            team: true
        },
        {
            name: 'Data Export',
            individual: false,
            agency: true,
            team: true
        },
        {
            name: 'Adjust Group Sizes',
            individual: false,
            agency: true,
            team: true
        }
    ];

    return (
        <div className="min-h-screen p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
                
                {/* Header */}
                <div data-aos="fade-up" data-aos-delay="300" className="text-center mb-8 lg:mb-12">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Choose Your Plan
                    </h1>
                    <p className="text-slate-400 text-base sm:text-lg">
                        Simple pricing for everyone
                    </p>
                </div>
                <div className="min-h-screen p-4 sm:p-6 lg:p-8 bg-slate-900 rounded-2xl">
                {/* Toggle */}
                <div data-aos="fade-up" data-aos-delay="600" className="flex justify-center mb-8 lg:mb-12 pb-2">
                    <div className="flex items-center bg-slate-800 rounded-full p-1">
                        <button 
                            className={`px-3 sm:px-4 py-2 rounded-full text-sm transition-all ${
                                !isYearly ? 'bg-white text-slate-900' : 'text-slate-400'
                            }`}
                            onClick={() => setIsYearly(false)}
                        >
                            Monthly
                        </button>
                        <button 
                            className={`px-3 sm:px-4 py-2 rounded-full text-sm transition-all ${
                                isYearly ? 'bg-white text-slate-900' : 'text-slate-400'
                            }`}
                            onClick={() => setIsYearly(true)}
                        >
                            <span className="hidden sm:inline">Yearly (Save 20%)</span>
                            <span className="sm:hidden">Yearly</span>
                        </button>
                    </div>
                </div>

                {/* Desktop Layout */}
                <div data-aos="fade-up" data-aos-delay="900" className="hidden lg:block ">
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-slate-700 mt-8">
                        <div className="grid grid-cols-4 min-h-[600px]">
                            {/* Features Column */}
                            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 border-r border-slate-600 rounded-l-2xl">
                                <div className="h-32 flex flex-col items-start justify-center border-b border-slate-600 pb-6 mb-6">
                                    <h3 className="text-white font-bold text-xl mb-2">Compare Plans</h3>
                                    <p className="text-slate-400 text-sm">All the features you need</p>
                                </div>
                                <div className="space-y-6">
                                    {features.map((feature, index) => (
                                        <div key={index} className="h-16 flex items-center text-slate-200 font-medium border-b border-slate-700/50 pb-4">
                                            {feature.name}
                                        </div>
                                    ))}
                                </div>
                                <div className="h-20 mt-8 border-t border-slate-600 pt-6"></div>
                            </div>

                            {/* Plan Columns */}
                            {Object.entries(plans).map(([planKey, plan], index) => (
                                <div key={planKey} className={`p-8 border-r border-slate-600 relative ${
                                    planKey === 'agency' ? 'bg-gradient-to-br from-blue-950/30 to-slate-800 scale-105 z-10 shadow-2xl border-blue-500/20' : 'bg-slate-800/30'
                                } ${planKey === 'team' ? 'rounded-r-2xl' : ''} last:border-r-0`}>
                                    {/* Popular badge for middle plan */}
                                    {planKey === 'agency' && (
                                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-20">
                                            ⭐ Most Popular
                                        </div>
                                    )}
                                    
                                    {/* Plan Header */}
                                    <div className="h-32 text-center border-b border-slate-600 pb-6 mb-6">
                                        <h2 className="text-white text-2xl font-bold mb-3">{plan.name}</h2>
                                        <div className="flex items-baseline justify-center">
                                            <span className="text-4xl font-bold text-white">
                                                ${isYearly ? plan.yearly : plan.monthly}
                                            </span>
                                            <span className="text-slate-400 ml-2">/month</span>
                                        </div>
                                        {isYearly && (
                                            <div className="text-green-400 text-sm font-medium mt-2">
                                                Save ${(plan.monthly - plan.yearly) * 12}/year
                                            </div>
                                        )}
                                    </div>

                                    {/* Features */}
                                    <div className="space-y-6">
                                        {features.map((feature, featureIndex) => {
                                            const value = feature[planKey];
                                            return (
                                                <div key={featureIndex} className="h-16 flex items-center justify-center border-b border-slate-700/50 pb-4">
                                                    {typeof value === 'boolean' ? (
                                                        value ? (
                                                            <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                                </svg>
                                                            </div>
                                                        ) : (
                                                            <div className="w-6 h-1 bg-slate-600 rounded-full"></div>
                                                        )
                                                    ) : (
                                                        <div className="bg-slate-700/50 px-3 py-1 rounded-full">
                                                            <span className="text-white font-bold">{value}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* Button */}
                                    <div className="h-20 flex items-center mt-8 border-t border-slate-600 pt-6">
                                        <button className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                                            planKey === 'agency' 
                                                ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-2xl' 
                                                : 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600 hover:border-slate-500'
                                        }`}>
                                            {planKey === 'agency' ? 'Start Free Trial' : 'Get Started'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Tablet Layout */}
                <div className="hidden md:block lg:hidden">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        {Object.entries(plans).map(([planKey, plan]) => (
                            <div key={planKey} className={`bg-slate-800 rounded-lg p-6 relative ${
                                planKey === 'agency' ? 'ring-2 ring-blue-500' : ''
                            }`}>
                                {planKey === 'agency' && (
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                                        Most Popular
                                    </div>
                                )}
                                
                                <div className="text-center mb-6">
                                    <h2 className="text-white text-xl font-bold mb-2">{plan.name}</h2>
                                    <div className="text-3xl font-bold text-white">
                                        ${isYearly ? plan.yearly : plan.monthly}
                                        <span className="text-sm text-slate-400 ml-1">/mo</span>
                                    </div>
                                </div>

                                <div className="space-y-3 mb-6">
                                    {features.map((feature, index) => {
                                        const value = feature[planKey];
                                        return (
                                            <div key={index} className="flex items-center justify-between py-2 border-b border-slate-700 last:border-b-0">
                                                <span className="text-slate-300 text-sm">{feature.name}</span>
                                                {typeof value === 'boolean' ? (
                                                    value ? (
                                                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                                                            <span className="text-white text-xs">✓</span>
                                                        </div>
                                                    ) : (
                                                        <div className="w-5 h-0.5 bg-slate-500 rounded"></div>
                                                    )
                                                ) : (
                                                    <span className="text-white text-sm font-medium">{value}</span>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>

                                <button className={`w-full py-3 rounded-lg font-medium transition-all duration-200 ${
                                    planKey === 'agency' 
                                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl' 
                                        : 'bg-slate-600 hover:bg-slate-500 text-white'
                                }`}>
                                    Get Started
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden space-y-4">
                    {Object.entries(plans).map(([planKey, plan]) => (
                        <div key={planKey} className={`bg-slate-800 rounded-lg p-4 sm:p-6 relative ${
                            planKey === 'agency' ? 'ring-2 ring-blue-500' : ''
                        }`}>
                            {planKey === 'agency' && (
                                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                                    Popular
                                </div>
                            )}
                            
                            <div className="text-center mb-4">
                                <h2 className="text-white text-lg sm:text-xl font-bold mb-2">{plan.name}</h2>
                                <div className="text-2xl sm:text-3xl font-bold text-white">
                                    ${isYearly ? plan.yearly : plan.monthly}
                                    <span className="text-sm text-slate-400 ml-1">/mo</span>
                                </div>
                            </div>

                            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                                {features.map((feature, index) => {
                                    const value = feature[planKey];
                                    return (
                                        <div key={index} className="flex items-center justify-between py-2 border-b border-slate-700 last:border-b-0">
                                            <span className="text-slate-300 text-sm">{feature.name}</span>
                                            {typeof value === 'boolean' ? (
                                                value ? (
                                                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center">
                                                        <span className="text-white text-xs">✓</span>
                                                    </div>
                                                ) : (
                                                    <div className="w-4 h-0.5 sm:w-5 bg-slate-500 rounded"></div>
                                                )
                                            ) : (
                                                <span className="text-white text-sm font-medium">{value}</span>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            <button className={`w-full py-3 rounded-lg font-medium transition-all duration-200 ${
                                planKey === 'agency' 
                                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg' 
                                    : 'bg-slate-600 hover:bg-slate-500 text-white'
                            }`}>
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </div>
    );
};

export default ToolsSection;