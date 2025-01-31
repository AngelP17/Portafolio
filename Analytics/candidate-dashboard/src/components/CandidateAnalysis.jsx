import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Award, Users, Code, Target } from 'lucide-react';

// Simple Card component since we're having issues with the UI components
const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow p-4 ${className}`}>
    {children}
  </div>
);

const CandidateAnalysis = () => {
  // Data for the technical skills chart
  const technicalSkills = [
    { name: 'Full Stack Development', score: 90 },
    { name: 'CI/CD & DevOps', score: 85 },
    { name: 'Testing & QA', score: 95 },
    { name: 'Database Management', score: 80 },
    { name: 'System Architecture', score: 85 }
  ];

  // Data for key metrics
  const keyMetrics = [
    { metric: 'Student Support', value: '700+', icon: Users },
    { metric: 'Test Coverage', value: '98%', icon: Target },
    { metric: 'Query Performance', value: '+40%', icon: Code },
    { metric: 'Certifications', value: '5', icon: Award },
  ];

  return (
    <div className="w-full space-y-4">
      <Card>
        <h2 className="text-2xl font-bold mb-4">Candidate Strength Analysis - Angel L. Pinzon</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Technical Proficiency Chart */}
          <Card>
            <h3 className="text-lg font-semibold mb-4">Technical Proficiency</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={technicalSkills} layout="vertical">
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="name" type="category" width={150} />
                  <Tooltip />
                  <Bar dataKey="score" fill="#3B82F6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Key Performance Indicators */}
          <Card>
            <h3 className="text-lg font-semibold mb-4">Key Performance Indicators</h3>
            <div className="grid grid-cols-2 gap-4">
              {keyMetrics.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <IconComponent className="h-8 w-8 text-blue-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-600">{item.metric}</p>
                      <p className="text-xl font-bold">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Qualifications Summary */}
        <div className="mt-4">
          <Card>
            <h3 className="text-lg font-semibold mb-2">Key Qualifications Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-bold mb-2">Educational Background</h4>
                <p className="text-sm">BS in Computer Engineering (2025)</p>
                <p className="text-sm text-gray-600">University of Arkansas</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-bold mb-2">Technical Leadership</h4>
                <p className="text-sm">Led development teams</p>
                <p className="text-sm text-gray-600">Implemented CI/CD pipelines</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-bold mb-2">Project Impact</h4>
                <p className="text-sm">Reduced deployment time by 50%</p>
                <p className="text-sm text-gray-600">Improved query performance by 40%</p>
              </div>
            </div>
          </Card>
        </div>
      </Card>
    </div>
  );
};

export default CandidateAnalysis;