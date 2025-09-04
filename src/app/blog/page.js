'use client';

import { useState } from 'react';
import { FaUserTie, FaChartLine, FaClipboardCheck, FaLightbulb, FaUsers } from 'react-icons/fa';

const BlogPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const blogPosts = [
    {
      id: 1,
      title: 'Top Challenges HR Managers Face and How HRMS Solves Them',
      content: [
        {
          heading: 'Endless Administrative Tasks',
          text: 'Manual processes like attendance tracking, payroll calculations, and leave approvals consume hours. For Simran, automation through an HRMS turned these tasks into a few clicks, freeing her to focus on employee growth and retention.',
          icon: FaClipboardCheck
        },
        {
          heading: 'Struggling with Employee Engagement',
          text: 'In hybrid workplaces, keeping employees motivated isn\'t easy. Simran once relied on yearly surveys, but they barely scratched the surface. With HRMS-driven analytics and feedback tools, she could spot engagement gaps in real time and take action before issues escalated.',
          icon: FaUsers
        },
        {
          heading: 'Compliance Headaches',
          text: 'Simran once struggled with scattered data across payroll, attendance, and compliance files. With HRMS, these workflows feed into a single system—automating reports, triggering timely alerts, and turning data into actionable insights that keep her company compliant and proactive.',
          icon: FaUserTie
        },
        {
          heading: 'Lack of Data-Driven Insights',
          text: 'Before HRMS, decisions were based on guesswork. Today, Simran uses HRMS dashboards to analyse attrition trends, identify skill gaps, and forecast workforce needs—making HR a true strategic partner in business growth.',
          icon: FaChartLine
        },
        {
          heading: 'Scaling with Growth',
          text: 'As her company expanded, managing a larger workforce manually was impossible. A cloud-based HRMS scaled effortlessly, keeping processes smooth whether she was managing 50 employees or 5,000.',
          icon: FaLightbulb
        }
      ],
      
      intro: 'When Simran, an HR manager at a fast-growing startup, logs in each morning, her day begins with a flood of leave requests, payroll queries, and compliance updates. By the time she\'s done juggling spreadsheets and emails, there\'s hardly any room left for what truly matters—building a stronger workplace culture.',
      conclusion: 'For HR managers like Simran, these challenges don\'t disappear—but with HRMS, they no longer define the job. Instead of drowning in administration, HR leaders can finally focus on what matters most: people, performance, and progress.'
    },
    {
      id: 2,
      title: 'Employee Benefits and Payroll Management: Why Automation Matters',
      intro: 'When we talk about payroll management, the question isn\'t whether it\'s important - it\'s why it\'s still one of the most complex and error-prone processes inside organizations. Why do HR teams, despite having clear policies and structured benefits, still struggle every month to deliver accurate salaries on time?',
      content: [
        {
          heading: 'The Complexity of Fragmentation',
          text: 'Payroll isn\'t just about cutting paychecks - it pulls data from attendance, overtime, tax regulations, bonuses, and benefits like insurance or retirement contributions. Each of these workflows often sits in isolation, leaving HR professionals to reconcile them manually. The result? Errors, delays, compliance risks, and frustrated employees.',
          icon: FaChartLine
        },
        {
          heading: 'The Power of Integration',
          text: 'An HRMS with payroll automation integrates data from every workflow into a single system. Leave requests directly adjust salary. Benefit contributions are automatically factored in. Compliance updates trigger alerts without manual chasing. Instead of stitching spreadsheets together, HR leaders have one source of truth that runs payroll accurately, transparently, and on time.',
          icon: FaClipboardCheck
        },
        {
          heading: 'Building Trust Through Efficiency',
          text: 'When employees see that salaries and benefits are handled flawlessly, confidence in the organization rises. When HR no longer spends hours on repetitive calculations, they can focus on building policies, driving engagement, and shaping the future workforce.',
          icon: FaUsers
        }
      ],
      conclusion: 'In short, automated payroll management isn\'t about replacing HR—it\'s about empowering them. It transforms payroll from a monthly burden into a strategic advantage, where accuracy, compliance, and employee satisfaction work hand in hand.'
    },
    {
      id: 3,
      title: 'Why Mental Health Should Be a Priority in HR Strategies',
      intro: 'When we talk about workplace performance, we often think about salaries, perks, and promotions. But beneath it all lies a factor that silently shapes productivity—employee mental health. Recent studies are sounding the alarm, and the numbers paint a story no HR leader can ignore.',
      content: [
        {
          heading: 'The Indicators We Can\'t Overlook',
          text: 'The World Health Organization estimates that depression and anxiety cause 12 billion lost workdays annually, costing employers nearly USD 1 trillion in productivity. In India alone, poor employee mental health is costing companies about $14 billion every year, driven by absenteeism, reduced performance, and higher turnover. These aren\'t just numbers—they\'re signals of a workforce under strain.',
          icon: FaChartLine
        },
        {
          heading: 'The Silent Struggle',
          text: 'Even more concerning, a global survey by Ipsos and Teladoc Health found that 82% of employees with diagnosed mental health conditions do not disclose them at work, fearing stigma or career setbacks. When silence prevails, organizations lose visibility into one of the biggest factors affecting retention and engagement.',
          icon: FaUsers
        },
        {
          heading: 'What These Numbers Tell Us',
          text: 'These statistics point to a clear truth: mental health is no longer a private issue—it\'s a business issue. Lost productivity, hidden struggles, and burnout aren\'t just hurting individuals; they are slowing down entire organizations. If employees don\'t feel safe to speak up, they quietly disengage—or worse, they leave.',
          icon: FaLightbulb
        },
        {
          heading: 'What HR Can Do Differently',
          text: 'Embed mental health into HR strategy as a priority equal to payroll or compliance. Build psychological safety where employees can speak openly. Train managers to recognize early signs of stress and burnout. Offer structured support like Employee Assistance Programs, counselling access, and flexible schedules. Use HRMS tools to measure engagement and detect trends early.',
          icon: FaClipboardCheck
        }
      ],
      conclusion: 'Ultimately, making mental health a priority isn\'t only about preventing burnout—it\'s about creating workplaces where people thrive. When employees trust that their well-being matters, they are more engaged, more loyal, and more productive. For HR leaders, this is not just a responsibility—it\'s an opportunity to transform mental health from a silent drain into a source of strength.'
    }
  ];

  return (
    <div className="min-h-screen pt-24 bg-[#eeeff1]" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-xl shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-center mb-12" style={{ color: '#111826' }}>
            Our <span style={{ color: '#a89456' }}>Blog</span>
          </h1>

          {/* Tab Menu */}
          <div className="flex overflow-x-auto mb-8 pb-2 space-x-4">
            {blogPosts.map((post, index) => (
              <button
                key={post.id}
                onClick={() => setActiveTab(index)}
                className={`flex-shrink-0 px-6 py-3 rounded-lg transition-all duration-300 ${activeTab === index ? 'bg-[#a89456] text-white shadow-lg transform scale-105' : 'bg-[#eeeff1] text-[#111826] hover:bg-[#a89456] hover:text-white'}`}
              >
                {post.title.length > 30 ? `${post.title.substring(0, 30)}...` : post.title}
              </button>
            ))}
          </div>

          {/* Blog Content */}
          <div className="bg-white rounded-xl p-8 shadow-inner">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-serif font-bold mb-6 text-[#111826] border-b pb-4">
                {blogPosts[activeTab].title}
              </h2>

              {blogPosts[activeTab].intro && (
                <p className="text-gray-700 mb-8 leading-relaxed text-xl font-serif first-letter:text-4xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">
                  {blogPosts[activeTab].intro}
                </p>
              )}

              <div className="space-y-12">
                {blogPosts[activeTab].content.map((section, index) => (
                  <section key={index} className="mb-12">
                    <div className="flex items-center mb-6 bg-[#fffef1] p-4 rounded-lg">
                      <div className="text-2xl text-[#a89456]">
                        <section.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-serif font-semibold ml-4 text-[#111826]">
                        {section.heading}
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg pl-6 border-l-4 border-[#a89456] ml-4">
                      {section.text}
                    </p>
                  </section>
                ))}
              </div>

              {blogPosts[activeTab].conclusion && (
                <p className="text-gray-700 mt-12 pt-6 border-t-2 border-[#a89456] leading-relaxed text-lg italic">
                  {blogPosts[activeTab].conclusion}
                </p>
              )}
              
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;