'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaUser } from 'react-icons/fa';

const BlogPage = () => {
  const router = useRouter();


  const blogPosts = [
    {
      id: 1,
      title: 'Top Challenges HR Managers Face and How HRMS Solves Them',
      image: '/hr.jpg',
      category: 'HR/Technology',
      date: '29/08/2025',
      place: 'Cuttack, India',
      content: [
        {
          heading: '1. Endless Administrative Tasks',
          text: ' This is the reality for many HR professionals today The role of HR is no longer just administrative; it\'s about engagement, compliance, and data-driven decision-making. Yet, challenges keep piling up. That\'s where a Human Resource Management System (HRMS) becomes a powerful ally.'
        },
        {
          heading: '2.Struggling with Employee Engagement ',
          text: 'Manual processes like attendance tracking, payroll calculations, and leave approvals consume hours. For Simran, automation through an HRMS turned these tasks into a few clicks, freeing her to focus on employee growth and retention.'
        },
        {
          heading: '3. Compliance Headaches',
          text: 'In hybrid workplaces, keeping employees motivated isn\'t easy. Simran once relied on yearly surveys, but they barely scratched the surface. With HRMS-driven analytics and feedback tools, she could spot engagement gaps in real time and take action before issues escalated.'
        },
        {
          heading: '4. Lack of Data-Driven Insights',
          text: 'Simran once struggled with scattered data across payroll, attendance, and compliance files. With HRMS, these workflows feed into a single system—automating reports, triggering timely alerts, and turning data into actionable insights that keep her company compliant and proactive.'
        },
        {
          heading: '5.Scaling with Growth ',
          text: 'Before HRMS, decisions were based on guesswork. Today, Simran uses HRMS dashboards to analyse attrition trends, identify skill gaps, and forecast workforce needs—making HR a true strategic partner in business growth.'
        },
        {
          heading: ' Conclusion',
          text: 'As her company expanded, managing a larger workforce manually was impossible. A cloud-based HRMS scaled effortlessly, keeping processes smooth whether she was managing 50 employees or 5,000.'
        }
      ],
      
      intro: 'When Simran, an HR manager at a fast-growing startup, logs in each morning, her day begins with a flood of leave requests, payroll queries, and compliance updates. By the time she\'s done juggling spreadsheets and emails, there\'s hardly any room left for what truly matters—building a stronger workplace culture.',
      conclusion: 'For HR managers like Simran, these challenges don\'t disappear—but with HRMS, they no longer define the job. Instead of drowning in administration, HR leaders can finally focus on what matters most: people, performance, and progress.',
      author: 'Imran Ansari'
    },
    {
      id: 2,
      title: 'Employee Benefits and Payroll Management: Why Automation Matters',
      image: '/benefit.jpg',
      category: 'Employee Benefits',
      date: '01/09/2025',
      place: 'Bhubaneswar, India',
      intro: 'When we talk about payroll management, the question isn\'t whether it\'s important - it\'s why it\'s still one of the most complex and error-prone processes inside organizations. Why do HR teams, despite having clear policies and structured benefits, still struggle every month to deliver accurate salaries on time?',
      content: [
        {
          heading: '',
          text: 'Payroll isn\'t just about cutting paychecks - it pulls data from attendance, overtime, tax regulations, bonuses, and benefits like insurance or retirement contributions. Each of these workflows often sits in isolation, leaving HR professionals to reconcile them manually. The result? Errors, delays, compliance risks, and frustrated employees.',
        },
        {
          heading: '',
          text: '<span className="font-bold text-black">So how do we solve this?</span> The answer lies in automation. An HRMS with payroll automation integrates data from every workflow into a single system. Leave requests directly adjust salary. Benefit contributions are automatically factored in. Compliance updates trigger alerts without manual chasing. Instead of stitching spreadsheets together, HR leaders have one source of truth that runs payroll accurately, transparently, and on time.',
        },
        {
          text: 'And what’s the ultimate goal? It’s not just efficiency—it’s trust and strategic growth. When employees see that salaries and benefits are handled flawlessly, confidence in the organization rises. When HR no longer spends hours on repetitive calculations, they can focus on building policies, driving engagement, and shaping the future workforce.'
        }
      ],
      conclusion: 'In short, automated payroll management isn\'t about replacing HR—it\'s about empowering them. It transforms payroll from a monthly burden into a strategic advantage, where accuracy, compliance, and employee satisfaction work hand in hand.',
      author: 'Ashish Kumar Sahoo'
    },
    {
      id: 3,
      title: 'Why Mental Health Should Be a Priority in HR Strategies',
      image: '/mental.jpg',
      category: 'Mental Health',
      date: '05/09/2025',
      place: 'Puri, India',
      intro: 'When we talk about workplace performance, we often think about salaries, perks, and promotions. But beneath it all lies a factor that silently shapes productivity—employee mental health. Recent studies are sounding the alarm, and the numbers paint a story no HR leader can ignore.',
      content: [
        {
          heading: 'The Indicators We Can\'t Overlook',
          text: ' The World Health Organization estimates that depression and anxiety cause 12 billion lost workdays annually, costing employers nearly USD 1 trillion in productivity. In India alone, poor employee mental health is costing companies about $14 billion every year, driven by absenteeism, reduced performance, and higher turnover. These aren\'t just numbers—they\'re signals of a workforce under strain.',
        },
        {
          text: 'Even more concerning, a global survey by Ipsos and Teladoc Health found that 82% of employees with diagnosed mental health conditions do not disclose them at work, fearing stigma or career setbacks. When silence prevails, organizations lose visibility into one of the biggest factors affecting retention and engagement.'
        },
        {
          heading: 'What These Numbers Tell Us',
          text: ' These statistics point to a clear truth: mental health is no longer a private issue—it\'s a business issue. Lost productivity, hidden struggles, and burnout aren\'t just hurting individuals; they are slowing down entire organizations. If employees don\'t feel safe to speak up, they quietly disengage—or worse, they leave.'
        },
        {
          heading: 'What HR Can Do Differently',
          text: ' Embed mental health into HR strategy as a priority equal to payroll or compliance. Build psychological safety where employees can speak openly. Train managers to recognize early signs of stress and burnout. Offer structured support like Employee Assistance Programs, counselling access, and flexible schedules. Use HRMS tools to measure engagement and detect trends early.'
        },
        {
          heading: 'The Goal Ahead',
          text: ' Ultimately, making mental health a priority isn\'t only about preventing burnout—it\'s about creating workplaces where people thrive. When employees trust that their well-being matters, they are more engaged, more loyal, and more productive. For HR leaders, this is not just a responsibility—<span className="font-bold text-black">it\'s an opportunity to transform mental health from a silent drain into a source of strength.</span>'
        }
      ],
      conclusion: '',
      author: 'Swagat Nayak'
    }
  ];

  return (
    <div className="min-h-screen pt-36 relative" >
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg2.jpg"
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      <div className="relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="p-8 mb-8">
          <h1 className="text-4xl font-bold text-center mb-12" style={{ color: '#111826' }}>
            Our <span style={{ color: '#a89456' }}>Blog</span>
          </h1>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            {blogPosts.map((post, index) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] cursor-pointer block w-full mx-auto"
              >
                <div className="relative w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-[200px] object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  {/* Category Chip */}
                  <div className="mb-3">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                      post.category === 'HR/Technology' ? 'bg-blue-100 text-blue-800' :
                      post.category === 'Employee Benefits' ? 'bg-green-100 text-green-800' :
                      post.category === 'Mental Health' ? 'bg-purple-100 text-purple-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#111826] mb-4 line-clamp-2 hover:text-[#a89456] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.intro}</p>
                  <div className="flex items-start justify-between">
                    {/* Author with User Icon and Date/Place */}
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <FaUser className="text-[#a89456] text-lg" />
                        <span className="text-sm text-gray-700 font-medium">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-6 text-xs text-gray-500">
                        <span>{post.date}</span>
                        <span>{post.place}</span>
                      </div>
                    </div>
                    <span className="text-[#a89456] group-hover:underline flex items-center gap-2 cursor-pointer mt-1">
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;